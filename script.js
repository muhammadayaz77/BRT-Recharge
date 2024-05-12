const cards = document.querySelectorAll("#cards");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const rechargeAmount = card.innerHTML;
        localStorage.setItem("rechargeAmount", rechargeAmount);
        window.location.href = "lastScreen.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const rechargeAmount = localStorage.getItem("rechargeAmount");
    document.querySelector(".newBalance").textContent = rechargeAmount;
    localStorage.removeItem("rechargeAmount");
});