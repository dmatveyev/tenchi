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
                            <Route exact path="tenchi/" render={() => <Main/>}/>
                            <Route exact path="tenchi/news" render={() => <News/>}/>
                            <Route exact path="tenchi/schedule" render={() => <Schedule/>}/>
                        </div>
                </div>
        )

}

export default ContentWrapper
