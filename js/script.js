let title = document.querySelector("h1");
title.addEventListener("mouseover", function () {
  title.innerText = "Let's PARTY!";
  title.style.color = "maroon";
});

let darkModeButton = document.querySelector(".dark-mode");

// let body = document.querySelector("body");
// darkModeButton.addEventListener("click", function () {
//   body.classList.add("dark-palette");
// });

// let lightModeButton = document.querySelector(".light-mode");

// lightModeButton.addEventListener("click", function () {
//   body.classList.remove("dark-palette");
// });

let theme = document.querySelector("body");
darkModeButton.addEventListener("click", function () {
  if (theme.classList.contains("dark-palette")) {
    theme.classList.remove("dark-palette");
    darkModeButton.innerText = "Dark Mode";
  } else {
    theme.classList.add("dark-palette");
    darkModeButton.innerText = "Light Mode";
  }
});
