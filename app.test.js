const request = require('supertest');
const app = require('./index.js');

describe('GET /about', () => {
    it('should return a list of people with correct properties', async () => {
        const response = await request(app).get('/about');
        
        // Assertions
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toEqual([
            { name: 'John', age: 30 },
            { name: 'Jane', age: 25 },
            { name: 'Jim', age: 35 },
            { name: 'Jill', age: 40 }
        ]);
    });
});
