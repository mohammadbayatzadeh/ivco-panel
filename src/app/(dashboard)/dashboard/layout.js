import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

//layout
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";

//functions
import connectDB from "@/utils/connectDB";

async function layout({ children }) {
  await connectDB();
  const session = await getServerSession(authOptions);
  !session && redirect("/login");

  return (
    <DashboardLayout email={session?.user?.email}>
      <div>{children}</div>
    </DashboardLayout>
  );
}

export default layout;
