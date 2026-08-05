import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const fallbackProfile = {
  name: "Sridevi",
  role: "AI Engineer",
  headline: "I bring automation and AI into the environment you already run.",
  summary:
    "I design AI-assisted workflows that take repetitive work off your team's plate, and autonomous agents that carry the daily tasks end to end. Rather than replacing what you have, I integrate AI into your existing products and systems so they get measurably better at what they already do.",
  focusAreas: ["AI engineering workflows", "Full-stack products", "Automation", "Developer experience"],
  contact: {
    github: "https://github.com/Sridevi17j"
  }
};

function App() {
  const [profile, setProfile] = useState(fallbackProfile);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("/api/profile").then((response) => response.json()),
      fetch("/api/projects").then((response) => response.json())
    ])
      .then(([profileData, projectData]) => {
        setProfile(profileData);
        setProjects(projectData);
      })
      .catch(() => {
        setProjects([]);
      });
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="headline">{profile.headline}</p>
          <p className="summary">{profile.summary}</p>
          <div className="actions">
            <a href={profile.contact.github}>Check Github Profile</a>
            <a href="#projects">Check Project</a>
          </div>
        </div>
        <div className="portrait-panel" aria-label="Profile visual">
          <img src="https://github.com/Sridevi17j.png" alt="Sridevi GitHub avatar" />
          <div>
            <span>Currently exploring</span>
            <strong>Slack to PR automation</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Focus Areas</h2>
        <div className="focus-grid">
          {profile.focusAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {React.createElement(App)}
  </React.StrictMode>
);
