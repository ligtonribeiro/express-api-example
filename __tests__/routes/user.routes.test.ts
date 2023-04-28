import request from "supertest";
import app from "../../src/app";

describe("Users Routes", () => {
  it("Get all users", async () => {
    const res = await request(app).get("/users");
    expect(res.body).toEqual(["Rosimeire, Luanny, Luan"]);
  });
});
