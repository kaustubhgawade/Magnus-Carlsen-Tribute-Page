const navbarToggler = document.querySelector(".navbar-toggler");
const navList = document.querySelector("header ul");

navbarToggler.addEventListener("click", () => {
  console.log("helo");
  navList.classList.toggle("toggle-navbar");
});
