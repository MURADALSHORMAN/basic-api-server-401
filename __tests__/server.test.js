
const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {
    it('Should  return food response', async () => {
        const data = {
            id: 'id',
            data: { Name: 'string', type: 'string' }
        };
        const response = await mockRequest.get(`/api/v1/food?id=${data.id}`);
      
        expect(response.status).toBe(200);
    });

    it('Should return clothes response', async () => {
        const data = {
            id: 'id',
            data: { Name: 'string', type: 'string' }
        };
        const response = await mockRequest.get(`/api/v1/clothes/id=${data.id}`);
        expect(response.status).toBe(200);
    });

    it('post clothes testing', async () => {
        const data = {
            id: 'id',
            data: { Name: 'string', type: 'string' }
        };
        const response = await mockRequest.post(`/api/v1/clothes`,{data:data});
        expect(response.status).toBe(200);
    });

    it('post food testing', async () => {
        const data = {
            id: 'id',
            data: { Name: 'string', type: 'string' }
        };
        const response = await mockRequest.post(`/api/v1/food`,{data:data});
      
        expect(response.status).toBe(200);
    });

    it('put clothes testing', async () => {
        const data = {
            id: 'id',
            data: { Name: 'string', type: 'string' }
        };
        const response = await mockRequest.put(`/api/v1/clothes/id=${data.id}`,{data:data});
        expect(response.status).toBe(200);
    });

    it('put food testing', async () => {
        const data = {
            id: 'id',
            data: { Name: 'string', type: 'string' }
        };
        const response = await mockRequest.put(`/api/v1/food/id=${data.id}`,{data:data});
      
        expect(response.status).toBe(200);
    });

    it('delete clothes testing', async () => {
        const data = {
            id: 'id',
            data: { Name: 'string', type: 'string' }
        };
        const response = await mockRequest.delete(`/api/v1/clothes/id=${data.id}`);
        expect(response.status).toBe(200);
    });

    it('delete food testing', async () => {
        const data = {
            id: 'id',
            data: { Name: 'string', type: 'string' }
        };
        const response = await mockRequest.delete(`/api/v1/food/id=${data.id}`);
      
        expect(response.status).toBe(200);
    });

    it('handels bad requstes', async () => {
        const response = await mockRequest.get('/fos');
        expect(response.status).toEqual(404);
    });

    it('handels errors', async () => {
        const response = await mockRequest.get('/bad');
        expect(response.status).toEqual(500);
    });


})