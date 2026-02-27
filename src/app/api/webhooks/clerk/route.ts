

import dbConnect from "@/db/dbconfig";
import UserModel from "@/model/Users";

import { headers } from "next/headers";
import { Webhook } from "svix";
import type { WebhookEvent } from "@clerk/nextjs/server";

console.log("This whebhok called");

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  // ✅ Get raw body (required by Clerk)
  const payload = await req.text();

  console.log("This whebhok called",payload);

    const headerPayload = await headers();

    const svixHeaders = {
    "svix-id": headerPayload.get("svix-id")!,
    "svix-timestamp": headerPayload.get("svix-timestamp")!,
    "svix-signature": headerPayload.get("svix-signature")!,
    };
  // ✅ Verify request came from Clerk
  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(payload, svixHeaders) as WebhookEvent;
  } catch (err) {
    console.error("❌ Webhook verification failed");
    return new Response("Invalid webhook", { status: 400 });
  }

  // ✅ Connect MongoDB
  await dbConnect();

  // ==================================================
  // ✅ USER CREATED EVENT
  // ==================================================
  if (evt.type === "user.created") {
    const { id, email_addresses, image_url, username } = evt.data;

    const email = email_addresses?.[0]?.email_address;

    const existingUser = await UserModel.findOne({
      clerk_id: id,
    });

    if (!existingUser) {
      await UserModel.create({
        clerk_id: id,
        username: username || "User",
        email,
        avatar: image_url,
      });

      console.log("✅ User stored in MongoDB");
    }
  }

  // ==================================================
  // ✅ USER UPDATED EVENT
  // ==================================================
  if (evt.type === "user.updated") {
    const { id, image_url, username } = evt.data;

    await UserModel.findOneAndUpdate(
      { clerk_id: id },
      {
        username,
        avatar: image_url,
      }
    );
  }

  // ==================================================
  // ✅ USER DELETED EVENT
  // ==================================================
  if (evt.type === "user.deleted") {
    const { id } = evt.data;

    await UserModel.findOneAndDelete({
      clerk_id: id,
    });
  }

  return new Response("Webhook received", { status: 200 });
}