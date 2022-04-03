import { html } from "../../node_modules/lit-html/lit-html.js";

const footerViewTemplate = () => html` <p>Pet Care 2022©</p> `;

export function showFooter(ctx) {
  return footerViewTemplate();
}
