import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //white space is must after "card_"
  return <div className={classes}>{props.children}</div>;
}

export default Card;
