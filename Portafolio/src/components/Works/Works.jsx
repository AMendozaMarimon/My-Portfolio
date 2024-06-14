import RaM from "./Img/RaM.webp";
import food from "./Img/food..webp";
import VehiBuy from "./Img/VehiBuy.webp";
import PortFolio from "./Img/PortFolio.webp";
import Chic from "./Img/Chic.webp";
import Js from "./Icons/JS.svg";
import HTML from "./Icons/HTML.svg";
import CSS from "./Icons/CSS.svg";
import React from "./Icons/REACT.svg";
import Redux from "./Icons/REDUX.svg";
import NodeJs from "./Icons/NODEJS.svg";
import Express from "./Icons/EXPRESS.svg";
import Postgres from "./Icons/POSTGRES.svg";
import Git from "./Icons/GIT.svg";
import Github from "./Icons/GITHUB.svg";
import NewP from "./Img/NewP.webp";
import { useSelector } from 'react-redux';
import styles from "./Works.module.css";

export default function Works() {

    const idiom = useSelector((state) => state.idioms);

    let h2 = "";
    idiom === "ES" ? (h2 =
        <h2>
            Proyectos
        </h2>) : (h2 =
            <h2>
                Projects
            </h2>);

    let pRaM = "";
    idiom === "ES" ? (pRaM =
        <p>
            Mi <b>primer proyecto</b> ❤️, una página donde podemos solicitar todos los personajes de la serie con su información.
        </p>) : (pRaM =
            <p>
                My <b>first project</b> ❤️, a page where we can request all the characters in the series with their information.
            </p>);

    let pFood = "";
    idiom === "ES" ? (pFood =
        <p>
            ¿Se te antoja algo pero no sabes cómo prepararlo? <b>food.</b> es la pagina correcta!
            Puedes buscar 🔍 las recetas que quieras o subir tus propias recetas para ayudar a otras personas.
        </p>) : (pFood =
            <p>
                Are you craving something but don't know how to prepare it? <b>food.</b> is the right page! <br />You can search 🔍 for the recipes you want or upload your own recipes to help other people.
            </p>)

    let pVehiBuy = "";
    idiom === "ES" ? (pVehiBuy =
        <p>
            Si quieres comprar tu primer coche de lujo o vender el tuyo, no esperes más, <b>Vehibuy</b> es un <b>e-commerce</b> donde todo te lo pone fácil.
        </p>) : (pVehiBuy =
            <p>
                If you want to buy your first luxury car or sell yours, don't wait any longer, <b>Vehibuy    </b> is an <b>e-commerce</b> where everything is made easy for you.
            </p>);

    let newPortafolio = "";
    idiom === "ES" ? (newPortafolio =
        <h2>
            Nuevo Portafolio
        </h2>) : (newPortafolio =
            <h2>
                New Portfolio
            </h2>);       
            
    let pNewPortafolio = "";
    idiom === "ES" ? (pNewPortafolio =
        <p>
            Esta es la nueva <b>página</b> que he creado, te invito a mirar. <br /> ¡gracias por tu tiempo!
        </p>) : (pNewPortafolio =
            <p>
                This is the new <b>page</b> I have created, invite you to watch. <br /> ¡thank you for your time!
            </p>);

    let pPortFolio = "";
    idiom === "ES" ? (pPortFolio =
        <p>
            Este <b>portafolio</b> es muy importante para mi ❤️, es lo que demuestra mi progreso poco a poco y por primera vez haciendo mi página <b>responsive</b>.
        </p>) : (pPortFolio =
            <p>
                This <b>portfolio</b> is very important to me ❤️, it is what demonstrates my progress little by little and for the first time making my page <b>responsive</b>.
            </p>);

    let pChic = "";
    idiom === "ES" ? (pChic =
        <p>
            Próximamente... ❤️
        </p>) : (pChic =
            <p>
                Coming Soon... ❤️
            </p>);

    return (
        <div className={styles.containerP} id="works">
            <div className={styles.containerS}>
                <div className={styles.titles} data-aos="zoom-in">
                    <h2>{h2}</h2>
                </div>
                <div className={styles.containerCards}>
                    <div className={styles.cards} data-aos="fade-up">
                        <div className={styles.infoCards}>
                            <div className={styles.info}>
                                <h2>{newPortafolio}</h2>
                                <p>{pNewPortafolio}</p>
                            </div>
                        </div>
                        <div className={styles.containerImg}>
                            <a href="https://aimar-m-frontend.netlify.app/" target="_blanck" draggable="false">
                                <img className={styles.imgWorks} src={NewP} alt="RickAndMortyPI..." draggable="false"/>
                            </a>
                            <a href="https://github.com/AMendozaMarimon/Portafolio" target="_blanck" draggable="false">
                                <img loading="lazy" className={styles.githubP} src={Github} alt="Github..." draggable="false"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.cards} data-aos="fade-up">
                        <div className={styles.infoCards}>
                            <div className={styles.info}>
                                <h2>Rick and Morty</h2>
                                <p>{pRaM}</p>
                            </div>
                            <div className={styles.imgTecn}>
                                <img loading="lazy" src={Js} alt="Javascript..." title="Javascript" draggable="false"/>
                                <img loading="lazy" src={CSS} alt="CSS..." title="CSS" draggable="false"/>
                                <img loading="lazy" src={React} alt="React..." title="React" draggable="false"/>
                                <img loading="lazy" src={NodeJs} alt="NodeJs..." title="NodeJs" draggable="false"/>
                            </div>
                        </div>
                        <div className={styles.containerImg}>
                            <img className={styles.imgWorks} src={RaM} alt="RickAndMortyPI..." draggable="false"/>
                            <a href="https://github.com/AMendozaMarimon/RickandMortyAPI_FRONT" target="_blanck" draggable="false">
                                <img loading="lazy" className={styles.githubP} src={Github} alt="Github..." draggable="false"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.cards} data-aos="fade-up">
                        <div className={styles.infoCards}>
                            <div className={styles.info}>
                                <h2>food.</h2>
                                <p>{pFood}</p>
                            </div>
                            <div className={styles.imgTecn}>
                                <img loading="lazy" src={Js} alt="Javascript..." title="Javascript" draggable="false"/>
                                <img loading="lazy" src={CSS} alt="CSS..." title="CSS" draggable="false"/>
                                <img loading="lazy" src={React} alt="React..." title="React" draggable="false"/>
                                <img loading="lazy" src={Redux} alt="Redux..." title="Redux" draggable="false"/>
                                <img loading="lazy" src={NodeJs} alt="NodeJs..." title="NodeJs" draggable="false"/>
                                <img loading="lazy" src={Express} alt="Express..." title="Express" draggable="false"/>
                                <img loading="lazy" src={Postgres} alt="Postgres..." title="Postgres" draggable="false"/>
                            </div>
                        </div>
                        <div className={styles.containerImg}>
                            <img className={styles.imgWorks} src={food} alt="food..." draggable="false"/>
                            <a href="https://github.com/AMendozaMarimon/API_food_Client/tree/main/Client" target="_blanck" draggable="false">   
                                <img loading="lazy" className={styles.githubP} src={Github} alt="Github..." draggable="false"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.cards} data-aos="fade-up">
                        <div className={styles.infoCards}>
                            <div className={styles.info}>
                                <h2>VehiBuy</h2>
                                <p>{pVehiBuy}</p>
                            </div>
                            <div className={styles.imgTecn}>
                                <img loading="lazy" src={Js} alt="Javascript..." title="Javascript" draggable="false"/>
                                <img loading="lazy" src={CSS} alt="CSS..." title="CSS" draggable="false"/>
                                <img loading="lazy" src={React} alt="React..." title="React" draggable="false"/>
                                <img loading="lazy" src={Redux} alt="Redux..." title="Redux" draggable="false"/>
                                <img loading="lazy" src={NodeJs} alt="NodeJs..." title="NodeJs" draggable="false"/>
                                <img loading="lazy" src={Express} alt="Express..." title="Express" draggable="false"/>
                                <img loading="lazy" src={Postgres} alt="Postgres..." title="Postgres" draggable="false"/>
                                <img loading="lazy" src={Git} alt="Git..." title="Git" draggable="false"/>
                            </div>
                        </div>

                        <div className={styles.containerImg}>
                            <a href="https://vehibuy-rho.vercel.app/home" target="_blanck" draggable="false">
                                <img loading="lazy" className={styles.imgWorks} src={VehiBuy} alt="Vehibuy..." draggable="false"/>
                            </a>
                            <a href="https://github.com/GeroPazPapa1/Proyecto-Final-Final" target="_blanck" draggable="false">
                                <img loading="lazy" className={styles.githubP} src={Github} alt="Github..." draggable="false"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.cards} data-aos="fade-up">
                        <div className={styles.infoCards}>
                            <div className={styles.info}>
                                <h2>ChicCouture</h2>
                                <p>{pChic}</p>
                            </div>
                            <div className={styles.imgTecn}>
                                {/* <img src={Js} alt="Javascript..." title="Javascript" />
                                <img src={CSS} alt="CSS..." title="CSS" />
                                <img src={React} alt="React..." title="React" />
                                <img src={Redux} alt="Redux..." title="Redux" />
                                <img src={NodeJs} alt="NodeJs..." title="NodeJs" />
                                <img src={Express} alt="Express..." title="Express" />
                                <img src={Postgres} alt="Postgres..." title="Postgres" />
                                <img src={Git} alt="Git..." title="Git" /> */}
                            </div>
                        </div>

                        <div className={styles.containerImg}>
                            <img className={styles.imgWorks} src={Chic} alt="chicCouture..." draggable="false"/>
                            <a href="https://github.com/AMendozaMarimon/ChicCouture_FRONT" target="_blanck" draggable="false">
                                <img loading="lazy" className={styles.githubP} src={Github} alt="Github..." draggable="false"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.cards} data-aos="fade-up">
                        <div className={styles.infoCards}>
                            <div className={styles.info}>
                                <h2>PortFolio</h2>
                                <p>{pPortFolio}</p>
                            </div>
                            <div className={styles.imgTecn}>
                                <img loading="lazy" src={Js} alt="Javascript..." title="Javascript" draggable="false"/>
                                <img loading="lazy" src={HTML} alt="HTML..." title="HTML" draggable="false"/>
                                <img loading="lazy" src={CSS} alt="CSS..." title="CSS" draggable="false"/>
                                <img loading="lazy" src={React} alt="React..." title="React" draggable="false"/>
                                <img loading="lazy" src={Redux} alt="Redux..." title="Redux" draggable="false"/>
                            </div>
                        </div>
                        <div className={styles.containerImg}>
                            <img loading="lazy" className={styles.imgWorks} src={PortFolio} alt="PortFolio..." draggable="false"/>
                            <a href="https://github.com/AMendozaMarimon/My-Portfolio" target="_blanck" draggable="false">
                                <img loading="lazy" className={styles.githubP} src={Github} alt="Github..." draggable="false"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}