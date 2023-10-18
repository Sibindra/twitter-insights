import Lottie from "lottie-react";
import { default as animationData } from "@/public/assets/animations/questions.json";

type animationProps = {
  className?: string;
};


export default function QuestionsAnimation({ className }: animationProps) {
  return <Lottie animationData={animationData} className={className} />;
}
