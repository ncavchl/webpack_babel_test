import { math } from "./math";
import "./app.css";
import nyancat from "./nyancat.jpg";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <img src="${nyancat}"/>
    ${math(1, 2)}
    `;
});
console.log(process.env.NODE_ENV); // "development"
