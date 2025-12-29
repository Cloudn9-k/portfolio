"use client";

import React, { useRef, useEffect } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const isMobile = width <= 768;
    const maxParticles = isMobile ? 15 : 25; 
    const particlePool: Particle[] = [];
    const activeParticles: Particle[] = [];
    class Particle {
      x: number = 0; y: number = 0;
      vx: number = 0; vy: number = 0;
      radius: number = 0;
      color: string = '';
      inUse: boolean = false;
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
        this.radius = Math.random() * 1.5 + 1;
        this.color = Math.random() > 0.5 ? 'hsl(210, 100%, 75%)' : 'hsl(270, 100%, 75%)';
        this.inUse = true;
        return this;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    const init = () => {
      activeParticles.length = 0;
      for (let i = 0; i < maxParticles; i++) {
        activeParticles.push(new Particle().reset());
      }
    };
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < activeParticles.length; i++) {
        for (let j = i + 1; j < activeParticles.length; j++) {
          const p1 = activeParticles[i];
          const p2 = activeParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - dist / 1500})`;
            ctx.stroke();
          }
        }
      }

      activeParticles.forEach(p => {
        p.update();
        p.draw();
      });
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };
    
    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-50" />;
};

export default AnimatedBackground;