import { NextResponse } from "next/server";

//models
import User from "@/models/User.model";

//functions
import connectDB from "@/utils/connectDB";
import { comparepasswords, hashPassword } from "@/utils/functions";
import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";
import { compareSync } from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();
    const {
      body: { current_password, new_password },
    } = await req.json();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { message: "not authorized" },
        { status: "401" }
      );
    }
    const email = session.user.email;
    const user = await User.findOne({ email });

    if (!user) {
      if (!session) {
        return NextResponse.json(
          { message: "not authorized" },
          { status: "401" }
        );
      }
    }

    const result = await comparepasswords(current_password, user.password);
    if (!result) {
      return NextResponse.json(
        {
          message: "wrong password",
        },
        { status: 400 }
      );
    }

    const { prevPasswords } = user;
    const passCheck = prevPasswords.find((pass) =>
      compareSync(new_password, pass)
    );

    if (passCheck) {
      return NextResponse.json(
        {
          message: "choosed this password before",
        },
        { status: 400 }
      );
    }

    const hash = hashPassword(new_password);
    prevPasswords.push(hash);
    console.log("first");
    user.prevPasswords = prevPasswords;
    user.password = hash;
    await user.save();
    return NextResponse.json(
      {
        message: "password changed",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal service error" },
      { status: "500" }
    );
  }
}
