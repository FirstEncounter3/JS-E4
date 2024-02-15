// Задание 2

// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

let car = {
  model: 'Toyota',
};

function propertyInObj(obj, str) {
  return str in obj
}

console.log(propertyInObj(car, "model")) // true
console.log(propertyInObj(car, "year")) // false