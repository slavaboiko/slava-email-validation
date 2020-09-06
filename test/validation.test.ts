import request from "supertest";
import app from "../src/app";

describe("POST /email/validate", () => {

    const validateRequest = () => request(app).post("/email/validate");

    it("should return 200 OK", () => {
        return validateRequest()
            .expect(200);
    });

    it("responds 400 if email address is not present", () => {
        return validateRequest()
            .send({})
            .expect(400, { error: "email is not specified" });
    });

    it("responds 400 if email address is null", () => {
        return validateRequest()
            .send({email: null})
            .expect(400, { error: "email is not specified" });
    });

    it("responds 400 if email address is empty", () => {
        return validateRequest()
            .send({email: ""})
            .expect(400, { error: "email cannot be empty string" });
    });
});
