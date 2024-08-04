const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const imgBox = document.querySelector("#imgBox");
const qrImg = document.querySelector("#qrImg");
const qrText = document.querySelector("#qrText");

const genereteQr = () => {
  if (qrText.value.length > 0) {
    qrImg.src = `${apiUrl}${qrText.value}`;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error"); // animacija napravljena da se pomjera input polje lijevo desno sekundu ako bude praznu kod u css pod klasom error
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
};
