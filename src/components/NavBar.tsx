import React from "react";
import { Link, NavLink, Route } from "react-router-dom";

interface LinkItem {
  path: string;
  label: string;
}

const links: LinkItem[] = [
  { path: "/", label: "Home" },
  { path: "/works", label: "Works" },
];

export const NavBar: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false);

  const NavBarItem: React.FC<LinkItem> = (linkItem) => {
    return (
      <Link
        to={linkItem.path}
        className="navbar-item"
        onClick={() => {
          setIsActive(false);
        }}
      >
        {linkItem.label}
      </Link>
    );
  };

  return (
    <nav className="navbar is-dark is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <div
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            data-target="navMenu"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
          id="navMenu"
        >
          <div className="navbar-start">
            {links.map((link) => (
              <NavBarItem path={link.path} label={link.label} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
