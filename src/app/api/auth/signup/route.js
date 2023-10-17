import { NextResponse } from "next/server";

//models
import User from "@/models/User.model";

//functions
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/functions";

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

    if (!email.match(/[a-zA-Z]+[a-zA-Z0-9/./-/_]{3}@[a-z]{3,10}.[a-z]/)) {
      return NextResponse.json(
        { message: "email is not valid" },
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

    const hash = hashPassword(password);

    const result = await User.create({ email, password: hash });
    return NextResponse.json(
      { message: "user registered", data: result },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal service error" },
      { status: "500" }
    );
  }
}
