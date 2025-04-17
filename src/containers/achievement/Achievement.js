import React, {useContext} from "react";
import "./Achievement.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="perspective">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              Perspectives et limites des dispositifs de quantification
            </h1>
          </div>

          <div
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            <p>
              <strong>1. Améliorations possibles</strong>
            </p>
            <ul>
              <li>
                Remboursement intégral de l'EPNP pour encourager la prévention.
              </li>
              <li>
                Sensibilisation accrue des professionnels et du public pour
                réduire le tabou sociétal.
              </li>
              <li>
                Optimisation des outils de détection avec des critères plus
                adaptés aux divers profils de patientes.
              </li>
              <li>
                Mise en place d'un système de codage en libéral pour une
                meilleure remontée des données.
              </li>
            </ul>

            <p>
              <strong>2. Limites des approches actuelles</strong>
            </p>
            <ul>
              <li>Sous-diagnostic persistant malgré l'existence des outils.</li>
              <li>Prise en charge tardive faute d'identification précoce.</li>
              <li>
                Disparités géographiques et sociales dans l'accès aux soins.
              </li>
            </ul>

            <p className="no-uppercase-text">
              <strong>Conclusion</strong>
              <br />
              <br />
              La quantification de la dépression post-partum est un enjeu
              crucial pour améliorer sa prise en charge et limiter ses
              conséquences. Malgré l'existence de plusieurs outils d'évaluation,
              des difficultés subsistent en raison du manque de cotation des
              diagnostics en libéral et de la persistance du tabou sociétal. Des
              efforts doivent être faits pour renforcer le dépistage et la prise
              en charge, notamment en sensibilisant les professionnels et en
              adaptant les dispositifs existants. D’un point de vue systémique,
              le manque de formation spécifique des professionnels de santé, le
              temps limité accordé aux consultations postnatales ainsi que
              l'absence de dépistage systématique contribuent à cette
              invisibilisation du trouble. L'amélioration des stratégies de
              quantification permettra à terme d'affiner les protocoles de
              prévention et d'optimiser le suivi des femmes concernées.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
