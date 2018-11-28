const testCurrent = (num) => num * num;

const globalTest = (num) => {
  document.body.innerHTML = 'квадрат вашего числа = ' + testCurrent(num);
}

export default globalTest;