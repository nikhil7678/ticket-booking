let toastTimeout;
let toastHideTimeout;
let toastElement;

function showToast(message) {
    if (!toastElement) {
        toastElement = document.createElement("div");
        toastElement.id = "booking-toast";
        toastElement.setAttribute("role", "status");
        toastElement.setAttribute("aria-live", "polite");
        toastElement.hidden = true;
        document.body.appendChild(toastElement);
    }

    window.clearTimeout(toastTimeout);
    window.clearTimeout(toastHideTimeout);
    toastElement.textContent = message;
    toastElement.hidden = false;
    toastElement.classList.add("is-visible");

    toastTimeout = window.setTimeout(() => {
        toastElement.classList.remove("is-visible");
        toastHideTimeout = window.setTimeout(() => {
            toastElement.hidden = true;
        }, 180);
    }, 3500);
}

window.showToast = showToast;

const matchSelect = document.querySelector("#match");
const standSelect = document.querySelector("#stand");
const quantityInput = document.querySelector("#quantity");
const summaryMatch = document.querySelector("#summary-match");
const summaryStand = document.querySelector("#summary-stand");
const summaryPrice = document.querySelector("#summary-price");
const summaryQuantity = document.querySelector("#summary-quantity");
const summaryTotal = document.querySelector("#summary-total");

const ticketPrices = {
    "match-01": { general: 1500, premium: 3500, vip: 7500 },
    "match-02": { general: 1200, premium: 3000, vip: 6500 },
    "match-03": { general: 1000, premium: 2500, vip: 5500 }
};

function updateBookingSummary() {
    const matchId = matchSelect.value;
    const stand = standSelect.value;
    const quantity = Number(quantityInput.value);
    const matchLabel = matchSelect.selectedOptions[0].textContent.trim();
    const price = ticketPrices[matchId] ? ticketPrices[matchId][stand] : 0;
    const total = price * quantity;

    summaryMatch.textContent = matchId ? matchLabel : "Not selected";
    summaryStand.textContent = standSelect.selectedOptions[0].textContent;
    summaryPrice.textContent = price.toLocaleString("en-IN");
    summaryQuantity.textContent = String(quantity);
    summaryTotal.textContent = total.toLocaleString("en-IN");
    showToast("Booking summary updated.");
}

[matchSelect, standSelect, quantityInput].forEach((control) => {
    control.addEventListener("change", updateBookingSummary);
});

document.querySelector("#match-list").addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
        return;
    }

    const bookButton = event.target.closest(".book-btn");
    if (!bookButton) {
        return;
    }

    const matchId = bookButton.dataset.match;
    const matchOption = matchSelect.querySelector(`option[value="${matchId}"]`);

    if (!matchOption) {
        return;
    }

    matchSelect.value = matchId;
    matchSelect.dispatchEvent(new Event("change", { bubbles: true }));
    document.querySelector("#booking-form").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    showToast(`${matchOption.textContent.trim()} selected. Booking summary updated.`);
});
