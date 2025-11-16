import Link from "@docusaurus/Link";

export default function ChapterCard({
  icon = null,
  title,
  description,
  href = "#",
}) {
  return (
    <div className="chapter-card">
      <div className="chapter-header">
        <div className="chapter-icon-wrapper">
          {icon ? (
            <span className="material-symbols-outlined icon-medium icon-blue">
              {icon}
            </span>
          ) : (
            ""
          )}
        </div>
        <h3 className="chapter-title">{title}</h3>
      </div>

      <p className="chapter-description">{description}</p>

      <Link to={`${href}`} className="chapter-link">
        Start Chapter
        <span className="material-symbols-outlined arrow">arrow_forward</span>
      </Link>
    </div>
  );
}
