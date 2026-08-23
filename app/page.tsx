import AnimatedText from "./animated-text";
import Link from "next/link";

const links = [
  { label: "Gallery", href: "https://gallery.luisospina.ca", icon: "gallery" },
  { label: "GitHub", href: "https://github.com/LuisOspina", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luisfospina/", icon: "linkedin" },
];

const iconPaths = {
  menu: "M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z",
  close: "m6.4 5-1.4 1.4 5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4 17.6 5 12 10.6 6.4 5Z",
  gallery: "M4 4h16v16H4V4Zm2 2v9l3-3 2.5 3 3.5-4 3 4V6H6Z",
  github: "M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.9 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.5.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.8 5.4-5.5 5.7.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.5 11.5 0 0 0 12 .7Z",
  linkedin: "M5.3 7.8H1.7V22h3.6V7.8ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22 13.9c0-4.3-2.3-6.3-5.4-6.3a4.6 4.6 0 0 0-4.1 2.2v-2h-3.6V22h3.6v-7c0-1.8.3-3.6 2.7-3.6s2.5 2.2 2.5 3.7V22H22v-8.1Z",
};

function Icon({ name }: { name: keyof typeof iconPaths }) {
  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d={iconPaths[name]} /></svg>;
}

export default function Home() {
  return (
    <div className="page">
      <header>
        <Link className="name" href="/" aria-label="Luis Ospina, home">
          <span>Luis</span><span>Ospina</span>
        </Link>

        <details className="site-menu">
          <summary aria-label="Open menu">
            <span className="menu-open"><Icon name="menu" /></span>
            <span className="menu-close"><Icon name="close" /></span>
          </summary>
          <nav aria-label="Main menu">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.label === "Gallery" ? undefined : "_blank"}
                rel={link.label === "Gallery" ? undefined : "noreferrer"}
              >
                <Icon name={link.icon as keyof typeof iconPaths} />
                {link.label}
              </a>
            ))}
          </nav>
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
