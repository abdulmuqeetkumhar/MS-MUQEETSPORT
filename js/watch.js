(function watchPage() {
  const player = document.querySelector("[data-player]");
  if (!player) return;

  const id = param("id") || "studio";
  const match = MSZ.matches.find((m) => m.id === id) || MSZ.matches[2];
  const allowed = canWatch(match);
  const session = getSession();

  player.querySelector("[data-thumb]").src = match.img;
  player.querySelector("[data-thumb]").alt = match.title;
  player.querySelector("[data-status]").textContent = match.status;
  player.querySelector("[data-title]").textContent = `${match.ch} · ${match.title}`;
  player.querySelector("[data-detail]").textContent = match.detail;

  const gate = player.querySelector("[data-gate]");
  const ui = player.querySelector("[data-ui]");
  if (allowed) {
    gate.classList.remove("show");
    ui.hidden = false;
    ui.querySelector("[data-access]").textContent = match.free
      ? "Free channel — studio, highlights and delayed games."
      : "MS Premium · full live match feed (demo player).";
  } else {
    gate.classList.add("show");
    ui.hidden = true;
    const needLogin = !session;
    gate.querySelector("h3").textContent = "This live match is Premium";
    gate.querySelector("p").textContent = needLogin
      ? "Sign in, then subscribe to unlock full live cricket, football, baseball and hockey."
      : "Your free plan covers studio and highlights. Subscribe to watch this match live.";
    gate.querySelector("[data-gate-btn]").href = needLogin ? "login.html" : "premium.html";
    gate.querySelector("[data-gate-btn]").textContent = needLogin ? "Sign in to continue" : "Get MS Premium";
  }

  document.querySelectorAll("[data-channel]").forEach((el) => {
    if (el.getAttribute("data-channel") === match.id) el.classList.add("is-on");
  });
})();
