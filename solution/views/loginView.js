import { html } from "../../node_modules/lit-html/lit-html.js";

import { login } from "../functions/api.js";

const loginViewTemplate = (loginHandler) => html` <section
  id="loginPage"
  @submit=${loginHandler}
>
  <form class="loginForm">
    <img src="./images/logo.png" alt="logo" />
    <h2>Login</h2>

    <div>
      <label for="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="steven@abv.bg"
        value=""
      />
    </div>

    <div>
      <label for="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="********"
        value=""
      />
    </div>

    <button class="btn" type="submit">Login</button>

    <p class="field">
      <span>If you don't have profile click <a href="/register">here</a></span>
    </p>
  </form>
</section>`;

export function showLogin(ctx) {
  async function loginHandler(e) {
    e.preventDefault();

    const loginForm = document.querySelector(".loginForm");

    await login(loginForm);

    ctx.page.redirect('/');
  }

  ctx.render(loginViewTemplate(loginHandler));
}
