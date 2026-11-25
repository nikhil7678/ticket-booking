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

document.querySelector("#match-list").addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
        return;
    }

    const bookButton = event.target.closest(".book-btn");
    if (!bookButton) {
        return;
    }

    const matchSelect = document.querySelector("#match");
    const matchId = bookButton.dataset.match;
    const matchOption = matchSelect.querySelector(`option[value="${matchId}"]`);

    if (!matchOption) {
        return;
    }

    matchSelect.value = matchId;
    document.querySelector("#booking-form").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    showToast(`${matchOption.textContent.trim()} selected. Complete your booking below.`);
});
