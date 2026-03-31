document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".task");
    const counter = document.getElementById("counter");

    function updateCounter() {
        let count = 0;
        checkboxes.forEach(box => {
            if (box.checked) count++;
        });
        counter.textContent = count;
    }

    checkboxes.forEach(box => {
        box.addEventListener("change", updateCounter);
    });
});
