import React from "react";
import { BYRWA, Badge, Mask } from "../icons";
import "./Comp1.scss";

const Comp1 = () => {
  return (
    <div className="comp1">
      <div className="a1">
        <div className="a2">
          <Badge />
          <p className="p1">Latest integration just arrived</p>
        </div>
        <h1 className="h1">Boost your rankings with AI.</h1>
        <p className="p2">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <button className="btn">Start for free</button>
      </div>
      <Mask className="mask" />
    </div>
  );
};

export default Comp1;
