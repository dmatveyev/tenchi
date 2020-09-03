import * as React from "react";
import styles from "./NabBar.module.css";
import {NavLink} from "react-router-dom";


const NavBar = () => {

        return (
            <div>
                <nav className={styles.navbar}>
                    <div className={styles.item}>
                        <NavLink exact to="/" activeClassName={styles.activeLink}>Главная</NavLink>
                    </div>
                    <div className={styles.item}>
                        <NavLink exact to="/contacts" activeClassName={styles.activeLink}>Контакты</NavLink>
                    </div>
                    <div className={styles.item}>
                        <NavLink exact to="/news" activeClassName={styles.activeLink}>Новости</NavLink>
                    </div>
                </nav>
            </div>

        )
}
export default NavBar
