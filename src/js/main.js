import { getParkData } from "./parkService.mjs";

const parkData = getParkData();


const heroBanner = document.querySelector(".hero-banner");
const head = document.querySelector("title"); 
const disclaimer = document.querySelector(".disclaimer");

function populateDisclaimer(data) {
  disclaimer.innerHTML = `<p class="disclaimer">
      This is not a real NPS website. It is an educational exercise. If you
      landed here by accident, to find the real website visit
  <a href="${data.url}">${data.name}</a>` 
}

function populateHead(data) {
  head.textContent = data.name; 
}

function populateHeroBanner(data) {
  const firstImage = data.images[0]; 
    heroBanner.innerHTML = `
      <img src="${firstImage.url}" alt="${firstImage.altText}" />
      <div class="hero-banner__content">
        <a href="${data.url}" class="hero-banner__title"><strong>${data.name}</strong></a>
        <p class="hero-banner__subtitle">
          <span>${data.designation}</span>
          <span>${data.states}</span>
        </p>
      </div>
    `;
}

populateHeroBanner(parkData);
populateHead(parkData);
populateDisclaimer(parkData);