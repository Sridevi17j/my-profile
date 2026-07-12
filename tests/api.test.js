import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../server/app.js";

const app = createApp();

describe("portfolio API", () => {
  it("returns a health response", async () => {
    const response = await request(app).get("/api/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  it("returns profile content", async () => {
    const response = await request(app).get("/api/profile");

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Sridevi");
    expect(response.body.focusAreas).toContain("AI engineering workflows");
  });

  it("returns portfolio projects", async () => {
    const response = await request(app).get("/api/projects");

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("tags");
  });
});
