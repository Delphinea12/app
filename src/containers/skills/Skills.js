import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="avantpropos">
      <div className="full-width-image-container">
        <img
          alt="Avant-propos"
          src={require("../../assets/images/avantpropos.png")}
          className="full-width-image"
        ></img>
      </div>
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/dpp.png")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            {Array.isArray(skillsSection.title) ? (
              <>
                <h1
                  className={
                    isDark ? "dark-mode skills-heading" : "skills-heading"
                  }
                >
                  {skillsSection.title[0]}
                </h1>
                <h1
                  className={
                    isDark ? "dark-mode skills-heading" : "skills-heading"
                  }
                >
                  {skillsSection.title[1]}
                </h1>
              </>
            ) : (
              <h1
                className={
                  isDark ? "dark-mode skills-heading" : "skills-heading"
                }
              >
                {skillsSection.title}
              </h1>
            )}
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
