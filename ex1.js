// Задание 1 

// Написать, функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

let person = {
  name: 'John',
  age: 20
};

const student = Object.create(person);
student.courseOfStudy = '1';

const teacher = Object.create(person);
teacher.degree = "Ph.D";


function getValuesNKeysObject(obj) {
  for (let [key, value] of Object.entries(obj)) {
    if (obj.hasOwnProperty(key)) {
      console.log([key, value]);
    }
  }
}

getValuesNKeysObject(student);
getValuesNKeysObject(teacher);