import RaM from "./Img/RaM.webp";
import food from "./Img/food..webp";
import VehiBuy from "./Img/VehiBuy.webp";
import PortFolio from "./Img/PortFolio.webp";
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
import styles from "./Works.module.css";

export default function Works() {
    return (
        <div className={styles.containerP}>
            <div className={styles.containerS}>
                <div className={styles.titles}>
                    <h2>Projects</h2>
                </div>
                <div className={styles.containerCards}>
                    <div className={styles.cards}>
                        <div className={styles.infoCards}>
                            <div className={styles.info}>
                                <h2>Rick and Morty</h2>
                                <p>My <b>first project</b> ❤️, a page where we can request all the characters in the series with their information.</p>
                            </div>
                            <div className={styles.imgTecn}>
                                <img src={Js} alt="Javascript..." title="Javascript" />
                                <img src={CSS} alt="CSS..." title="CSS" />
                                <img src={React} alt="React..." title="React" />
                                <img src={NodeJs} alt="NodeJs..." title="NodeJs" />
                            </div>
                        </div>
                        <div className={styles.containerImg}>
                            <img className={styles.imgWorks} src={RaM} alt="RickAndMortyPI..." />
                            <a href="https://github.com/AMendozaMarimon/RickandMortyAPI_FRONT" target="_blanck">
                                <img className={styles.githubP} src={Github} alt="Github..." />
                            </a>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.infoCards}>
                            <div className={styles.info}>
                                <h2>food.</h2>
                                <p>Are you craving something but don't know how to prepare it? <b>food.</b> is the right page! <br />You can search 🔍 for the recipes you want or upload your own recipes to help other people.</p>
                            </div>
                            <div className={styles.imgTecn}>
                                <img src={Js} alt="Javascript..." title="Javascript" />
                                <img src={CSS} alt="CSS..." title="CSS" />
                                <img src={React} alt="React..." title="React" />
                                <img src={Redux} alt="Redux..." title="Redux" />
                                <img src={NodeJs} alt="NodeJs..." title="NodeJs" />
                                <img src={Express} alt="Express..." title="Express" />
                                <img src={Postgres} alt="Postgres..." title="Postgres" />
                            </div>
                        </div>
                        <div className={styles.containerImg}>
                            <img className={styles.imgWorks} src={food} alt="food..." />
                            <a href="https://github.com/AMendozaMarimon/API_food_Client/tree/main/Client" target="_blanck">
                                <img className={styles.githubP} src={Github} alt="Github..." />
                            </a>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.infoCards}>
                            <div className={styles.info}>
                                <h2>VehiBuy</h2>
                                <p>If you want to buy your first luxury car or sell yours, don't wait any longer, <b>Vehibuy    </b> is an <b>e-commerce</b> where everything is made easy for you.</p>
                            </div>
                            <div className={styles.imgTecn}>
                                <img src={Js} alt="Javascript..." title="Javascript" />
                                <img src={CSS} alt="CSS..." title="CSS" />
                                <img src={React} alt="React..." title="React" />
                                <img src={Redux} alt="Redux..." title="Redux" />
                                <img src={NodeJs} alt="NodeJs..." title="NodeJs" />
                                <img src={Express} alt="Express..." title="Express" />
                                <img src={Postgres} alt="Postgres..." title="Postgres" />
                                <img src={Git} alt="Git..." title="Git" />
                            </div>
                        </div>
                        
                        <div className={styles.containerImg}>
                            <a href="https://vehibuy-rho.vercel.app/home" target="_blanck">
                                <img className={styles.imgWorks} src={VehiBuy} alt="Vehibuy..." />
                            </a>
                            <a href="https://github.com/GeroPazPapa1/Proyecto-Final-Final" target="_blanck">
                                <img className={styles.githubP} src={Github} alt="Github..." />
                            </a>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.infoCards}>
                            <div className={styles.info}>
                                <h2>PortFolio</h2>
                                <p>This <b>portfolio</b> is very important to me ❤️, it is what demonstrates my progress little by little and for the first time making my page <b>responsive</b>.</p>
                            </div>
                            <div className={styles.imgTecn}>
                                <img src={Js} alt="Javascript..." title="Javascript" />
                                <img src={HTML} alt="HTML..." title="HTML" />
                                <img src={CSS} alt="CSS..." title="CSS" />
                                <img src={React} alt="React..." title="React" />
                            </div>
                        </div>
                        <div className={styles.containerImg}>
                            <img className={styles.imgWorks} src={PortFolio} alt="PortFolio..." />
                            <a href="https://github.com/AMendozaMarimon/My-Portfolio" target="_blanck">
                                <img className={styles.githubP} src={Github} alt="Github..." />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}