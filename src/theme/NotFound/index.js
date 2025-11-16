import React, { useEffect, useRef } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function NotFoundWrapper() {
  const canvasRef = useRef(null);

  // Simple animated canvas “ink stroke” background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = 260);

    ctx.lineWidth = 6;
    ctx.lineCap = "round";

    let x = 0;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(19,127,236,0.35)";
      ctx.beginPath();
      ctx.moveTo(0, h / 2);

      for (let i = 0; i <= x; i += 12) {
        ctx.lineTo(i, h / 2 + Math.sin(i * 0.01) * 20);
      }

      ctx.stroke();
      if (x < w) {
        x += 12;
        requestAnimationFrame(draw);
      }
    }
    draw();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.content}>
        <span className={`material-symbols-outlined ${styles.sadIcon}`}>
          search_off
        </span>

        <h1 className={styles.title}>404 — Lost in the Math</h1>

        <p className={styles.subtitle}>
          The path you seek does not exist. Perhaps it was divided by zero, or
          hidden behind a secret formula.
        </p>

        <div className={styles.buttonRow}>
          <Link className={styles.btnPrimary} to="/">
            <span className="material-symbols-outlined">home</span>
            Return Home
          </Link>

          <Link className={styles.btnSecondary} to="/docs">
            <span className="material-symbols-outlined">menu_book</span>
            Browse Lessons
          </Link>
        </div>
      </div>

      <div className={styles.artBlock}>
        <span className="material-symbols-outlined">swords</span>
        <p>A lone mathematician stands guard… but not over this page.</p>
      </div>
    </div>
  );
}
