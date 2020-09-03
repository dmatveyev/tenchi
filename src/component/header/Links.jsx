import * as React from "react";
import styles from "./Links.module.css"


class Links extends React.Component {

    render() {
        return (
                <div className={styles.links}>
                    <div className={styles.block}>
                        <a href="https://vk.com/tenchi_samara" target="_blank" rel="noopener noreferrer">
                            <img src="vk.png" alt="vk"/>
                        </a>

                        <a href="https://www.instagram.com/aikido_tenchi" target="_blank" rel="noopener noreferrer">
                            <img src="insta.png" alt="vk"/>
                        </a>
                    </div>
                </div>

        )
    }
}

export default Links
