// import { html } from "../../node_modules/lit-html/lit-html.js";
import { html } from "https://unpkg.com/lit-html@1.3.0/lit-html.js";

const homeViewTemplate = () => html` <section class="welcome-content">
  <article class="welcome-content-text">
    <h1>We Care</h1>
    <h1 class="bold-welcome">Your Pets</h1>
    <p>
      This is my solution of the task given on SoftUni JavaScript Applications
      exam conducted on 02 April 2022.
    </p>
    <p position="absolute">
      <span>
        <a href="/requirements">Pet Care_requirements</a>
        (clicking on the link will open a new tab which will display a .pdf file with the requirements for this SPA (Single Page Application)).</span>
        <p>Link to <a href="/github">GitHub</a> for code review may be provided upon request.</p>
    </p>
  </article>
  <article class="welcome-content-image">
    <img src="./images/header-dog.png" alt="dog" />
  </article>
</section>`;

export function showHome(ctx) {
  ctx.render(homeViewTemplate());
}
