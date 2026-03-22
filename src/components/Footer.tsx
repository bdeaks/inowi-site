export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 bg-bg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span
            className="text-sm font-medium text-text"
            style={{ fontFamily: "var(--font-body)" }}
          >
            INOWI
          </span>
          <span
            className="text-sm text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            &copy; 2026 INOWI
          </span>
        </div>
        <div className="flex items-center gap-6">
          {["LinkedIn", "Twitter", "Mentions légales"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-text-muted hover:text-text-secondary transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
