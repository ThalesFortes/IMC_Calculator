import { calculateIMC, notANumber } from "./utils.js";
import { Modal } from "./modal.js";
import { alertError } from "./alert-error.js";

const form = document.querySelector("form")
let error = false

form.onsubmit = event => {
  event.preventDefault();
  const inputHeight = document.getElementById("height").value
  const inputWheight = document.getElementById("wheight").value
  
  let imcResult =  calculateIMC(inputWheight,inputHeight)
  if (notANumber(inputHeight) || notANumber(inputWheight)){
    error = true
    return  alertError() 
    }

  error ? alertError() : error = false

  Modal.open(imcResult)
  Modal.close()
}



