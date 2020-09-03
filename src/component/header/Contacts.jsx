import * as React from "react";
import styles from "./Contacts.module.css";


class Contacts extends React.Component{

    render() {
        return(

                <div className={styles.contacts}>
                    <li><text>Самара, ул Пугачевская 21а</text></li>
                    <li><text> 8 (999) 999-99-99</text></li>
                </div>


        )
    }
}

export default Contacts
