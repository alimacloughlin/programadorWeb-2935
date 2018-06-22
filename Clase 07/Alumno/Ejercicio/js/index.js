console.log('init app')

var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

saveLocalListInJSON('list', studentsList) // Guarda la lista en el localStorage en formato JSON

function saveLocalListInJSON (key, list) {
  savedList = localStorage.getItem('list')
  JSONList = JSON.parse(savedList)
  // pasos de verificacion
  stringyList = JSON.stringify(JSONList)
  localStorage.setItem('list', stringyList)
}
