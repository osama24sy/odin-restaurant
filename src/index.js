import './style.css';
import createHeader from "./header";
import createNavbar from './navbar';

// Setting the wrapper div
const body = document.querySelector("body");
const content = document.createElement("div");
content.id = "content";
body.appendChild(content);

createHeader();
createNavbar();
