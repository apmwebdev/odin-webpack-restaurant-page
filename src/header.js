import home from './home';
import about from './about';
import menu from './menu';

export default function header() {
  const content = document.querySelector("#content");
  
  const headerElement = document.createElement("header");
  
  const homeLink = document.createElement("div");
  homeLink.innerText = "Home";
  homeLink.className = "nav-link";
  homeLink.id = "home-link";
  homeLink.addEventListener("click", home);
  headerElement.appendChild(homeLink);
  
  const menuLink = document.createElement("div");
  menuLink.innerText = "Menu";
  menuLink.className = "nav-link";
  menuLink.id = "menu-link"
  menuLink.addEventListener("click", menu)
  headerElement.appendChild(menuLink);
  
  const aboutLink = document.createElement("div");
  aboutLink.innerText = "About";
  aboutLink.className = "nav-link";
  aboutLink.id = "about-link";
  aboutLink.addEventListener("click", about);
  headerElement.appendChild(aboutLink);
  
  content.appendChild(headerElement);
}