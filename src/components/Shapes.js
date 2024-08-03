import React, { useEffect, useState } from "react";
import "./Shapes.css";

const Shapes = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const newShapes = Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      type: getRandomShape(),
      style: {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDelay: `${Math.random() * 5}s`,
      },
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="shapes-container">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`shape ${shape.type}`}
          style={shape.style}
        />
      ))}
    </div>
  );
};

const getRandomShape = () => {
  const shapes = ["circle", "box", "triangle"];
  return shapes[Math.floor(Math.random() * shapes.length)];
};

export default Shapes;
