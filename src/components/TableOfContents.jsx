import React from "react";

export default function TableOfContent({ title, icon, children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="toc-container">
      <button onClick={() => setOpen(!open)} className="toc-header">
        <div className="toc-header-left">
          {icon && (
            <span className="material-symbols-outlined toc-icon">{icon}</span>
          )}
          <span className="toc-title">{title}</span>
        </div>

        <span
          className={`material-symbols-outlined toc-chevron ${
            open ? "toc-chevron-open" : ""
          }`}
        >
          chevron_right
        </span>
      </button>

      <div className={`toc-content ${open ? "toc-open" : ""}`}>
        <ul className="toc-chapters">
          {children?.map((item, i) => (
            <li key={i} className="toc-chapter-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
