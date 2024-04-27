

const Modal = {
  height: document.querySelector("#height"),
  wheight: document.querySelector("#wheight"),
  open (){
    document.querySelector(".modal_wrapper").classList.add('open')
  },
  close(){
    modalWrapper.classList.remove('open')
  }
}

export {Modal}