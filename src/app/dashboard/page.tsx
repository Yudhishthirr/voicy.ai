import { auth, currentUser } from "@clerk/nextjs/server";
import connectDB from "@/db/dbconfig";
import UserModel from "@/model/Users";

import DashboardUI from "@/components/dashboard/DashboardUI";

export default async function DashboardPage() {

  const { userId } = await auth();

  if (!userId) return null;

  await connectDB();

  // ✅ check user exists
  let dbUser = await UserModel.findOne({
    clerk_id: userId,
  });

  // ✅ FALLBACK (MAGIC LINE)
  if (!dbUser) {

    const clerkUser = await currentUser();

    dbUser = await UserModel.create({
      clerk_id: clerkUser?.id,
      username: clerkUser?.username || "User",
      email: clerkUser?.emailAddresses[0].emailAddress,
      avatar: clerkUser?.imageUrl,
    });

    console.log("⚡ Fallback user created");
  }

  return <DashboardUI />;
}