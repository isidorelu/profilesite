document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("entry-modal");
  const yesBtn = document.getElementById("yes-button");
  const noBtn = document.getElementById("no-button");

  const mode = localStorage.getItem("isidore_mode");

//   if (!mode) {
//     modal.classList.remove("hidden");
//     setTimeout(() => {
//     modal.classList.add("show");
// }, 10); // slight delay lets the DOM update

//     document.body.style.overflow = "hidden"; // Lock background scroll
//   }

modal.classList.remove("hidden");
setTimeout(() => {
     modal.classList.add("show");
 }, 5); // slight delay lets the DOM update

     document.body.style.overflow = "hidden"; // Lock background scroll

  const chooseMode = (selection) => {
    localStorage.setItem("isidore_mode", selection);
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // Re-enable scroll
    // TODO: Add theme switching logic here
    console.log("Mode selected:", selection);
  };

  yesBtn.addEventListener("click", () => chooseMode("professional"));
  noBtn.addEventListener("click", () => chooseMode("normal"));
});
