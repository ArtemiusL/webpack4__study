const testCurrent = (num) => num * num;

const globalTest = (num) => {
  console.log('квадрат вашего числа = ', testCurrent(num));
}

export default globalTest;