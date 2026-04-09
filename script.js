fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const app = document.getElementById("app");

    app.innerHTML = `
      <h1>${data.name}</h1>
      <h2>${data.tagline}</h2>
      <p>${data.location}</p>
      <p>
        <a href="mailto:${data.email}">${data.email}</a> | 
        <a href="${data.linkedin}" target="_blank">LinkedIn</a>
      </p>

      <div class="section">
        <h3>About</h3>
        <p>${data.about}</p>
      </div>

      <div class="section">
        <h3>Experience</h3>
        ${data.experience.map(exp => `
          <p><strong>${exp.role} @ ${exp.company}</strong><br>${exp.duration}</p>
          <ul>
            ${exp.impact.map(i => `<li>${i}</li>`).join("")}
          </ul>
        `).join("")}
      </div>

      <div class="section">
        <h3>Leadership</h3>
        <ul>
          ${data.leadership.map(l => `<li>${l}</li>`).join("")}
        </ul>
      </div>

      <div class="section">
        <h3>Skills</h3>
        ${data.skills.map(s => `<span class="tag">${s}</span>`).join("")}
      </div>

      <div class="section">
        <h3>Projects</h3>
        ${data.projects.map(p => `
          <p><strong>${p.name}</strong> (${p.status})<br>${p.description}</p>
        `).join("")}
      </div>

      <div class="section">
        <h3>Currently Learning</h3>
        <ul>
          ${data.learning.map(l => `<li>${l}</li>`).join("")}
        </ul>
      </div>
    `;
  });