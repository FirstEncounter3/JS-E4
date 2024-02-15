// Задание 5

// Переписать консольное приложение из предыдущего юнита на классы.

// Родитель

class ElectricalAppliances {
  constructor(capacity, name) {
      this.state = false;
      this.capacity = capacity;
      this.name = name;
  }
  getState() {
      return this.state;
  }
  getName() {
      return this.name;
  }
  turnOn() {
      result = this.state = true;
      console.log('Питание включено');
      return result;
  }
  turnOff() {
      result = this.state = false;
      console.log('Питание выключено');
      return result;
  }
}

// Дочерний объект

class Gadget extends ElectricalAppliances {
  constructor(capacity, name, display) {
      super(capacity, name);
      this.internetAccess = true;
      this.display = display;
      this.wireless = true;
      this.internetAccesState = false;
      this.chargePercentage = 0;
  }
  turnOnInternetAcces() {
      result = this.internetAccesState = true;
      console.log('Доступ в интернет включен');
      return result;
  }
  turnOffInternetAcces() {
      result = this.internetAccesState = false;
      console.log('Доступ в интернет выключен');
      return result;
  }
  chargerConnected() {
      console.log("Подключено зарядное устройство");
  }
  chargerDisconnected() {
      console.log("Зарядное устройство отключено");
  }
}

// Экземпляры родительского объекта

const lighter = new ElectricalAppliances(45, "Фонарик");
const kettle = new ElectricalAppliances(89, "Чайник");


// Экземпляры дочернего объекта

const smartWatch = new Gadget(100, "Смартчасы", true);
const laptop = new Gadget(250, "Ноутбук", true);