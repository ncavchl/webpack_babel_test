import axios from "axios";
// import nyancat from "./nyancat.jpg";

document.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get("/api/users");
  console.log(res);
  document.body.innerHTML = (res.data || [])
    .map((user) => {
      return `<div> ${user.id} : ${user.name}</div>`;
    })
    .join("");
});
console.log(process.env.NODE_ENV); // "development"
if (module.hot) {
  console.log("핫모듈 켜짐");

  // module.hot.accept("./view", () => {
  //   console.log("view 모듈 변경됨"); // 변경된 모듈 감지
  // })
}
