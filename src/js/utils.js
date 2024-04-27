export function calculateIMC(wheight, height){
  return (wheight / ((height / 100) ** 2)).toFixed(2)
}

export function notANumber(value){
  return isNaN(value) || value == ""
}