// Need to turn the plus and minus into bootstrap icons

// HTML element Ids:
const fTicket = document.getElementById("f-ticket");
const eTicket = document.getElementById("e-ticket");

const fPlus = document.getElementById("f-plusIcon");
const fMinus = document.getElementById("f-minusIcon");

const ePlus = document.getElementById("e-plusIcon");
const eMinus = document.getElementById("e-minusIcon");

const subtotal = document.getElementById("subtotal");
const vat = document.getElementById("vat");
const total = document.getElementById("total");

const bookingButton = document.getElementById("booking-btn");

// functions for event listeners:
function increment(ticketId, subtotalId, vatId, totalId) {
  console.log("Increment clicked");
}

function decrement(ticketId, subtotalId, vatId, totalId) {
  console.log("Decrement clicked");
}

function confirmBooking() {}

// Event listeners:
fPlus.addEventListener("click", () => {
  increment(fTicket, subtotal, vat, total);
});

fMinus.addEventListener("click", () => {
  decrement(fTicket, subtotal, vat, total);
});

ePlus.addEventListener("click", () => {
  increment(eTicket, subtotal, vat, total);
});

eMinus.addEventListener("click", () => {
  decrement(eTicket, subtotal, vat, total);
});

bookingButton.addEventListener("click", () => {});
