import React from "react";

const TODO = ({completed, text, onClick, key}) => {
    return (
        <li onClick={onClick} key={key} style={{textDecoration: completed ? "line-through" : "none"}}>{text}</li>
    )
}

export default TODO;
