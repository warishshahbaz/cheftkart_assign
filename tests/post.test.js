const request = require('supertest');
const app = require('../app');

describe('Post API', () => {
    it('should fetch all posts', async () => {
        const res = await request(app).get('/api/posts');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should create a post', async () => {
        const res = await request(app)
            .post('/api/posts')
            .send({
                title: 'Test Post',
                description: 'This is a test post',
                user_id: 'user-id-here',
                images: ['image1.jpg', 'image2.jpg']
            });
        expect(res.status).toBe(201);
        expect(res.body.title).toBe('Test Post');
    });
});
