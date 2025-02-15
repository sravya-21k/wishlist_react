import React, { useEffect, useState } from "react";
import "./SnowfallEffect.css";

const SnowfallEffect = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const createSnowflakes = () => {
      let flakes = [];
      for (let i = 0; i < 200; i++) {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 5 + 3}s`, // Different speeds
          opacity: Math.random(),
          fontSize: `${Math.random() * 10 + 10}px`, // Random size
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
