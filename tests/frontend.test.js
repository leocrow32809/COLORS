const md5lib = require('../public/js/md5.js');

// This wrapper ensures that NO MATTER WHAT, the library gets a string.
const md5 = (str) => {
    return (typeof md5lib === 'function')
        ? md5lib(String(str))
        : md5lib.md5(String(str));
};

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
            const hash = md5("password123");
            expect(hash).toBe("42f74913227d338f36594d87dfc332e9");
        });
    });
});