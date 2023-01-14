import { franc } from "franc";
import langs from "langs";

const language = franc(process.argv[2], { minLength: 5 });

console.log(language);

const languageName = langs.where("3", language);

console.log(languageName ? languageName.name : "Sorry, cannot figure it out");
