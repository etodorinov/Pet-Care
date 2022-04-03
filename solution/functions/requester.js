import { checkForUser } from "./user.js";

async function request(method, url, data) {
  const baseUrl = "http://localhost:3030";
  const options = {};

  let user = checkForUser();

  if (method !== "GET") {
    options.method = method;
    options.headers = { "content-type": "application/json" };
    options.body = JSON.stringify(data);
  }

  if (user !== null) {
    options.headers = {
      "content-type": "application/json",
      "X-Authorization": user.accessToken,
    };
  }

  try {
    let response = await fetch(baseUrl + url, options);

    if (response.ok !== true) {
      if (response.status === 403) {
        localStorage.removeItem("user");
      }

      let error = await response.json();

      throw new Error(error.message);
    }

    if (response.ok === true) {
      return response;
    }
  } catch (error) {
    alert(error.message);

    throw error;
  }
}

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");
