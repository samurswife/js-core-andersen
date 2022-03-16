function myFilter(callback, context) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const index = i;
    const array = this;

    if (callback.call(context, element, index, array)) {
      result.push(element);
    }
  }

  return result;
}

function myMap(callback, context) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const index = i;
    const array = this;

    const newElement = callback.call(context, element, index, array);

    result.push(newElement);
  }

  return result;
}

function myForEach(callback, context) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const index = i;
    const array = this;

    callback.call(context, element, index, array);
  }
}

function myReduce(callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
}

Array.prototype.myFilter = myFilter;
Array.prototype.myMap = myMap;
Array.prototype.myForEach = myForEach;
Array.prototype.myReduce = myReduce;
