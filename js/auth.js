(function auth() {
  const login = document.getElementById("login-form");
  const signup = document.getElementById("signup-form");
  const alertBox = document.getElementById("auth-alert");
  const logoutBtn = document.getElementById("logout");
  const sessionRoot = document.querySelector("[data-session]");

  function show(msg, ok) {
    if (!alertBox) return;
    alertBox.textContent = msg;
    alertBox.className = "alert show " + (ok ? "ok" : "err");
  }

  signup?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(signup));
    const users = getUsers();
    if (users.some((u) => u.email.toLowerCase() === data.email.toLowerCase())) {
      show("This email already has an account. Sign in instead.");
      return;
    }
    const user = {
      name: data.name.trim(),
      email: data.email.trim(),
      password: data.password,
      sport: data.sport,
      premium: false,
      plan: "Free"
    };
    users.push(user);
    saveUsers(users);
    setSession(user);
    location.href = "account.html";
  });

  login?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(login));
    const user = getUsers().find(
      (u) => u.email.toLowerCase() === data.email.toLowerCase() && u.password === data.password
    );
    if (!user) {
      show("Email or password is wrong. Create an account if you are new.");
      return;
    }
    setSession(user);
    location.href = "account.html";
  });

  logoutBtn?.addEventListener("click", () => {
    logout();
    location.href = "index.html";
  });

  if (sessionRoot) {
    const session = getSession();
    if (!session) {
      location.href = "login.html";
      return;
    }
    sessionRoot.querySelector("[data-name]") && (sessionRoot.querySelector("[data-name]").textContent = session.name);
    sessionRoot.querySelector("[data-email]") && (sessionRoot.querySelector("[data-email]").textContent = session.email);
    sessionRoot.querySelector("[data-plan]") && (sessionRoot.querySelector("[data-plan]").textContent = session.premium ? (session.plan || "Premium") : "Free");
    const badge = sessionRoot.querySelector("[data-premium-badge]");
    if (badge) badge.textContent = session.premium ? "Premium member" : "Free member — upgrade to watch full live matches";
  }

  document.querySelectorAll("[data-subscribe]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const session = getSession();
      if (!session) {
        location.href = "login.html";
        return;
      }
      const plan = btn.getAttribute("data-subscribe");
      const users = getUsers();
      const i = users.findIndex((u) => u.email === session.email);
      if (i >= 0) {
        users[i].premium = true;
        users[i].plan = plan;
        saveUsers(users);
        setSession(users[i]);
      }
      location.href = "account.html?upgraded=1";
    });
  });
})();
