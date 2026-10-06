/* ============================================================
   Savera'S 10TH BIRTHDAY INVITATION — SETTINGS
   ------------------------------------------------------------
   Edit the values below, then re-upload this file to GitHub.
   See README.md for step-by-step instructions.
============================================================ */

const CONFIG = {

  // 1) The final address of your website on GitHub Pages.
  //    After you publish, replace YOUR-USERNAME with your GitHub
  //    username and Savera-birthday-invite with your repository name.
  //    The QR code below updates automatically.
  siteUrl: "https://sagarbparhad.github.io/savera_bday_invitation/",

  // 2) Date & time of the party (year-month-day, 24h time, +05:30 = India time)
  eventDate: "2026-10-10T19:00:00+05:30",

  // 3) Where the party happens (used for the "Open in Maps" link
  //    and the calendar file)
  venue: "Tarangan Socity",
  mapQuery: "Rohini apt, wayle nagar, kalyan (west)",

  // 4) WhatsApp number for RSVP — country code first, digits only,
  //    e.g. "919876543210". Leave "" to hide the WhatsApp button.
  whatsapp: "918767225263",
};

/* ============================================================
   Everything below makes the page work — no need to change it.
============================================================ */

/* ---------- QR code ---------- */
(function initQR() {
  const holder = document.getElementById("qrcode");
  if (!holder) return;
  if (typeof QRCode === "undefined") {
    holder.innerHTML = '<p class="small" style="color:#2b1a4e">Open this page online once to draw the QR code.</p>';
    return;
  }
  new QRCode(holder, {
    text: CONFIG.siteUrl,
    width: 190,
    height: 190,
    colorDark: "#2b1a4e",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M,
  });
  if (CONFIG.siteUrl.includes("YOUR-USERNAME")) {
    const note = document.getElementById("qr-note");
    if (note) {
      note.innerHTML = "⚠️ One quick step: open <b>script.js</b> and put your real GitHub Pages address in <b>siteUrl</b> so this code points to your live page.";
    }
  }
})();

/* ---------- Countdown ---------- */
(function initCountdown() {
  const target = new Date("2026-10-10T00:00:00").getTime();
  const box = document.getElementById("countdown");

  if (!box || isNaN(target)) return;

  const pad = (n) => String(n).padStart(2, "0");

  function render() {
    const diff = target - Date.now();

    if (diff <= 0) {
      box.innerHTML = '<p class="party-time">It’s party time! 🎉</p>';
      return;
    }

    document.getElementById("cd-days").textContent =
      Math.floor(diff / 864e5);

    document.getElementById("cd-hours").textContent =
      pad(Math.floor((diff % 864e5) / 36e5));

    document.getElementById("cd-mins").textContent =
      pad(Math.floor((diff % 36e5) / 6e4));

    document.getElementById("cd-secs").textContent =
      pad(Math.floor((diff % 6e4) / 1e3));
  }

  render();
  setInterval(render, 1000);
})();

/* ---------- Confetti ---------- */
(function initConfetti() {
  const canvas = document.getElementById("confetti");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let pieces = [];
  let rafId = null;
  const COLORS = ["#f472b6", "#2dd4bf", "#fbbf24", "#c084fc", "#ffffff", "#ec5c9c"];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function burst(n) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    for (let i = 0; i < n; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height * 0.3,
        w: 6 + Math.random() * 6,
        h: 8 + Math.random() * 8,
        vx: (Math.random() - 0.5) * 2.4,
        vy: 2 + Math.random() * 3,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.2,
        color: COLORS[(Math.random() * COLORS.length) | 0],
      });
    }
    if (!rafId) rafId = requestAnimationFrame(loop);
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces = pieces.filter((p) => p.y < canvas.height + 40);
    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.03;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    rafId = pieces.length ? requestAnimationFrame(loop) : null;
  }

  window.addEventListener("load", () => burst(140));
  const badge = document.getElementById("party-badge");
  if (badge) badge.addEventListener("click", () => burst(160));
})();

/* ---------- Floating sparkles ---------- */
(function initSparkles() {
  const holder = document.getElementById("sparkles");
  if (!holder) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;
  for (let i = 0; i < 36; i++) {
    const s = document.createElement("i");
    s.className = "sparkle";
    const size = 2 + Math.random() * 4;
    s.style.width = s.style.height = size + "px";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.background = Math.random() > 0.5 ? "var(--pink)" : "var(--teal)";
    s.style.animationDelay = Math.random() * 4 + "s";
    s.style.animationDuration = 3 + Math.random() * 4 + "s";
    holder.appendChild(s);
  }
})();

/* ---------- Reveal on scroll ---------- */
(function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
})();

/* ---------- Maps link ---------- */
(function initMaps() {
  const link = document.getElementById("maps-link");
  if (link) {
    link.href =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(CONFIG.mapQuery || CONFIG.venue);
  }
})();

/* ---------- Add to calendar (.ics download) ---------- */
(function initCalendar() {
  const btn = document.getElementById("calendar-btn");
  if (!btn) return;
  function stamp(iso) {
    return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  }
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Savera 10th Birthday//EN",
      "BEGIN:VEVENT",
      "UID:Savera-10-" + Date.now() + "@invite",
      "DTSTAMP:" + stamp(new Date().toISOString()),
      "DTSTART:" + stamp(CONFIG.eventDate),
      "DTEND:" + stamp(CONFIG.eventEnd),
      "SUMMARY:Savera's 10th Birthday 🎉",
      "LOCATION:" + CONFIG.venue,
      "DESCRIPTION:Games\\, cake and a piñata! Bring your dancing shoes.",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Saveras-10th-birthday.ics";
    a.click();
    URL.revokeObjectURL(a.href);
  });
})();

/* ---------- WhatsApp RSVP ---------- */

(function initWhatsApp() {
  const btn = document.getElementById("whatsapp-btn");
  if (!btn) return;

  if (CONFIG.whatsapp && /^\d+$/.test(CONFIG.whatsapp)) {
    const message =
      "Yes! We'll be there for Savera's 10th birthday! 🎉" +
      "\n\n📅 Date: 10 October 2026" +
      "\n⏰ Time: 7:00 PM" +
      "\n📍 Venue: Tarangan Society" +
      "\n📌 Address: Rohini Apt, Wayle Nagar, Kalyan (West)";

    btn.href =
      "https://wa.me/" +
      CONFIG.whatsapp +
      "?text=" +
      encodeURIComponent(message);

    btn.style.display = "inline-flex";
  } else {
    btn.style.display = "none";

    const note = document.getElementById("rsvp-note");
    if (note) note.classList.remove("hidden");
  }
})();



/* ---------- Footer year ---------- */
(function initFooter() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
})();


(function () {

    const cards = document.querySelectorAll(".mem-card");

    let current = 0;

    function updateCards(){

        cards.forEach(card=>{
            card.className="mem-card hidden";
        });

        const prev=(current-1+cards.length)%cards.length;
        const next=(current+1)%cards.length;

        cards[current].className="mem-card active";
        cards[prev].className="mem-card prev";
        cards[next].className="mem-card next";
    }

    updateCards();

    setInterval(()=>{
        current=(current+1)%cards.length;
        updateCards();
    },3000);

})();


// (function initMemoriesSlider() {
//   const slider = document.querySelector(".mem-grid");
//   if (!slider) return;

//   const cards = slider.querySelectorAll(".mem-card");
//   if (!cards.length) return;

//   let currentIndex = 0;

//   function showMemory(index) {
//     cards.forEach(function (card) {
//       card.style.transform =
//         "translateX(-" + index * 100 + "%)";
//     });
//   }

//   showMemory(currentIndex);

//   setInterval(function () {
//     currentIndex++;

//     if (currentIndex >= cards.length) {
//       currentIndex = 0;
//     }

//     showMemory(currentIndex);
//   }, 2000);
// })();
