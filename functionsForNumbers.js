const ERROR_MESSAGE = 'Некорректный ввод!';

const getNumber = (order) => {
	const number = prompt(`Введите ${order} число:`);

	if (!number) {
		return NaN;
	}

	return Number(number);
}

const printError = () => {
	console.log(ERROR_MESSAGE);
	return false;
}

const isValid = (number) => {
	if (isNaN(number)) {
		return printError();
	}
	return true;
}

const numberToBase = () => {
	const firstNumber = getNumber('первое');
	const secondNumber = getNumber('второе');
	const IS_VALID = !isNaN(firstNumber) && !isNaN(secondNumber) && secondNumber >= 2 && secondNumber <= 10;

	if (!IS_VALID) {
		return printError();
	}

	console.log(firstNumber.toString(secondNumber));
}

const addAndDivide = () => {
	const firstNumber = getNumber('первое');
	const secondNumber = getNumber('второе');
	if (!isValid(firstNumber) || !isValid(secondNumber)) {
		return;
	}

	console.log(`Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}.`);
}

document.querySelector('#base').addEventListener('click', numberToBase);
document.querySelector('#operations').addEventListener('click', addAndDivide);
