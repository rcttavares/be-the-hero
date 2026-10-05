const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ong', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'Rafael Tavares',
      email: 'rafael.tawares@gmail.com',
      whatsapp: '31999201965',
      city: 'Belo Horizonte',
      uf: 'MG',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });

  it('should be able to list ONGs', async () => {
    const ong = {
      name: 'Rafael Tavares',
      email: 'rafael.tawares@gmail.com',
      whatsapp: '31999201965',
      city: 'Belo Horizonte',
      uf: 'MG',
    };
    const { body: created } = await request(app).post('/ongs').send(ong);

    const response = await request(app).get('/ongs');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: created.id, ...ong }]);
  });
});
