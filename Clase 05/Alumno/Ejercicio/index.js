console.log('init app')

var cars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: 'Audi TT',
    brand: 'Audi',
    year: 2017
  },
  {
    model: 'Gran turismo',
    brand: 'Maserati',
    year: 2018
  }
]

function Car (model, brand, year) {
  // Private properties
  var id = Math.random()
  var modified = false

  // Public properties
  this.model = model
  this.brand = brand
  this.year = year

  // Public method
  this.getCarName = function () {
    return model + ' ' + brand + ' ' + year
  }
}

var car
var newCar
var newCars = []

for (var i = 0; i < cars.length; i++) {
  car = cars[i]
  newCar = new Car(car.model, car.brand, car.year)
  newCars.push(newCar)
}

var car1 = new Car('Suran', 'volkswagen', 2015)

console.log(car1.getCarName())

console.log(newCars[1].getCarName())
// # Crear una función constructora de objetos Car

// - Crear una función que permita crear un objeto Car mediante el constructor `new`, el objeto deberá tener las siguientes propiedades:
//    - Publicas:
//       - `model`
//       - `brand`
//       - `year`
//     - Privadas:
//       - `id` generada automáticamente al crear el objeto.
// - El objeto deberá tener las siguientes métodos:
//    - Públicos:
//      - `getCarName` deberá devolver un String con el modelo, marca y año del auto.
// - Crear tres objetos usando los datos de prueba y probar su método `getCarName`.

// **Datos de prueba:**

// ```js
// var cars = [
//   {
//     model:'Suran',
//     brand: 'volkswagen',
//     year: 2015
//   },
//   {
//     model:`Audi TT`,
//     brand:'Audi',
//     year: 2017
//   },
//   {
//     model:`Gran turismo`,
//     brand:'Maserati',
//     year: 2018
//   }
// ]
// ```

// > Existe una función que devuelve un número random que nos puede servir para hacer un id único.

// ```js
// var randomNumber = Math.random() // Esto devuelve un número del estilo 0.11296860298890499
// ```

// **Documentación:**

// [Math random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

// [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
