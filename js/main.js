(function boot() {
  const header = document.querySelector("[data-header]");
  const footer = document.querySelector("[data-footer]");
  const session = getSession();
  const page = document.body.dataset.page || "";

  if (header) {
    header.innerHTML = `
      <div class="breaking">
        <div class="wrap breaking-inner">
          <span class="breaking-label">Breaking</span>
          <div class="breaking-track">
            <span>India 312/4 at tea — Kohli unbeaten 118 vs Australia in Perth</span>
            <span>Arsenal 2–1 Liverpool after Saka 87' winner at the Emirates</span>
            <span>Dodgers force Game 7 — Ohtani two homers in 11–9 slugfest</span>
            <span>Canada stun USA 3–2 in OT — 4 Nations final set</span>
            <span>India 312/4 at tea — Kohli unbeaten 118 vs Australia in Perth</span>
            <span>Arsenal 2–1 Liverpool after Saka 87' winner at the Emirates</span>
          </div>
        </div>
      </div>
      <header class="site-header">
        <div class="wrap header-row">
          <a class="logo" href="index.html">
            <span class="logo-mark">MS</span>
            <span class="logo-text">MUQEET<span>SPORT CHANNEL</span></span>
          </a>
          <nav class="nav" id="nav">
            <a href="index.html" data-nav="home">Home</a>
            <a href="watch.html" data-nav="watch">Watch</a>
            <a href="scores.html" data-nav="scores">Scores</a>
            <a href="cricket.html" data-nav="cricket">Cricket</a>
            <a href="football.html" data-nav="football">Football</a>
            <a href="baseball.html" data-nav="baseball">Baseball</a>
            <a href="hockey.html" data-nav="hockey">Hockey</a>
            <a href="basketball.html" data-nav="basketball">NBA</a>
            <a href="tennis.html" data-nav="tennis">Tennis</a>
            <a href="f1.html" data-nav="f1">F1</a>
            <a href="schedule.html" data-nav="schedule">Schedule</a>
            <a href="news.html" data-nav="news">News</a>
            <a href="premium.html" data-nav="premium">Premium</a>
          </nav>
          <div class="header-actions">
            ${session
              ? `<a class="btn ${session.premium ? "btn-gold" : "btn-ghost"}" href="account.html">${session.name.split(" ")[0]}</a>`
              : `<a class="btn btn-ghost" href="login.html">Sign in</a>
                 <a class="btn btn-lime" href="signup.html">Join free</a>`}
            <button class="menu-toggle" type="button" id="menu">Menu</button>
          </div>
        </div>
      </header>`;
    const active = header.querySelector(`[data-nav="${page}"]`);
    if (active) active.classList.add("is-active");
    header.querySelector("#menu")?.addEventListener("click", () => {
      header.querySelector("#nav")?.classList.toggle("is-open");
    });
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="wrap">
          <div class="footer-grid">
            <div>
              <a class="logo" href="index.html"><span class="logo-mark">MS</span><span class="logo-text">MUQEET<span>SPORT CHANNEL</span></span></a>
              <p>A sports network by Abdul Muqeet. Live cricket, football, baseball, hockey, NBA, tennis and F1 — plus the desk that stays on after stumps.</p>
            </div>
            <div>
              <h4>Watch</h4>
              <a href="watch.html">Live TV</a>
              <a href="schedule.html">Schedule</a>
              <a href="scores.html">Scores</a>
              <a href="premium.html">MS Premium</a>
            </div>
            <div>
              <h4>Sports</h4>
              <a href="cricket.html">Cricket</a>
              <a href="football.html">Football</a>
              <a href="baseball.html">Baseball</a>
              <a href="hockey.html">Hockey</a>
              <a href="basketball.html">Basketball</a>
              <a href="tennis.html">Tennis</a>
              <a href="f1.html">Formula 1</a>
            </div>
            <div>
              <h4>Account</h4>
              <a href="login.html">Sign in</a>
              <a href="signup.html">Create account</a>
              <a href="account.html">My Muqeet Sport</a>
            </div>
            <div>
              <h4>Network</h4>
              <a href="about.html">About</a>
              <a href="contact.html">Contact</a>
              <a href="news.html">Newsroom</a>
            </div>
          </div>
          <div class="legal">
            <span>© 2026 Muqeet Sport Channel · Founded by Abdul Muqeet</span>
            <span>Portfolio demo — scores and streams are simulated</span>
          </div>
        </div>
      </footer>`;
  }
})();
