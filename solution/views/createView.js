import { html } from "../../node_modules/lit-html/lit-html.js";

import { createPet } from "../functions/api.js";

const createViewTemplate = (createHandler) => html` <section
  id="createPage"
  @submit=${createHandler}
>
  <form class="createForm">
    <img src="./images/cat-create.jpg" />
    <div>
      <h2>Create PetPal</h2>
      <div class="name">
        <label for="name">Name:</label>
        <input name="name" id="name" type="text" placeholder="Max" />
      </div>
      <div class="breed">
        <label for="breed">Breed:</label>
        <input name="breed" id="breed" type="text" placeholder="Shiba Inu" />
      </div>
      <div class="Age">
        <label for="age">Age:</label>
        <input name="age" id="age" type="text" placeholder="2 years" />
      </div>
      <div class="weight">
        <label for="weight">Weight:</label>
        <input name="weight" id="weight" type="text" placeholder="5kg" />
      </div>
      <div class="image">
        <label for="image">Image:</label>
        <input
          name="image"
          id="image"
          type="text"
          placeholder="./image/dog.jpeg"
        />
      </div>
      <button class="btn" type="submit">Create Pet</button>
    </div>
  </form>
</section>`;

export function showCreate(ctx) {
  async function createHandler(e) {
    e.preventDefault();

    const createForm = document.querySelector(".createForm");

    let createdPet = await createPet(createForm);

    ctx.page.redirect("/");
  }
  ctx.render(createViewTemplate(createHandler));
}
