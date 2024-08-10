import React from "react";
import "./SEO.scss";
import { SEOimg } from "../icons";

const SEO = () => {
  const arr = [
    [
      "User-friendly dashboard",
      "Perform complex SEO audits and optimizations with a single click.",
    ],
    ["Content evaluation", "Simple corrections for immediate improvemens."],
    [
      "Link Optimization Wizard",
      "Guides you through the process of creating and managing links.",
    ],
    ["Visual reports", "Visual insights into your site’s performance."],
    [
      "SEO goal setting",
      "Helps you set and achieve SEO goals with guided assistance.",
    ],
    [
      "One-click optimization",
      "Perform complex SEO audits and optimizations with a single click.",
    ],
    [
      "Smart Keyword Generator",
      "Automatic suggestions and the best keywords to target.",
    ],
    [
      "Automated alerts",

      "Automatic notifications about your SEO health, including quick fixes.",
    ],
    [
      "Competitor reports",

      "Provides insights into competitors’ keyword strategies and ranking.",
    ],
  ];

  return (
    <div className="seo">
      <div className="img">
        <SEOimg />
      </div>
      <div className="main">
        {arr.map((i) => {
          return (
            <div className="arr">
              <p className="a1">{i[0]}</p>
              <p className="a2">{i[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SEO;
