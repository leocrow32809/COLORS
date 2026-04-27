const md5 = require('../js/md5.js');

// A helper to simulate validation logic
const isInputValid = (str) => str !== null && str.trim().length > 0;

describe('Frontend Logic & MD5 Utility', () => {

    describe('Input Validation', () => {
        test('should reject empty strings', () => {
            expect(isInputValid("")).toBe(false);
        });
        test('should accept valid text', () => {
            expect(isInputValid("Julio")).toBe(true);
        });
    });

    describe('MD5 Hashing logic', () => {
        test('should produce the correct MD5 hash for a known string', () => {
            // "password123" MD5 is 42f74913227d338f36594d87dfc332e9
            const hash = md5("password123");
            expect(hash).toBe("42f74913227d338f36594d87dfc332e9");
        });

        test('should produce different hashes for different strings', () => {
            expect(md5("user1")).not.toBe(md5("user2"));
        });
    });
});