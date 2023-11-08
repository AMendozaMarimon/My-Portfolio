import Colombia from "./Icons/colombia.png";
import Aimar from "./Icons/Aimar.svg";
import Github from "./Icons/GITHUB.svg";
import LinkedIn from "./Icons/LINKEDIN.svg";
import WhatsApp from "./Icons/WHATSAPP.svg";
import Js from "./Icons/JS.svg";
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
                            <a href="https://github.com/AMendozaMarimon" target="_blanck" rel="noopener noreferrer">
                                <img src={Github} alt="Github..." />
                            </a>
                            <a href="https://www.linkedin.com/in/aimar-mendoza/" target="_blanck" rel="noopener noreferrer">
                                <img src={LinkedIn} alt="LinkedIn..." />
                            </a>
                            <a href="https://walink.co/c99d31" target="_blanck" rel="noopener noreferrer">
                                <img src={WhatsApp} alt="WhatsApp..." />
                            </a>
                        </div>
                    </>
                </div>
                <div>
                    <img className={styles.Aimar} src={Aimar} alt="Aimar..." />
                </div>
            </div>
            <div className={styles.containerT}>
                <div className={styles.skills}>
                    <h3>{h3}</h3>
                </div>
                <div className={styles.tecn}>
                    <img src={Js} alt="Javascript..." title="Javascript" />
                    <img src={HTML} alt="Javascript..." title="HTML" />
                    <img src={CSS} alt="Javascript..." title="CSS" />
                    <img src={React} alt="React..." title="React" />
                    <img src={Redux} alt="Redux..." title="Redux" />
                    <img src={NodeJs} alt="NodeJs..." title="NodeJs" />
                    <img src={Express} alt="Express..." title="ExpressJs" />
                    <img src={Postgres} alt="Postgres..." title="Postgres" />
                    <img src={Git} alt="Git..." title="Git" />
                </div>
            </div>
        </div>
    )
}
