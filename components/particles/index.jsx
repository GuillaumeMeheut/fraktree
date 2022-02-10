import { useRef, useEffect } from "react";
import css from "./index.module.scss";

export const Particles = () => {
  const canvasRef = useRef();

  const draw = (ctx, frameCount) => {
    console.log(frameCount);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(50, 50, 500, 0, Math.PI / 3);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;

      draw(ctx, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };

    // ctx.fillRect(0, 0, ctx.canvas.width / 2, ctx.canvas.height / 2);
  }, [draw]);

  return <canvas ref={canvasRef} className={css.canvas}></canvas>;
};
