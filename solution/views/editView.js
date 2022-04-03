import { html } from "../../node_modules/lit-html/lit-html.js";
import { editPet, getPetDetails } from "../functions/api.js";

const editViewTemplate = (petDetails, editHandler) => html` <section
  id="editPage"
  @submit=${editHandler}
>
  <form class="editForm">
    <img src=${petDetails.image} />
    <div>
      <h2>Edit PetPal</h2>
      <div class="name">
        <label for="name">Name:</label>
        <input name="name" id="name" type="text" .value=${petDetails.name} />
      </div>
      <div class="breed">
        <label for="breed">Breed:</label>
        <input name="breed" id="breed" type="text" .value=${petDetails.breed} />
      </div>
      <div class="Age">
        <label for="age">Age:</label>
        <input name="age" id="age" type="text" .value=${petDetails.age} />
      </div>
      <div class="weight">
        <label for="weight">Weight:</label>
        <input
          name="weight"
          id="weight"
          type="text"
          .value=${petDetails.weight}
        />
      </div>
      <div class="image">
        <label for="image">Image:</label>
        <input name="image" id="image" type="text" .value=${petDetails.image} />
      </div>
      <button class="btn" type="submit">Edit Pet</button>
    </div>
  </form>
</section>`;

export async function showEdit(ctx) {
  let petId = ctx.params.id;

  let petDetails = await getPetDetails(petId);

  async function editHandler(e) {
    e.preventDefault();

    const editForm = document.querySelector(".editForm");

    let editedPet = await editPet(petId, editForm);

    ctx.page.redirect(`/details/${petId}`);
  }

  ctx.render(editViewTemplate(petDetails, editHandler));
}
