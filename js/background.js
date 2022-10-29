const images = ["1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const logoText = document.querySelector("#element");

bgImage.src = `img/${chosenImage}`;
bgImage.className = "bgImg";

if(chosenImage === "2.jpg") {
    logoText.style.color = "white";
}

document.body.appendChild(bgImage);
