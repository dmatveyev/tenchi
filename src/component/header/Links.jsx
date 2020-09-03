import * as React from "react";
import styles from "./Links.module.css"


class Links extends React.Component {

    render() {
        return (
                <div className={styles.links}>
                    <li>
                        <a href="https://vk.com/tenchi_samara" target="_blank">Мы в Контакте</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/aikido_tenchi" target="_blank">Мы в Инстаграм</a>
                    </li>
                </div>

        )
    }
}

export default Links
