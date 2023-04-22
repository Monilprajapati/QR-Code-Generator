let imgBox = document.getElementById("imgBox");
let input = document.getElementById("input");
let qrImg = document.getElementById("qr");
let Btn = document.getElementById("Btn");
let error = document.querySelector(".error");

input.onclick = () => {
  error.classList.remove("error-message");
  imgBox.classList.remove("show-Img");
};

Btn.onclick = () => {
  imgBox.classList.remove("show-Img");
  if (input.value.length == 0) {
    imgBox.classList.remove("show-Img");
    error.classList.add("error-message");
    // error.classList.remove("error");
  }
  if (input.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
    imgBox.classList.add("show-Img");
    error.classList.remove("error-message");
  }
};
