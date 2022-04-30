// import page from "../node_modules/page/page.mjs";
import page from "https://unpkg.com/page@1.11.6/page.mjs";

import {
  allRender,
  footerRender,
  navigationRender,
} from "../solution/middlewares/initialMiddleware.js";

import { showLogin } from "./views/loginView.js";
import { showRegister } from "./views/registerView.js";
import {
  donate,
  exam,
  firebase,
  github,
  heroku,
  logout,
  removePet,
  requirements,
} from "./functions/api.js";
import { showHome } from "./views/homeView.js";
import { showDashboard } from "./views/dashboardView.js";
import { showCreate } from "./views/createView.js";
import { showDetails } from "./views/detailsView.js";
import { showEdit } from "./views/editView.js";

page(navigationRender);
page(footerRender);
page(allRender);

page("/", showHome);
page("/dashboard", showDashboard);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/login", showLogin);
page("/register", showRegister);
page("/logout", logout);
page("/remove/:id", removePet);
page("/donate/:id", donate);
page("/requirements", requirements);
page("/github", github);
page("/heroku", heroku);
page("/firebase", firebase);
page("/exam", exam);

page.start();

console.log("Hello!");
