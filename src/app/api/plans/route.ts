
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db/dbconfig";
import PricingPlan from "@/model/Pricing"


export async function GET() {
    try {
    
      await connectDB();
  
      const plans = await PricingPlan.find({ isActive: true }).sort({ price: 1 });

      return NextResponse.json({
        success: true,
        plans,
      });
      
    } catch (error) {
      console.error("Fetch Voice Error:", error);
  
      return NextResponse.json(
        { success: false, message: "Server Error" },
        { status: 500 }
      );
    }
  }