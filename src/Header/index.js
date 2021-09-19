import bgDesktopLight from "../assets/img/bg-desktop-light.jpg";
import bgMobileLight from "../assets/img/bg-mobile-light.jpg";

import moonToggle from "../assets/img/icon-moon.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header-background">
        <picture>
          <source media="(min-width: 376px)" srcSet={bgDesktopLight} />
          <img src={bgMobileLight} alt="Header background with gradient" />
        </picture>
      </div>
      <div className="header-title">
        <h1>TODO</h1>
        <a href="/">
          <img
            src={moonToggle}
            alt="Moon button to turn on dark mode"
            title="Turn on dark mode"
          />
        </a>
      </div>
    </header>
  );
};

export { Header };
