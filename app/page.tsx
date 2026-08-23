import AnimatedText from "./animated-text";

const links = [
  { label: "Gallery", href: "https://gallery.luisospina.ca", icon: "photo_library" },
  { label: "GitHub", href: "https://github.com/LuisOspina", icon: "code" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luisfospina/", icon: "work" },
];

export default function Home() {
  return (
    <div className="page">
      <header>
        <a className="name" href="#main" aria-label="Luis Ospina, home">
          <span>Luis</span> <span>Ospina</span>
        </a>

        <details className="site-menu">
          <summary aria-label="Open menu">
            <span className="material-symbols-rounded menu-open" aria-hidden="true">menu</span>
            <span className="material-symbols-rounded menu-close" aria-hidden="true">close</span>
          </summary>
          <nav aria-label="Main menu">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.label === "Gallery" ? undefined : "_blank"}
                rel={link.label === "Gallery" ? undefined : "noreferrer"}
              >
                <span className="material-symbols-rounded" aria-hidden="true">{link.icon}</span>
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
