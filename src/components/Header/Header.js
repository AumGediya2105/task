import React from "react";
import "./Header.scss";
import { Logo } from "../icons";

const Header = () => {
  return (
    <div className="header">
      <div className="h1">
        <Logo />
      </div>
      <ul className="h2">
        <li className="l1">Feature</li>
        <li className="l1">Developers</li>
        <li className="l1">Company</li>
        <li className="l1">Blog</li>
        <li className="l1">Changelog</li>
      </ul>
      <div className="h3">
        <p className="p1">
            Join Waitlist
        </p>
      </div>
    </div>
  );
};

export default Header;
