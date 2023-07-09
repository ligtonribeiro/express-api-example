import request from "supertest";

import app from "../src/app";

describe("Test app.ts", () => {
  it("Root route", async () => {
    const res = await request(app).get("/version");
    expect(res.body).toEqual({
      version: "1.1.0-main",
    });
  });
});
