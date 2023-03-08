const injectData = (config) => {

  document.querySelector("#name").innerHTML = config.name;
  document.querySelector("#pos-title").innerHTML = config.title;

  const experiences = document.querySelector("#experiences");
  config.experiences.forEach((experience) => {
    const experienceBlock = document.createElement("section");
    experienceBlock.classList.add("blocks");

    const dateStart = new Date(experience.dateFrom);
    const dateEnd = experience.dateTo
      ? new Date(experience.dateTo)
      : new Date();

    timeWorked = Math.floor(
      (dateEnd.getTime() - dateStart.getTime()) / 1000 / 60 / 60 / 24 / 365
    );

    timeWorkedMonth = Math.floor(
      (dateEnd.getTime() - dateStart.getTime()) / 1000 / 60 / 60 / 24 / 30
    );

    if (timeWorkedMonth > 12) {
      timeWorked = `${timeWorked} years and ${
        timeWorkedMonth - timeWorked * 12
      } months`;
    } else {
      timeWorked = `${timeWorkedMonth} months`;
    }

    experienceBlock.innerHTML = `
        <div class="date"><span>${experience.dateFrom}</span><span>${
      experience.dateTo || "current"
    } <br /><span class="timeWorked">(${timeWorked})</span></span></div>
        <div class="decorator"></div>
        <div class="details">
          <header>
            <h3>${experience.title}</h3>
            <span class="place">${experience.workplace}</span>
            <span class="location">${experience.location}</span>
          </header>
          <div >
            <ul>
              ${experience.description
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>
          </div>
        </div>
      `;
    experiences.appendChild(experienceBlock);
  });

  const education = document.querySelector("#education");
  config.education.forEach((educationItem) => {
    const educationBlock = document.createElement("section");
    educationBlock.classList.add("blocks");

    const dateStart = new Date(educationItem.dateFrom);
    const dateEnd = educationItem.dateTo
      ? new Date(educationItem.dateTo)
      : new Date();

    timeWorked = Math.floor(
      (dateEnd.getTime() - dateStart.getTime()) / 1000 / 60 / 60 / 24 / 365
    );

    timeWorkedMonth = Math.floor(
      (dateEnd.getTime() - dateStart.getTime()) / 1000 / 60 / 60 / 24 / 30
    );

    if (timeWorkedMonth > 12) {
      if (timeWorkedMonth - timeWorked * 12 === 0) {
        timeWorked = `${timeWorked} years`;
      } else {
        timeWorked = `${timeWorked} years and ${
          timeWorkedMonth - timeWorked * 12
        } months`;
      }
    } else {
      timeWorked = `${timeWorkedMonth} months`;
    }

    educationBlock.innerHTML = `
        <div class="date"><span>${educationItem.dateFrom}</span><span>${
      educationItem.dateTo || "current"
    } <br /><span class="timeWorked">(${timeWorked})</span></span></div>
        <div class="decorator"></div>
        <div class="details">
          <header>
            <h3>${educationItem.title}</h3>
            <span class="location">${educationItem.location}</span>
          </header>
          <div>
            <ul>
              ${educationItem.description
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>
          </div>
        </div>
      `;
    education.appendChild(educationBlock);
  });

  const certs = document.querySelector("#certs");
  config.certs.forEach((cert) => {
    const certBlock = document.createElement("section");
    certBlock.classList.add("blocks");

    certBlock.innerHTML = `
        <div class="date"><span>${cert.date}</span></div>
        <div class="decorator"></div>
        <div class="details">
          <header>
            <h3>${cert.title}</h3>
          </header>
          <div>
            <ul>
              <li>Issued by: <b>${cert.issuer}</b></li>
            </ul>
          </div>
        </div>
      `;
    certs.appendChild(certBlock);
  });

  const skills = document.querySelector("#skills");
  config.skills.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.innerHTML = skill;
    skills.appendChild(skillItem);
  });

  const languages = document.querySelector("#languages");
  config.languages.forEach((language) => {
    const languageItem = document.createElement("li");
    languageItem.innerHTML = `<span>${language.language}<br /></span>`;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.width = `${language.rating * 10}%`;
    bar.style.height = "3px";
    bar.style.zIndex = "10";
    bar.style.backgroundColor = "#09159050";
    languageItem.appendChild(bar);
    languages.appendChild(languageItem);
  });

  const phone = document.querySelector("#phone");
  const email = document.querySelector("#email");
  const github = document.querySelector("#github");
  const linkedin = document.querySelector("#linkedin");
  const location = document.querySelector("#location");

  phone.innerHTML = `<i class="fa fa-phone"></i> ${config.contact.phone}`;
  email.innerHTML = `<i class="fa fa-envelope"></i> ${config.contact.email}`;
  github.innerHTML = `<i class="fab fa-github"></i> ${config.contact.github}`;
  linkedin.innerHTML = `<i class="fab fa-linkedin"></i> ${config.contact.linkedin}`;
  location.innerHTML = `<i class="fa fa-globe"></i> ${config.contact.location}`;

  if (!config.contact.phone) {
    phone.style.display = "none";
  }
  if (!config.contact.email) {
    email.style.display = "none";
  }
  if (!config.contact.github) {
    github.style.display = "none";
  }
  if (!config.contact.linkedin) {
    linkedin.style.display = "none";
  }
  if (!config.contact.location) {
    location.style.display = "none";
  }
};