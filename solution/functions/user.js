export function checkForUser() {
  let user = localStorage.getItem("user");

  if (user !== null) {
    return JSON.parse(user);
  } else {
    return user;
  }
}


