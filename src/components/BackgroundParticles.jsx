import React, { useEffect, useRef, useState } from 'react';

export default function BackgroundParticles({ enabled = true }) {
  const canvasRef = useRef(null);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    // Respect reduced motion settings
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMotionOk(!mediaQuery.matches);

    const handler = (e) => setMotionOk(!e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!enabled || !motionOk) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create particles: mix of Hearts, Petals, and Sparkle Stars
    const particleCount = Math.min(32, Math.floor(window.innerWidth / 35));
    const particles = [];

    const colors = ['#F8C8DC', '#FADADD', '#FFB3C6', '#E6D9FF', '#FFCCD5'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 12 + 8,
        speedY: Math.random() * 0.7 + 0.3,
        speedX: Math.sin(i) * 0.4,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'petal' : 'star',
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.45 + 0.25,
        swingOffset: Math.random() * Math.PI * 2
      });
    }

    const drawHeart = (c, x, y, size, color, opacity, angle) => {
      c.save();
      c.translate(x, y);
      c.rotate(angle);
      c.globalAlpha = opacity;
      c.fillStyle = color;
      c.beginPath();
      const topCurveHeight = size * 0.3;
      c.moveTo(0, topCurveHeight);
      c.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      c.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size * 0.8, 0, size);
      c.bezierCurveTo(0, size * 0.8, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      c.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
      c.closePath();
      c.fill();
      c.restore();
    };

    const drawPetal = (c, x, y, size, color, opacity, angle) => {
      c.save();
      c.translate(x, y);
      c.rotate(angle);
      c.globalAlpha = opacity;
      c.fillStyle = color;
      c.beginPath();
      c.ellipse(0, 0, size * 0.4, size * 0.8, 0, 0, Math.PI * 2);
      c.fill();
      c.restore();
    };

    const drawStar = (c, x, y, size, color, opacity) => {
      c.save();
      c.translate(x, y);
      c.globalAlpha = opacity;
      c.fillStyle = '#FFE066';
      c.beginPath();
      for (let j = 0; j < 4; j++) {
        c.lineTo(Math.cos((j * Math.PI) / 2) * size * 0.6, Math.sin((j * Math.PI) / 2) * size * 0.6);
        c.lineTo(
          Math.cos((j * Math.PI) / 2 + Math.PI / 4) * size * 0.18,
          Math.sin((j * Math.PI) / 2 + Math.PI / 4) * size * 0.18
        );
      }
      c.closePath();
      c.fill();
      c.restore();
    };

    let tick = 0;

    const render = () => {
      tick += 0.015;
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.y += p.speedY;
        p.x += Math.sin(tick + p.swingOffset) * 0.5 + p.speedX;
        p.angle += p.angularSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        if (p.type === 'heart') {
          drawHeart(ctx, p.x, p.y, p.size, p.color, p.opacity, p.angle);
        } else if (p.type === 'petal') {
          drawPetal(ctx, p.x, p.y, p.size, p.color, p.opacity, p.angle);
        } else {
          drawStar(ctx, p.x, p.y, p.size, p.color, p.opacity);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled, motionOk]);

  if (!enabled || !motionOk) return null;

  return (
    <canvas
      ref={canvasRef}
      className="romantic-particle-canvas"
      aria-hidden="true"
    />
  );
}
