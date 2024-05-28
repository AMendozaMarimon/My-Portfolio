import LinkedIn from "./Icons/LINKEDIN.svg";
import Github from "./Icons/GITHUB.svg";
import WhatsApp from "./Icons/WHATSAPP.svg";
import Correo from "./Icons/CORREO.png";
import Llamada from "./Icons/LLAMADA.png";
import Cat from "./Icons/GATITO.png";
import { useSelector } from 'react-redux';
import styles from "./Contact.module.css";

export default function Contact() {

    const idiom = useSelector((state) => state.idioms);

    let h2 = "";
    idiom === "ES" ? (h2 =
        <h2>
            Contáctame!
        </h2>
    ) : (h2 =
        <h2>
            Contact Me!
        </h2>);

    let p1 = "";
    idiom === "ES" ? (p1 =
        <p>
            Si estás interesado en contactarme, ¡llámame o escríbeme! Les dejo mis redes.
        </p>) : (p1 =
            <p>
                If you are interested in contacting me, call or write to me! I leave you my networks.
            </p>);

    let p2 = "";
    idiom === "ES" ? (p2 =
        <p>
            <b>Gracias</b> por su tiempo ❤️
        </p>) : (p2 =
            <p>
                <b>Thanks</b> for your time ❤️
            </p>);

    return (
        <div className={styles.containerP} id="contact">
            <div className={styles.containerS} data-aos="fade-up">
                <div className={styles.left}>
                    <div className={styles.text}>
                        <h2>{h2}</h2>
                        <p>{p1}</p>
                    </div>
                    <div>
                        <img loading="lazy" src={Cat} alt="Cat..." />
                    </div>
                    <div>
                        <p>{p2}</p>
                    </div>
                </div>
                <div className={styles.rigth}>
                    <>
                        <a href="https://www.linkedin.com/in/aimar-mendoza/" target="_blanck">
                            <p><img loading="lazy" src={LinkedIn} alt="LinkedIn..." /> Aimar Mendoza</p>
                        </a>
                        <a href="https://github.com/AMendozaMarimon" target="_blanck">
                            <p><img loading="lazy" src={Github} alt="Github..." /> AMendozaMarimon</p>
                        </a>
                        <a href="https://walink.co/c99d31" target="_blanck">
                            <p><img loading="lazy" src={Llamada} alt="Llamada..." /> <img src={WhatsApp} alt="WhatsApp..." />+57 3217917318</p>
                        </a>
                        <a href="mailto:mendozzaaymar02@gmail.com" target="_blanck">
                            <p><img loading="lazy" src={Correo} alt="Correo..." /> mendozzaaymar02@gmail.com</p>
                        </a>
                    </>
                </div>
            </div>
        </div>
    )
}