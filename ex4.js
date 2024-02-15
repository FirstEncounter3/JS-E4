// Задание 4

// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.


// Родитель

function ElectricalAppliances(capacity, name) {
  this.state = false;
  this.capacity = capacity;
  this.name = name;
}

ElectricalAppliances.prototype.getState = function() {
  return this.state
}

ElectricalAppliances.prototype.getName = function() {
  return this.name
}

ElectricalAppliances.prototype.turnOn = function() {
  result = this.state = true;
  console.log('Питание включено')
  return result
}

ElectricalAppliances.prototype.turnOff = function() {
  result = this.state = false;
  console.log('Питание выключено')
  return result
}

// Дочерний объект

function Gadget(capacity, name, display) {
  ElectricalAppliances.call(this, capacity, name)
  this.internetAccess = true;
  this.display = display;
  this.wireless = true;
  this.internetAccesState = false;
  this.chargePercentage = 0;
}

Gadget.prototype = new ElectricalAppliances();


Gadget.prototype.turnOnInternetAcces = function() {
  result = this.internetAccesState = true;
  console.log('Доступ в интернет включен')
  return result
}

Gadget.prototype.turnOffInternetAcces = function() {
  result = this.internetAccesState = false;
  console.log('Доступ в интернет выключен')
  return result
}

Gadget.prototype.chargerConnected = function() {
  console.log("Подключено зарядное устройство")
}

Gadget.prototype.chargerDisconnected = function() {
  console.log("Зарядное устройство отключено")
}

// Экземпляры родительского объекта

const lighter = new ElectricalAppliances(45, "Фонарик");
const kettle = new ElectricalAppliances(89, "Чайник");


// Экземпляры дочернего объекта

const smartWatch = new Gadget(100, "Смартчасы", true);
const laptop = new Gadget(250, "Ноутбук", true);