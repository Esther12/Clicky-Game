import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="image-bg">
        <div className="heads-bg d-flex align-items-center">
            <div className="mx-auto stickyDiv">
                    <h1 className="text-center">{props.children}</h1>
            </div>
            
        </div>
    </div>

  );
}

export default Title;
