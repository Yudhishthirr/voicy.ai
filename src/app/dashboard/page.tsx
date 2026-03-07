import { auth, currentUser } from "@clerk/nextjs/server";
import connectDB from "@/db/dbconfig";
import UserModel from "@/model/Users";
import PricingPlan from "@/model/Pricing"
import DashboardUI from "@/components/dashboard/DashboardUI";

export default async function DashboardPage() {

  const { userId } = await auth();

  if (!userId) return null;

  await connectDB();

  // ✅ check user exists
  let dbUser = await UserModel.findOne({
    clerk_id: userId,
  });
  const freePlan = await PricingPlan.findOne({ name: "Free" });
  // ✅ FALLBACK (MAGIC LINE)
  if (!dbUser) {

    const clerkUser = await currentUser();

    dbUser = await UserModel.findOneAndUpdate(
      { clerk_id: clerkUser?.id },
      {
        clerk_id: clerkUser?.id,
        username: clerkUser?.username || "User",
        email: clerkUser?.emailAddresses[0].emailAddress,
        avatar: clerkUser?.imageUrl,
        plan: freePlan?._id,
        credit: freePlan?.credits
      },
      { upsert: true, returnDocument: "after" }
    );

    console.log("⚡ Fallback user created");
  }

  return <DashboardUI />;
}