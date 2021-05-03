import React from "react";  
import "./style.css";


const MainContainer = ({ children, px, py, fullWidth }) => (
    <div className={`container ${py ? `py-${py}` : ""} ${px ? `px-${px}` : ""} ${fullWidth ? "full-width" : ""}`}>
        { children }
    </div>
);


export default MainContainer;