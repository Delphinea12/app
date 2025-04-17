import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <footer>
          <p className="footer-text">© 2025 - Projet de Delphine Agher</p>
          <p className="footer-text">Tous droits réservés</p>
          <p className="footer-text">Basé sur le thème DeveloperFolio</p>
        </footer>
      </div>
    </Fade>
  );
}
