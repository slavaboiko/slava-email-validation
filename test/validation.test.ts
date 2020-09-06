import request from "supertest";
import app from "../src/app";
import assert = require("assert");

describe("POST /email/validate", () => {

    const validateRequest = () => request(app).post("/email/validate");

    it("responds 400 if email address is not present", () => {
        return validateRequest()
            .send({})
            .expect(400, {error: "email is not specified"});
    });

    it("responds 400 if email address is null", () => {
        return validateRequest()
            .send({email: null})
            .expect(400, {error: "email is not specified"});
    });

    it("responds 400 if email address is empty", () => {
        return validateRequest()
            .send({email: ""})
            .expect(400, {error: "email cannot be empty string"});
    });

    it("passes validation for valid email address", async () => {
        const res = await validateRequest()
            .send({email: "slava.boiko@outlook.com"})
            .expect(200);

        return assert.deepStrictEqual(res.body, {
            valid: true,
            validators: {
                domain: {valid: true},
                regexp: {valid: true},
                smtp: {valid: true}
            }
        });
    });

    it("fails validation for invalid email address", async () => {
        const res = await validateRequest()
            .send({email: "somebody@example.com"})
            .expect(200);

        return assert.deepStrictEqual(res.body, {
            valid: false,
            validators: {
                domain: {valid: true},
                regexp: {valid: true},
                smtp: {valid: false, reason: "Could not resolve any IP addresses for the MX server for example.com"}
            }
        });
    });
});
