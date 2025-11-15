const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

const figureCalculator = new FigureCalculator(MathBasic);

// describe('Hapi Server', () => {
//   it('should response 200 with payload value "Hello World" when GET /hello', async () => {
//     // Arrange
//     const server = createServer();

//     // Action
//     const response = await server.inject({
//       method: 'GET',
//       url: '/hello',
//     });

//     // Assert
//     const responseJson = JSON.parse(response.payload);
//     expect(response.statusCode).toEqual(200);
//     expect(responseJson.value).toEqual('Hello World');
//   });

//   it('should response 200 with payload value "Hello john" when GET /hello/john', async () => {
//     // Arrange
//     const server = createServer();

//     // Action
//     const response = await server.inject({
//       method: 'GET',
//       url: '/hello/john',
//     });

//     // Assert
//     const responseJson = JSON.parse(response.payload);
//     expect(response.statusCode).toEqual(200);
//     expect(responseJson.value).toEqual('Hello john');
//   });
// });

/** 
 output:
 PASS  src/createServer.test.js
  Hapi Server
    ✓ should response 200 with payload value "Hello World" when GET /hello (96 ms)
    ✓ should response 200 with payload value "Hello john" when GET /hello/john (12 ms)
*/

describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should response with a status code of 200 and the payload value is additional result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      spyAdd.mockClear(); // bersihkan spy dari test lain
      const server = createServer({ mathBasic: MathBasic });
  
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });
  
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /subtract', () => {
    it('should response with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      spySubtract.mockClear(); // bersihkan spy dari test lain
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4);
      expect(spySubtract).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /multiply', () => {
    it('should response with a status code of 200 and the payload value is multiple result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 5;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      spyMultiply.mockClear(); // bersihkan spy dari test lain
      const server = createServer({ mathBasic: MathBasic }); 
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(50);
      expect(spyMultiply).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /divide', () => {
    it('should response with a status code of 200 and the payload value is divide result of a and b correctly', async () => {
      // Arrange
      const a = 20;
      const b = 4;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      spyDivide.mockClear(); // bersihkan spy dari test lain
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(5);
      expect(spyDivide).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/perimeter', () => {
    it('should response with a status code of 200 and the payload value is perimeter result of length and width of rectangle correctly', async () => {
      // const figureCalculator = new FigureCalculator(MathBasic);
      // Arrange
      const length = 10;
      const width = 5;
      const spyPerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
      spyPerimeter.mockClear(); // bersihkan spy dari test lain
      const server = createServer({ mathBasic: MathBasic, figureCalculator });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyPerimeter).toHaveBeenCalledWith(length, width);
    });
  });

  describe('when GET /rectangle/area', () => {
    it('should response with a status code of 200 and the payload value is area result of length and width of rectangle correctly', async () => {
      // const figureCalculator = new FigureCalculator(MathBasic);
      // Arrange
      const length = 10;
      const width = 5;
      const spyArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
      spyArea.mockClear(); // bersihkan spy dari test lain
      const server = createServer({ mathBasic: MathBasic, figureCalculator });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(50);
      expect(spyArea).toHaveBeenCalledWith(length, width);
    });
  });

  describe('when GET /triangle/perimeter', () => {
    it('should response with a status code of 200 and the payload value is perimeter result of sideA, sideB, and sideC of triangle correctly', async () => {
      // Arrange
      const sideA = 3;
      const sideB = 4;
      const sideC = 5;
      const spyPerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
      spyPerimeter.mockClear(); // bersihkan spy dari test lain
      const server = createServer({ mathBasic: MathBasic, figureCalculator });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${sideC}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(12);
      expect(spyPerimeter).toHaveBeenCalledWith(sideA, sideB, sideC);
    });
  });

  describe('when GET /triangle/area', () => {
    it('should response with a status code of 200 and the payload value is area result of base and height of triangle correctly', async () => {
      // Arrange
      const base = 3;
      const height = 4;
      const spyArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
      spyArea.mockClear(); // bersihkan spy dari test lain
      const server = createServer({ mathBasic: MathBasic, figureCalculator });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(6);
      expect(spyArea).toHaveBeenCalledWith(base, height);
    });
  });
});