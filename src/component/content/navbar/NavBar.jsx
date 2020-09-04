import * as React from "react";
import styles from "./NabBar.module.css";
import {NavLink} from "react-router-dom";


const NavBar = () => {

        return (
            <div className={styles.rootdiv}>
                <nav className={styles.navbar}>
                    <div className={styles.item}>
                        <NavLink exact to="/tenchi/" activeClassName={styles.activeLink}>Главная</NavLink>
                    </div>
                    <div className={styles.item}>
                        <NavLink exact to="/tenchi/news" activeClassName={styles.activeLink}>Новости</NavLink>
                    </div>
                    <div className={styles.item}>
                        <NavLink exact to="/tenchi/schedule" activeClassName={styles.activeLink}>Расписание</NavLink>
                    </div>
                </nav>
            </div>

        )
}
export default NavBar
