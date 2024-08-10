import React from "react";
import { Clientimg } from "../icons";

import "./Client.scss";

const Client = () => {
  return (
    <div className="client">
      <div className="top">
        <h1>Our Clients</h1>
        <p>
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>
      </div>
      <Clientimg />
      <div className="btm">
        <p className="p1">
          ”This product has completely transformed how I manage my projects and
          deadlines”
        </p>
        <p className="p2">Talia Taylor</p>
        <p className="p3">Digital Marketing Director @ Quantum</p>
      </div>
    </div>
  );
};

export default Client;
