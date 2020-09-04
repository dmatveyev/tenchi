import * as React from "react";
import styles from './ContentWrapper.module.css';
import {Route} from "react-router-dom";
import Main from "../main/Main";
import News from "../news/News";
import Schedule from "../schedule/Schedule";

const ContentWrapper = () => {


        return (
                <div className={styles.content}>

                        <div>
                            <Route exact path="/" render={() => <Main/>}/>
                            <Route exact path="/news" render={() => <News/>}/>
                            <Route exact path="/schedule" render={() => <Schedule/>}/>
                        </div>
                </div>
        )

}

export default ContentWrapper
