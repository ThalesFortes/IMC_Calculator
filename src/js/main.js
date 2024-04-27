import { calculateIMC, notANumber } from "./utils.js";
import { Modal } from "./modal.js";

const form = document.querySelector("form")

let height = document.querySelector("#height")
let wheight = document.querySelector("#wheight")


form.onsubmit = event => {
  event.preventDefault();
  Modal.open()
}

function openMoldal (){
  wheight = wheight.value
  console.log(wheight)
  height = height.value
 
}

