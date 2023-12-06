import { getUserDetails } from "@/app/api/user-details";

export default async function Profile({
  params: { username },
}: {
  params: { username: string };
}) {
  const data = await getUserDetails(username);

  return <div>{JSON.stringify(data)}</div>;
}
