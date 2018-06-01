// # Crear un programa que muestre si un día es fin de semana según un dato ingresado por el usuario

// - Pedir al usuario mediante `prompt` que ingrese un día de la semana y mostrar en consola un mensaje si el día es fin de semana, hábil o no es un día valido.

var dia = prompt('Por favor, ingresar un día de la semana')

switch (dia) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'miércoles':
  case 'jueves':
  case 'viernes':
    console.log('Es un día hábil')
    break
  case 'sábado':
  case 'sabado':
  case 'domingo':
    console.log('Es un día de fin de semana. A descansar!')
    break
  default:
    console.log('No es un día válido')
    break
}

// switch (result) {
//   case 'Ganó':
//   case 'ganó':
//   case 'Gano':
//   case 'gano':
//     console.log('Sumaste 3 puntos')
//     break
//   case 'Empató':
//     console.log('Sumaste 1 punto')
//     break
//   case 'Pedrió':
//     console.log('Sumaste 0 puntos')
//     break
//   default:
//     console.log('Resultado no correcto')
//     break
// }
