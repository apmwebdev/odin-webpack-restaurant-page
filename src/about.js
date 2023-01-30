import clear from './clear';

export default function about() {
  if (!document.querySelector("#main-about")) {
    const main = document.createElement("main");
    main.id = "main-about";
  
    const title = document.createElement("h1");
    title.innerText = "About us";
    main.appendChild(title);
  
    const aboutText1 = document.createElement("p");
    let p1 = "Welcome! My name is Patches, the owner of Patches' Seafood Emporium. ";
    p1 += "Patches' Seafood Emporium was founded in 1857 by my 6x great-grandmother, Patches Louise III. ";
    p1 += "Her goal was to serve only the freshest seafood and create a warm family atmosphere.";
    aboutText1.innerText = p1;
    main.appendChild(aboutText1);
  
    const aboutText2 = document.createElement("p");
    let p2 = "While many things have changed over the years, we still remain dedicated ";
    p2 += "to fresh seafood and good vibes to this day! We hope you'll stop by and join us for a bite.";
    aboutText2.innerText = p2;
    main.appendChild(aboutText2);
  
    clear();
    document.querySelector("#content").appendChild(main);
  }
}