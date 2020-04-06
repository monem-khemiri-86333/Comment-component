const fetch = require("node-fetch");

export function getComments() {
  return fetch(" http://localhost:3000/comments")
    .then((comments) => comments.json())
    .then((comments) => comments);
}

export function getUSer() {
  return fetch("http://localhost:3000/users/6")
    .then((user) => user.json())
    .then((user) => user);
}
