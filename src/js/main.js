import { calculateIMC, notANumber } from "./utils.js";
import { Modal ,closeModalKeyPress } from "./modal.js";
import { erroAlert } from "./alert-error.js";

const form = document.querySelector("form")





form.onsubmit = event => {
  event.preventDefault();
  let inputHeight = document.getElementById("height")
  let inputWheight = document.getElementById("wheight")
  let height = inputHeight.value
  let wheight = inputWheight.value
 
  inputHeight.oninput = () => erroAlert.close()
  inputWheight.oninput = () => erroAlert.close()
  
  let imcResult =  calculateIMC(wheight,height)
  let isNotANumber = notANumber(height) || notANumber(wheight)
  
  if (isNotANumber){
    return erroAlert.open() 
    }

 

  Modal.open(imcResult)

  erroAlert.close()

  document.addEventListener('keydown', closeModalKeyPress)
  Modal.close()

  inputHeight.value = ''
  inputWheight.value = ''
    
}


