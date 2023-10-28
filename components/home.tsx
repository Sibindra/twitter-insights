import ModeToggle from "@/components/ui/toggle-theme";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "./container";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Link } from "react-scroll";
import { supabase } from "@/lib/database/supabase";

export default function Home({
  frequestUsernames,
}: {
  frequestUsernames: string[];
}) {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");

  // router loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    setIsLoading(true);
    router.push(`/dashboard?username=${username}`);

    const {
      data: existingUser,
      status,
      error,
    } = await supabase.from("searches ").select("*").eq("username", username);

    if (existingUser?.length === 0) {
      const { data: newUser, error } = await supabase
        .from("searches")
        .insert([{ username }]);
    } else {
      const { error: updateError } = await supabase
        .from("searches")
        .update({ count: (existingUser as any)[0].count + 1 })
        .eq("username", username);
    }

    setIsLoading(false);
  };

  const handleLinksSeaches = async (username: string) => {
    setIsLoading(true);

    const {
      data: existingUser,
      status,
      error,
    } = await supabase.from("searches").select("*").eq("username", username);

    if ((existingUser as any)?.length > 0) {
      const { error: updateError } = await supabase
        .from("searches")
        .update({ count: (existingUser as any)[0].count + 1 })
        .eq("username", username);
    }

    // naviagte to dashboard
    router.push(`/dashboard?username=${username}`);
    setIsLoading(false);
  };

  return (
    <Container className="">
      <nav className="flex justify-between items-center">
        <ModeToggle />

        <Link
          activeClass="active"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:underline cursor-pointer"
        >
          About
        </Link>
      </nav>

      <section className=" h-screen flex items-center justify-center">
        <div className="w-full flex items-center justify-center flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            {/* header text */}
            <h1 className=" text-6xl font-extrabold">Insights </h1>
            <p>unveil patterns through data visualizations ....</p>
          </div>

          <div className="center flex justify-center w-full p-4  gap-5  ">
            <Input
              type="text "
              placeholder="enter username without @"
              className=" w-5/6 p-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              className=" border border-black"
              onClick={handleSearch}
              disabled={isLoading}
            >
              Search
            </Button>
          </div>

          <div className="frequents flex flex-col items-center justify-center gap-5">
            Checkout our most frequent searches :
            <div className="flex gap-3 justify-center flex-wrap">
              {frequestUsernames.map((username, index) => (
                <Badge
                  key={index}
                  variant={"outline"}
                  className=" rounded-sm cursor-pointer hover:bg-secondary hover:text-secondary-foreground "
                  onClick={() => handleLinksSeaches(username)}
                >
                  @{username}{" "}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
