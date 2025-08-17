// Change Homepage card based on selection
const selectOption = document.getElementById("participant_category");
const cards = document.querySelectorAll(".homeCard");

selectOption.addEventListener("change", () => {
  const selectedVal = selectOption.value;
  console.log(selectedVal);

  cards.forEach((card) => card.classList.add("d-none"));

  const selectCard = document.querySelector("." + selectedVal);
  if (selectCard) {
    selectCard.classList.remove("d-none");
  } else {
    console.warn("No card found for:", selectOption.value);
  }
});

// Show modal select checkboxes
let show = true;

function showCheckboxes() {
  let checkboxes = document.getElementById("checkBoxes");

  if (show) {
    checkboxes.style.display = "block";
    show = false;
  } else {
    checkboxes.style.display = "none";
    show = true;
  }
}
