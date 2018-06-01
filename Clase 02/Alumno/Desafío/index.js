var gender = prompt('Ingrese su género', 'Male, Female or Other')
var age = prompt('Cuántos años tenés?')

var message
switch (gender) {
  case 'male':
  case 'Male':
    message = 'Sr., '
    break
  case 'Female':
  case 'female':
    message = 'Sra., '
    break
  case 'Other':
  case 'other':
    message = 'Sx., '
    break
  default:
    message = 'Unknown response. '
    break
}

if (age < 18) {
  console.log(message + 'usted es menor de edad')
} else if (age >= 18) {
  console.log(message + 'usted es mayor de edad')
} else {
  console.log(message + 'Edad inválida')
}
