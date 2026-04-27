const request = require('supertest');

// This matches the port and path in your GitHub Action
const TEST_URL = 'http://localhost:8080';

describe('Login API Integration', () => {
    test('POST /LAMPAPI/Login.php returns expected JSON for seeded user', async () => {
        const payload = {
            login: "testuser",
            password: "password123"
        };

        const response = await request(TEST_URL)
            .post('/LAMPAPI/Login.php')
            .send(payload)
            .set('Accept', 'application/json');

        // Check if the API responded successfully
        expect(response.status).toBe(200);

        // Check if the data matches what we inserted in the 'Seed Database' step
        expect(response.body.firstName).toBe('Test');
        expect(response.body.lastName).toBe('User');
        expect(response.body.error).toBe("");
    });
});