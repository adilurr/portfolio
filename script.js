const projects = [
  { name: "Topic Modelling", category: "ml", description: "FastAPI and React app for LDA/NMF topic extraction from text and uploaded documents.", tags: ["Python", "FastAPI", "React"], url: "https://github.com/adilurr/Topic-modelling" },
  { name: "Titanic Survival Prediction", category: "ml", description: "Notebook project covering passenger-data preparation, feature engineering, classification, and model evaluation.", tags: ["Jupyter", "Scikit-learn"], url: "https://github.com/adilurr/Titanic_Survival_Prediction" },
  { name: "Autonomous Weed Collection", category: "ml", description: "Computer-vision project exploring drone imagery, weed detection, and location for agricultural robotics.", tags: ["Python", "OpenCV", "ML"], url: "https://github.com/adilurr/Autonomous-Weed-Collection-using-Drones-and-Robotics" },
  { name: "Pose Detection Project", category: "ml", description: "MediaPipe pose estimation with rule-based exercise form checks and frame-wise video feedback.", tags: ["Python", "MediaPipe", "OpenCV"], url: "https://github.com/adilurr/Pose-Detection-Project" },
  { name: "Gyano Digital Learning Platform", category: "web", description: "Full-stack course platform with course management, progress tracking, and student/teacher roles.", tags: ["TypeScript", "React", "Node.js"], url: "https://github.com/adilurr/Digital-Learning-Platform-for-Rural-School-Students-in-Nabha" },
  { name: "Digital Learning Platform", category: "web", description: "A second repository for the digital learning platform project.", tags: ["Web"], url: "https://github.com/adilurr/Digital-Learning-Platform-for-Rural-School-Students" },
  { name: "Endless Run Game", category: "web", description: "An endless-run game project.", tags: ["Game"], url: "https://github.com/adilurr/Endless-Run-Game" },
  { name: "Simple Counter App", category: "web", description: "A small counter application.", tags: ["App"], url: "https://github.com/adilurr/Simple-Counter-App" },
  { name: "Marketing Website", category: "web", description: "A marketing website project built with JavaScript.", tags: ["JavaScript"], url: "https://github.com/adilurr/tesla-coders_KOC29_CipherSchools" },
  { name: "WhatsApp Clone", category: "web", description: "A WhatsApp clone project.", tags: ["HTML"], url: "https://github.com/adilurr/WhatsApp-Clone" },
  { name: "Portfolio", category: "web", description: "This portfolio site, built with HTML, CSS, and JavaScript.", tags: ["HTML", "CSS", "JavaScript"], url: "https://github.com/adilurr/portfolio" },
  { name: "Daswani Website", category: "web", description: "A website project maintained in a separate repository.", tags: ["CSS"], url: "https://github.com/adilurr/Daswaniwebsite" },
  { name: "Daswani", category: "web", description: "A website repository.", tags: ["Web"], url: "https://github.com/adilurr/Daswani" },
  { name: "Calculator", category: "web", description: "A calculator project.", tags: ["HTML"], url: "https://github.com/adilurr/Calculator" },
  { name: "If-else", category: "web", description: "A small HTML project named for conditional logic practice.", tags: ["HTML"], url: "https://github.com/adilurr/If-else" },
  { name: "Learning JavaScript", category: "web", description: "A repository of JavaScript learning exercises.", tags: ["JavaScript"], url: "https://github.com/adilurr/Learning-JS" },
  { name: "Scientific Calculator", category: "other", description: "A scientific calculator implemented in Python.", tags: ["Python"], url: "https://github.com/adilurr/coding-blitz_KOC29_CipherSchools" },
  { name: "Python Project", category: "other", description: "A Python scientific calculator project.", tags: ["Python"], url: "https://github.com/adilurr/Python-Project" },
  { name: "Python Practice", category: "other", description: "A Python practice repository.", tags: ["Python"], url: "https://github.com/adilurr/Python-1-" },
  { name: "Pattern", category: "other", description: "A C repository for pattern programming exercises.", tags: ["C"], url: "https://github.com/adilurr/pattern" },
  { name: "Computer Science", category: "other", description: "A collection of computer science learning resources.", tags: ["Study notes"], url: "https://github.com/adilurr/computer-science" }
];

const grid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

function renderProjects(filter = "all") {
  const visibleProjects = projects.filter((project) => filter === "all" || project.category === filter);
  grid.innerHTML = visibleProjects.map((project) => {
    const index = String(projects.indexOf(project) + 1).padStart(2, "0");
    const categoryLabel = project.category === "ml" ? "ML / CV" : project.category === "web" ? "WEB" : "OTHER";
    const tags = project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("");
    return `<article class="project-card">
      <div class="project-topline"><span class="project-number">${index} / 21</span><span class="project-category">${categoryLabel}</span></div>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="project-bottom"><div class="project-tags">${tags}</div><a class="project-link" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Open ${project.name} repository">Source ↗</a></div>
    </article>`;
  }).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderProjects(button.dataset.filter);
  });
});

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  navLinks.classList.toggle("is-open", !expanded);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderProjects();
