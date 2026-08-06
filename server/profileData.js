export const profile = {
  name: "Sridevi",
  role: "AI Engineer",
  location: "India",
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

export const projects = [
  {
    id: "engineering-agent",
    name: "Engineering Workflow Agent",
    description:
      "A workflow concept that turns Slack or Linear requests into planned implementation, tests, and pull requests.",
    tags: ["Claude", "Slack", "GitHub", "Automation"]
  },
  {
    id: "portfolio-api",
    name: "Portfolio API",
    description:
      "A lightweight Express API serving static profile and project content for this portfolio.",
    tags: ["Node.js", "Express", "React"]
  }
];

export const workflowRequests = [
  {
    id: "minor-copy",
    title: "Small UI updates",
    type: "minor",
    description: "Static copy, color, spacing, image, and display-only content changes.",
    approval: "Auto PR eligible"
  },
  {
    id: "medium-filter",
    title: "Add an Available Now filter",
    type: "medium",
    description: "Frontend behavior that changes which cards or records are shown to the user.",
    approval: "Plan and approval needed"
  },
  {
    id: "major-records",
    title: "Update existing application records",
    type: "major",
    description: "Existing data update, delete, archive, auth, payment, contract, or policy-impacting work.",
    approval: "Impact plan required"
  }
];
