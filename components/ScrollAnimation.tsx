import { AnimationOnScroll } from "react-animation-on-scroll";
import { useIsServer } from "./CONSTANTS";

const ScrollAnimation: typeof AnimationOnScroll = ({
  children,
  initiallyVisible,
  ...rest
}) => {
  const isServer = useIsServer();
  return (
    <AnimationOnScroll
      initiallyVisible={
        typeof initiallyVisible !== "undefined" ? initiallyVisible : isServer
      }
      {...rest}
    >
      {children}
    </AnimationOnScroll>
  );
};

export default ScrollAnimation;
