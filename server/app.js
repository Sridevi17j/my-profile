import cors from "cors";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { profile, projects } from "./profileData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/profile", (_req, res) => {
    res.json(profile);
  });

  app.get("/api/projects", (_req, res) => {
    res.json(projects);
  });

  if (process.env.NODE_ENV === "production") {
    const distPath = path.join(__dirname, "..", "dist");
    app.use(express.static(distPath));
    app.get(/.*/, (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  return app;
}
