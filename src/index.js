import './style.css';
import createHeader from "./header";
import createNavbar from './navbar';
import createMain from './main-page';
import cafe from './cafe.jpg';

// Setting the wrapper div
const body = document.querySelector("body");
const content = document.createElement("div");
content.id = "content";
body.appendChild(content);

// Creating the header and the navbar
createHeader();
createNavbar();

// event listeners for the navbar
let page = 'home';

home.addEventListener("click", () => {
    page = 'home';
});

menu.addEventListener("click", () => {
    page = 'menu';
});

about.addEventListener("click", () => {
    page = 'about';
});

createMain();