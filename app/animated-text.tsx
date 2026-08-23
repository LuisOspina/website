"use client";

import { useEffect, useState } from "react";

const phrases = ["my life", "my work"];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="animated-text" aria-hidden="true">
      <span key={phrases[index]}>{phrases[index]}</span>
    </span>
  );
}
