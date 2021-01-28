import React from "react";
import "./divider.css";

const Divider = ({ position }) => {
    return (
        <div className={`divider ${position}`} />
    );
}

export default Divider;
