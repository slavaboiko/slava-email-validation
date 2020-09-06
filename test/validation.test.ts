import request from "supertest";
import app from "../src/app";

describe("POST /email/validate", () => {
    it("should return 200 OK", () => {
        return request(app).post("/email/validate")
            .expect(200);
    });

    it("responds 400 if email address is not present", () => {
        return request(app).post("/email/validate")
            .send({})
            .expect(400, { error: "email is not specified" });
    });

    it("responds 400 if email address is null", () => {
        return request(app).post("/email/validate")
            .send({email: null})
            .expect(400, { error: "email is not specified" });
    });

    it("responds 400 if email address is empty", () => {
        return request(app).post("/email/validate")
            .send({email: ""})
            .expect(400, { error: "email cannot be empty string" });
    });
});
