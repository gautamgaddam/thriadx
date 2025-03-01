import React from "react";

const SunLoaders = () => {
  // Array of sun/star designs based on the image
  const sunDesigns = [
    // Row 1
    {
      id: "sun1",
      viewBox: "0 0 100 100",
      path: "M50 15 L55 5 L62 12 L70 5 L72 15 L82 12 L80 22 L90 23 L83 30 L93 35 L82 40 L88 50 L75 50 L77 62 L65 57 L62 70 L50 62 L38 70 L35 57 L23 62 L25 50 L12 50 L18 40 L7 35 L17 30 L10 23 L20 22 L18 12 L28 15 L30 5 L38 12 L45 5 Z",
      fill: "#B87333",
      duration: "10s",
    },
    {
      id: "sun2",
      viewBox: "0 0 100 100",
      paths: Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        return `M50 50 L${50 + 45 * Math.cos(angle)} ${
          50 + 45 * Math.sin(angle)
        }`;
      }),
      fill: "#ffa555",
      strokeWidth: 3,
      duration: "15s",
    },
    {
      id: "sun3",
      viewBox: "0 0 100 100",
      outerCircle: { cx: 50, cy: 50, r: 20 },
      innerCircle: { cx: 50, cy: 50, r: 12 },
      paths: Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        return `M${50 + 20 * Math.cos(angle)} ${50 + 20 * Math.sin(angle)} L${
          50 + 35 * Math.cos(angle)
        } ${50 + 35 * Math.sin(angle)}`;
      }),
      fill: "#B87333",
      duration: "12s",
    },
    {
      id: "sun4",
      viewBox: "0 0 100 100",
      paths: Array.from({ length: 20 }).map((_, i) => {
        const angle = (i * 18 * Math.PI) / 180;
        return `M50 50 L${50 + 45 * Math.cos(angle)} ${
          50 + 45 * Math.sin(angle)
        }`;
      }),
      fill: "#ffa555",
      strokeWidth: 2.5,
      duration: "20s",
    },
    {
      id: "sun5",
      viewBox: "0 0 100 100",
      outerCircle: { cx: 50, cy: 50, r: 15 },
      innerCircle: { cx: 50, cy: 50, r: 8 },
      paths: Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const curveControl = 15; // controls the curve intensity
        return `M${50 + 15 * Math.cos(angle)} ${50 + 15 * Math.sin(angle)} 
                Q${50 + (15 + curveControl) * Math.cos(angle + 0.2)} ${
          50 + (15 + curveControl) * Math.sin(angle + 0.2)
        }, 
                ${50 + 40 * Math.cos(angle + 0.3)} ${
          50 + 40 * Math.sin(angle + 0.3)
        } 
                Q${50 + (15 + curveControl) * Math.cos(angle + 0.4)} ${
          50 + (15 + curveControl) * Math.sin(angle + 0.4)
        }, 
                ${50 + 15 * Math.cos(angle + 0.6)} ${
          50 + 15 * Math.sin(angle + 0.6)
        }`;
      }),
      fill: "#B87333",
      duration: "25s",
    },

    // Row 2
    {
      id: "sun6",
      viewBox: "0 0 100 100",
      paths: Array.from({ length: 60 }).map((_, i) => {
        const angle = (i * 6 * Math.PI) / 180;
        return `M50 50 L${50 + (i % 2 === 0 ? 30 : 40) * Math.cos(angle)} ${
          50 + (i % 2 === 0 ? 30 : 40) * Math.sin(angle)
        }`;
      }),
      fill: "#ffa555",
      strokeWidth: 1,
      duration: "30s",
    },
    {
      id: "sun7",
      viewBox: "0 0 100 100",
      outerCircle: { cx: 50, cy: 50, r: 18 },
      paths: Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        return `M${50 + 18 * Math.cos(angle)} ${50 + 18 * Math.sin(angle)} L${
          50 + 38 * Math.cos(angle)
        } ${50 + 38 * Math.sin(angle)}`;
      }),
      fill: "#B87333",
      duration: "18s",
    },
    {
      id: "sun8",
      viewBox: "0 0 100 100",
      path: "M50 10 L58 25 L75 20 L70 38 L85 50 L70 62 L75 80 L58 75 L50 90 L42 75 L25 80 L30 62 L15 50 L30 38 L25 20 L42 25 Z",
      fill: "#ffa555",
      duration: "14s",
    },
    {
      id: "sun9",
      viewBox: "0 0 100 100",
      centerCircle: { cx: 50, cy: 50, r: 15 },
      paths: Array.from({ length: 72 }).map((_, i) => {
        const angle = (i * 5 * Math.PI) / 180;
        const length = i % 3 === 0 ? 30 : 20;
        return `M${50 + 15 * Math.cos(angle)} ${50 + 15 * Math.sin(angle)} L${
          50 + (15 + length) * Math.cos(angle)
        } ${50 + (15 + length) * Math.sin(angle)}`;
      }),
      fill: "#ffa555",
      strokeWidth: 0.5,
      duration: "2s",
    },
    {
      id: "sun10",
      viewBox: "0 0 100 100",
      outerCircle: { cx: 50, cy: 50, r: 20 },
      innerCircle: { cx: 50, cy: 50, r: 12 },
      paths: Array.from({ length: 10 }).map((_, i) => {
        const angle = (i * 36 * Math.PI) / 180;
        return `M${50 + 20 * Math.cos(angle)} ${50 + 20 * Math.sin(angle)} L${
          50 + 40 * Math.cos(angle)
        } ${50 + 40 * Math.sin(angle)}`;
      }),
      fill: "#B87333",
      duration: "16s",
    },
  ];

  return (
    <div>
      {/* //   <h1 className="text-2xl font-bold text-amber-800 mb-6 text-center">
    //     Sun & Star Loaders
    //   </h1> */}
      <div className="centered-div">
        {sunDesigns
          .filter((x) => x.id === "sun9")
          .map((sun) => (
            <div key={sun.id} className="flex items-center justify-center">
              <svg
                viewBox={sun.viewBox}
                width="100"
                height="100"
                className="animate-spin-custom"
                style={{
                  animationDuration: sun.duration,
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationDelay: "0s", // Ensure animation starts instantly
                }}
              >
                {/* For sun designs with a single path */}
                {sun.path && (
                  <path
                    d={sun.path}
                    fill={sun.fill}
                    stroke={sun.fill}
                    strokeWidth={sun.strokeWidth || 1}
                  />
                )}

                {/* For designs with multiple paths (like rays) */}
                {sun.paths &&
                  sun.paths.map((d, i) => (
                    <path
                      key={`${sun.id}-path-${i}`}
                      d={d}
                      fill="none"
                      stroke={sun.fill}
                      strokeWidth={sun.strokeWidth || 2}
                      strokeLinecap="round"
                    />
                  ))}

                {/* For designs with circles */}
                {sun.outerCircle && (
                  <circle
                    cx={sun.outerCircle.cx}
                    cy={sun.outerCircle.cy}
                    r={sun.outerCircle.r}
                    fill="none"
                    stroke={sun.fill}
                    strokeWidth={sun.strokeWidth || 2}
                  />
                )}

                {sun.innerCircle && (
                  <circle
                    cx={sun.innerCircle.cx}
                    cy={sun.innerCircle.cy}
                    r={sun.innerCircle.r}
                    fill="none"
                    stroke={sun.fill}
                    strokeWidth={sun.strokeWidth || 2}
                  />
                )}

                {sun.centerCircle && (
                  <circle
                    cx={sun.centerCircle.cx}
                    cy={sun.centerCircle.cy}
                    r={sun.centerCircle.r}
                    fill={sun.fill}
                  />
                )}
              </svg>
            </div>
          ))}
      </div>

      {/* CSS for custom animation */}
      <style jsx>{`
        @keyframes spin-custom {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-custom {
          animation-name: spin-custom;
        }
      `}</style>
    </div>
  );
};

export default SunLoaders;
