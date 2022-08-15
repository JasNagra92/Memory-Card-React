import React from "react";

const Card = (props) => {

    const {name} = props.cardProp
    return (
        <button onClick={() => props.handleClickProp(props.cardProp)}>{name}</button>
    )
}
export default Card