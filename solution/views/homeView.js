// import { html } from "../../node_modules/lit-html/lit-html.js";
import { html } from "https://unpkg.com/lit-html@1.3.0/lit-html.js";

const homeViewTemplate = () => html` <section class="welcome-content">
  <article class="welcome-content-text">
    <h1>We Care</h1>
    <h1 class="bold-welcome">Your Pets</h1>
    <p>
      This is my solution of the task for creation of SPA (Single Page
      Application) given on <a href="/softuni">SoftUni</a> JavaScript Applications
      <a href="/exam">exam</a> conducted on 02 April 2022.
    </p>
    <p>
      The application is hosted on <a href="/heroku">Heroku</a> and
      <a href="/firebase">Firebase</a> combined so the initial load of the
      functionalities may take little longer as it takes some time to "wake up"
      the servers.
    </p>
    <p position="absolute">
      <span
        ><a href="/requirements">Pet Care_requirements</a> - clicking on the
        link will open a new tab which will display a .pdf file with the
        requirements for this SPA (Single Page Application).</span
      >
    </p>
    <p>
      Link to <a href="/github">GitHub</a> for code review may be provided upon
      request.
    </p>
  </article>
  <article class="welcome-content-image">
    <img src="./images/header-dog.png" alt="dog" />
  </article>
</section>`;

export function showHome(ctx) {
  ctx.render(homeViewTemplate());
}
