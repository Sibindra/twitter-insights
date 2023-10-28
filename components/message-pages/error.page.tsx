import { useRouter } from "next/navigation";
import { Comment } from "react-loader-spinner";

export default function ErrorPage() {
  const router = useRouter();
  return (
    <main className="flex w-full h-screen border items-center justify-center flex-col gap-5">
      <h1 className=" text-2xl font-bold">
        SORRY SOMETHING WENT WRONG 404 ERROR
      </h1>

      <p
        onClick={() => router.push("/")}
        className=" text-sm hover:underline cursor-pointer"
      >
        Go back
      </p>

      <div className=" w-64 h-64 flex justify-center items-center">
        <Comment
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          // backgroundColor="#F4442E"
        />
      </div>
    </main>
  );
}
