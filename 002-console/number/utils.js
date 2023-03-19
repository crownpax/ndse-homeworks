const randNumber = Math.floor(Math.random() * 100) + 1

export const checkNumber = (inputData, input) => {

    const inputNumber = Number(inputData)

    if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 100) {
      console.log('Некорректное значение! Введите число в диапозоне от 0 до 100')
      return
    }

    if (inputNumber > randNumber) {
      console.log('Меньше')
    } else if (inputNumber < randNumber) {
      console.log('Больше')
    } else if (inputNumber === randNumber) {
      console.log('Отгадано число', randNumber)
      input.close()
    }
  }