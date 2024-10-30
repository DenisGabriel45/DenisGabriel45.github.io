document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".custom-button").forEach(button => {
        button.addEventListener("click", function() {
            selectButton(this);
        });
    });
});

function selectButton(selectedButton) {
    document.querySelectorAll(".custom-button").forEach(button => button.classList.remove("active"));
    selectedButton.classList.add("active");
}