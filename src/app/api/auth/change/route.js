import { NextResponse } from "next/server";

//models
import User from "@/models/User.model";

//functions
import connectDB from "@/utils/connectDB";
import { comparepasswords, hashPassword } from "@/utils/functions";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";

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
    
    const result = comparepasswords(user.password, current_password);
    console.log(result);
    if (!result) {
      return NextResponse.json(
        {
          message: "wrong password",
        },
        { status: 400 }
      );
    }

    // const { prevPasswords } = user;
    // prevPasswords.map((pass) => {
    //   const result = comparepasswords(pass, current_password);
    //   if (result) {
    //     return NextResponse.json(
    //       {
    //         message: "you choosed this password before",
    //       },
    //       { status: 400 }
    //     );
    //   }
    // });

    return NextResponse.json(
      {
        message: "user",
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
