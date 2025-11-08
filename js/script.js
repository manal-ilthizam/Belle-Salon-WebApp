document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("This is a placeholder button. You can add real functionality here!");
        });
    });
});
