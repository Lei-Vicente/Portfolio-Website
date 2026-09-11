import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sidebar" aria-label="Main navigation">
      <div>
        <Link href="/" className="brand">
          PORTFOLIO
          <span className="brand__role">Design / Systems</span>
        </Link>

        <nav aria-label="Navigation links">
          <div className="nav-list">
            <Link href="/#work" className="nav-link">
              <span className="nav-link__num">01</span>
              Work
            </Link>
            <Link href="/#profile" className="nav-link">
              <span className="nav-link__num">02</span>
              Profile
            </Link>
            <Link href="/#skills" className="nav-link">
              <span className="nav-link__num">03</span>
              Skills
            </Link>
            <Link href="/#experience" className="nav-link">
              <span className="nav-link__num">04</span>
              Experience
            </Link>
            <Link href="/resume" className="nav-link">
              <span className="nav-link__num">05</span>
              Resume
            </Link>
          </div>
        </nav>
      </div>

      <div className="sidebar-foot">
        <ThemeToggle />
        <span className="status-dot" aria-label="Available" />
      </div>
    </header>
  );
}
