const openModalButton = document.querySelector("#open-modal");
const openModalButton2 = document.querySelector("#open-modal2");
const openModalButton3 = document.querySelector("#open-modal3");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#content-modal");
const fade = document.querySelector(".modalcontainer");

openModalButton.addEventListener("click", () =>{
    fade.style.display = "flex";
    modal.style.display = "block";
})

openModalButton2.addEventListener("click", () =>{
    fade.style.display = "flex";
    modal.style.display = "block";
})

openModalButton3.addEventListener("click", () =>{
    fade.style.display = "flex";
    modal.style.display = "block";
})

closeModalButton.addEventListener("click", () =>{
    fade.style.display = "";
    modal.style.display = "";
})

fade.addEventListener("click", () =>{
    fade.style.display = "";
    modal.style.display = "";
})