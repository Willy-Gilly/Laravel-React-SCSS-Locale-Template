import * as ReactDOM from "react-dom";
import * as React from "react";
import MainComponent from "./components/MainComponent";
import lang_fr from '../lang/fr.json';
import lang_en from '../lang/en.json';

console.log("Rendering React Main Component Class...")
ReactDOM.render(<MainComponent lang={{fr: lang_fr, en: lang_en}}/>,document.getElementById('app'));

