import React, { useEffect, useState } from "react";
import "SnowfallEffect.css";
const SnowfallEffect = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const createSnowflakes = () => {
      let flakes = [];
      for (let i = 0; i < 200; i++) {
        const style = {
          position: "absolute",
          top: `${Math.random() * 100}vh`, // Random start position on Y-axis
          left: `${Math.random() * 100}vw`, // Random start position on X-axis
          animationDuration: `${Math.random() * 5 + 3}s`, // Varying speed
          opacity: Math.random(), // Random opacity for variation
          fontSize: `${Math.random() * 10 + 10}px`, // Random size of snowflakes
        };
        flakes.push(
          <div key={i} className="snowflake" style={style}>
            ❄️
          </div>
        );
      }
      setSnowflakes(flakes);
    };

    createSnowflakes();
  }, []);

  return <>{snowflakes}</>;
};

export default SnowfallEffect;
