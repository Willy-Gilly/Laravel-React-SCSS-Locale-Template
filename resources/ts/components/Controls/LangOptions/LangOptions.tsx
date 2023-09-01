import * as React from 'react';
import styles from "./LangOptions.module.scss";
import { useContext, useState } from 'react';
import {LangContext} from "../../../Context/LangContext";
export default function LangOptions() {
    const [active, setActive] = useState(false);
    const {locale,setLocale} = useContext(LangContext);
    const makeActive = () => {
        if(!active) setActive(true);
    }
    const changeSelectedLocale = (value:string) => {
        setActive(false);
        setLocale(value);
        console.log("Changing language to "+value);
    }
    return (
        <div className={styles.languagePicker} onClick={makeActive}>
            {active || (locale == "fr" && !active) ? <div onClick={active ? () => changeSelectedLocale('fr') : () => ''} className={[styles.language,styles.france].join(' ')}> </div> : ''}
            {active || (locale == "en" && !active) ? <div onClick={active ? () => changeSelectedLocale('en') : () => ''} className={[styles.language,styles.english].join(' ')}> </div> : ''}
        </div>
    );
}
