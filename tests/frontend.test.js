const md5Import = require('../public/js/md5.js');

// Log this to the GitHub console so we can see the object structure
console.log('DEBUG: md5Import type is', typeof md5Import);
console.log('DEBUG: md5Import keys are', Object.keys(md5Import));

// Comprehensive extraction
const md5 = (typeof md5Import === 'function')
    ? md5Import
    : (md5Import.md5 || md5Import.default || md5Import);

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
            // Use a hardcoded string directly in the function call
            // to prove the input isn't the problem.
            const hash = md5("password123");

            expect(hash).toBe("42f74913227d338f36594d87dfc332e9");
        });
    });
});