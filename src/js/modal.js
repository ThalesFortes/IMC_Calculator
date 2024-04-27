const Modal = {
  wrapper : document.querySelector(".modal_wrapper"),
  buttonClose: document.querySelector(".modal_wrapper button.close"),
  messages: document.querySelector(".modal_wrapper .title"),
  modalIsOpen: false,
  open (value){
    message(value)
    openModal()
    Modal.modalIsOpen = true
  },
  close(){
    closeModal()
    Modal.modalIsOpen= false
  }
}


function openModal() {
  Modal.wrapper.classList.add('open')
}


function closeModal() {
  Modal.buttonClose.onclick = () => {Modal.wrapper.classList.remove('open')}
}

function closeModalKeyPress(e) {
  if( e.key === "Escape"){
    Modal.wrapper.classList.remove('open')
    Modal.modalIsOpen = false
  }   
}

function message(value){
  Modal.messages.innerText = `Seu IMC é de ${value}`
}

export {Modal, closeModalKeyPress}