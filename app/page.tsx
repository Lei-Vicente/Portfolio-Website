import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkRegistry from "@/components/WorkRegistry";
import {
  profile,
  projects,
  capabilities,
  skillGroups,
  experience,
  notes,
  labEntries,
} from "@/lib/data";

export default function HomePage() {
  return (
    <div className="shell" id="top">
      <Header />

      <main className="main">
        {/* ------------------------------------------------------------ HERO */}
        <section className="hero">
          <div className="hero__identity">
            <div className="hero__portrait">
              <Image
                src="/Professional Picture.jpg"
                alt={`Professional portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 720px) min(100vw - 40px, 300px), 320px"
                className="hero__portrait-image"
              />
            </div>
          </div>

          <div className="hero__work">
            <h1 className="hero__stack">
            <span className="hero__stack-word">{profile.name}</span>
            <span className="hero__stack-role">{profile.role}</span>
            </h1>

            <p className="hero__statement">{profile.statement}</p>

            <div className="hero__cta">
            <Link href="#work" className="link-arrow">
              See the work
              <span className="link-arrow__glyph">→</span>
            </Link>
            <Link href="/resume" className="link-arrow">
              Read the resume
              <span className="link-arrow__glyph">→</span>
            </Link>
            <Link href="#contact" className="link-arrow">
              Get in touch
              <span className="link-arrow__glyph">→</span>
            </Link>
            </div>

            <dl className="hero__meta">
            <div className="hero__meta-item">
              <dt className="meta-text">Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="hero__meta-item">
              <dt className="meta-text">Status</dt>
              <dd>{profile.availability}</dd>
            </div>
            <div className="hero__meta-item">
              <dt className="meta-text">Focus</dt>
              <dd>{profile.focus}</dd>
            </div>
            </dl>
          </div>
        </section>

        {/* ------------------------------------------------------------ 01 WORK */}
        <section className="section" id="work">
          <div className="section-head">
            <span className="section-head__num">01</span>
            <h2 className="section-head__title">Selected work</h2>
            <span className="section-head__rule" aria-hidden="true" />
          </div>
          <p className="body-text body-text--muted section-intro">
            {projects.length} projects on file — personal builds, client
            engagements, and maintained open source. Open a file for the
            role, stack, and what shipped.
          </p>
          <WorkRegistry projects={projects} />
        </section>

        {/* ------------------------------------------------------------ 02 PROFILE */}
        <section className="section" id="profile">
          <div className="section-head">
            <span className="section-head__num">02</span>
            <h2 className="section-head__title">Profile</h2>
            <span className="section-head__rule" aria-hidden="true" />
          </div>

          <div className="profile-grid">
            <div>
              <p className="body-text">
                I thrive in collaborative settings, where I contribute positively as
a team player to reach shared objectives as a proactive student leader with extensive experience in
liaison and stakeholder management. Proven ability to bridge communication gaps between
organizations and diverse groups of people. Skilled at managing sensitive information, resolving
conflicts, and coordinating large-scale projects to meet organizational objectives.

              </p>
              <div className="practice-block">
                {profile.practice.map((p, i) => (
                  <p className="body-text body-text--muted" key={i}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="profile-facts">
              <dl>
                <div>
                  <dt className="meta-text">Based in</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt className="meta-text">Practice</dt>
                  <dd>Solo — one engineer, no handoffs</dd>
                </div>
                <div>
                  <dt className="meta-text">Focus</dt>
                  <dd>{profile.focus}</dd>
                </div>
                <div>
                  <dt className="meta-text">Status</dt>
                  <dd>{profile.availability}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="capability-index" style={{ marginTop: 40 }}>
            {capabilities.map((cap) => (
              <div className="capability-row" key={cap.index}>
                <span className="meta-text">{cap.index}</span>
                <span className="capability-row__title">{cap.title}</span>
                <span className="capability-row__detail">{cap.detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------ 03 SKILLS */}
        <section className="section" id="skills">
          <div className="section-head">
            <span className="section-head__num">03</span>
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

        {/* ------------------------------------------------------------ 04 EXPERIENCE */}
        <section className="section" id="experience">
          <div className="section-head">
            <span className="section-head__num">04</span>
            <h2 className="section-head__title">Experience</h2>
            <span className="section-head__rule" aria-hidden="true" />
          </div>

          <div className="exp-preview">
            {experience.slice(0, 3).map((entry) => (
              <div className="exp-preview__row" key={entry.role + entry.period}>
                <span className="meta-text">{entry.period}</span>
                <div>
                  <div className="exp-preview__role">{entry.role}</div>
                  <div className="exp-preview__org">{entry.org}</div>
                </div>
                <span className="meta-text">{entry.year}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24 }}>
            <Link href="/resume" className="link-arrow">
              View full resume
              <span className="link-arrow__glyph">→</span>
            </Link>
          </div>
        </section>

        {/* ------------------------------------------------------------ 05 NOTES */}
        <section className="section" id="notes">
          <div className="section-head">
            <span className="section-head__num">05</span>
            <h2 className="section-head__title">Notes</h2>
            <span className="section-head__rule" aria-hidden="true" />
          </div>

          <div>
            {notes.map((note) => (
              <Link href={note.href ?? "#"} key={note.index} className="note-row">
                <span className="meta-text">{note.index}</span>
                <span className="note-row__title">{note.title}</span>
                <span className="meta-text">
                  {note.tag} — {note.date}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------ 06 LAB */}
        <section className="section" id="lab">
          <div className="section-head">
            <span className="section-head__num">06</span>
            <h2 className="section-head__title">Lab</h2>
            <span className="section-head__rule" aria-hidden="true" />
          </div>

          <p className="body-text body-text--muted section-intro">
            Small tools built to answer a specific question, not to ship.
          </p>

          <div>
            {labEntries.map((entry) => (
              <Link href={entry.href ?? "#"} key={entry.index} className="lab-row">
                <span className="meta-text">{entry.index}</span>
                <div>
                  <div className="lab-row__name">{entry.name}</div>
                  <div className="lab-row__desc">{entry.description}</div>
                </div>
                <span
                  className={`status-pill ${
                    entry.status === "ACTIVE"
                      ? "status-pill--active"
                      : "status-pill--archived"
                  }`}
                >
                  {entry.status}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------ 07 CONTACT */}
        <section className="section" id="contact" style={{ borderBottom: "none" }}>
          <div className="section-head">
            <span className="section-head__num">07</span>
            <h2 className="section-head__title">Contact</h2>
            <span className="section-head__rule" aria-hidden="true" />
          </div>

          <div className="contact">
            <h3 className="contact__title">
              One address, read by the person who does the work.
            </h3>
            <a href={`mailto:${profile.email}`} className="contact__email">
              {profile.email}
            </a>
            <div className="contact__socials">
              {profile.socials.map((social) => (
                <a href={social.href} key={social.label}>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
