// Change Homepage card based on selection
const selectOption = document.getElementById("participant_category");
const cards = document.querySelectorAll(".homeCard");

// Check for a change when valueis updated
selectOption.addEventListener("change", () => {
  const selectedVal = selectOption.value;
  console.log(selectedVal);

  cards.forEach((card) => card.classList.add("d-none"));

  // Show card based on ontion selection
  const selectCard = document.querySelector("." + selectedVal);
  if (selectCard) {
    selectCard.classList.remove("d-none");
  }
});

// Adding course total amount
const homeCards = document.querySelectorAll(".homeCard");

homeCards.forEach((card) => {
  const parent = card.querySelector(".amount");
  const ref = parent.querySelector(".ref");

  const baseEl = card.querySelector(".courseFee");
  const moduleEl = card.querySelector(".moduleFee");

  // check if both exist
  if (baseEl && moduleEl && parent) {
    const baseVal = Number(baseEl.innerText.trim());
    const moduleVal = Number(moduleEl.innerText.trim());
    const totalValue = baseVal + moduleVal;

    // Create total div
    const totalAmt = document.createElement("div");
    totalAmt.className =
      "d-flex justify-content-between mt-2 py-1 border-top border-bottom";

    totalAmt.innerHTML = `
      <span class="fw-bold">Total:</span>
      <span class="fw-bold" id="total">INR ${totalValue}/-</span>
    `;

    // Insert after .ref or at the end if no .ref exists
    if (ref) {
      parent.insertBefore(totalAmt, ref.nextSibling);
    } else {
      parent.appendChild(totalAmt);
    }
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
