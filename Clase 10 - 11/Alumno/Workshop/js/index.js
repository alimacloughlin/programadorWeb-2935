console.log("init app")



/**
 * Defino la función getLocalList
 * @param { string } key 
 */
function getLocalList (key) {
    // Valido que reciba un string
    if (typeof key === 'string') {
      // Trato de recuperar la lista del localStorage
      var localList = localStorage.getItem(key)
      if (localList) {
        // Si la lista existía la tranformo en JavaScript y la devuelvo
        var parsedList = JSON.parse(localList)
        return parsedList
      } else {
        // Sino existía devuelvo un array vacío
        return []
      }
    }
  }
  
  // Pruebo la función
  var studentsList = getLocalList('studentsList')
  
  if (studentsList) {
    // Muestro el resultado de la función
    console.log(studentsList)
    if (studentsList.length) {
      console.log('Tiene guardados ' + studentsList.length + ' estudiantes')
    } else {
      console.log('La lista esta vacía')
    }
  } else {
    console.log('Le pase una key incorrecta')
  }



  // Datos iniciales

var oldStudents = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987,
      email: 'juan@gmail.com'
    },
    {
      firstName: 'Ana',
      dni: 45678989,
      email: 'ana@gmail.com'
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956,
      email: 'pedro@gmail.com'
    }
  ]
  
  // Función constructora
  
  function Student (firstName, lastName, dni, email) {
    // Propiedades privadas
    var id = dni
  
    // Propiedades públicas
    this.firstName = firstName
    this.lastName = lastName
    this.dni = dni
    this.email = email
  
    // Métodos públicos
    this.getId = function () {
      return id
    }
  
    // var name = firstName || 'default'
  
    this.getFullName = function () {
      return (this.firstName || '') + ' ' + (this.lastName || '')
  
      // if (this.firstName && this.lastName) {
      //   return this.firstName + ' ' + this.lastName
      // } else if (this.firstName && !this.lastName) {
      //   return this.firstName
      // } else if (!this.firstName && this.lastName) {
      //   return this.lastName
      // } else {
      //   return ''
      // }
    }
  }
  
  var oldStudent
  
  var newStudent
  var newStudents = []
  
  // Lleno un nuevo Array con los objetos creados con la función Car
  for (var i = 0; i < oldStudents.length; i++) {
    oldStudent = oldStudents[i]
    newStudent = new Student(
      oldStudent.firstName,
      oldStudent.lastName,
      oldStudent.dni,
      oldStudent.email
    )
    newStudents.push(newStudent)
  }
  
  console.log(oldStudents)
  console.log(newStudents)
  
  for (var i = 0; i < newStudents.length; i++) {
    console.log(newStudents[i].getFullName())
  }
  