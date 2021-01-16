import React from "react";
import "./section.css";

const Section = ({ backgroundTheme, children }) => {
    return (
        <section className={`section ${backgroundTheme}`}>
            <div className="container px-6 mx-auto">
                {children}
            </div>
        </section>
    );
}

export default Section;
