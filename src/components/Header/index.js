import React from "react";
import "./style.css";
import Bgimg from "../../sponge-island-Header.jpg";

function Title(props) {
  return (
    <div className="image-bg" style={{  backgroundImage : `url(${Bgimg})`}}>
        <div className="heads-bg d-flex align-items-center">
            <div className="mx-auto stickyDiv">
                    <h1 className="text-center">{props.children}</h1>
            </div>
            
        </div>
    </div>

  );
}

export default Title;
