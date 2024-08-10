import React from "react";
import { Bento1, Bento2 } from "../icons";
import "./Bento.scss"

const Bento = () => {
  return (
    <div className="bento">
      <p className="p">
        Harness the power of AI, Making Search engine optimization intutive and
        effective for all skill levels
      </p>
      <Bento1 className="bento1" />
      <Bento2 className="bento2" />
    </div>
  );
};

export default Bento;
