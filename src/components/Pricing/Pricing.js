import React from "react";
import "./Pricing.scss";
import Card from "../Card/Card";

const Pricing = () => {
  const arr = [
    [
      "Pricing",
      "$29/mo",
      [
        "Keyword optimization",
        "Automated meta tags",
        " SEO monitoring",
        "Monthly reports",
      ],
    ],
    [
      "Pro",
      "$79/mo",
      [
        "Keyword optimization",
        "Automated meta tags",
        " SEO monitoring",
        "Monthly reports",
        "Content suggestions",
        "Link optimization",
      ],
    ],
    [
      "Business",
      "$149/mo",
      [
        "Keyword optimization",
        "Automated meta tags",
        " SEO monitoring",
        "Monthly reports",
        "Content suggestions",
        "Link optimization",
        "Multi-user access",
        "API integration",
      ],
    ],
  ];

  return (
    <div className="pricing">
      <div className="top">
        <h1 className="h">Pricing</h1>
        <p className="p">
          Choose the right plan to met your SEO needs and start optimizing
          today.
        </p>
      </div>
      <div className="btm">
        {arr.map((i) => {
          return <Card i={i} />;
        })}
      </div>
    </div>
  );
};

export default Pricing;
