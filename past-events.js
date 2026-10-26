const EVENTS = [
  {
    file: "aisha_bowe", ext: "TS", img: "IMG_001.JPG",
    commit: "b7e3d90", date: "2024-09-11",
    title: "Aisha Bowe: From NASA to CEO - Inspiring Women in Tech",
    meta: { author: "IEEE IGDTUW", status: "successfully merged", type: "panel discussion" },
    desc: "On September 11th, 2024, IEEE IGDTUW had the honor of hosting Aisha Bowe, a former NASA rocket scientist, entrepreneur, and CEO of STEMBoard. As the first Black woman to break barriers in space tech, Aisha shared her journey, inspiring women to pursue careers in technology. Her story of determination and leadership left the audience empowered to reach for the stars.",
    images: [] // e.g. ["images/aisha1.jpg"]
  },
  {
    file: "quadcopter", ext: "LOG", img: "IMG_002.JPG",
    commit: "c19a5f2", date: "2024-02-08",
    title: "Quadcopter: The Drone Workshop",
    meta: { author: "IEEE IGDTUW", status: "successfully merged", type: "workshop" },
    desc: "On February 8th-9th, 2024, IEEE IGDTUW successfully conducted the 'Quadcopter: The Drone Workshop,' where participants delved into the exciting world of drone technology. Attendees assembled and piloted drones, gaining hands-on experience and insights into aerial innovation, making it a memorable event for all tech enthusiasts.",
    images: []
  },
  {
    file: "harkirat", ext: "MD", img: "IMG_003.JPG",
    commit: "d44e8a7", date: "2024-10-01",
    title: "Harkirat Singh: Navigating the World of Open Source",
    meta: { author: "IEEE IGDTUW", status: "successfully merged", type: "talk" },
    desc: "On October 1st, 2024, IEEE IGDTUW welcomed Harkirat Singh, an open-source enthusiast and IIT Roorkee graduate, to share his experiences. A software engineer who has worked at FAANG, finance, and startup companies, Harkirat captivated the audience with his unique journey in the world of coding. His session provided valuable insights into open-source projects and career growth.",
    images: []
  },
  {
    file: "career_path", ext: "TS", img: "IMG_004.JPG",
    commit: "a2f4c1", date: "2024-02-12",
    title: "Nishant Chahar: Crafting a Successful Career Path",
    meta: { author: "IEEE IGDTUW", status: "successfully merged", impact: "300K+ learners reached" },
    desc: "On February 12th, 2024, IEEE IGDTUW hosted an enlightening session with Nishant Chahar, a Microsoft software engineer and founder of AlgoPrep. With a proven track record of mentoring over 300K students, Nishant shared invaluable career-building strategies and insights from his journey, inspiring attendees to pursue their paths with confidence and determination.",
    images: []
  },
  {
    file: "wiempower_5", ext: "MD", img: "IMG_005.JPG",
    commit: "e08b6c3", date: "2024-02-05 to 2024-02-12",
    title: "WIEmpower 5.0: Women in Tech Leadership",
    meta: { author: "IEEE IGDTUW", status: "successfully merged", type: "week-long event" },
    desc: "WIEmpower 5.0, held from February 5th to 12th, 2024, was a transformative event bringing together women leaders in technology. The event featured interactive sessions, live demos, and opportunities for women professionals and students to connect and collaborate, empowering the next generation of innovators.",
    images: []
  }
];

const tabsEl = document.getElementById("peTabs");
const bodyEl = document.getElementById("peBody");

function render(i) {
  const e = EVENTS[i];

  [...tabsEl.children].forEach((t, idx) => {
    t.classList.toggle("active", idx === i);
    t.setAttribute("aria-selected", idx === i);
  });

  const lines = Object.entries(e.meta)
    .map(([k, v], n) =>
      `<div><span class="ln">0${n + 1}</span><span class="key">${k}:</span>${v}</div>`)
    .join("");

  const image = e.images[0]
    ? `<img src="${e.images[0]}" alt="${e.title}">`
    : "";

  bodyEl.innerHTML = `
    <div class="pe-fade pe-img">${image}<span class="pe-img-label">${e.img}</span></div>
    <div class="pe-fade">
      <div class="pe-commit">commit ${e.commit} · ${e.date}</div>
      <h3 class="pe-title">${e.title}</h3>
      <div class="pe-code">${lines}</div>
      <p class="pe-desc">${e.desc}</p>
    </div>`;
}

EVENTS.forEach((e, i) => {
  const b = document.createElement("button");
  b.className = "pe-tab";
  b.setAttribute("role", "tab");
  b.innerHTML = `<span class="ext">${e.ext}</span>${e.file}.${e.ext.toLowerCase()}`;
  b.onclick = () => render(i);
  tabsEl.appendChild(b);
});

render(0);