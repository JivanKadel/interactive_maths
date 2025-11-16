import React, { useState } from "react";
import Layout from "@theme/Layout";
import TableOfContent from "../components/TableOfContents";
import Button from "../components/Button";
import ChapterCard from "../components/ChapterCard";
import PageTOC from "../components/PageTOC";
import { chapters } from "@site/static/data/grade_nine_syllabus";

export default function Home() {
  const [activeTOC, setActiveTOC] = useState("introduction");

  return (
    <Layout
      title="IMaths"
      description="An open educational resource for students to learn mathematics interactively."
    >
      <div className="layout-content">
        <aside className="curriculum">
          <h2 className="curriculum-title">Curriculum</h2>
          <div className="curriculum-nav">
            <TableOfContent title="Grade 9 Maths" icon="menu_book">
              {[
                "Sets",
                "Tax",
                "Commission and Dividend",
                "Household Arithmetic",
                "Area",
                "Prism",
                "Cylinder and Sphere",
                "Sequence and Series",
                "Factorization",
                "HCF and LCM",
                "Linear Equation",
                "Indices",
                "Triangle",
                "Quadrilateral",
                "Construction",
                "Circle",
                "Classification and Presentation of Data",
                "Measures of Central Tendency",
                "Probability",
                "Trigonometry",
              ]}
            </TableOfContent>
            <TableOfContent title="Grade 10 Maths" icon="lock">
              {["SOON TO BE ADDED"]}
            </TableOfContent>
            <TableOfContent title="Grade 11 Maths" icon="lock">
              {["SOON TO BE ADDED"]}
            </TableOfContent>
            <TableOfContent title="Grade 12 Maths" icon="lock">
              {["SOON TO BE ADDED"]}
            </TableOfContent>
          </div>
        </aside>

        <main className="content-main">
          <section className="main-intro" id="introduction">
            <h1 className="main-title">Welcome To Interactive Maths</h1>
            <p className="main-desc">
              A new, intuitive way to master mathematical concepts through
              hands-on learning.
            </p>
          </section>
          <div className="button-row" id="getting-started">
            <a href="/docs/" className="link-primary">
              Start Learning
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </a>
            <a href="/todo" className="link-secondary">
              Take a Quiz
            </a>
          </div>

          <hr className="divider" />

          <section className="chapter-grid-container" id="chapter-list">
            <h2 className="section-title">Explore Chapters (Grade 9)</h2>

            <div className="chapter-grid">
              {chapters.map((chapter) => {
                return (
                  <ChapterCard
                    key={chapter.id}
                    icon={chapter.icon}
                    title={chapter.title}
                    description={chapter.description}
                    href={chapter.href}
                  />
                );
              })}
            </div>
          </section>
        </main>

        <PageTOC
          items={[
            { href: "#introduction", label: "Introduction" },
            { href: "#getting-started", label: "Getting Started" },
            { href: "#chapter-list", label: "Chapter List" },
          ]}
        />
      </div>
    </Layout>
  );
}
