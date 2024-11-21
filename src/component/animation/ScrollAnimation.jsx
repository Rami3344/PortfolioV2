import React from "react";
import { useInView } from "react-intersection-observer";
import "./ScrollAnimation.css";

const ScrollAnimation = ({ children, animationClass = "animate", customClass = "", threshold = 0.2 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <div
      ref={ref}
      className={`scroll-animation ${customClass} ${inView ? animationClass : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;