import styles from "./About.module.css";
import Aimar2 from "./Img/WHOIAM.webp";

export default function About() {
    return (
        <div className={styles.containerP}>
            <div className={styles.containerS}>
                <div className={styles.imgAimar2}>
                    <img className={styles.imgAimar} src={Aimar2} alt="Aimar..." />
                </div>
                <div className={styles.text}>
                    <>
                        <h2>HELLO</h2>
                        <p>
                            As a <b>Full-Stack developer,</b> I have the ability to convert concepts into code effectively, and I am motivated by solving obstacles, challenges and dilemmas in each project. My dedication and rigor make me a reliable choice for any task.
                        </p>
                        <p>
                            By employing <b>React/Next</b> on the client side and <b>Node.js</b> along with <b>Express</b> on the server side, as well as managing both <b>SQL</b> and <b>NoSQL </b>databases on the Backend, I have the ability to design websites that are not only aesthetically pleasing and <b>professional</b>, but also highly interactive and functional.
                        </p>
                    </>
                </div>
            </div>
        </div>
    )
}