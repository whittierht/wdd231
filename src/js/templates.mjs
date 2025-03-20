
 export function mediaCardTemplate(info) {
    return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card__img">
    <h3 class="media-card__title">${info.name}</h3>
    </a>
   <p>${info.description}</p>
     </div>`;
  }

  export function parkInfoTemplate(data) {
    return `
        <a href="${data.url}" class="hero-banner__title"><strong>${data.name}</strong></a>
        <p class="hero-banner__subtitle">
          <span>${data.designation}</span>
          <span>${data.states}</span>
        </p>
      </div>
    `;
  }

  function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
  }
  
  function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
  }
  
  export function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);
  
    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}<p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice}</p>
  </section>`;
  }

  import spritePath from '../images/sprite.symbol.svg';

  export function alertTemplate(alert) {
    let alertType = "";
    switch (alert.category) {
      case "Park Closure":
        alertType = "closure";
        break;
      default:
        alertType = alert.category.toLowerCase();
    }
    return `<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="/images/sprite.symbol.svg#alert-${alertType}"></use>
    </svg>
    <div>
      <h3 class="alert-${alertType}">${alert.title}</h3>
      <p>${alert.description}</p>
    </div></li>`;
  }

  export function visitorCenterTemplate(center) {
    return `<li class="visitor-center">
    <h4>${center.name}</h4>
    <p>${center.description}</p>
    <p>${center.directionsInfo}</p>
    </li>`;
  }
  
  export function activityListTemplate(activities) {
    return activities.map((activity) => `<li>${activity.name}</li>`).join("");
  }