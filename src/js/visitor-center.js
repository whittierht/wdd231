import "../css/style.css"; 
import "../css/visitor-center.css";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import {
  vcInfoTemplate,
  vcTitleTemplate,
  vcDetailsTemplate,
  vcAmenityTemplate,
  vcImageTemplate,
  listTemplate,
  vcAddressesListTemplate,
  vcDirectionsTemplate,
  vcContactsTemplate
} from "./templates.mjs";


 function getParameters(parameter) {
    const search = location.search;
    const parameters = new URLSearchParams(search);
    return parameters.get(parameter);
}



function buildPage(data) {
    const updateElement = (selector, content) => {
      document.querySelector(selector).innerHTML = content;
    };
    
    updateElement(".vc-name", vcTitleTemplate(data.name));
    updateElement(".vc-info", vcInfoTemplate(data));
    
    const detailsEl = document.querySelector(".vc-details-list");
    detailsEl.innerHTML = "";

    const insertDetail = (id, title, icon, content) => {
      detailsEl.insertAdjacentHTML("beforeend", vcDetailsTemplate(id, title, icon, content));
    };

    insertDetail("vcAddresses", "Addresses", "heading-icon_map-pin", vcAddressesListTemplate(data.addresses));
    insertDetail("vcDirections", "Directions", "directions", vcDirectionsTemplate(data.directionsInfo));
    insertDetail("vcAmenities", "Amenities", "heading-icon_info", listTemplate(data.amenities, vcAmenityTemplate));
    insertDetail("vcContacts", "Contacts", "phone", vcContactsTemplate(data.contacts));

    document.querySelector(".vc-gallery").insertAdjacentHTML("beforeend", listTemplate(data.images, vcImageTemplate));
}
  
  async function init() {
    const parkData = await getParkData();
    const id = getParameters("id");
    const centerDetails = await getParkVisitorCenterDetails(id);
    setHeaderFooter(parkData);
    buildPage(centerDetails);
  }
  
  init();

