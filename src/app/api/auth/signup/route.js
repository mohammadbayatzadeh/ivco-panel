import User from "@/models/User.model";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const {
      body: { email, password },
    } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        {
          message: "please insert valid and complete data",
        },
        { status: 400 }
      );
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "this email alreadty registered" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "internal service error" },
      { status: "500" }
    );
  }
}
