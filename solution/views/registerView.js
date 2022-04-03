import { html } from "../../node_modules/lit-html/lit-html.js";

import { register } from "../functions/api.js";

const registerViewTemplate = (registerHandler) => html` <section
  id="registerPage"
  @submit=${registerHandler}
>
  <form class="registerForm">
    <img src="./images/logo.png" alt="logo" />
    <h2>Register</h2>
    <div class="on-dark">
      <label for="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="steven@abv.bg"
        value=""
      />
    </div>

    <div class="on-dark">
      <label for="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="********"
        value=""
      />
    </div>

    <div class="on-dark">
      <label for="repeatPassword">Repeat Password:</label>
      <input
        id="repeatPassword"
        name="repeatPassword"
        type="password"
        placeholder="********"
        value=""
      />
    </div>

    <button class="btn" type="submit">Register</button>

    <p class="field">
      <span>If you have profile click <a href="/login">here</a></span>
    </p>
  </form>
</section>`;

export function showRegister(ctx) {
  async function registerHandler(e) {
    e.preventDefault();

    const registerForm = document.querySelector(".registerForm");

    await register(registerForm);

    ctx.page.redirect('/');
  }

  ctx.render(registerViewTemplate(registerHandler));
}
