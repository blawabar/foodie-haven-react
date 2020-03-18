import React, { useEffect, useRef } from "react";

import "./Animator.scss";

const Animator = ({ children }) => {
  const selfRef = useRef(null);
  const animatedClassName = useRef("animator--is-showing");

  useEffect(() => {
    const handleOnScroll = () => {
      const animatorRefValue = selfRef.current;

      if (animatorRefValue) {
        const animationThreshold = window.scrollY + window.innerHeight * 0.75;
        const { offsetTop } = animatorRefValue;

        if (animationThreshold >= offsetTop) {
          animatorRefValue.classList.add(animatedClassName.current);
        }
      }
    };

    document.addEventListener("scroll", handleOnScroll);

    return () => document.removeEventListener("scroll", handleOnScroll);
  }, [children]);

  return (
    <div className="animator" ref={selfRef}>
      {children}
    </div>
  );
};

export default Animator;
