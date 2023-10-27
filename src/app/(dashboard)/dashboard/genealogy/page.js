//templates
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import GenealogyPage from "@/components/templates/dashboard/GenealogyPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function page() {
  await connectDB();
  const session = await getServerSession(authOptions);

  return <GenealogyPage email={session.user.email} />;
}

export default page;
