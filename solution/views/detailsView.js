import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import {
  getPetDetails,
  getPetDonations,
  getUserDonationsPerPet,
} from "../functions/api.js";
import { checkForUser } from "../functions/user.js";

const detailsViewTemplate = (
  petDetails,
  petDonations,
  hasUserDonate,
  user
) => html` <section id="detailsPage">
  <div class="details">
    <div class="animalPic">
      <img src=${petDetails.image} />
    </div>
    <div>
      <div class="animalInfo">
        <h1>Name: ${petDetails.name}</h1>
        <h3>Breed: ${petDetails.breed}</h3>
        <h4>Age: ${petDetails.age}</h4>
        <h4>Weight: ${petDetails.weight}</h4>
        <h4 class="donation">Donation: ${petDonations * 100}$</h4>
      </div>

      ${user !== null
        ? user._id === petDetails._ownerId
          ? html`<div class="actionBtn">
              <a href="/edit/${petDetails._id}" class="edit">Edit</a>
              <a href="/remove/${petDetails._id}" class="remove">Delete</a>
            </div>`
          : hasUserDonate === 0
          ? html`<div class="actionBtn">
              <a href="/donate/${petDetails._id}" class="donate">Donate</a>
            </div> `
          : nothing
        : nothing}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  let hasUserDonate;

  let user = checkForUser();
  let petId = ctx.params.id;

  let petDetails = await getPetDetails(petId);
  let petDonations = await getPetDonations(petId);

  if (user !== null) {
    hasUserDonate = await getUserDonationsPerPet(user._id, petId);
  }

  ctx.render(
    detailsViewTemplate(petDetails, petDonations, hasUserDonate, user)
  );
}
