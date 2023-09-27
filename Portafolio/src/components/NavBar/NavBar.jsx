import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { changeIdioms } from "../../Redux/action";
import { useDispatch, useSelector } from 'react-redux';
import LOGO from "./Icons/LOGO AIMAR.svg";
import MENU from "./Icons/MENU.svg";
import styles from "./NavBar.module.css";

export default function NavBar() {

    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const idiom = useSelector((state) => state.idioms); 
    const dispatch = useDispatch();
    
    useEffect(() => {
        const handleRealize = () => {
            //Cuando el tamaño de la pantalla es menor que 768 se cambia el estado a TRUE
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleRealize);
        handleRealize();

        return () => {
            window.removeEventListener("resize", handleRealize);
        };
    }, []);

    const handleChangeIdiom = () => {
        dispatch(changeIdioms(idiom));
    }

    let buttonAbout = "";
    idiom === "ES" ? (buttonAbout = "SOBRE MÍ") : (buttonAbout = "ABOUT");

    let buttonProjects = "";
    idiom === "ES" ? (buttonProjects = "PROYECTOS") : (buttonProjects = "PROJECTS");

    let buttonContact = "";
    idiom === "ES" ? (buttonContact = "CONTÁCTAME!") : (buttonContact = "CONTACT ME!");

    return (
        <div className={styles.navbar}>
            <nav>
                <div className={styles.container}>
                    <div>
                        <img className={styles.logo} src={LOGO} alt="Logo..." />
                    </div>
                    {
                        isMobile ? (
                            //Muestra el boton de Menú para teléfonos mobiles
                            <>
                                <button className={styles.menu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    <img className={styles.imgMenu} src={MENU} alt="Menu..." />
                                </button>
                            </>
                        ) : (
                            //Muestra los botones cuando la pantalla es más grande
                            <div className={styles.btn}>
                                <div className={styles.btnNavBar}>
                                    <Link
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>
                                        <button>HOME</button>
                                    </Link>
                                    <Link
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>
                                        <button>{buttonAbout}</button>
                                    </Link>
                                    <Link
                                        activeClass="active"
                                        to="works"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>
                                        <button>{buttonProjects}</button>
                                    </Link>
                                    <Link
                                        activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>
                                        <button>{buttonContact}</button>
                                    </Link>
                                </div>
                                <div className={styles.changeId} onClick={handleChangeIdiom}>
                                    <button>{idiom === "ES" ? "ES" : "EN"}</button>
                                </div>
                            </div>
                        )}
                </div>
            </nav>
            <div>
                {
                    //Cuando es mobile se despliega los botones del NavBar
                    isMobile && (
                        <div className={`${styles.btn} ${isMenuOpen ? styles.active : styles.notActive}`}>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>HOME</button>
                            </Link>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{buttonAbout}</button>
                            </Link>
                            <Link
                                activeClass="active"
                                to="works"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{buttonProjects}</button>
                            </Link>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{buttonContact}</button>
                            </Link>
                            <button onClick={handleChangeIdiom}>{idiom === "ES" ? "ES" : "EN"}</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}