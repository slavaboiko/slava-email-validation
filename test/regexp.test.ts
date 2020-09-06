import {RegexpValidator} from "../src/validators/regexp";

describe("Regexp email validation", () => {
    const validator = new RegexpValidator();

    it("passes validation for correct email address", () => {
        const result = validator.validate("somebody@example.com");
        return expect(result).resolves.toEqual({valid: true});
    });

    it("rejects an email without domain zone", () => {
        const result = validator.validate("somebody@example");
        return expect(result).resolves.toEqual({valid: false, reason: "REGEX_MISMATCH"});
    });

    it("rejects an email without local part", () => {
        const result = validator.validate("@example");
        return expect(result).resolves.toEqual({valid: false, reason: "REGEX_MISMATCH"});
    });

    it("rejects an email with invalid characters", () => {
        const result = validator.validate("$$$$$@example");
        return expect(result).resolves.toEqual({valid: false, reason: "REGEX_MISMATCH"});
    });
});
