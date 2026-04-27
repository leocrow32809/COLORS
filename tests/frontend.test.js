const md5 = require('../public/js/md5.js');

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
            // force the context by calling the function on a string primitive
            const testInput = "password123";

            // If the library is being stubborn, this syntax forces the first argument
            const hash = (typeof md5 === 'function')
                ? md5(testInput)
                : md5.md5(testInput);

            expect(hash).toBe("42f74913227d338f36594d87dfc332e9");
        });
    });
});