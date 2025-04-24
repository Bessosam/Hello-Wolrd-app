const helloButton = document.getElementById("helloButton");


helloButton.addEventListener("click", function () {

    helloButton.style.display = "none";


    const message = document.createElement("div");
    message.textContent = "Hello World again";

    const container = document.querySelector(".container");
    container.appendChild(message);
});
