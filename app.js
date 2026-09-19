const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");

let count = 2;

const gifs = [
  "cat-heart.gif",
  "rusure.gif",
  "3shocked-1.gif",
  "4.crying.gif",
  "5.crying.gif",
  "idc.gif"
];

// Preload GIFs
gifs.forEach((gifSrc) => {
  const img = new Image();
  img.src = gifSrc;
});

function setGif(src, message) {
  gif.src = src;
  text.textContent = message;
}

no.addEventListener("click", () => {
  if (count === 2) {
    setGif("rusure.gif", "You meant to press YES right? 🤨");
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count === 3) {
    setGif("3shocked-1.gif", "Your hand must have slipped right? 🥹");
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count === 4) {
    setGif("4.crying.gif", "I'm gonna cry 😭");
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count === 5) {
    setGif("5.crying.gif", "Pretty Please 🥺😘");
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
    count++;
  }
});

yes.addEventListener("click", () => {
  vid.style.display = "block";
  setGif("idc.gif", "Knew it babe 😘");

  yes.innerHTML = '<a href="https://www.instagram.com/miko.moj/" target="_blank" rel="noopener noreferrer">Message me</a>';
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";

  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
