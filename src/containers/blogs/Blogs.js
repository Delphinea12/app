import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import tab1 from "../../assets/images/tab1.png";
import tab2 from "../../assets/images/tab2.png";
import tab3 from "../../assets/images/tab3.png";
import tab4 from "../../assets/images/tab4.png";
import tab5_1 from "../../assets/images/tab5-1.png";
import tab5_2 from "../../assets/images/tab5-2.png";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);
  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }
  //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split(/<\/p>/i)
          .map(part => part.split(/<p[^>]*>/i).pop())
          .filter(el => el.trim().length > 0)
          .map(el => el.replace(/<\/?[^>]+(>|$)/g, "").trim())
          .join(" ")
      : NaN;
  }
  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            );
            setMediumBlogsFunction("Error");
            blogSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (!blogSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="ressource">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>

        {/* Image 1 */}
        <div className="blog-centered-image">
          <img
            src={tab1}
            alt="Tableau troubles psychiques"
            className="blog-image"
          />
          <p className="blog-caption">
            Tableau récapitulatif des différents troubles psychiques du
            post-partum et les symptômes associés.
          </p>
        </div>

        {/* Images 2 & 3 côte à côte */}
        <div className="blog-row">
          <div className="blog-item">
            <a
              href="/flyers/1000jours_flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tab2} alt="Appli 1000 jours" className="blog-image" />
            </a>
            <p className="blog-caption">
              Image smartphone de l'application <strong>1000 jours</strong>. Sur
              l'application est disponible un auto-test de la dépression du
              post-partum issu de l'EPDS.
              <br />
              <a
                href="https://1000jours.fabrique.social.gouv.fr/pdf/Flyer%20ETAT_presse.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                → Voir le flyer PDF
              </a>
            </p>
          </div>

          <div className="blog-item">
            <img src={tab3} alt="Affiche EPNP" className="blog-image" />
            <p className="blog-caption">
              Affiche promotionnelle de l’EPNP du Réseau Méditerranée.
            </p>
          </div>
        </div>

        {/* Images 4 & 5-1/5-2 côte à côte */}
        <div className="blog-row">
          <div className="blog-item">
            <img src={tab4} alt="Guide EPNP" className="blog-image" />
            <p className="blog-caption">
              Outil n°1 pour les professionnels de santé : Guide EPNP.
            </p>
          </div>

          <div className="blog-item">
            <img
              src={tab5_1}
              alt="Feuille EPNP page 1"
              className="blog-image"
            />
            <img
              src={tab5_2}
              alt="Feuille EPNP page 2"
              className="blog-image"
            />
            <p className="blog-caption">
              Outil n°2 pour les professionnels de santé : Feuille de synthèse
              EPNP.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
