import { useState } from "react";
import "../static/Photostack.css";

export default function Photostack({ photos }) {
  const [stack, setStack] = useState(photos);

  const handleNext = () => {
    setStack((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      copy.push(first);
      return copy;
    });
  };

  return (
    <div className="photo-stack">
      {stack.map((src, index) => (
        <div
          key={src}
          className={`photo-card ${index === 0 ? "active" : ""}`}
          style={{ "--i": index }}
          onClick={index === 0 ? handleNext : undefined}
        >
          <img src={src} alt="About me" />
        </div>
      ))}
    </div>
  );
}
