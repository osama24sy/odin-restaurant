import lattesrc from '../images/latte.jpg';
import mochasrc from '../images/mocha.jpg';
import cappuccinosrc from '../images/cappuccino.jpg';

const createMenu = () => {
    const main = document.getElementById('main');

    const title = document.createElement("p");
    title.textContent = "Menu";
    const hr = document.createElement("hr");

    const menu = document.createElement("div");
    menu.id = 'menu';

    const latte = document.createElement("div");
    latte.id = 'latte';
    const lattep = document.createElement("p");
    lattep.textContent = "Caffè Latte";
    const latteImg = new Image();
    latteImg.src = lattesrc;
    latte.appendChild(lattep);
    latte.appendChild(latteImg);
    menu.appendChild(latte);

    const mocha = document.createElement("div");
    mocha.id = 'mocha';
    const mochap = document.createElement("p");
    mochap.textContent = "Caffè mocha";
    const mochaImg = new Image();
    mochaImg.src = mochasrc;
    mocha.appendChild(mochap);
    mocha.appendChild(mochaImg);
    menu.appendChild(mocha);

    const cappuccino = document.createElement("div");
    cappuccino.id = 'cappuccino';
    const cappuccinop = document.createElement("p");
    cappuccinop.textContent = "Caffè cappuccino";
    const cappuccinoImg = new Image();
    cappuccinoImg.src = cappuccinosrc;
    cappuccino.appendChild(cappuccinop);
    cappuccino.appendChild(cappuccinoImg);
    menu.appendChild(cappuccino);


    main.appendChild(title);
    main.appendChild(hr);
    main.appendChild(menu);
};

export default createMenu;