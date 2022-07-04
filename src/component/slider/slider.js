import React from "react";
import { Link } from "react-router-dom";
import "./slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <ul>
        <li>
          <div className="logo"><i className="fa-solid fa-user-tie"></i></div>
        </li>

        <li>
          <Link to="/">
            <i className="fa-solid fa-house-chimney"></i>
          </Link>
        </li>

        <li>
          <Link to="inform">
            <i className="fa-solid fa-user"></i>
          </Link>
        </li>

        <li>
          <Link to="BODY">
          <i className="fa-solid fa-money-bill-transfer"></i>
          </Link>
        </li>

        <li>
      <Link to="Setting">
          <i className="fa-solid fa-gear"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
