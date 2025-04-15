import React from "react";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";

export default function WorkExperience() {
  if (!workExperiences.display) {
    return null;
  }

  return (
    <div className="main" id="experience">
      <div className="experience-basic">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="skills-heading">
            Les enjeux de la quantification de la dépression post-partum
          </h1>
        </Fade>

        <Fade bottom duration={1000} distance="20px">
          <div className="skills-text-div">

            {/* Partie 1 */}
            <p className="subTitle">
              <strong>1. Un problème de santé publique</strong><br /><br />
              Selon{" "}
              <a
                href="https://enp.inserm.fr/wp-content/uploads/2023/09/ENP2021_Rapport_MAJ_Juin2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                l'enquête nationale périnatale (ENP) de 2021
              </a>{" "}
              de Santé Publique France, environ 16,7 % des femmes en France sont touchées par la DPP.
              Avant l'ENP de 2021, les enquêtes nationales périnatales ne comportaient pas de questions spécifiques sur la dépression post-partum.
              L'enquête de 2021 a été la première à inclure une évaluation systématique de la santé mentale des mères en post-partum,
              notamment via des questions basées sur des outils de dépistage standardisés comme l'EPDS (Edinburgh Postnatal Depression Scale).
              Les ENP précédentes (2010 et 2016) se concentraient davantage sur les conditions de naissance, les soins périnataux,
              les pratiques médicales et les facteurs de risque périnataux, sans inclure un volet spécifique sur la dépression post-partum.
              <br /><br />
              Malgré sa prévalence, la DPP reste largement sous-diagnostiquée avec 50 à 60 % des cas qui échapperaient à toute identification (
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0924933814006452"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bales et al., 2015
              </a>
              ), ce qui soulève une problématique majeure de santé publique.
            </p>

            {/* Partie 2 */}
            <p className="subTitle">
              <strong>2. Les obstacles au diagnostic</strong><br /><br />
              Le sous-diagnostic de la DPP peut s'expliquer par une combinaison de facteurs à la fois individuels, sociaux et systémiques.
              Sur le plan individuel, de nombreuses femmes éprouvent de la culpabilité ou de la honte à l’idée d’éprouver des sentiments négatifs après la naissance de leur enfant,
              ce qui les conduit à taire leurs souffrances (
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S001438559980067X?via=ihub"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bastien et al., 1999
              </a>
              ).<br /><br />
              Selon Lussier et al., « Qu’il soit ancré dans la réalité ou non, le mythe de la jeune mère parfaitement heureuse, entourée, épanouie, rayonnante et adulée,
              qui ne connait ni le doute, ni l’ambivalence, n’est tombé en désuétude : il survient dans l’imaginaire des femmes qui s’inquiètent dès qu’elles ne collent pas à cette image. »<br /><br />
              Le regard social et les représentations idéalisées de la maternité peuvent renforcer le silence autour de la souffrance psychique des mères.
              <br /><br />
              Le concept de « matrescence » développé par l’anthropologue américaine Dana Raphael en 1970 est la contraction de « maternité » et « adolescence »
              pour désigner la transformation physique, émotionnelle, hormonale, sociale et identitaire qu’une femme traverse lorsqu’elle devient mère.
              L’idée centrale est que devenir mère n’est pas seulement un événement biologique ou social,
              mais une transition profonde dans l’identité, comparable à celle de l’adolescence (
              <em>Sarlat C, 2019</em>).
              <br /><br />
              En effet, la naissance d’un enfant ne s’accompagne pas systématiquement, chez toutes les femmes,
              d’un état émotionnel euphorique ou d’un attachement immédiat.
              Cette dissonance émotionnelle, souvent minorée, contraste avec les représentations idéalisées de la maternité
              et peut être accentuée par les bouleversements hormonaux, psychosociaux et identitaires caractéristiques du post-partum (
              <em>Slomian et al., 2019</em>).
              <br /><br />
              Par ailleurs, la symptomatologie de la DPP peut parfois être confondue avec les manifestations normales du post-partum,
              telles que la fatigue, les troubles du sommeil ou les fluctuations émotionnelles, rendant son identification plus complexe.
            </p>

            {/* Partie 3 */}
            <p className="subTitle">
              <strong>3. Conséquences de la DPP</strong><br /><br />
              La DPP peut avoir des répercussions profondes, non seulement sur la santé mentale de la mère,
              mais également sur le développement de l’enfant et l’équilibre familial (
              <em><a
                href="https://shs.cairn.info/revue-la-psychiatrie-de-l-enfant-2011-2-page-611?lang=fr&tab=cites-par"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tissot, Frascarolo, Despland & Favez, 2011
              </a></em>).
              <br /><br />
              Sur le plan individuel, la mère en situation de DPP manifeste une altération de son bien-être émotionnel,
              marquée par des sentiments d’incapacité, de culpabilité, d’anxiété excessive vis-à-vis de son enfant,
              ainsi que par une fatigue persistante. Ces symptômes affectent sa disponibilité affective
              et sa capacité à interpréter adéquatement les signaux émis par son bébé,
              compromettant ainsi les interactions précoces mère-enfant.
              <br /><br />
              Les répercussions sur l’enfant sont notables.
              Une relation insécure avec une mère en retrait ou, au contraire, intrusive,
              peut entraver la régulation émotionnelle du nourrisson et son développement socio-affectif, cognitif et comportemental.
              Les enfants de mères dépressives sont plus enclins à manifester des émotions négatives (colère, tristesse),
              des comportements de retrait, et à développer, à terme, des troubles psychologiques plus sévères.
              Des études montrent même que certains effets peuvent se généraliser aux interactions avec d'autres adultes (
              <em><a
                href="https://shs.cairn.info/revue-la-psychiatrie-de-l-enfant-2011-2-page-611?lang=fr&tab=cites-par"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tissot et al., 2011
              </a></em>).
              <br /><br />
              La famille, dans son ensemble, est également affectée.
              Le rôle du père s’avère central : il peut jouer un rôle protecteur en soutenant la mère
              et en établissant une relation positive avec l’enfant.
              Toutefois, en présence de conflits conjugaux ou si le père souffre lui-même de troubles psychiques,
              l’impact négatif sur l’enfant peut être renforcé.
              La qualité des relations familiales apparaît ainsi comme une variable modératrice déterminante dans l’évolution de la situation(
              <em><a
                href="https://shs.cairn.info/revue-la-psychiatrie-de-l-enfant-2011-2-page-611?lang=fr&tab=cites-par"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tissot et al., 2011
              </a></em>).
            </p>

          </div>
        </Fade>
      </div>
    </div>
  );
}
