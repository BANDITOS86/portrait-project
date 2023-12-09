import checkTextInputs from './modules/checkTextInputs';
import forms from './modules/forms';
import mask from './modules/mask';
import modals from "./modules/modals";
import showMoreStyles from './modules/showMoreStyles';
import sliders from './modules/sliders';
import calc from './modules/calc';

window.addEventListener("DOMContentLoaded", () => {
  "use_strict";

  modals();
  sliders(".main-slider-item", "vertical");
  sliders(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
  forms();
  mask("[name='phone']");
  checkTextInputs("[name='name']");
  checkTextInputs("[name='message']");
  showMoreStyles(".button-styles", "#styles .row");
  calc("#size", "#material", "#options", ".promocode", ".calc-price");
})