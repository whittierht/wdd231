import { getParkData } from "./parkService.mjs";

const parkData = getParkData();


const heroBanner = document.querySelector(".hero-banner");
const head = document.querySelector("title"); // Select the title element directly

function populateHead(data) {
  head.textContent = data.name; // Update the title dynamically
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