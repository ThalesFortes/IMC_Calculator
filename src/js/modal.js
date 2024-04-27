const Modal = {
  wrapper : document.querySelector(".modal_wrapper"),
  buttonClose: document.querySelector(".modal_wrapper button.close"),
  messages: document.querySelector(".modal_wrapper .title"),
  open (value){
    message(value)
    openModal()
  },
  close(){
    closeModal()
  }
}


function openModal() {
  Modal.wrapper.classList.add('open')
}

function closeModal() {
  Modal.buttonClose.onclick = () => {Modal.wrapper.classList.remove('open')}
}

function message(value){
  Modal.messages.innerText = `Seu IMC é de ${value}`
}

export {Modal}