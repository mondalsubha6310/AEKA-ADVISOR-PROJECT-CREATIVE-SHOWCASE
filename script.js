/* ---------- STORAGE SETUP ---------- */
function setupLocalDB() {
  if (!localStorage.getItem("artNest_users")) {
    localStorage.setItem("artNest_users", JSON.stringify([]));
  }

  if (!localStorage.getItem("artNest_images")) {
    const demoArtworks = [
      {
        uid: "d1",
        ownerId: "demo1",
        owner: "Arjun Nayak",
        heading: "Mountain Sunrise",
        about: "Digital painting of a sunrise over mountains",
        createdOn: "2026-01-02",
        data:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzZjNjNmZiIvPjwvc3ZnPg==",
      },
    ];
    localStorage.setItem("artNest_images", JSON.stringify(demoArtworks));
  }

  if (!localStorage.getItem("artNest_activeUser")) {
    localStorage.setItem("artNest_activeUser", JSON.stringify(null));
  }
}

/* ---------- GLOBAL STATE ---------- */
let loggedUser = JSON.parse(localStorage.getItem("artNest_activeUser"));
let activeView = "landing";
let uploadFile = null;

/* ---------- APP START ---------- */
document.addEventListener("DOMContentLoaded", () => {
  setupLocalDB();
  refreshAuthUI();
  renderFeatured();
  bindUIEvents();

  const params = new URLSearchParams(window.location.search);
  if (params.get("user")) {
    openPublicProfile(params.get("user"));
  }
});

/* ---------- EVENT BINDING ---------- */
function bindUIEvents() {
  document.getElementById("hamburger").onclick = () => {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".auth-buttons").classList.toggle("active");
  };

  document.addEventListener("click", (e) => {
    if (
      !e.target.closest("#hamburger") &&
      !e.target.closest(".nav-links") &&
      !e.target.closest(".auth-buttons")
    ) {
      document.querySelector(".nav-links").classList.remove("active");
      document.querySelector(".auth-buttons").classList.remove("active");
    }
  });

  document.getElementById("signupForm").onsubmit = registerUser;
  document.getElementById("loginForm").onsubmit = loginUser;
  document.getElementById("uploadArea").onclick = () =>
    document.getElementById("imageUpload").click();

  document
    .getElementById("imageUpload")
    .addEventListener("change", (e) => handleFile(e.target.files[0]));

  document
    .getElementById("uploadForm")
    .addEventListener("submit", uploadArtwork);
}

/* ---------- PAGE SWITCH ---------- */
function switchPage(page) {
  history.pushState({}, "", page === "landing" ? location.pathname : `?page=${page}`);
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
  activeView = page;

  if (page === "profile") {
    if (!loggedUser) return switchPage("login");
    loadProfile();
  }

  if (page === "landing") renderFeatured();
}

/* ---------- AUTH UI ---------- */
function refreshAuthUI() {
  const box = document.getElementById("authButtons");
  box.innerHTML = loggedUser
    ? `<a class="btn btn-outline" onclick="switchPage('profile')">Profile</a>
       <a class="btn btn-primary" onclick="logout()">Logout</a>`
    : `<a class="btn btn-outline" onclick="switchPage('login')">Login</a>
       <a class="btn btn-primary" onclick="switchPage('signup')">Signup</a>`;
}

/* ---------- SIGNUP ---------- */
function registerUser(e) {
  e.preventDefault();
  const uname = signupUsername.value.trim();
  const mail = signupEmail.value.trim();
  const pass = signupPassword.value;
  const confirm = confirmPassword.value;

  if (pass !== confirm || uname.length < 3 || pass.length < 6) {
    alert("Invalid signup details");
    return;
  }

  const users = JSON.parse(localStorage.getItem("artNest_users"));
  if (users.some(u => u.username === uname || u.email === mail)) {
    alert("User already exists");
    return;
  }

  const user = {
    id: Date.now().toString(),
    username: uname,
    email: mail,
    password: pass,
    joined: new Date().toISOString().split("T")[0],
  };

  users.push(user);
  localStorage.setItem("artNest_users", JSON.stringify(users));
  loggedUser = user;
  localStorage.setItem("artNest_activeUser", JSON.stringify(user));

  refreshAuthUI();
  switchPage("profile");
}

/* ---------- LOGIN ---------- */
function loginUser(e) {
  e.preventDefault();
  const key = loginUsername.value.trim();
  const pwd = loginPassword.value;

  const users = JSON.parse(localStorage.getItem("artNest_users"));
  const found = users.find(
    u => (u.username === key || u.email === key) && u.password === pwd
  );

  if (!found) {
    alert("Invalid credentials");
    return;
  }

  loggedUser = found;
  localStorage.setItem("artNest_activeUser", JSON.stringify(found));
  refreshAuthUI();
  switchPage("profile");
}

/* ---------- LOGOUT ---------- */
function logout() {
  loggedUser = null;
  localStorage.setItem("artNest_activeUser", JSON.stringify(null));
  refreshAuthUI();
  switchPage("landing");
}

/* ---------- FEATURED ART ---------- */
function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  const items = JSON.parse(localStorage.getItem("artNest_images")) || [];
  grid.innerHTML = "";

  items
    .sort(() => Math.random() - 0.5)
    .slice(0, 16)
    .forEach(img => grid.appendChild(buildCard(img, true)));
}

/* ---------- PROFILE ---------- */
function loadProfile() {
  const all = JSON.parse(localStorage.getItem("artNest_images"));
  const mine = all.filter(i => i.ownerId === loggedUser.id);
  document.getElementById("userImagesGrid").innerHTML = "";

  mine.forEach(img =>
    document.getElementById("userImagesGrid").appendChild(buildCard(img, false))
  );
}

/* ---------- FILE HANDLING ---------- */
function handleFile(file) {
  if (!file || !file.type.startsWith("image/")) return alert("Invalid image");
  uploadFile = file;

  const reader = new FileReader();
  reader.onload = e => {
    previewImage.src = e.target.result;
    imagePreview.style.display = "block";
    uploadArea.style.display = "none";
    uploadForm.style.display = "block";
  };
  reader.readAsDataURL(file);
}

/* ---------- UPLOAD ---------- */
function uploadArtwork(e) {
  e.preventDefault();
  if (!uploadFile || !loggedUser) return;

  const reader = new FileReader();
  reader.onload = e => {
    const art = {
      uid: Date.now().toString(),
      ownerId: loggedUser.id,
      owner: loggedUser.username,
      heading: imageTitle.value,
      about: imageDescription.value,
      createdOn: new Date().toISOString().split("T")[0],
      data: e.target.result,
    };

    const list = JSON.parse(localStorage.getItem("artNest_images"));
    list.push(art);
    localStorage.setItem("artNest_images", JSON.stringify(list));

    loadProfile();
    cancelUpload();
  };
  reader.readAsDataURL(uploadFile);
}

/* ---------- PUBLIC PROFILE ---------- */
function openPublicProfile(name) {
  const users = JSON.parse(localStorage.getItem("artNest_users"));
  const user = users.find(u => u.username === name);
  if (!user) return;

  switchPage("publicProfile");
  const imgs = JSON.parse(localStorage.getItem("artNest_images"))
    .filter(i => i.owner === name);

  publicImagesGrid.innerHTML = "";
  imgs.forEach(i => publicImagesGrid.appendChild(buildCard(i, true)));
}

/* ---------- CARD BUILDER ---------- */
function buildCard(img, clickable) {
  const box = document.createElement("div");
  box.className = "masonry-item";
  box.innerHTML = `
    <div class="image-wrapper">
      <img src="${img.data}" loading="lazy">
      <div class="image-overlay"><span>${img.owner}</span></div>
    </div>
    <div class="image-info">
      <h3>${img.heading}</h3>
      <p class="desc">${img.about || "Creative artwork"}</p>
      <div class="meta">${img.createdOn}</div>
    </div>
  `;

  if (clickable) {
    box.style.cursor = "pointer";
    box.onclick = () => openPublicProfile(img.owner);
  }

  box.style.animationDelay = `${Math.random() * 0.6}s`;
  return box;
}

/* ---------- BACK BUTTON ---------- */
window.onpopstate = () => {
  const p = new URLSearchParams(location.search);
  p.get("user") ? openPublicProfile(p.get("user")) : switchPage("landing");
};
