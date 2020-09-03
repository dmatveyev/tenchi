import * as React from "react";
import styles from './ContentWrapper.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import Main from "../main/Main";
import Contacts from "../contacts/Contacts";
import News from "../news/News";



const ContentWrapper = () => {


        return (
                <div className={styles.content}>
                    <div>
                        <Route exact path="/" render={() => <Main/>}/>
                        <Route exact path="/contacts" render={() => <Contacts/>}/>
                        <Route exact path="/news" render={() => <News/>}/>
                    </div>
                </div>
        )

}

export default ContentWrapper
