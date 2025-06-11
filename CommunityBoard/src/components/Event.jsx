import React from "react";

const Event = (props) => {
    return (
        <div className="Event">
            <img src={props.img}></img>
            <h3>{props.title}</h3>
            <h4>{props.des}</h4>
            <button>Sign Up</button>
        </div>
    )
}

export default Event;