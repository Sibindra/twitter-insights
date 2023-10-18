import Lottie from "lottie-react";
import {default as cubeAnimationData} from "@/public/assets/animations/animation_lntsqz0k.json";

export type animationProps = {
    className?: string;
}

export default function CubeAnimation({className}: animationProps ) {
  return <Lottie className={className} animationData={cubeAnimationData} />;
}
