    import styles from "./About.module.css";
    import Aimar2 from "./Img/Aimar2.webp";
    import { useSelector } from 'react-redux';

    export default function About() {

        const idiom = useSelector((state) => state.idioms);

        let h2 = "";
        idiom === "ES" ? (h2 =
            <h2>
                HOLA
            </h2>) : (h2 =
                <h2>
                    HELLO
                </h2>)

        let p1 = "";
        idiom === "ES" ? (p1 =
            <p>
                Como <b>Full-Stack Developer</b> tengo la capacidad de convertir conceptos en código de manera efectiva y me motiva resolver obstáculos, desafíos y dilemas en cada proyecto. Mi dedicación y rigor me convierten en una opción confiable para cualquier tarea.
            </p>) : (p1 =
                <p>
                    As a <b>Full-Stack Developer,</b> I have the ability to convert concepts into code effectively, and I am motivated by solving obstacles, challenges and dilemmas in each project. My dedication and rigor make me a reliable choice for any task.
                </p>);

        let p2 = "";
        idiom === "ES" ? (p2 =
            <p>
                Al emplear <b>React/Next</b> en el lado del cliente y <b>Node.js</b> junto con <b>Express</b> en el lado del servidor, además de administrar bases de datos <b>SQL</b> y <b>NoSQL</b> en el backend, tengo la capacidad de diseñar sitios web que no solo son estéticamente agradables y <b>profesionales</b>, pero también altamente interactivo y funcional.
            </p>) : (p2 =
                <p>
                    By employing <b>React/Next</b> on the client side and <b>Node.js</b> along with <b>Express</b> on the server side, as well as managing both <b>SQL</b> and <b>NoSQL </b>databases on the Backend, I have the ability to design websites that are not only aesthetically pleasing and <b>professional</b>, but also highly interactive and functional.
                </p>);

        return (
            <div className={styles.containerP} id="about">
                <div className={styles.containerS}>
                    <div className={styles.imgAimar2} data-aos="fade-up-right">
                        <img className={styles.imgAimar} src={Aimar2} alt="Aimar..." draggable="false"/>
                    </div>
                    <div className={styles.text} data-aos="fade-down">
                        <>
                            <h2>{h2}</h2>
                            <p>
                                {p1}
                            </p>
                            <p>
                                {p2}
                            </p>
                        </>
                    </div>
                </div>
            </div>
        )
    }