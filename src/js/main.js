import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
const parkData = getParkData();



function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.innerHTML = html.join("");
}

async function init() {
  const parkData = await getParkData();

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(parkInfoLinks);
}

init();


setIntro(parkData);
setParkInfoLinks(parkInfoLinks);
setHeaderFooter(parkData);










