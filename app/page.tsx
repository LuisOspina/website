import AnimatedText from "./animated-text";

const links = [
  { label: "GitHub", href: "https://github.com/LuisOspina" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luisfospina/" },
];

function SocialLinks() {
  return (
    <nav aria-label="Social links">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default function Home() {
  return (
    <div className="page">
      <header>
        <a className="name" href="#main" aria-label="Luis Ospina, home">
          <span>Luis</span> <span>Ospina</span>
        </a>

        <div className="desktop-nav">
          <SocialLinks />
        </div>

        <details className="mobile-nav">
          <summary aria-label="Social links menu">
            <span />
            <span />
            <span />
          </summary>
          <SocialLinks />
        </details>
      </header>

      <main id="main">
        <h1>Welcome! I&apos;m Luis.</h1>
        <p className="intro">
          Click around to learn about <AnimatedText />
          <span className="screen-reader-text">my life and my work</span>
        </p>
      </main>
    </div>
  );
}
