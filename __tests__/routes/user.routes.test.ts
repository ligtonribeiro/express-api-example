import request from "supertest";
import app from "../../src/app";

describe("Users Routes", () => {
  it("Get all users", async () => {
    const res = await request(app).get("/users");
    expect(res.body).toEqual([
      { id: 1, nome: "Wellington Menezes" },
      { id: 2, nome: "Rosimeire Menezes" },
      { id: 3, nome: "Luanny Menezes" },
      { id: 4, nome: "Luan Menezes" },
    ]);
  });
});
