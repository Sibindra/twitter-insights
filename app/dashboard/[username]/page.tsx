import { getUserDetails } from "@/app/api/user-details";

export default async function DashboardPage({
  params: { username },
}: {
  params: { username: string };
}) {
  const data = await getUserDetails(username);


  return <main>{JSON.stringify(data)}</main>;
}
