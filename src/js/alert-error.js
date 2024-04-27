const erroAlert = document.querySelector(".alert_error")

export function alertError (){
   return erroAlert.classList.toggle("open")
}

