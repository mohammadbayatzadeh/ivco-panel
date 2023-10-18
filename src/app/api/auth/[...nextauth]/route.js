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
          throw new Error("internal service error");
        }

        const { email, password } = credentials;
        if (!email || !password)
          throw new Error("please insert valid and complete data");

        const user = await User.findOne({ email });
        if (!user) throw new Error("there is no account with this email");

        const isValid = await comparepasswords(password, user.password);
        if (!isValid) throw new Error("email or password is incorrect");

        return { email };
      },
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
