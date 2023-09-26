import LinkedIn from "./Icons/LINKEDIN.svg";
import Github from "./Icons/GITHUB.svg";
import WhatsApp from "./Icons/WHATSAPP.svg";
import Correo from "./Icons/CORREO.png";
import Llamada from "./Icons/LLAMADA.png";
import Cat from "./Icons/GATITO.png";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <div className={styles.containerP}>
            <div className={styles.containerS}>
                <div className={styles.left}>
                    <div className={styles.text}>
                        <h2>Contact Me!</h2>
                        <p>If you are interested in contacting me, call or write to me! I leave you my networks.</p>
                    </div>
                    <div>
                        <img src={Cat} alt="Cat..." />
                    </div>
                    <div>
                        <p><b>Thanks </b>  for your time ❤️</p>
                    </div>
                </div>
                <div className={styles.rigth}>
                    <>
                        <a href="https://www.linkedin.com/in/aimar-mendoza/" target="_blanck">
                            <p><img src={LinkedIn} alt="LinkedIn..." /> Aimar Mendoza</p>
                        </a>
                        <a href="https://github.com/AMendozaMarimon" target="_blanck">
                            <p><img src={Github} alt="Github..." /> AMendozaMarimon</p>
                        </a>
                        <a href="https://walink.co/c99d31" target="_blanck">
                            <p><img src={Llamada} alt="Llamada..." /> <img src={WhatsApp} alt="WhatsApp..." />+54 321 7917318</p>
                        </a>
                        <a href="mailto:mendozzaaymar02@gmail.com" target="_blanck">
                            <p><img src={Correo} alt="Correo..." /> mendozzaaymar02@gmail.com</p>
                        </a>
                    </>
                </div>
            </div>
        </div>
    )
}