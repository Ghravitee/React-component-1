import React from "react";
import './index.css' 
import data from "./data";

export default function Feedback({buttons}) {
    return (
        <div className="feedback-container">
            <div className="feedback-star">
                <img src="./images/illustration-thank-you.svg" alt="" className="illustration-img" />
            </div>
            <p className="feedback-paragraph">You selected {buttons.length} out of {data.length}</p>
            <h1 className="feedback-heading text-c">Thank You!</h1>
            <p className="paragraph-2a">We appreciate you taking the time to give a rating, if you ever need more support,
                don't hesitate to get in touch
            </p>
        </div>
    )
}