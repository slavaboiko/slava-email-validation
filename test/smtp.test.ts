import {SMTPValidator} from "../src/validators/smtp";

describe("SMTP email validation", () => {
    const validator = new SMTPValidator();

    it("fails validation for example.com domain", () => {
        const result = validator.validate("somebody@example.com");
        return expect(result).resolves.toEqual({
            valid: false,
            reason: "Could not resolve any IP addresses for the MX server for example.com"
        });
    });

    it("fails validation for non existing domain", () => {
        const result = validator.validate("somebody@dsfsdflksjdlkfjlsdkfjlsdfj.com");
        return expect(result).resolves.toEqual({
            valid: false,
            reason: "CONNECTION_TIMEOUT"
        });
    });

    it("passes validation for valid email address", () => {
        const result = validator.validate("slava.boiko@outlook.com");
        return expect(result).resolves.toEqual({valid: true});
    });
});
