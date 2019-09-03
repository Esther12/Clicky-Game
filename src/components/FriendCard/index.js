import React from "react";
import "./style.css";



function FriendCard(props) {

  return (
    <div className="card  border-warning" onClick={props.onClick}>
      <img src={props.image} class="card-img" alt={props.name}></img>
      <div className="card-img-overlay">
      </div>
      </div>
      
  );
}

export default FriendCard;
