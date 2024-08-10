import React from "react";
import "./Footer.scss";
import { Logo2, Logos } from "../icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <Logo2 />
        </div>
        <div className="right">
          <ul className="ul1">
            <li className="l1">Product</li>
            <li className="l2">Feature</li>
            <li className="l2">Integration</li>
            <li className="l2">Updates</li>
            <li className="l2">FAQ</li>
            <li className="l2">Pricing</li>
          </ul>
          <ul className="ul1">
            <li className="l1">Company</li>
            <li className="l2">About</li>
            <li className="l2">Blog</li>
            <li className="l2">Careers</li>
            <li className="l2">Manifesto</li>
            <li className="l2">Press</li>
            <li className="l2">Contract</li>
          </ul>
          <ul className="ul1">
            <li className="l1">Resources</li>
            <li className="l2">Examples</li>
            <li className="l2">Community</li>
            <li className="l2">Guides</li>
            <li className="l2">Docs</li>
            <li className="l2">Press</li>
          </ul>
          <ul className="ul1">
            <li className="l1">Legal</li>
            <li className="l2">Privacy</li>
            <li className="l2">Terms</li>
            <li className="l2">Security</li>
          </ul>
        </div>
      </div>
      <div className="btm">
        <Logos />
      </div>
    </div>
  );
};

export default Footer;
