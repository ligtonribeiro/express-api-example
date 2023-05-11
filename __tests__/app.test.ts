import request from "supertest";

import app from "../src/app";

describe("Test app.ts", () => {
  it("Root route", async () => {
    const res = await request(app).get("/version");
    expect(res.body).toEqual({
      version: "1.1.0-main",
    });
  });

  it("Root route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({
      message: "Express and Jest Example - IT Talent Program",
    });
  });
});
