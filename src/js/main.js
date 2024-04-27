import { calculateIMC, notANumber } from "./utils.js";
import { Modal } from "./modal.js";

const form = document.querySelector("form")




form.onsubmit = event => {
  event.preventDefault();
  const inputHeight = document.getElementById("height").value
  const inputWheight = document.getElementById("wheight").value
  
  let imcResult =  calculateIMC(inputWheight,inputHeight)
  if (notANumber(inputHeight) || notANumber(inputWheight)){
    return
  }

 
  
  Modal.open(imcResult)
  Modal.close()

}



