import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const outerCircleRef = useRef(null);
  const innerCircleRef = useRef(null);
  const requestRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const positionOuter = useRef({ x: 0, y: 0 });
  const positionInner = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      positionOuter.current.x +=
        (mouse.current.x - positionOuter.current.x) * 0.04;
      positionOuter.current.y +=
        (mouse.current.y - positionOuter.current.y) * 0.04;
      positionInner.current.x +=
        (mouse.current.x - positionInner.current.x) * 0.08;
      positionInner.current.y +=
        (mouse.current.y - positionInner.current.y) * 0.08;

      if (outerCircleRef.current) {
        outerCircleRef.current.style.transform = `translate(${
          positionOuter.current.x - 20
        }px, ${positionOuter.current.y - 20}px)`;
      }
      if (innerCircleRef.current) {
        innerCircleRef.current.style.transform = `translate(${
          positionInner.current.x - 5
        }px, ${positionInner.current.y - 5}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor outer-circle" ref={outerCircleRef}></div>
      <div className="custom-cursor inner-circle" ref={innerCircleRef}></div>
    </>
  );
};

export default CustomCursor;
