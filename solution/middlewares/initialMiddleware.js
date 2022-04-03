import { render } from "../../node_modules/lit-html/lit-html.js";
import { showFooter } from "../views/footerView.js";

import { showNavigation } from "../views/navigationView.js";

const navElement = document.querySelector("header");
const footerElement = document.querySelector("footer");
const mainElement = document.querySelector("#content");

export function navigationRender(ctx, next) {
  render(showNavigation(ctx), navElement);

  next();
}

export function footerRender(ctx, next) {
  render(showFooter(ctx), footerElement);

  next();
}

export function allRender(ctx, next) {
  ctx.render = function allRenderor(viewTemplate) {
    render(viewTemplate, mainElement);
  };

  next();
}
