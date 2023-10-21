import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

//template
import RegisterPage from "@/components/templates/auth/RegisterPage";

async function page() {
  const session = await getServerSession(authOptions);
  session && redirect("/dashboard");

  return <RegisterPage />;
}

export default page;
