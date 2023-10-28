import { useRouter } from "next/navigation";
import GraphLoader from "../loaders/graph-loader";

export default function LoadingPage() {
  const router = useRouter();
  return (
    <main className="flex w-full h-screen border items-center justify-center flex-col gap-5">
      <h1 className=" text-2xl font-bold">
        Please wait we are fetching data ....
      </h1>

      <GraphLoader />
    </main>
  );
}
