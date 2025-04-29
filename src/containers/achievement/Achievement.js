import React, {useContext} from "react";
import "./Achievement.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ped from "../../assets/images/ped.png";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="perspective">
        <div className="full-width-image-container">
          <img
            alt="Perspectives et limites des dispositifs de quantification"
            src={ped}
            className="full-width-image"
          ></img>
        </div>
      </div>
    </Fade>
  );
}
