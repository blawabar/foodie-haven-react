import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

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

const typeToAnimationMap = Object.freeze({
  FADE_OUT: `${baseClassName} ${fadeOutClassName}`,
  PULL_UP: `${baseClassName} ${pullUpClassName}`,
});

export const Animator = ({ children, animationType }) => {
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

    handleOnScroll();

    return () => document.removeEventListener("scroll", handleOnScroll);
  }, [children]);

  return (
    <div className={typeToAnimationMap[animationType]} ref={selfRef}>
      {children}
    </div>
  );
};

Animator.defaultProps = {
  animationType: FADE_OUT,
};

Animator.propTypes = {
  children: PropTypes.node.isRequired,
  animationType: PropTypes.oneOf([FADE_OUT, PULL_UP]),
};

export const TYPE = Object.freeze({
  PULL_UP,
  FADE_OUT,
});
