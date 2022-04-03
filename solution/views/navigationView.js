import { html } from "../../node_modules/lit-html/lit-html.js";

import { checkForUser } from "../functions/user.js";

const navigationViewTemplate = (user) => html`<nav>
  <section class="logo">
    <img src="./images/logo.png" alt="logo" />
  </section>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    ${user !== null
      ? html` <li><a href="/create">Create Postcard</a></li>
          <li><a href="/logout">Logout</a></li>`
      : html`<li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>`}
  </ul>
</nav>`;

export function showNavigation(ctx) {
  let user = checkForUser();

  return navigationViewTemplate(user);
}
