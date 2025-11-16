export default function Button({ icon = null, children, variant = "primary" }) {
  return (
    <button className={`btn btn-${variant}`}>
      <span>{children}</span>
      {icon && (
        <span className="material-symbols-outlined btn-icon">{icon}</span>
      )}
    </button>
  );
}
