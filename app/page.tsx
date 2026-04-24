import Image from "next/image";
import Link from "next/link";

const questionCards = [
  {
    title: "Is infinite growth sustainable?",
    href: "#discussion"
  },
  {
    title: "What will the future role of humans be?",
    href: "#discussion"
  },
  {
    title: "What does a fair society look like?",
    href: "#discussion"
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top">
          forallhumanity.org
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#topics">Topics</a>
          <a href="#discussion">Discussion</a>
          <a href="#action">Action</a>
          <a className="button button--solid" href="#discussion">
            Join the discussion
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Let’s talk about it.</h1>
          <p className="hero-subtitle">
            The questions shaping humanity deserve better conversations.
          </p>
          <span className="hero-divider" aria-hidden="true" />
          <a className="hero-arrow" href="#purpose" aria-label="Scroll to the discussion">
            ↓
          </a>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <Image
            src="/hero-arena.png"
            alt=""
            fill
            className="hero-visual__photo"
            sizes="100vw"
            priority
          />
          <div className="sun-line" />
        </div>
      </section>

      <section
        className="section purpose purpose--hero"
        id="purpose"
        aria-labelledby="purpose-heading"
      >
        <div className="section-heading">
          <h2 id="purpose-heading">Our Future depends on us.</h2>
          <p className="purpose-tagline">
            Changes start with a social dialog among us.
          </p>
        </div>

        <div className="section-body">
          <p>
            forallhumanity.org is a forum for examining what changes when
            intelligence becomes inexpensive to reproduce at the margin, and how
            that shift affects incentives, institutions, and everyday life. We
            understand &ldquo;zero margin&rdquo; not as a claim about efficiency alone, but
            as an inquiry into value creation, distribution, and the
            guardrails that should remain in place.
          </p>
          <p>
            We advocate for human-in-the-loop design, in which judgment,
            consent, and accountability remain explicit rather than concealed
            by automation. We also situate these questions within sustainable
            development, including environmental constraints, fair labor, and
            long-term welfare, in a period when AI can amplify both risk and
            opportunity.
          </p>
        </div>
      </section>

      <section
        className="section purpose"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className="section-heading">
          <h2 id="about-heading">An Independent Think Tank.</h2>
          <p className="purpose-tagline">
            Non-partisan. Not for profit. Open to everyone.
          </p>
        </div>

        <div className="section-body">
          <p>
            forallhumanity.org is an independent think tank examining the
            structural consequences of artificial intelligence on society,
            labor, and democratic institutions. We operate without affiliation
            to any government, corporation, or political movement.
          </p>
          <p>
            Our work brings together researchers, practitioners, and citizens
            to interrogate the distribution of power and opportunity in an
            age of zero-margin intelligence — and to propose governance
            frameworks, policy alternatives, and open knowledge commons that
            serve all of humanity.
          </p>
        </div>
      </section>

      <section className="topics section" id="topics" aria-labelledby="topics-heading">
        <div className="topics-intro">
          <p className="eyebrow eyebrow--on-dark">Some of the questions we discuss</p>
          <h2 id="topics-heading">Questions that need better conversations.</h2>
        </div>

        <div className="topics-columns">
          {questionCards.map((card, index) => (
            <a key={card.title} className="topics-card" href={card.href}>
              <span className="topics-card__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="topics-card__title">{card.title}</h3>
              <span className="topics-card__cta text-link text-link--light">
                Explore the discussion <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="principles section" id="approach">
        <div className="principles-copy">
          <div className="principle-icons" aria-hidden="true">
            <svg
              className="principle-geo"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              focusable="false"
            >
              <circle
                cx="20"
                cy="20"
                r="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <svg
              className="principle-geo"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              focusable="false"
            >
              <rect
                x="6"
                y="6"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <svg
              className="principle-geo"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              focusable="false"
            >
              <path
                d="M20 6 36 34H4Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="miter"
              />
            </svg>
          </div>
        </div>

        <aside className="cta-panel" id="discussion">
          <h2>The conversation starts with you.</h2>
          <a className="button button--solid" href="#discussion">
            Join the discussion
          </a>
        </aside>
      </section>

      <footer className="page-footer">
        <div className="page-footer__primary">
          <div className="fsn-section" id="action">
            <div className="section-heading">
              <h2>
                <a
                  className="fsn-heading-link"
                  href="https://freesciencenetwork.org"
                  rel="noopener noreferrer"
                >
                  Free Science Network
                </a>
              </h2>
              <p className="purpose-tagline">freesciencenetwork.org</p>
            </div>
            <div className="section-body">
              <p>
                Free Science Network is a zero-margin, open-science initiative
                founded in 2026 and committed to reducing structural inequality
                in science, medicine, and education in underserved communities
                worldwide.
              </p>
            </div>
          </div>
          <nav className="nav nav--footer" aria-label="Site sections">
            <a href="#about">About</a>
            <a href="#topics">Topics</a>
            <a href="#discussion">Discussion</a>
            <a href="#action">Action</a>
            <a className="button button--solid" href="#discussion">
              Join the discussion
            </a>
          </nav>
        </div>

        <div className="footer footer--dark">
          <p>© 2026 forallhumanity.org</p>
          <div className="footer-links">
            <Link href="/">X</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">Email</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
