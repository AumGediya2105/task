import React from "react";
import "./Card.scss";

const Card = ({ i }) => {
  return (
    <div className="card">
      <div className="card1">
        <p className="p1">{i[0]}</p>
        <p className="p2">{i[1]}</p>
        <hr />
        <ul className="list">
          {i[2].map((j) => {
            return <li className="li">{j}</li>;
          })}
        </ul>
      </div>
      <button className="btn">Join List</button>
    </div>
  );
};

export default Card;
