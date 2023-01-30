import clear from './clear';

export default function menu() {
  if (!document.querySelector("#main-menu")) {
    const main = document.createElement("main");
    main.id = "main-menu";
  
    const title = document.createElement("h1");
    title.innerText = "Menu";
    main.appendChild(title);
  
    clear();
    document.querySelector("#content").appendChild(main);
  }
}