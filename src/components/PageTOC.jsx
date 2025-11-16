export default function PageTOC({ items, onClick = () => {} }) {
  return (
    <aside className="page-toc">
      <h3 className="page-toc-title">On this page</h3>

      <nav className="page-toc-nav">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`page-toc-link ${item.active ? "active" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
