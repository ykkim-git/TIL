const container = document.querySelector(".container");
const button = document.querySelector(".control-button");
const modal = document.querySelector(".modal");

button.addEventListener("click", () => {
  if (!modal.classList.contains("show")) {
    // show
    modal.classList.remove("hide");
    modal.classList.add("show");

    container.classList.add("opacity");
  } else {
    // hide
    modal.classList.remove("show");
    modal.classList.add("hide");

    container.classList.remove("opacity");
  }
});
