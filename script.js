const searchBox = document.getElementById("searchBox");
const googleIcon = document.getElementById("googleIcon");

googleIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
});
