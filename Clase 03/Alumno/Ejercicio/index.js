console.log('Init app')

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

var day = prompt('Enter a day')

for (var i = 0; i < daysOfTheWeek.length; i++) {
  day = daysOfTheWeek[i]

  switch (day) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      console.log(day + ' is a weekday')
      break
    case 'Sábado':
    case 'Sabado':
    case 'Domingo':
      console.log(day + ' is a weekend')
      break
    default:
      console.log(day + ' is an invalid day')
      break
  }
}

console.log(daysOfTheWeek[3])
