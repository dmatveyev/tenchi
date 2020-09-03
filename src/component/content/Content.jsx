import * as React from "react";
import styles from './Content.module.css';
import NavBar from "./navbar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./main/Main";
import Contacts from "./contacts/Contacts";
import News from "./news/News";


const Content = () => {


        return (
            <BrowserRouter>
                <div className={styles.content}>
                    <NavBar/>
                    <div>
                        <Route exact path="/" render={() => <Main/>}/>
                        <Route exact path="/contacts" render={() => <Contacts/>}/>
                        <Route exact path="/news" render={() => <News/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )

}

export default Content
