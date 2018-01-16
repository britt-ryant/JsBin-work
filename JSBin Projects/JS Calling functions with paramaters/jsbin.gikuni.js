//write your answers below

var sayHello = function (name) {
    return "Hello, " + name;
}

sayHello("Bill");

var areBothEven = function (num1, num2) {
    if (num1%2 === 0 && num2%2 ===0) {
      return true;
    }
      return false;
 }

var hotOrNot = function (temp) {
  if (temp >= 70) {
    return "Hot!";
  }
    return "Not Hot";
}