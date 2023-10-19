import ModeToggle from "@/components/ui/toggle-theme";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "./container";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Link } from "react-scroll";

export default function Home({
  frequestUsernames,
}: {
  frequestUsernames: string[];
}) {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");

  const handleSearch = () => {
    router.push(`/dashboard?username=${username}`);
  };

  const handleLinksSeaches = (username: string) => {
    router.push(`/dashboard?username=${username}`);
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
            <Button className=" border border-black" onClick={handleSearch}>
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
