const Hapi = require('@hapi/hapi');

const createServer = ({ mathBasic, figureCalculator }) => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
  });

  server.route([
    // {
    //   method: 'GET',
    //   path: '/hello',
    //   handler: () => {
    //     return { value: 'Hello World' };
    //   },
    // },
    // {
    //   method: 'GET',
    //   path: '/hello/{name}',
    //   handler: (request) => {
    //     const { name } = request.params;
    //     return { value: `Hello ${name}` };
    //   },
    // },

    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: (request) => {
        const { a: paramA, b: paramB } = request.params;
        const a = Number(paramA);
        const b = Number(paramB);
        
        // validasi jika bukan angka
        // if (Number.isNaN(a) || Number.isNaN(b)) {
        //   return false;
        // }

        const value = mathBasic.add(a, b);
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/subtract/{a}/{b}',
      handler: (request) => {
        const { a: paramA, b: paramB } = request.params;
        const a = Number(paramA);
        const b = Number(paramB);
        const value = mathBasic.subtract(a, b);
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/multiply/{a}/{b}',
      handler: (request) => {
        const { a: paramA, b: paramB } = request.params;
        const a = Number(paramA);
        const b = Number(paramB);
        const value = mathBasic.multiply(a, b);
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/divide/{a}/{b}',
      handler: (request) => {
        const { a: paramA, b: paramB } = request.params;
        const a = Number(paramA);
        const b = Number(paramB);
        const value = mathBasic.divide(a, b);
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/rectangle/perimeter/{length}/{width}',
      handler: (request) => {
        const { length: paramA, width: paramB } = request.params;
        const length = Number(paramA);
        const width = Number(paramB);
        const value = figureCalculator.calculateRectanglePerimeter(length, width);
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/rectangle/area/{length}/{width}',
      handler: (request) => {
        const { length: paramA, width: paramB } = request.params;
        const length = Number(paramA);
        const width = Number(paramB);
        const value = figureCalculator.calculateRectangleArea(length, width);
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/triangle/perimeter/{sideA}/{sideB}/{sideC}',
      handler: (request) => {
        const { sideA: paramA, sideB: paramB, sideC: paramC } = request.params;
        const sideA = Number(paramA);
        const sideB = Number(paramB);
        const sideC = Number(paramC);
        const value = figureCalculator.calculateTrianglePerimeter(sideA, sideB, sideC);
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/triangle/area/{base}/{height}',
      handler: (request) => {
        const { base: paramA, height: paramB } = request.params;
        const base = Number(paramA);
        const height = Number(paramB);
        const value = figureCalculator.calculateTriangleArea(base, height);
        return { value };
      },
    },
  ]);

  return server;
};

module.exports = createServer;
