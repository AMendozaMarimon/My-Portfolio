import { useEffect, useState } from "react";
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
                                <button>HOME</button>
                                <button>ABOUT</button>
                                <button>PROJECTS</button>
                                <button>CONTACT ME!</button>
                            </div>
                        )}
                </div>
            </nav>
            <div>
                {
                    isMobile && (
                        <div className={`${styles.btn} ${isMenuOpen ? styles.active : styles.notActive}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <button>HOME</button>
                            <button>ABOUT</button>
                            <button>PROJECTS</button>
                            <button>CONTACT ME!</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}