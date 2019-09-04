import React from "react";
import "./style.css";



function FriendCard(props) {

  return (
    <div className="card  border-warning" onClick={()=>props.onClick(props.name)}>
      <img src={props.image} className="card-img" alt={props.name} data-type={props.clicked}></img>
      <div className="card-img-overlay">
      </div>
      </div>
      
  );
}

export default FriendCard;
