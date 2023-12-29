import React, { useEffect, useRef } from 'react';

const circleStyle = {
  height: '24px',
  width: '24px',
  borderRadius: '50%',
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 99999999,
};

const colors = [
  "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d", "#e36e5c", "#df685c",
  "#d5585c", "#d1525c", "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f", "#950f5f",
  "#830060", "#7c0060", "#680060", "#60005f", "#48005f", "#3d005e",
];

const Circle = () => {
  const circleRef = useRef(null);
  const prevX = useRef(0);
  const prevY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (circleRef.current) {
        const dx = x - prevX.current;
        const dy = y - prevY.current;

        circleRef.current.style.left = x - 12 + "px";
        circleRef.current.style.top = y - 12 + "px";
        circleRef.current.style.transform = `scale(${(colors.length - circleRef.current.index) / colors.length})`;

        prevX.current = x - dx * 0.3;
        prevY.current = y - dy * 0.3;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const circleIndex = Math.floor(Math.random() * colors.length);
  const circleBackgroundColor = colors[circleIndex];

  return (
    <div ref={circleRef} className="circle" style={{ ...circleStyle, backgroundColor: circleBackgroundColor }}></div>
  );
};

export { Circle };