const images = ["1.jpg", "2.jpg"];
let index = Math.floor(Math.random() * images.length);
let chosenImage = images[index];
const bgImage = document.createElement("img");
const logoText = document.querySelector("#element");
const changebtn = document.querySelector(".imgchangebtn");

bgImage.className = "bgImg";

document.body.appendChild(bgImage);

const changeImg = () => {
    index += 1;
    if(index >= images.length) {
        index = 0;
    }
    chosenImage = images[index];
    bgImage.src = `img/${chosenImage}`;
    if(chosenImage === "2.jpg") {
        logoText.style.color = "white";
    } else {
        logoText.style.color = "black";
    }
};

changeImg();
changebtn.addEventListener("click", changeImg);
