const makeObjectDeepCopy = (obj) => {
  if (!obj) {
    return null;
  }

  if (typeof obj !== 'object') {
    return obj;
  }

  const copiedObject = Array.isArray(obj) ? [...obj] : { ...obj };

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      copiedObject[key] = makeObjectDeepCopy(obj[key]);
    }
  })

  return copiedObject;
};

const selectFromInterval = (arrayOfNumbers, firstOfInterval, lastOfInterval) => {
  const isArrayValid = Array.isArray(arrayOfNumbers) && arrayOfNumbers.every((item) => typeof item === 'number');
  const isArgemuntsValid = isArrayValid && typeof firstOfInterval === 'number' && typeof lastOfInterval === 'number';

  if (!isArgemuntsValid ) {
    throw new Error('Ошибка!');
  };
  
  if (firstOfInterval < lastOfInterval) {
    return arrayOfNumbers.filter((item) => item >= firstOfInterval && item <= lastOfInterval);
  }

  return arrayOfNumbers.filter((item) => item <= firstOfInterval && item >= lastOfInterval);
}

let myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    let currentValue = this.from;
    const lastValue = this.to;
    const isObjectDataValid = typeof this.from === 'number' && typeof this.to === 'number' && this.to > this.from;

    if (!isObjectDataValid) {
      throw new Error('Ошибка!');
    }

    return {
      next() {
        if (currentValue > lastValue) {
          return { done: true };
        }

        const result = {
          value: currentValue,
          done: false,
        };

        currentValue++;

        return result;
      },
    };
  },
};
