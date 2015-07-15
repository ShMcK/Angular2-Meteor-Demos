var runner = (
  // todo
);

driver.get('http:/localhost:3000/');

// Buttons
var resetBtn = driver.findElement(By.id('reset'));

function setCountBtn (number) {
  return driver.findElement(by.id(number.toString()));
}




