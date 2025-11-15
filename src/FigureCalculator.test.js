const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea function', () => {
    const figureCalculator = new FigureCalculator(MathBasic);

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });
});

describe('A calculateRectanglePerimeter function', () => {
  it('should throw error when not given 2 parameters', () => {
    const figureCalculator = new FigureCalculator(MathBasic);

    expect(() => figureCalculator.calculateRectanglePerimeter()).toThrow();
    expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrow();
    expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrow();
  });

  it('should throw error when given with non-number parameters', () => {
    const figureCalculator = new FigureCalculator(MathBasic);

    expect(() => figureCalculator.calculateRectanglePerimeter('1', 2)).toThrow();
    expect(() => figureCalculator.calculateRectanglePerimeter(1, '2')).toThrow();
    expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrow();
  });

  it('should return correct value based on rectangle perimeter formula', () => {
    // Arrange
    const length = 20;
    const width = 10;
    const spyAdd = jest.spyOn(MathBasic, 'add');
    const spyMultiply = jest.spyOn(MathBasic, 'multiply');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateRectanglePerimeter(length, width);

    // Assert
    expect(result).toEqual(60); // 2 * (length + width)
    expect(spyAdd).toHaveBeenCalledWith(length, width);
    expect(spyMultiply).toHaveBeenCalledWith(2, 30); // 2 * (length + width)
  });
});

describe('A calculateRectangleArea function', () => {
  it('should throw error when not given 2 parameters', () => {
    const figureCalculator = new FigureCalculator(MathBasic);

    expect(() => figureCalculator.calculateRectangleArea()).toThrow();
    expect(() => figureCalculator.calculateRectangleArea(1)).toThrow();
    expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrow();
  });

  it('should throw error when given with non-number parameters', () => {
    const figureCalculator = new FigureCalculator(MathBasic);

    expect(() => figureCalculator.calculateRectangleArea('1', 2)).toThrow();
    expect(() => figureCalculator.calculateRectangleArea(1, '2')).toThrow();
    expect(() => figureCalculator.calculateRectangleArea([], {})).toThrow();
  });

  it('should return correct value based on rectangle area formula', () => {
    // Arrange
    const length = 20;
    const width = 10;
    const spyMultiply = jest.spyOn(MathBasic, 'multiply');
    const figureCalculator = new FigureCalculator(MathBasic);

    // CLEAR spy sebelum test
    spyMultiply.mockClear();

    // Action
    const result = figureCalculator.calculateRectangleArea(length, width);

    // Assert
    expect(result).toEqual(200); // length * width
    expect(spyMultiply).toHaveBeenCalledWith(length, width); // length * width
  });
});

describe('A calculateTrianglePerimeter function', () => {
  it('should throw error when not given 3 parameters', () => {
    const figureCalculator = new FigureCalculator(MathBasic);

    expect(() => figureCalculator.calculateTrianglePerimeter()).toThrow();
    expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrow();
    expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrow();
  });

  it('should throw error when given with non-number parameters', () => {
    const figureCalculator = new FigureCalculator(MathBasic);

    expect(() => figureCalculator.calculateTrianglePerimeter('1', 2, 3)).toThrow();
    expect(() => figureCalculator.calculateTrianglePerimeter(1, '2', 3)).toThrow();
    expect(() => figureCalculator.calculateTrianglePerimeter([], {}, null)).toThrow();
  });

  it('should return correct value based on triangle perimeter formula', () => {
    // Arrange
    const a = 3;
    const b = 4;
    const c = 5;
    const spyAdd = jest.spyOn(MathBasic, 'add');
    const figureCalculator = new FigureCalculator(MathBasic);

    // CLEAR spy sebelum test
    spyAdd.mockClear();

    // Action
    const result = figureCalculator.calculateTrianglePerimeter(a, b, c);

    // Assert
    expect(result).toEqual(12); // a + b + c
    expect(spyAdd).toHaveBeenCalledWith(b, c);
    expect(spyAdd).toHaveBeenCalledWith(a, 9);
  });
});

describe('A calculateTriangleArea function', () => {
  it('should throw error when not given 2 parameters', () => {
    const figureCalculator = new FigureCalculator(MathBasic);

    expect(() => figureCalculator.calculateTriangleArea()).toThrow();
    expect(() => figureCalculator.calculateTriangleArea(1)).toThrow();
    expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrow();
  });

  it('should throw error when given with non-number parameters', () => {
    const figureCalculator = new FigureCalculator(MathBasic);

    expect(() => figureCalculator.calculateTriangleArea('1', 2)).toThrow();
    expect(() => figureCalculator.calculateTriangleArea(1, '2')).toThrow();
    expect(() => figureCalculator.calculateTriangleArea([], {})).toThrow();
  });

  it('should return correct value based on triangle area formula', () => {
    // Arrange
    const base = 3;
    const height = 4;
    const spyMultiply = jest.spyOn(MathBasic, 'multiply');
    const spyDivide = jest.spyOn(MathBasic, 'divide');
    const figureCalculator = new FigureCalculator(MathBasic);

    // CLEAR spy sebelum test
    spyMultiply.mockClear();
    spyDivide.mockClear();

    // Action
    const result = figureCalculator.calculateTriangleArea(base, height);

    // Assert
    expect(result).toEqual(6); // (base * height) / 2
    expect(spyMultiply).toHaveBeenCalledWith(base, height);
    expect(spyDivide).toHaveBeenCalledWith(12, 2); // (base * height) / 2
  });
});