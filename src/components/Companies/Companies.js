import React from "react";
import "./Companies.scss";
import Company from "../Company/Company";
import { C, C2, C3, C4, C5, C6, C7, C8 } from "../icons";

const Companies = () => {
  return (
    <div className="companies">
      <div className="top">Trusted by the world’s most innovative teams </div>
      <div className="btm">
        <div className="c2">
          <Company icon={<C />} />
          <Company icon={<C2 />} />
          <Company icon={<C3 />} />
          <Company icon={<C4 />} />
        </div>
        <div className="c3">
          <Company icon={<C5 />} />
          <Company icon={<C6 />} />
          <Company icon={<C7 />} />
          <Company icon={<C8 />} />
        </div>
      </div>
    </div>
  );
};

export default Companies;
