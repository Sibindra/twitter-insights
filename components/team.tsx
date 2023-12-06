import socialMediaLinks from "@/lib/social-media-links";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "@/components/ui/container";

export interface TeamsData {
  img: string;
  name: string;
  comment: string;
  facebook: string;
  github: string;
  mail: string;
  linkden: string;
}

function TeamSection(props: TeamsData) {
  return (
    <div className="items-center border rounded-none shadow sm:flex">
      <div className="flex-1 w-full sm:w-48 h-48">
        <div className="relative w-full h-full">
          <Image
            className="rounded-none"
            src={props.img}
            alt="Bonnie Avatar"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl font-bold tracking-tight ">
          {props.name}
        </h3>
        <p className="mt-3 mb-4 text-lg ">{props.comment}</p>
        <ul className="flex space-x-4 sm:mt-0">
          <li>
            <Link
              href={props.facebook}
              className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-200"
              target="_blank"
            >
              <FaFacebook className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link
              href={props.github}
              className="text-stone-500 hover:text-gray-900 dark:hover:text-stone-200"
              target="_blank"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link
              href={props.linkden}
              className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 "
              target="_blank"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link
              href={`mailto:${props.mail}`}
              className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-200"
              target="_blank"
            >
              <FaEnvelope className="w-5 h-5" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Team() {
  return (
      <Container className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
              Our Team
            </h2>
            <p className="font-light  lg:mb-16 sm:text-xl">
              Meet our passionate team behind this app
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {socialMediaLinks.map((link) => (
              <TeamSection
                key={link.name}
                img={link.img}
                name={link.name}
                comment={link.comment}
                facebook={link.facebook}
                github={link.github}
                linkden={link.linkden}
                mail={link.mail}
              />
            ))}
          </div>
        </div>
    </Container>
  );
}
