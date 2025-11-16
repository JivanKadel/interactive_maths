import React, { useEffect, useRef } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function UnderConstruction() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = 220);

    ctx.lineWidth = 4;
    ctx.lineCap = "round";

    let offset = 0;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(19,127,236,0.35)";
      ctx.beginPath();
      ctx.moveTo(0, h / 2);

      for (let i = 0; i <= w; i += 12) {
        ctx.lineTo(i, h / 2 + Math.sin(i * 0.02 + offset) * 25);
      }

      ctx.stroke();
      offset += 0.05;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.content}>
        <span className={`material-symbols-rounded ${styles.hammerIcon}`}>
          construction
        </span>

        <h1 className={styles.title}>Page Under Construction</h1>

        <p className={styles.subtitle}>
          This page is still in the works. Building quality content takes time,
          just like mastering mathematics! <br />
          The builder promises it will be ready soon — with care and precision.
        </p>

        <div className={styles.buttonRow}>
          <Link className={styles.btnPrimary} to="/">
            <span className="material-symbols-outlined">home</span>
            Go Home
          </Link>

          <Link className={styles.btnSecondary} to="/docs">
            <span className="material-symbols-outlined">menu_book</span>
            Explore Lessons
          </Link>
        </div>
      </div>

      <div className={styles.artBlock}>
        <span className="material-symbols-outlined">build</span>
        <p>Patience is a virtue… for the web as well as math!</p>
      </div>
    </div>
  );
}
