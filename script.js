document.addEventListener("DOMContentLoaded", function () {
    const helloButton = document.getElementById("helloButton");
    const heading = document.querySelector("h1");

    helloButton.addEventListener("click", function () {
        
        heading.remove();

        
        helloButton.style.display = "none";

        
        const message = document.createElement("div");
        message.textContent = "Hello FRK24S again";
        message.classList.add("new-message");

        
        const container = document.querySelector(".container");
        container.appendChild(message);
    });
});
