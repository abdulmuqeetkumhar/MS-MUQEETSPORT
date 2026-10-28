const MSZ = {
  matches: [
    { id: "ind-aus", ch: "CR1", title: "Australia vs India — 1st Test", sport: "Cricket", status: "LIVE", detail: "Day 2, Perth · India 312/4", free: false, img: "https://images.unsplash.com/photo-1531415074968-64c53d6fd612?auto=format&fit=crop&w=1600&q=80" },
    { id: "ars-liv", ch: "FB1", title: "Arsenal vs Liverpool", sport: "Football", status: "LIVE", detail: "Premier League · 78'", free: false, img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80" },
    { id: "studio", ch: "MS1", title: "The Breakdown — Studio", sport: "Studio", status: "LIVE", detail: "Free desk: scores, wickets, talking points", free: true, img: "https://images.unsplash.com/photo-1461896836934-ffe607ba6851?auto=format&fit=crop&w=1600&q=80" },
    { id: "tor-bos", ch: "HK1", title: "Maple Leafs vs Bruins", sport: "Hockey", status: "LIVE", detail: "NHL · 2nd period · 3–2", free: false, img: "https://images.unsplash.com/photo-1515703407324-5f753ead5296?auto=format&fit=crop&w=1600&q=80" },
    { id: "lad-nyy", ch: "BB1", title: "Dodgers vs Yankees — Game 6", sport: "Baseball", status: "FINAL", detail: "World Series · 11–9", free: false, img: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1600&q=80" },
    { id: "celtics", ch: "NBA", title: "Celtics vs Knicks — condensed", sport: "Basketball", status: "REPLAY", detail: "Madison Square Garden", free: true, img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1600&q=80" },
    { id: "paris", ch: "TN1", title: "Alcaraz vs Sinner — Paris SF", sport: "Tennis", status: "TONIGHT", detail: "Paris Masters · centre court", free: false, img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1600&q=80" },
    { id: "f1", ch: "F1", title: "Abu Dhabi Qualifying highlights", sport: "F1", status: "HIGHLIGHTS", detail: "Yas Marina · Verstappen pole", free: true, img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80" }
  ]
};

function getSession() {
  try { return JSON.parse(localStorage.getItem("msz_session") || "null"); } catch { return null; }
}

function getUsers() {
  try { return JSON.parse(localStorage.getItem("msz_users") || "[]"); } catch { return []; }
}

function saveUsers(users) {
  localStorage.setItem("msz_users", JSON.stringify(users));
}

function setSession(user) {
  const safe = {
    name: user.name,
    email: user.email,
    sport: user.sport,
    premium: !!user.premium,
    plan: user.plan || "Free"
  };
  localStorage.setItem("msz_session", JSON.stringify(safe));
  return safe;
}

function logout() {
  localStorage.removeItem("msz_session");
}

function param(name) {
  return new URLSearchParams(location.search).get(name);
}

function canWatch(match) {
  if (!match) return false;
  if (match.free) return true;
  const session = getSession();
  return !!(session && session.premium);
}
