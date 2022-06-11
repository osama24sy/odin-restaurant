import coffee from './coffee-pouring.jpg';

const createMain = () => {
    const content = document.querySelector("#content");

    const main = document.createElement("div");
    main.id = 'main';

    const img = new Image();
    img.src = coffee;

    const desc = document.createElement("p");
    desc.textContent = "Best coffee in town.";

    main.appendChild(img);
    main.appendChild(desc);
    content.appendChild(main);
    
}

export default createMain;