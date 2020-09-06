import {getDomain} from "../src/validators/utils";

describe("Email parser", () => {
    it("returns domain name for correct email address", () => {
        const result = getDomain("somebody@example.com");
        return expect(result).toEqual("example.com");
    });

    it("returns null if email address is without domain part", () => {
        const result = getDomain("somebody@");
        return expect(result).toBeNull();
    });

    it("returns null if email address is without local part", () => {
        const result = getDomain("@example.com");
        return expect(result).toBeNull();
    });

    it("returns null if email address does not have [at] sign", () => {
        const result = getDomain("somebody[at]example.com");
        return expect(result).toBeNull();
    });
});
