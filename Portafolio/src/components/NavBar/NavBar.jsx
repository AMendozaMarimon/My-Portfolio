import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LOGO from "./Icons/LOGO AIMAR.svg";
import MENU from "./Icons/MENU.svg";
import styles from "./NavBar.module.css";

export default function NavBar() {

    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                                    <button>ABOUT</button>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="works"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <button>PROJECTS</button>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <button>CONTACT ME!</button>
                                </Link>
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
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>ABOUT</button>
                            </Link>
                            <Link
                                activeClass="active"
                                to="works"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>PROJECTS</button>
                            </Link>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>CONTACT ME!</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}