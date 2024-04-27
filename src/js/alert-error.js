export const erroAlert = {
  element:document.querySelector(".alert_error"),
  open (){
    this.element.classList.add("open")
  },
  close(){
    this.element.classList.remove("open")
  }
}



