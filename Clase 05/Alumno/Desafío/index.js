console.log('init app')

var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
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

function Student (firstName, lastName, dni, email) {
  // Private properties
  var id = Math.random()
  var modified = false

  // Public properties
  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  // Public methods
  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    if !lastName
    return firstName + ' ' + lastName
    else 
    
  }
}

// No supe como salvar el error de que un lastName no existe.

var student
var newStudent
var newStudents = []

for (var i = 0; i < students.length; i++) {
  student = students[i]
  newStudent = new Student(
    student.firstName,
    student.lastName,
    student.dni,
    student.email
  )
  newStudents.push(newStudent)
}

console.log(newStudents[1].getFullName())
