export default function home() {
  const main = document.createElement("main");
  
  const title = document.createElement("h1");
  title.innerText = "The Patches Seafood Emporium";
  main.appendChild(title);
  
  const subtitle = document.createElement("em");
  subtitle.innerText = "Meow meow meow meow meow!";
  main.appendChild(subtitle);
  
  const description = document.createElement("p");
  description.innerText = "Come by today for a tasty seafood treat!";
  main.appendChild(description);
  
  document.querySelector("#content").appendChild(main);
}