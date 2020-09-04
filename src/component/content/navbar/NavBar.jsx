import * as React from "react";
import styles from "./NabBar.module.css";
import {NavLink} from "react-router-dom";


const NavBar = () => {

        return (
            <div className={styles.rootdiv}>
                <nav className={styles.navbar}>
                    <div className={styles.item}>
                        <NavLink exact to=" /" activeClassName={styles.activeLink}>Главная</NavLink>
                    </div>
                    <div className={styles.item}>
                        <NavLink exact to="/news" activeClassName={styles.activeLink}>Новости</NavLink>
                    </div>
                    <div className={styles.item}>
                        <NavLink exact to="/schedule" activeClassName={styles.activeLink}>Расписание</NavLink>
                    </div>
                </nav>
            </div>

        )
}
export default NavBar
