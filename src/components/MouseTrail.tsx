import { useEffect, useRef } from 'react';

export const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const points = useRef<Array<{ x: number; y: number; age: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      points.current.push({ x: e.clientX, y: e.clientY, age: 0 });
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.current = points.current.filter(point => point.age < 25);
      points.current.forEach(point => {
        point.age += 1;
        const opacity = 1 - point.age / 25;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
};