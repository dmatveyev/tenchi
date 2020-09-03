import * as React from "react";
import styles from './Header.module.css';
import Links from "./Links";
import Contacts from "./Contacts";


class Header extends React.Component {


    render() {

        return (
            <header className={styles.header}>
                <img className={styles.logo} src={"21.png"} alt=""/>
                <Contacts/>
                <Links/>
            </header>)
    }
}

export default Header
