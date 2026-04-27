const md5Import = require('../public/js/md5.js');
const md5 = typeof md5Import === 'function' ? md5Import : md5Import.md5;

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
            // Explicitly passing the string to avoid any 'undefined' mishaps
            const testInput = "password123";
            const hash = md5(testInput);

            expect(hash).toBe("42f74913227d338f36594d87dfc332e9");
        });
    });
});