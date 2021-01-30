// Need to turn the plus and minus into bootstrap icons

// HTML element Ids:
const fTicket = document.getElementById("f-ticket");
const eTicket = document.getElementById("e-ticket");

const fPlus = document.getElementById("f-plusIcon");
const fMinus = document.getElementById("f-minusIcon");

const ePlus = document.getElementById("e-plusIcon");
const eMinus = document.getElementById("e-minusIcon");

const fPerTicketCost = document.getElementById("f-perTicketCost");
const ePerTicketCost = document.getElementById("e-perTicketCost");

const subtotal = document.getElementById("subtotal");
const vat = document.getElementById("vat");
const total = document.getElementById("total");

const bookingButton = document.getElementById("booking-btn");

// functions for event listeners:
function increment(ticketId, perTicketCostId) {
  const ticketAmount = Number(ticketId.value);
  const perTicketCost = Number(perTicketCostId.innerText);
  const subtotalAmount = Number(subtotal.innerText) + perTicketCost;
  const vatAmount = subtotalAmount * (10 / 100);
  const totalAmount = subtotalAmount + vatAmount;

  ticketId.value = ticketAmount + 1;
  subtotal.innerText = subtotalAmount;
  vat.innerText = vatAmount;
  total.innerText = totalAmount;
}

function decrement(ticketId, perTicketCostId) {
  const ticketAmount = Number(ticketId.value);
  const perTicketCost = Number(perTicketCostId.innerText);
  const subtotalAmount = Number(subtotal.innerText) - perTicketCost;
  const vatAmount = subtotalAmount * (10 / 100);
  const totalAmount = subtotalAmount + vatAmount;

  if (ticketAmount > 0) {
    ticketId.value = ticketAmount - 1;
    subtotal.innerText = subtotalAmount;
    vat.innerText = vatAmount;
    total.innerText = totalAmount;
  }
}

function confirmBooking() {}

// Event listeners:
fPlus.addEventListener("click", () => {
  increment(fTicket, fPerTicketCost);
});

fMinus.addEventListener("click", () => {
  decrement(fTicket, fPerTicketCost);
});

ePlus.addEventListener("click", () => {
  increment(eTicket, ePerTicketCost);
});

eMinus.addEventListener("click", () => {
  decrement(eTicket, ePerTicketCost);
});

bookingButton.addEventListener("click", () => {});
