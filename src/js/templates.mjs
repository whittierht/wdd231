
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
    <h4><a href="visitor-center.html?id=${center.id}">${center.name}</a></h4>
    <p>${center.description}</p>
    <p>${center.directionsInfo}</p>
    </li>`;
  }
  
  export function activityListTemplate(activities) {
    return activities.map((activity) => `<li>${activity.name}</li>`).join("");
  }

export function iconTemplate(iconId) {
  return [
    '<svg class="icon" role="presentation" focusable="false">',
    `  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/sprite.symbol.svg#${iconId}"></use>`,
    '</svg>'
  ].join('\n');
}

export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
  return [
    `<details name="vc-details" id="${elementId}">`,
    '  <summary>',
    `    ${iconTemplate(iconId)}`,
    `    ${summaryText}`,
    '  </summary>',
    `  ${content}`,
    '</details>'
  ].join('\n');
}

export function vcTitleTemplate(text) {
  return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcInfoTemplate(data) {
  const { url, altText, caption, credit } = data.images[0];
  return [
    '<figure>',
    `  <img src="${url}" alt="${altText}" />`,
    `  <figcaption>${caption} <span>${credit}</span></figcaption>`,
    '</figure>',
    `<p>${data.description}</p>`
  ].join('\n');
}

export function listTemplate(data, contentTemplate) {
  return `<ul>${data.map(contentTemplate).join("")}</ul>`;
}

function vcAddressTemplate({ type, line1, city, stateCode, postalCode }) {
  return [
    '<section class = "vc-addresses__mailing">',
    `  <h3>${type} Address</h3>`,
    '  <address>',
    `    ${line1}<br />`,
    `    ${city}, ${stateCode} ${postalCode}`,
    '  </address>',
    '</section>'
  ].join('\n');
}

export function vcAddressesListTemplate(data) {
  const physical = data.find(({ type }) => type === "Physical");
  const mailing = data.find(({ type }) => type === "Mailing");
  return [vcAddressTemplate(physical), mailing ? vcAddressTemplate(mailing) : ''].join('\n');
}

export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}

export function vcDirectionsTemplate(data) {
  return `<p>${data}</p>`;
}

export function vcContactsTemplate({ emailAddresses, phoneNumbers }) {
  return [
    '<section class="vc-contact__email">',
    '  <h3>Email Address</h3>',
    `  <a href="mailto:${emailAddresses[0].emailAddress}">Send this visitor center an email</a>`,
    '</section>',
    '<section class="vc-contact__phone">',
    '  <h3>Phone numbers</h3>',
    `  <a href="tel:+1${phoneNumbers[0].phoneNumber}">${phoneNumbers[0].phoneNumber}</a>`,
    '</section>'
  ].join('\n');
}

export function vcImageTemplate({ url, altText }) {
  return `<li><img src="${url}" alt="${altText}" ></li>`;
}
