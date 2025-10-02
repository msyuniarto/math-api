const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima dua paramater');
    }

    // cara assign variable
    // const a = args[0];
    // const b = args[1];

    // cara simple assign variable
    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return a + b;
  },
  substract: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi substract hanya menerima dua paramater');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return a - b;
  },
  multiply: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi multiply hanya menerima dua paramater');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return a * b;
  },
  divide: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi divide hanya menerima dua paramater');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return a / b;
  },
}

module.exports = MathBasic;
