import clear from './clear';

export default function home() {
  if (!document.querySelector("#main-home")) {
    const main = document.createElement("main");
    main.id = "main-home";
  
    const title = document.createElement("h1");
    title.innerText = "The Patches Seafood Emporium";
    main.appendChild(title);
  
    const subtitle = document.createElement("em");
    subtitle.innerText = "Meow meow meow meow meow!";
    main.appendChild(subtitle);
  
    const description = document.createElement("p");
    description.innerText = "Come by today for a tasty seafood treat!";
    main.appendChild(description);
  
    clear();
    document.querySelector("#content").appendChild(main);
  }
}