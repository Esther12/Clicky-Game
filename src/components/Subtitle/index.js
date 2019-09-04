/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

function Subtitle(props) {
  return(
    <div className="col-12">
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
            <a className="nav-link" >Score : {props.score}</a>
            </li>
            <li className="nav-item">
            <a className="nav-link">Message : {props.subtitle}</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" >Time Left : {props.timeLeft}</a>
            </li>
        </ul>
      </div>
  )
}

export default Subtitle;