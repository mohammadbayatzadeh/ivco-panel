import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

//templates
import LoginPage from "@/components/templates/LoginPage";

async function page() {
  const session = await getServerSession(authOptions);
  session && redirect("/dashboard");

  return <LoginPage />;
}

export default page;
