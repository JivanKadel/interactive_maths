import React from "react";
import Layout from "@theme/Layout";

export default function Home() {
  return (
    <Layout
      title="Grade 9 Mathematics"
      description="An open educational resource for students to learn mathematics interactively."
    >
      <main style={{ padding: "3rem 1rem", maxWidth: "800px", margin: "auto" }}>
        <h1>Welcome to Grade 9 Mathematics</h1>
        <p>
          This site is a free resource designed to help students learn Grade 9
          mathematics with clear explanations, interactive examples, and
          quizzes.
        </p>
        <p>
          Topics will include <strong>Sets, Algebra, Geometry</strong> and more
          — added progressively over time.
        </p>
        <p>
          The goal is to make learning mathematics fun, visual, and accessible
          for everyone.
        </p>
        <p>New content is added periodically. Stay tuned!</p>
      </main>
    </Layout>
  );
}
