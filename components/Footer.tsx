import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__row">
        <span className="meta-text">
          © {year} {profile.name} — one engineer, no handoffs
        </span>
        <Link href="/#top" className="meta-text">
          BACK TO TOP ↑
        </Link>
      </div>
      <div className="footer__row">
        <span className="meta-text">BUILT WITH NEXT.JS · DEPLOYED ON VERCEL</span>
        <div className="footer__links">
          <Link href="/resume" className="meta-text">
            RESUME
          </Link>
          <a href={`mailto:${profile.email}`} className="meta-text">
            CONTACT
          </a>
        </div>
      </div>
    </footer>
  );
}
