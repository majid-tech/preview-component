document.addEventListener("DOMContentLoaded", () => {
    const shareBtn = document.getElementById("share-btn");
    const popover = document.querySelector(".popover");

    shareBtn.addEventListener("click", () => {
        popover.classList.toggle("active");
    });

    // Optional: Close popover when clicking outside
    document.addEventListener("click", (event) => {
        if (!shareBtn.contains(event.target) && !popover.contains(event.target)) {
            popover.classList.remove("active");
        }
    });
});
