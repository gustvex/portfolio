import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseover', handleMouseOver);
      link.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a').forEach(link => {
        link.removeEventListener('mouseover', handleMouseOver);
        link.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <div
      className={`cursor ${hovered ? 'hovered' : ''}`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`
      }}
    />
  );
};

export default CustomCursor;
