import React from "react";

export default function Ratings({ handleClick, on, number}) {

    return (
        <>
            <div className={on ? 'clicked' : 'click'}
                onClick={handleClick }>
                {number}</div>
        </>
    )
}

