// ========== Modal Logic ==========
function initEntryModal() {
  const modal = document.getElementById("entry-modal");
  const yesBtn = document.getElementById("yes-button");
  const noBtn = document.getElementById("no-button");

  // if (!modal || localStorage.getItem("modeSelected")) return;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  yesBtn.addEventListener("click", () => {
    setTheme("prof");
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  });

  noBtn.addEventListener("click", () => {
    setTheme("norm");
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  });
}

// ========== Theme Logic ==========
function setTheme(mode) {
  const body = document.body;
  const toggleBtn = document.getElementById("mode-toggle");

  if (mode === "prof") {
    body.classList.remove("norm-mode");
    body.classList.add("prof-mode");
    localStorage.setItem("theme", "prof");
    toggleBtn.textContent = "PROF MODE";
  } else {
    body.classList.remove("prof-mode");
    body.classList.add("norm-mode");
    localStorage.setItem("theme", "norm");
    toggleBtn.textContent = "NORM MODE";
  }

  localStorage.setItem("modeSelected", true);
}

function initThemeToggle() {
  const toggleBtn = document.getElementById("mode-toggle");

  toggleBtn.addEventListener("click", () => {
    const current = document.body.classList.contains("prof-mode") ? "prof" : "norm";
    setTheme(current === "prof" ? "norm" : "prof");
  });
}

function loadInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "prof") {
    setTheme("prof");
  } else {
    setTheme("norm");
  }
}

// ========== Welcome Modal ==========
function showWelcomeModal() {
  const welcomeModal = document.getElementById("welcome-modal");
  if (!welcomeModal || sessionStorage.getItem("welcomeShown")) return;

  welcomeModal.classList.remove("hidden");
  welcomeModal.classList.add("show");

  setTimeout(() => {
    welcomeModal.classList.add("hidden");
    welcomeModal.classList.remove("show");
    sessionStorage.setItem("welcomeShown", "true");
  }, 3000);
}

// ========== Initialize on Load ==========
document.addEventListener("DOMContentLoaded", () => {
  loadInitialTheme();
  initThemeToggle();
  initEntryModal();
  showWelcomeModal();
});

// ========== Time Logic ==========
function updateTime() {
      const now = new Date();
      document.getElementById('time').textContent = now.toLocaleString();
    }
    setInterval(updateTime, 1000);
    updateTime();
