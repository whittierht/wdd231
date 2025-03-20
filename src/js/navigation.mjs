function mainMenuHandler(ev) {
    document.querySelector(".global-nav").classList.toggle("show");
    if (document.querySelector(".global-nav").classList.contains("show")) {
      ev.target.setAttribute("aria-expanded", true);
    } else {
      ev.target.setAttribute("aria-expanded", false);
    }
  
    console.log("toggle");
  }
  
  function subMenuHandler(ev) {
    ev.currentTarget
      .closest("li")
      .querySelector(".global-nav__submenu")
      .classList.toggle("show");
    ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
  }
  
  export default function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");
    const subMenuToggles = document.querySelectorAll(
      ".global-nav__split-button__toggle"
    );
    menuButton.addEventListener("click", mainMenuHandler);
    subMenuToggles.forEach((toggle) => {
      toggle.addEventListener("click", subMenuHandler);
    });
  }