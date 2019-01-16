import React from "react";
import "./ImgCard.css";

const ImgCard = props => (
  <div
    role="img"
    className="click-item card"
    arial-label="click-item"
    onClick={() => props.clickCard(props)}
  >
    <img className="card" src={props.image} alt={props.name} />
  </div>
);

export default ImgCard;
