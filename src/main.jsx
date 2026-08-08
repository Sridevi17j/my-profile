import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const fallbackProfile = {
  name: "Sridevi",
  role: "AI Workflow Consultant",
  headline: "I bring automation and AI into the environment you already run.",
  summary:
    "I design AI-assisted workflows that take repetitive work off your team's plate, and autonomous agents that carry the daily tasks end to end. Rather than replacing what you have, I integrate AI into your existing products and systems so they get measurably better at what they already do.",
  focusAreas: ["AI engineering workflows", "Full-stack products", "Automation", "Developer experience"],
  contact: {
    github: "https://github.com/Sridevi17j",
    linkedin: "https://www.linkedin.com/",
    email: "sridevi17j@gmail.com"
  }
};

const workflowFilters = ["all", "minor", "medium", "major"];

function App() {
  const [profile, setProfile] = useState(fallbackProfile);
  const [projects, setProjects] = useState([]);
  const [workflowRequests, setWorkflowRequests] = useState([]);
  const [activeWorkflowFilter, setActiveWorkflowFilter] = useState("all");

  useEffect(() => {
    Promise.all([
      fetch("/api/profile").then((response) => response.json()),
      fetch("/api/projects").then((response) => response.json()),
      fetch("/api/workflow-requests").then((response) => response.json())
    ])
      .then(([profileData, projectData, workflowData]) => {
        setProfile(profileData);
        setProjects(projectData);
        setWorkflowRequests(workflowData);
      })
      .catch(() => {
        setProjects([]);
        setWorkflowRequests([]);
      });
  }, []);

  const visibleWorkflowRequests =
    activeWorkflowFilter === "all"
      ? workflowRequests
      : workflowRequests.filter((request) => request.type === activeWorkflowFilter);

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
            <a href={profile.contact.linkedin}>Check My LinkedIn</a>
            <a href={profile.contact.github}>GitHub Profile</a>
            <a href="#projects">Check Project</a>
          </div>
        </div>
        <div className="portrait-panel" aria-label="Profile visual">
          <img src="https://github.com/Sridevi17j.png" alt="Sridevi GitHub avatar" />
          <div>
            <span>Currently exploring</span>
            <strong>Slack to PR workflow</strong>
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

      <section className="section workflow-lab" id="workflow-lab">
        <div className="section-heading">
          <p className="eyebrow">Workflow Lab</p>
          <h2>Risk routing examples</h2>
          <p>
            A no-database test area for classifying engineering requests before they become pull
            requests.
          </p>
        </div>
        <div className="filter-tabs" aria-label="Filter workflow request examples">
          {workflowFilters.map((filter) => (
            <button
              type="button"
              className={filter === activeWorkflowFilter ? "active" : ""}
              key={filter}
              aria-pressed={filter === activeWorkflowFilter}
              onClick={() => setActiveWorkflowFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="workflow-grid">
          {visibleWorkflowRequests.map((request) => (
            <article className={`workflow-card ${request.type}`} key={request.id}>
              <span>{request.type}</span>
              <h3>{request.title}</h3>
              <p>{request.description}</p>
              <strong>{request.approval}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <h2>Contact Me</h2>
        <p className="contact-intro">
          Have a workflow worth automating? Send me a note.
        </p>
        <a className="contact-email" href={`mailto:${profile.contact.email}`}>
          {profile.contact.email}
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {React.createElement(App)}
  </React.StrictMode>
);
