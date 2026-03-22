import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "smooth",
        duration: 0,
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      animate="default"
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-blue-500/30 blur-md pointer-events-none z-[100] border-2 border-primary"
      style={{
        boxShadow: "0 0 20px 5px rgba(59, 130, 246, 0.5)"
      }}
    />
  );
};

export default CursorTrail;
