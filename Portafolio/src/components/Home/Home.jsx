import Colombia from "./Icons/colombia.png";
import Aimar from "./Icons/Aimar.svg";
import Github from "./Icons/GITHUB.svg";
import LinkedIn from "./Icons/LINKEDIN.svg";
import WhatsApp from "./Icons/WHATSAPP.svg";
import Js from "./Icons/JS.svg";
import Ts from "./Icons/TYPESCRIPT.png";
import HTML from "./Icons/HTML.svg";
import CSS from "./Icons/CSS.svg";
import React from "./Icons/REACT.svg";
import Redux from "./Icons/REDUX.svg";
import NodeJs from "./Icons/NODEJS.svg";
import Express from "./Icons/EXPRESS.svg";
import Postgres from "./Icons/POSTGRES.svg";
import Git from "./Icons/GIT.svg";
import { useSelector } from 'react-redux';
import styles from "./Home.module.css";

export default function Home() {

    const idiom = useSelector((state) => state.idioms);

    let p = "";
    idiom === "ES" ? (p =
        <p>Hola! soy <b>Aimar Mendoza. </b>
            <img className={styles.country} src={Colombia} alt="Colombia..." />
        </p>) : (p =
            <p>Hi! i'm <b>Aimar Mendoza. </b>
                <img className={styles.country} src={Colombia} alt="Colombia..." />
            </p>);

    let p2 = "";
    idiom === "ES" ? (p2 =
        <p>Alguien apasionado por el <b>código</b>.</p>) : (p2 =
            <p>Someone passionate about <b>code</b>.</p>
    )

    let p3 = "";
    idiom === "ES" ? (p3 =
        <p>
            <b>Diseñador Gráfico </b>enamorado de los pequeños detalles.
        </p>) : (p3 =
            <p>
                <b>Graphic Designer</b> in love with small details.
            </p>)

    let h3 = "";
    idiom === "ES" ? (h3 =
        <h3>
            Mis Habilidades
        </h3>) : (h3 =
            <h3>
                My Skills
            </h3>)

    return (
        <div className={styles.containerP} id="home">
            <div className={styles.containerS}>
                <div className={styles.sideLeft}>
                    <>
                        <h1>FULL STACK <br />WEB DEVELOPER </h1>
                        <p>{p}</p>
                        <p>{p2}</p>
                        <p>{p3}</p>
                        <div className={styles.divImg}>
                            <a href="https://github.com/AMendozaMarimon" target="_blanck" rel="noopener noreferrer" draggable="false">
                                <img loading="lazy" src={Github} alt="Github..." draggable="false" title="Github"/>
                            </a>
                            <a href="https://www.linkedin.com/in/aimar-mendoza/" target="_blanck" rel="noopener noreferrer" draggable="false">
                                <img loading="lazy" src={LinkedIn} alt="LinkedIn..." draggable="false" title="LinkedIn"/>
                            </a>
                            <a href="https://walink.co/c99d31" target="_blanck" rel="noopener noreferrer" draggable="false">
                                <img loading="lazy" src={WhatsApp} alt="WhatsApp..." draggable="false" title="WhatsApp"/>
                            </a>
                        </div>
                    </>
                </div>
                <div>
                    <img loading="lazy" className={styles.Aimar} src={Aimar} alt="Aimar..." draggable="false"/>
                </div>
            </div>
            <div className={styles.containerT}>
                <div className={styles.skills}>
                    <h3>{h3}</h3>
                </div>
                <div className={styles.tecn}>
                    <img loading="lazy" src={Js} alt="Javascript..." title="Javascript" draggable="false"/>
                    <img loading="lazy" src={Ts} alt="Typescript..." title="Tpescript" draggable="false"/>
                    <img loading="lazy" src={HTML} alt="HTML..." title="HTML" draggable="false"/>
                    <img loading="lazy" src={CSS} alt="CSS..." title="CSS" draggable="false"/>
                    <img loading="lazy" src={React} alt="React..." title="React" draggable="false"/>
                    <img loading="lazy" src={Redux} alt="Redux..." title="Redux" draggable="false"/>
                    <img loading="lazy" src={NodeJs} alt="NodeJs..." title="NodeJs" draggable="false"/>
                    <img loading="lazy" src={Express} alt="Express..." title="ExpressJs" draggable="false"/>
                    <img loading="lazy" src={Postgres} alt="Postgres..." title="Postgres" draggable="false"/>
                    <img loading="lazy" src={Git} alt="Git..." title="Git" draggable="false"/>
                </div>
            </div>
        </div>
    )
}
