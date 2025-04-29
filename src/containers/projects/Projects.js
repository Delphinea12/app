import React, {useContext} from "react";
import "./Project.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import lod from "../../assets/images/lod.png";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  // Style corrigé pour que les images occupent toute la largeur de la fenêtre
  const fullWidthStyle = {
    width: "100%",
    maxWidth: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "30px"
  };

  return (
    <div
      className="main"
      id="outils"
      style={{overflow: "hidden", width: "100%", padding: 0}}
    >
      <Fade bottom duration={1000} distance="20px">
        <div style={{width: "100%", padding: 0, margin: 0}}>
          <img
            alt="Les outils et dispositifs existants pour quantifier la dépression post-partum"
            src={lod}
            style={fullWidthStyle}
          />
        </div>
      </Fade>

      <Fade bottom duration={1000} distance="20px">
        <div style={{width: "100%", padding: 0, margin: 0}}>
          <img
            alt="Opportunités de dépistage et échelle de temps"
            src={require("../../assets/images/ode.png")}
            style={fullWidthStyle}
          />

          <img
            alt="Guide-outil pour les professionnels de santé"
            src={require("../../assets/images/gop.png")}
            style={fullWidthStyle}
          />

          <img
            alt="Difficultés dans la quantification"
            src={require("../../assets/images/ddq.png")}
            style={fullWidthStyle}
          />

          <img
            alt="Perspectives et limites des dispositifs de quantification"
            src={require("../../assets/images/ped.png")}
            style={fullWidthStyle}
          />
        </div>
      </Fade>
    </div>
  );
}
