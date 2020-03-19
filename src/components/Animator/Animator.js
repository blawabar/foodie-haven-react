import React, { useEffect, useRef } from "react";

import "./Animator.scss";

const FADE_OUT = "FADE_OUT";
const PULL_UP = "PULL_UP";

const baseClassName = "animator";
const isPlayingSuffix = "--is-playing";
const isPullingUpSuffix = "--is-pulling-up";
const isFadingOutSuffix = "--is-fading-out";

const animatedClassName = `${baseClassName}${isPlayingSuffix}`;
const fadeOutClassName = `${baseClassName}${isFadingOutSuffix}`;
const pullUpClassName = `${baseClassName}${isPullingUpSuffix}`;

const typeToAnimationMap = {
  FADE_OUT: `${baseClassName} ${fadeOutClassName}`,
  PULL_UP: `${baseClassName} ${pullUpClassName}`
};

const Animator = ({ children, animationType = FADE_OUT }) => {
  const selfRef = useRef(null);

  useEffect(() => {
    const handleOnScroll = () => {
      const animatorRefValue = selfRef.current;

      if (animatorRefValue) {
        const animationThreshold = window.scrollY + window.innerHeight * 0.75;
        const { offsetTop } = animatorRefValue;

        if (animationThreshold >= offsetTop) {
          animatorRefValue.classList.add(animatedClassName);
        }
      }
    };

    document.addEventListener("scroll", handleOnScroll);

    return () => document.removeEventListener("scroll", handleOnScroll);
  }, [children]);

  return (
    <div className={typeToAnimationMap[animationType]} ref={selfRef}>
      {children}
    </div>
  );
};

export const TYPE = {
  PULL_UP,
  FADE_OUT
};

export default Animator;
