import Colombia from "./Icons/colombia.png";
import Aimar from "./Icons/AIMARP.png";
import Github from "./Icons/GITHUB.svg";
import LinkedIn from "./Icons/LINKEDIN.svg";
import WhatsApp from "./Icons/WHATSAPP.svg";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.containerP}>
            <div className={styles.containerS}>
                <div className={styles.sideLeft}>
                    <>
                        <h1>FULL STACK <br />WEB <br />DEVELOPER </h1>
                        <p>Hi! i´m <b>Aimar Mendoza. <img className={styles.country} src={Colombia} alt="Colombia..." /></b></p>
                        <p>Someone passionate about <b>code.</b></p>
                        <p><b>Graphic Designer</b> in love with small details.</p>
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
        </div>
    )
}