import * as React from "react";
import styles from "./Links.module.css"
import {BrowserRouter, Link} from "react-router-dom";


class Links extends React.Component {

    render() {
        return (

            <BrowserRouter>
                <div className={styles.links}>
                    <li>
                        <Link to="https://vk.com/tenchi_samara" target="_blank">Мы в Контакте</Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/aikido_tenchi" target="_blank">Мы в Инстаграм</Link>
                    </li>
                </div>
            </BrowserRouter>


        )
    }
}

export default Links
