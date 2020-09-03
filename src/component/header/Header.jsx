import * as React from "react";
import styles from './Header.module.css';
import Links from "./Links";


class Header extends React.Component {


    render() {

        return (
            <header className={styles.header}>
                <img className={styles.logo} src={"22.png"} alt=""/>
                <div className={styles.vkBlock}>
                    <Links/>
                </div>
            </header>)
    }
}

export default Header
