import User from "@/models/User.model";
import connectDB from "@/utils/connectDB";
import { comparepasswords } from "@/utils/functions";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          await connectDB();
        } catch {
          throw new Error("مشکلی در سرور رخ داده است.");
        }

        const { email, password } = credentials;
        if (!email || !password)
          throw new Error("لطفا اطلاعات را کامل وارد کنید");

        const user = await User.findOne({ email });
        if (!user) throw new Error("ابتدا حسال کاربری ایجاد کنید");

        const isValid = await comparepasswords(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمزعبور اشتباه است");

        return { email };
      },
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
