import React, {useContext} from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="references">
        <h2 className="subTitle">Bibliographie :</h2>
        <ul>
          <li>
            Tissot, H., Frascarolo, F., Despland, J.-N., & Favez, N. (2011).{" "}
            <i>
              Dépression post-partum maternelle et développement de l’enfant :
              Revue de littérature et arguments en faveur d’une approche
              familiale.
            </i>{" "}
            La Psychiatrie de l’enfant, 54(2), 611–637.
          </li>
          <li>
            Bales, M., Pambrun, E., Melchior, M., et al. (2015).{" "}
            <i>
              Prenatal psychological distress and access to mental health care
              in the ELFE cohort.
            </i>{" "}
            European Psychiatry, 30(2), 322-328.{" "}
            <a
              href="https://doi.org/10.1016/j.eurpsy.2014.02.007"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lien
            </a>
          </li>
          <li>
            Bastien, V., Braconnier, M., & de Tychey, C. (1999).{" "}
            <i>
              Dépression postnatale : Facteurs de risque et modalités de
              prévention.
            </i>{" "}
            L’Évolution Psychiatrique, 64(2), 289-307.{" "}
            <a
              href="https://doi.org/10.1016/S0014-3855(99)80067-X"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lien
            </a>
          </li>
          <li>
            Lussier V, David H, Saucier JF, Borgeat F. (1994).{" "}
            <i>
              Enjeux maternels et dépression postnatale : rupture ou continuité.
            </i>{" "}
            Devenir ; 6: 7-26.
          </li>
          <li>
            Howard LM, Molyneaux E, Dennis CL, et al. (2014).{" "}
            <i>Non-psychotic mental disorders in the perinatal period.</i> The
            Lancet.
          </li>
          <li>
            Dennis CL, Falah-Hassani K, Shiri R. (2017).{" "}
            <i>
              Prevalence of antenatal and postnatal anxiety: Systematic review
              and meta-analysis.
            </i>{" "}
            Br J Psychiatry.
          </li>
          <li>
            Woody CA, Ferrari AJ, Siskind DJ, et al. (2017).{" "}
            <i>
              A systematic review and meta-regression of the prevalence and
              incidence of perinatal depression.
            </i>{" "}
            J Affect Disord.
          </li>
          <li>
            Tebeka S, Le Strat Y, De Premorel Higgons A, et al. (2021).{" "}
            <i>
              Prevalence and incidence of postpartum depression and
              environmental factors: The IGEDEPP cohort.
            </i>{" "}
            J Psychiatr Res.
          </li>
          <li>
            Cox JL, Holden JM, Sagovsky R. (1987).{" "}
            <i>
              Detection of postnatal depression. Development of the 10-item
              Edinburgh Postnatal Depression Scale.
            </i>{" "}
            Br J Psychiatry.
          </li>
          <li>
            Hewitt CE, Gilbody SM, Mann R, et al. (2010).{" "}
            <i>
              Instruments to identify post-natal depression: Which methods have
              been the most extensively validated, in what setting and in which
              language?
            </i>{" "}
            Int J Psychiatry Clin Pract.
          </li>
          <li>
            Cinelli H., Lelong N., Le Ray C., et al. (2022).{" "}
            <i>Enquête nationale périnatale. Rapport 2021.</i> Inserm.
          </li>
          <li>
            Tissot, H., Frascarolo-Moutinot, F., Despland, J.-N., & Favez, N.
            (2011).{" "}
            <i>
              Dépression post-partum maternelle et développement de l’enfant.
            </i>{" "}
            La psychiatrie de l’enfant, 54(2), 611–637.{" "}
            <a
              href="https://doi.org/10.3917/psye.542.0611"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lien
            </a>
          </li>
          <li>
            Slomian, J., Honvo, G., Emonts, P., et al. (2019).{" "}
            <i>
              Consequences of maternal postpartum depression: A systematic
              review of maternal and infant outcomes.
            </i>{" "}
            Women's Health, 15, 1745506519844044.{" "}
            <a
              href="https://doi.org/10.1177/1745506519844044"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lien
            </a>
          </li>
        </ul>
      </div>
    </Fade>
  );
}
