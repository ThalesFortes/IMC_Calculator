export function calculateIMC(wheight, height){
  return (( height * height ) /wheight )
}

export function notANumber(value){
  return isNaN(value) || value == ""
}