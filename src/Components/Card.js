import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  const { name } = props.cardProp;

  return (
    <button
      className={name}
      onClick={() => props.handleClickProp(props.cardProp)}
    >
      {name}
    </button>
  );
};
export default Card;
