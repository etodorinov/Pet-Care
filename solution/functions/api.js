import * as request from "../functions/requester.js";

const urls = {
  toLogin: "/users/login",
  toRegister: "/users/register",
  toLogout: "/users/logout",
  toGetAllPets: "/data/pets?sortBy=_createdOn%20desc&distinct=name",
  toCreatePet: "/data/pets",
  toGetPetDetails: "/data/pets/",
  toEditPet: "/data/pets/",
  toRemovePet: "/data/pets/",
  toDonate: "/data/donation",
};

export async function login(loginForm) {
  const form = new FormData(loginForm);

  let email = form.get("email");
  let password = form.get("password");

  if (email === "") {
    alert("You must type a valid e-mail address.");
    ctx.page.redirect("/login");
  }

  if (password === "") {
    alert("You must create a password.");
    ctx.page.redirect("/login");
  }

  let user = await request.post(urls.toLogin, { email, password });
  user = await user.json();

  localStorage.setItem("user", JSON.stringify(user));

  loginForm.reset();

  return user;
}

export async function register(registerForm) {
  const form = new FormData(registerForm);

  let email = form.get("email");
  let password = form.get("password");
  let repeatedPassword = form.get("repeatPassword");

  if (email === "") {
    alert("You must type a valid e-mail address.");
    ctx.page.redirect("/register");
  }

  if (password === "") {
    alert("You must create a password.");
    ctx.page.redirect("/register");
  }

  if (repeatedPassword === "" || repeatedPassword !== password) {
    alert("Your passwords do not match.");
    ctx.page.redirect("/register");
  }

  let user = await request.post(urls.toRegister, {
    email,
    password,
  });
  user = await user.json();

  localStorage.setItem("user", JSON.stringify(user));

  registerForm.reset();

  return user;
}

export function logout(ctx) {
  request.get(urls.toLogout);

  localStorage.removeItem("user");

  ctx.page.redirect("/");
}

export async function getAllPets() {
  let allPets = await request.get(urls.toGetAllPets);
  allPets = await allPets.json();

  return allPets;
}

export async function createPet(createForm) {
  const form = new FormData(createForm);

  let name = form.get("name");
  let breed = form.get("breed");
  let age = form.get("age");
  let weight = form.get("weight");
  let image = form.get("image");

  if (
    name === "" ||
    breed === "" ||
    age === "" ||
    weight === "" ||
    image === ""
  ) {
    alert("All fields must be filled in.");
    ctx.page.redirect("/create");
  }

  let createdPet = await request.post(urls.toCreatePet, {
    name,
    breed,
    age,
    weight,
    image,
  });
  createPet = await createdPet.json();

  createForm.reset();

  return createdPet;
}

export async function getPetDetails(petId) {
  let petDetails = await request.get(urls.toGetPetDetails + petId);
  petDetails = await petDetails.json();

  return petDetails;
}

export async function editPet(petId, editForm) {
  const form = new FormData(editForm);

  let name = form.get("name");
  let breed = form.get("breed");
  let age = form.get("age");
  let weight = form.get("weight");
  let image = form.get("image");

  if (
    name === "" ||
    breed === "" ||
    age === "" ||
    weight === "" ||
    image === ""
  ) {
    alert("All fields must be filled in.");
    ctx.page.redirect("/edit/:id");
  }

  let editedPet = await request.put(urls.toEditPet + petId, {
    name,
    breed,
    age,
    weight,
    image,
  });

  editForm.reset();

  return editedPet;
}

export async function removePet(ctx) {
  let petId = ctx.params.id;

  let deletionTime = await request.del(urls.toRemovePet + petId);
  deletionTime = await deletionTime.json();

  ctx.page.redirect("/");

  return deletionTime;
}

export async function getPetDonations(petId) {
  let petDonations = await request.get(
    `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`
  );
  petDonations = await petDonations.json();

  return petDonations;
}

export async function getUserDonationsPerPet(userId, petId) {
  let hasUserDonate = await request.get(
    `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
  hasUserDonate = await hasUserDonate.json();

  return hasUserDonate;
}

export async function donate(ctx) {
  let petId = ctx.params.id;

  let donation = await request.post(urls.toDonate, {
    petId,
  });
  donation = await donation.json();

  ctx.page.redirect(`/details/${petId}`);

  return donation;
}

export function requirements(ctx) {
  window.open(
    "https://firebasestorage.googleapis.com/v0/b/etpetcarespa.appspot.com/o/Pet%20Care_%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B5.pdf?alt=media&token=578457af-dc72-40bc-8e47-b89323e76af8",
    "_blank"
  );
  ctx.page.redirect("/");
}

export function github(ctx) {
  window.open("https://github.com", "_blank");
  ctx.page.redirect("/");
}

export function heroku(ctx) {
  window.open("https://www.heroku.com/", "_blank");
  ctx.page.redirect("/");
}

export function firebase(ctx) {
  window.open("https://firebase.google.com/", "_blank");
  ctx.page.redirect("/");
}

export function exam(ctx) {
  window.open(
    "https://judge.softuni.org/Contests/3432/JS-Applications-Exam-2-April-2022",
    "_blank"
  );
  ctx.page.redirect("/");
}
