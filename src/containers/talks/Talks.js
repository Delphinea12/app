import React, {useContext} from "react";
import "./Talks.scss";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import bibli from "../../assets/images/bibli.png";
import apropos from "../../assets/images/apropos.png";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="references">
        <div className="full-width-image-container">
          <img
            alt="Références bibliographiques"
            src={bibli}
            className="full-width-image"
          ></img>
        </div>

        <div className="full-width-image-container" style={{marginTop: "40px"}}>
          <img alt="À propos" src={apropos} className="full-width-image"></img>
        </div>
      </div>
    </Fade>
  );
}
