// let stsus=document.querySelector("h1");

let follow = document.querySelector("#follow");
let removeBtn = document.querySelector(".remove");
follow.addEventListener("click", function () {
   follow.textContent = "friends";
  removeBtn.style.display = "block";
});

removeBtn.addEventListener("click", function () {
  follow.textContent = "follow";
  removeBtn.style.display = "none";
  follow.style.color = "white";
});
