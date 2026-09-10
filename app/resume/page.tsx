import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile, experience, skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
};

export default function ResumePage() {
  const years = Array.from(new Set(experience.map((e) => e.year)));

  return (
    <div className="shell">
      <Header />

      <main className="main">
        <div className="resume-header">
          <div>
            <div className="meta-text" style={{ marginBottom: 14 }}>
              CV / {profile.name.toUpperCase()}
            </div>
            <h1 className="resume-header__title">Resume</h1>
          </div>
          <a href={`mailto:${profile.email}`} className="link-arrow">
            {profile.email}
          </a>
        </div>

        <div className="resume-layout">
          <div className="resume-years" aria-hidden="true">
            {years.map((year) => (
              <span key={year}>{year}</span>
            ))}
          </div>

          <div className="resume-content">
            <div className="meta-text" style={{ marginBottom: 24 }}>
              EXPERIENCE
            </div>
            {experience.map((entry) => (
              <article className="resume-entry" key={entry.role + entry.period}>
                <div className="meta-text" style={{ marginBottom: 10 }}>
                  {entry.period}
                </div>
                <h2 className="resume-entry__role">{entry.role}</h2>
                <div className="resume-entry__org">{entry.org}</div>
                <p className="body-text resume-entry__desc">
                  {entry.description}
                </p>
                <ul className="resume-entry__achievements">
                  {entry.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <section className="resume-skills">
          <div className="section-head">
            <span className="section-head__num">—</span>
            <h2 className="section-head__title">Skills</h2>
            <span className="section-head__rule" aria-hidden="true" />
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <div className="meta-text skill-group__label">
                  {group.label}
                </div>
                <ul className="skill-group__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="resume-print-note">
          <span className="meta-text">
            Prefer a PDF? Use your browser's print dialog — this page is set
            up to print cleanly.
          </span>
        </div>

        <Footer />
      </main>
    </div>
  );
}
