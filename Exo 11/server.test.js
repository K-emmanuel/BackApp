const request = require('supertest');
const app = require('./server');

describe('Server Integration Tests', () => {
  test('renvoie la moyenne des nombres', async () => {
    const response = await request(app)
      .post('/average')
      .send([1, 2, 3, 4]);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ average: 2.5 });
  });
});