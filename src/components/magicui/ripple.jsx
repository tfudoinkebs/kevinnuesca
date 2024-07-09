import React from "react";

const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 150;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        return (
          <div
            key={i}
            className={`animate-ripple absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2 rounded-full border bg-teal-500/5 shadow-xl [--i:${i}]`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
              animationDelay: animationDelay,
              borderStyle: borderStyle,
              borderWidth: "1px",
              borderColor: `rgba(var(--foreground-rgb), ${borderOpacity / 100})`,
            }}
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
