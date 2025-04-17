import React, {useContext} from "react";
import "./Project.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="main" id="outils">
      <div className="experience-basic">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="skills-heading">
            Les outils et dispositifs existants pour
          </h1>
          <h1 className="skills-heading">
            quantifier la dépression post-partum
          </h1>
        </Fade>

        <Fade bottom duration={1000} distance="20px">
          <div className="skills-text-div">
            <p className="subTitle">
              <strong>1. L’outil clinique de dépistage :</strong>
              <br />
              <br />
              L’outil de dépistage le plus couramment utilisé en France est
              l’échelle d'Édimbourg (EPDS - Edinburgh Postnatal Depression
              Scale). L’EPDS est un outil de dépistage standardisé conçu pour
              identifier les symptômes de la dépression postnatale chez les
              femmes en période post-partum. Développée en 1987 par Cox, Holden
              et Sagovsky, cette échelle a pour but de repérer précocement les
              troubles de l’humeur pouvant survenir après l’accouchement,
              souvent sous-diagnostiqués malgré leur fréquence. L’EPDS se
              présente sous la forme d’un questionnaire auto-administré de 10
              items, chacun évalué sur une échelle de 0 à 3, portant sur les
              sentiments et comportements des sept derniers jours. Le score
              total permet d’orienter le professionnel de santé sur la nécessité
              ou non d’un approfondissement clinique. Bien qu’il ne s’agisse pas
              d’un outil diagnostique à part entière, il constitue une porte
              d’entrée essentielle dans la prévention et la prise en charge des
              troubles dépressifs postnataux. Une fois dépistée avec l’EPDS, le
              professionnel de santé oriente la patiente vers un professionnel
              spécialisé en santé mentale comme un psychologue ou un médecin
              psychiatre. Ce dernier pourra poser le diagnostic de la dépression
              du post-partum en utilisant des outils cliniques d’évaluation tel
              que l’inventaire de dépression de Beck (BDI - Beck Depression
              Inventory) ou l'échelle de dépression de Hamilton (HDRS - Hamilton
              Depression Rating Scale) qui préconisera ensuite la mise en place
              d’un suivi thérapeutique au long court.
              <br />
              (Son usage soulève cependant des enjeux importants, notamment en
              termes d’interprétation culturelle des réponses, de formation des
              soignants à son utilisation, et de suivi effectif des patientes
              identifiées à risque.)
            </p>

            <p className="subTitle">
              <strong>
                2. Les moments clés des professionnels impliqués dans le
                dépistage de la DPP
              </strong>
              <br />
              <br />
              Les professionnels de santé jouent un rôle clé dans la prise en
              charge de la dépression post-partum et chacun à une occasion clé
              de pouvoir dépister les prémisses d’une DPP. <br />
              <br />
              Parmi les acteurs principaux, on retrouve :<br />
              - La maternité : Le premier moment clé du dépistage de la DPP se
              situe pendant le séjour à la maternité. En effet, les
              professionnels de santé des maternités surveillent les signes
              précoces de dépression au cours des suites de couches. Toutefois,
              il est difficile de différencier un simple « baby-blues » des
              premiers signes d'une DPP durant cette période, notamment en
              raison de la durée des séjours, qui ne cesse de se réduire.
              D’après un rapport de la DREES, la durée moyenne de séjour des
              femmes à la maternité a diminué au cours des deux dernières
              décennies, passant de 4,5 jours en 2003 à 4,4 jours en 2022. Cette
              évolution est influencée par des facteurs tels que les politiques
              hospitalières et les modalités de financement avec notamment les
              changements dans le mode de financement des hôpitaux, comme la
              tarification à l'activité (T2A), qui incite les établissements à
              réduire la durée des séjours pour optimiser leurs ressources. En
              revanche, une prévention accrue avec des informations concernant
              les signes de la DPP pourraient être
              <br />
              - Les médecins généralistes (ou médecins traitants) : Ils
              connaissent généralement la patiente avant l’accouchement et sont
              en mesure de repérer les signes de détresse psychologique pendant
              la période post-partum.
              <br />
              - Les gynécologues-obstétriciens : Ils réalisent la consultation
              médicale post-partum, généralement à la sixième semaine suivant
              l’accouchement. Cette consultation leur permet de faire le point
              sur la santé de la patiente qu’ils ont suivie durant la grossesse,
              et de détecter d’éventuels signes de détresse psychologique.
              <br />
              - Les sage-femmes libérales : Elles assurent un suivi rapproché
              des patientes à leur retour à domicile après la sortie de la
              maternité, en prenant en charge le suivi du nouveau-né
              (surveillance pondérale, accompagnement à l’allaitement, suivi
              gynécologique) lors de visites à domicile. Bien que ce suivi soit
              habituellement arrêté après un mois, il peut être prolongé si
              nécessaire, généralement en cabinet.
              <br />
              - Les professionnels de la Protection Maternelle et Infantile
              (PMI), notamment les infirmier(e)s puéricultrices : Ils effectuent
              le suivi infantile des nouveau-nés après leur retour à domicile,
              en complément du suivi assuré par les sage-femmes libérales.
              <br />
              - Les pédiatres : Ils interviennent généralement lors de la
              première consultation médicale du nouveau-né, à environ 15 jours
              après la naissance. Ce suivi leur permet d’identifier des signes
              de détresse psychologique chez la mère, ainsi que d’éventuelles
              répercussions de ces troubles sur le bébé.
              <br />
              - Les kinésithérapeutes : Ils interviennent entre 8 et 10 semaines
              après l’accouchement, lorsque la femme entame sa rééducation
              périnéale. Cette étape est propice à des échanges avec la patiente
              sur son vécu quotidien du post-partum, ce qui permet de repérer
              d’éventuels signes de détresse psychologique maternelle.
              <br />
              Il convient de se questionner sur la sensibilisation des
              professionnels de santé concernant le dépistage de la DPP et leurs
              connaissances des relais d’orientation.
            </p>

            <p className="subTitle">
              <strong>
                3. Un guide-outil pour les professionnels de santé : l’Entretien
                Postnatal Précoce (EPNP)
              </strong>
              <br />
              <br />
              Depuis 2014,{" "}
              <a
                href="https://www.has-sante.fr/upload/docs/application/pdf/2014-03/recommandations_-_sortie_de_maternite_apres_accouchement.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Haute Autorité de Santé (HAS)
              </a>{" "}
              recommande la mise en place d’un entretien postnatal précoce
              (EPNP). Cette mesure a été officialisée par un amendement au{" "}
              <a
                href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000044553544"
                target="_blank"
                rel="noopener noreferrer"
              >
                projet de loi de financement de la Sécurité sociale
              </a>
              , rendant cet entretien obligatoire à partir du 1er juillet 2022
              en France. L’entretien postnatal précoce (EPNP) vient en
              complément de l’entretien prénatal précoce, généralement réalisé à
              partir du 4e mois de grossesse. Il vise à repérer les premiers
              signes de dépression post-partum ainsi que les femmes présentant
              des facteurs de risque, tout en évaluant les besoins du couple en
              matière d’accompagnement.
              <br />
              Dans l’idéal, ce rendez-vous doit être effectué par la sage-femme
              ou le gynécologue ayant assuré le suivi de la grossesse afin
              d’avoir un recul sur l’évolution de l’état de santé psychique de
              la mère. <strong>
                remboursé à 70 % par l’Assurance Maladie
              </strong>{" "}
              depuis septembre 2022. Il est codé « SP14 » (42 €) lorsqu’il est
              réalisé à domicile, et « SP12 » (36 €) lorsqu’il a lieu en
              cabinet. L’entretien prénatal précoce (EPP)<sup>1</sup>, quant à
              lui, est codé « C 2,5 » pour un montant de 57,50 € et bénéficie
              d’un remboursement intégral par la Sécurité sociale. Un second
              entretien postnatal (EPNP) peut être proposé entre la 10e et la
              14e semaine après l’accouchement si la femme en exprime le besoin
              ou si le professionnel de santé identifie des signes évocateurs de
              dépression.
            </p>

            <p className="subTitle">
              <strong>4. Difficultés dans la quantification</strong>
              <br />
              <br />
              Il existe donc des outils de dépistage spécifiques afin de repérer
              et de traiter la DPP. A grande échelle, la prévalence de la DPP
              nous est donnée par l’ENP depuis 2021. Cependant, il convient de
              se poser la question de comment est-ce que la DPP est quantifiée
              en dehors des grandes enquêtes. Ainsi, il convient de se demander
              si les structures hospitalières données concernant la
              <br />
              Il est à noter une différence de cotation entre secteurs
              hospitalier et libéral. En effet, dans les établissements de
              santé, le codage se fait via la CIM-10 (Classification
              Internationale des Maladies, 10e révision) dans le cadre du PMSI
              (Programme de Médicalisation des Systèmes d'Information). Le PMSI
              est un dispositif mis en place en France pour décrire de manière
              standardisée l'activité médicale des établissements de santé. Il
              repose sur la collecte et l'analyse de données
              médico-administratives afin de mieux comprendre et financer les
              soins hospitaliers<sup>2</sup>. En 2005, le PMSI devient l'outil
              principal pour la mise en œuvre de la T2A, un système de
              financement des hôpitaux basé sur leur activité réelle, remplaçant
              progressivement le financement par dotation globale. En résumé,
              les données issues du PMSI permettent de financer les
              établissements de santé selon leur activité réelle, de planifier
              l’offre de soins à différentes échelles, de mener des études
              médico-économiques et épidémiologiques, et de piloter les
              établissements grâce à des indicateurs d’activité et de
              performance.
              <br />
              En libéral, les actes sont facturés via la NGAP (Nomenclature
              Générale des Actes Professionnels), sans cotation directe du
              diagnostic.
              <br />
              L'EPNP bénéficie d'une cotation distincte, permettant à
              l'assurance maladie et aux ARS d'évaluer le nombre d'EPNP réalisés
              ainsi que leurs auteurs (type de professionnel et lieu
              d’exercice). Selon une enquête menée en Occitanie, seulement 7 %
              des femmes ont bénéficié de l'EPNP en 2022. Cette enquête a été
              réalisée du 29 août au 20 septembre 2023. Bien que ces chiffres
              concernent spécifiquement la région Occitanie, ils reflètent une
              tendance nationale. Le taux de réalisation de l'EPNP était de 10 %
              en 2023, avec un objectif de 60 % fixé par la DGOS d'ici 2026. Ces
              données suggèrent que, malgré l'obligation légale, un nombre
              relativement faible d'entretiens postnatals précoces sont réalisés
              chaque année en France. Les chiffres varient selon les régions,
              avec des taux plus élevés dans certaines zones. La question du
              type de professionnel qui est impliqué dans la réalisation de
              l’EPNP doit également être posé car, en fonction de la démographie
              médicale des territoires, il existe probablement une disparité des
              pratiques. Selon l’enquête réalisée par le Réseau de Périnatalité
              Occitanie, l’EPNP n’est pas systématiquement proposé et réalisé
              par méconnaissance des professionnels, manque de temps de
              consultations et ou de coordination, manque de connaissance de
              relais possibles. Du côté des femmes, la prise en charge à 70%
              nécessitant une avance des frais est également un frein majeur à
              sa mise en œuvre.
            </p>
            <p className="note">
              <sup>1</sup> <strong>Entretien Prénatal Précoce (EPP)</strong> :
              est une consultation réalisée au début de la grossesse (4ᵉ mois)
              pour informer la future maman, évaluer sa santé et répondre à ses
              questions, favorisant un suivi personnalisé et préventif. Malgré
              son instauration en France en 2004 et son caractère obligatoire
              depuis mai 2020, l'EPP est encore peu réalisé. Selon l'Enquête
              Nationale Périnatale de 2021, seulement 36,5 % des femmes en
              métropole ont déclaré en avoir bénéficié, avec des variations
              régionales notables. Cette situation peut s'expliquer par un
              manque d'information auprès des femmes enceintes et une
              méconnaissance par certains professionnels de santé de son intérêt
              et de ses enjeux.
              <p className="note">
                <sup>2</sup>{" "}
                <a
                  href="https://sante.gouv.fr/professionnels/gerer-un-etablissement-de-sante-medico-social/financement/financement-des-etablissements-de-sante-10795/financement-des-etablissements-de-sante-glossaire/article/programme-de-medicalisation-des-systemes-d-information-pmsi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consulté le 14 avril 2025
                </a>
              </p>
              <p className="note">
                <sup>3</sup>{" "}
                <a
                  href="https://www.atih.sante.fr/indicateurs-de-production-medico-economiques"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consulté le 14 avril 2025
                </a>
              </p>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
