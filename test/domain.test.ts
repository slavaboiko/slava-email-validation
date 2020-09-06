import {DomainValidator} from "../src/validators/domain";

describe("Domain name email validation", () => {
    const validator = new DomainValidator();

    it("passes validation for correct email domain", () => {
        const result = validator.validate("somebody@example.com");
        return expect(result).resolves.toEqual({valid: true});
    });

    it("fails validation for email without domain", () => {
        const result = validator.validate("somebody@");
        return expect(result).resolves.toEqual({valid: false, reason: "INVALID_ADDRESS"});
    });

    it("fails validation for email with invalid top level zone", () => {
        const result = validator.validate("1@222.zzzz");
        return expect(result).resolves.toEqual({valid: false, reason: "INVALID_TLD"});
    });
});
