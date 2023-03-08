const body = document.querySelector("body");
const search = document.querySelector(".search");
const header = document.querySelector(".header");
const textMode = document.getElementById("change-mode");
const modImg = document.getElementById("mod");

const gitLight = "./assets/night-mode.png";
const gitNight = "/night-mode (1).png";
const modalErrorSet = document.querySelector(".modal-error.modal-error");
const imgWarning = document.querySelector('.warningImg')

function bodymode() {
  Contain.classList.toggle("active-mod");
  search.classList.toggle("light-mode");
  body.classList.toggle("active");
  header.classList.toggle("light");

  body.classList.contains("active")

  
  
  ?    modalErrorSet.classList.add('modal-mode')
       (modImg.setAttribute("src", gitNight)((textMode.innerHTML = "DARK")))
    
  :   (modalErrorSet.classList.remove('modal-mode'))
      modImg.setAttribute("src", gitLight)
      textMode.innerHTML = "LIGHT";
}

