import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planId,
    } = body;

    const sign =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET!
      )
      .update(sign.toString())
      .digest("hex");

    const isAuthentic =
      expectedSign === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json({
        success: false,
      });
    }

    // TODO:
    // Add credits to user
    // Save transaction
    // Update plan

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}