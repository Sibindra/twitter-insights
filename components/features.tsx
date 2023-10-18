import { FaChartPie, FaHashtag } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { GiClockwork, GiCrossMark, GiUpgrade } from "react-icons/gi";

import Container from "@/components/container";

const features = [
  {
    Icon: FaChartPie,
    title: "Explore Data with Interactive Charts",
    description: "Effortlessly explore data with interactive charts and graphs for in-depth analysis.",
  },
  {
    Icon: GrTechnology,
    title: "Understand Public Opinion",
    description: "Gain valuable insights into public opinion with sentiment analysis and track trending topics.",
  },
  {
    Icon: FaHashtag,
    title: "Monitor Hashtag Performance",
    description: "Monitor hashtag popularity and campaign performance to stay on top of trends.",
  },
  {
    Icon: GiClockwork,
    title: "Analyze User Engagement",
    description: "Analyze likes, retweets, and replies to measure the impact and reach of your tweets.",
  },
  {
    Icon: GiCrossMark,
    title: "Seamless Cross-platform Compatibility",
    description: "Access and interact with your data visualizations on any device for convenient monitoring.",
  },
  {
    Icon: GiUpgrade,
    title: "Drive Social Media Growth",
    description: "Leverage data-driven insights to optimize your social media strategy for measurable growth.",
  },
];


export default function Features() {
  return (
    <Container className="flex flex-wrap">
      <div className="left w-full lg:flex-1 sm:flex sm:flex-col justify-center items-center  p-4 text-center flex-wrap">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Powerful Features for Enhanced Data Visualization
        </h2>

        <p className="mt-4 text-stone-600 dark:text-stone-400">
          Unlock the Full Potential of Twitter Data with Our Comprehensive
          Feature Set, Empowering You to Visualize and Analyze Data Like Never
          Before.
        </p>


        {/* <CubeAnimation className=" w-80 h-80"/> */}
      </div>

      <div className="right text-center w-full lg:flex-1 grid grid-cols-2 sm:grid-cols-2 gap-4 ">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </Container>
  );
}

type featuresType = {
  Icon: any;
  title: string;
  description: string;
};

function Feature({ Icon, title, description }: featuresType) {
  return (
    <span className="block rounded-none border  p-4 shadow-sm ">
      <span className="inline-block rounded-none border  p-3 bg-white">
        <Icon className="w-5 h-5 dark:text-black" />
      </span>

      <h2 className="mt-2 font-bold">{title}</h2>

      <p className="hidden sm:mt-1 sm:block sm:text-sm dark:text-stone-400">
        {description}
      </p>
    </span>
  );
}
