// Задание 3

// Написать функцию, которая создает пустой объект, но без прототипа.

function createObjNoPrototype() {
  emptyObj = Object.create(null);
  return emptyObj
}

let emptyObj = createObjNoPrototype()

console.log(emptyObj)