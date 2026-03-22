export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="text-sm font-bold text-primary">INOWI</span>
          <span className="text-sm text-muted">© 2026 INOWI</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
