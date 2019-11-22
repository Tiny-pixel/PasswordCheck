let validate = require('../src/passwordChecker');
describe("Password is valid", () => {
    let password = 'qwer@123T';
    let valid = validate.passwordIsValid(password);
    it("Should check if the password is not empty", () => {
        expect(valid).not.toBeNull();
    });
    it("Should at least be 8 characters long", () => {
        expect(valid.split(' ').join('').length).toBeGreaterThan(8);
    });
    it("Should at least have one lowercase letter", () => {
        expect(valid).toMatch(/[a-z]/);
    });
    it("Should at least have one uppercase letter", () => {
        expect(valid).toMatch(/[A-Z]/);
    });
    it("Should at least have one digit", () => {
        expect(valid).toMatch(/[0-9]/);
    });
    it("Should at least have one special character", () => {
        expect(valid).toMatch(/[{(%$&*"'\|#@!)}]/);
    });
});

describe("Password is okay", () => {
    let password = 'qwer@123';
    let valid = validate.passIsOkay(password);
    let variables, lowercase, uppercase, sp;
    
    if ((password == "") && (password.length < 8)) {
        it("should return true if at least three conditions are true", () => {
            expect(valid).toMatch(variables, lowercase, uppercase, sp);
            
        });
    }
});

