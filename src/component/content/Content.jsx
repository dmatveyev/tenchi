import * as React from "react";
import styles from './Content.module.css';
import NavBar from "./navbar/NavBar";
import {BrowserRouter} from "react-router-dom";
import ContentWrapper from "./contentwrapper/ContentWrapper";


const Content = () => {


        return (
            <BrowserRouter>
                <div className={styles.content}>
                    <NavBar/>
                    <ContentWrapper/>
                </div>
            </BrowserRouter>
        )

}

export default Content
