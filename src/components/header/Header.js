import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
      <a href={`${process.env.PUBLIC_URL}/`} className="logo">
        <span className="logo-name">{greeting.username}</span>
      </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#avantpropos">Avant-propos</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#enjeux">Enjeux</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#outils">Outils de quantification</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#perspective">Perspectives en santé publique</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#ressource">Ressources DPP</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#references">Référence bibliographique</a>
            </li>
          )}

          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
