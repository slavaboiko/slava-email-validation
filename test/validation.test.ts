import request from "supertest";
import app from "../src/app";

describe("POST /email/validate", () => {
    it("should return 200 OK", () => {
        return request(app).post("/email/validate")
            .expect(200);
    });
});
