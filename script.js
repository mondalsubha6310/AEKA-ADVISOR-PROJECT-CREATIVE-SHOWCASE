// Initialize data structure in localStorage if not present
function initializeStorage() {
  if (!localStorage.getItem("creativeShowcaseUsers")) {
    localStorage.setItem("creativeShowcaseUsers", JSON.stringify([]));
  }

  if (!localStorage.getItem("creativeShowcaseImages")) {
    // Add some sample images for the landing page
    const sampleImages = [
      {
        id: "1",
        userId: "sample1",
        username: "Arjun Nayak",
        title: "Mountain Sunrise",
        description: "Digital painting of a sunrise over mountains",
        date: "2026-01-02",
        imageData:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNmM2M2ZmIi8+CiAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTAwIiByPSI2MCIgZmlsbD0iI2ZmNjU4NCIvPgogIDxjaXJjbGUgY3g9IjQ1MCIgY3k9IjIwMCIgcj0iODAiIGZpbGw9IiMzNDNhNDAiLz4KICA8cG9seWdvbiBwb2ludHM9IjMwMCwxMDAgNDAwLDUwIDUwMCwxMDAgNDAwLDI1MCIgZmlsbD0iIzg3Y2U3YSIvPgo8L3N2Zz4=",
      },
      {
        id: "2",
        userId: "sample2",
        username: "Parth246",
        title: "Ocean Waves",
        description: "Abstract representation of ocean waves",
        date: "2026-01-5",
        imageData:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzQzYTQwIi8+CiAgPHBhdGggZD0iTTAgMjAwIEMxNTAgMTUwLDMwMCAyNTAsNDUwIDIwMCBDNjAwIDE1MCw3NTAgMjUwLDkwMCAyMDAgTDkwMCA0MDAgTDAgNDAwIFoiIGZpbGw9IiM2YzYzZmYiLz4KICA8cGF0aCBkPSJNMCAyNTAgQzE1MCAyMDAsMzAwIDMwMCw0NTAgMjUwIEM2MDAgMjAwLDc1MCAzMDAsOTAwIDI1MCBMOTAwIDQwMCBMMCA0MDAgWiIgZmlsbD0iIzg3Y2U3YSIvPgo8L3N2Zz4=",
      },
      {
        id: "3",
        userId: "sample3",
        username: "GlacticKnight😊",
        title: "Urban Sketch",
        description: "Cityscape sketch with ink and watercolor",
        date: "2025-09-05",
        imageData:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTllY2VmIi8+CiAgPHJlY3QgeD0iMTAwIiB5PSIxMDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMzNDNhNDAiLz4KICA8cmVjdCB4PSIyMDAiIHk9IjUwIiB3aWR0aD0iNjAiIGhlaWdodD0iMjUwIiBmaWxsPSIjNmM2M2ZmIi8+CiAgPHJlY3QgeD0iMjgwIiB5PSI4MCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjIyMCIgZmlsbD0iI2ZmNjU4NCIvPgogIDxyZWN0IHg9IjM1MCIgeT0iMTIwIiB3aWR0aD0iNzAiIGhlaWdodD0iMTgwIiBmaWxsPSIjODdjZTdhIi8+Cjwvc3ZnPg==",
      },
      {
        id: "4",
        userId: "sample4",
        username: "color-fanatic",
        title: "Color Burst",
        description: "Experimental color mixing on digital canvas",
        date: "2025-08-28",
        imageData:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+CiAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSI3MCIgZmlsbD0iI2ZmNjU4NCIvPgogIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjEwMCIgcj0iNjAiIGZpbGw9IiM2YzYzZmYiLz4KICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjYwIiBmaWxsPSIjODdjZTdhIi8+CiAgPGNpcmNsZSBjeD0iNDUwIiBjeT0iMTUwIiByPSI3MCIgZmlsbD0iI2ZmY2I2NSIvPgo8L3N2Zz4=",
      },
      {
        id: "5",
        userId: "sample5",
        username: "abstract-artist",
        title: "Geometric Dreams",
        description: "Abstract geometric pattern in pastel colors",
        date: "2025-08-20",
        imageData:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzQzYTQwIi8+CiAgPHBvbHlnb24gcG9pbnRzPSIzMDAsMTAwIDQwMCwxMDAgNDUwLDIwMCAzNTAsMjUwIDI1MCwyMDAiIGZpbGw9IiNmZjY1ODQiLz4KICA8cG9seWdvbiBwb2ludHM9IjE1MCwxNTAgMjUwLDE1MCAzMDAsMjUwIDIwMCwzMDAgMTAwLDI1MCIgZmlsbD0iIzZjNjNmZiIvPgogIDxwb2x5Z29uIHBvaW50cz0iNDUwLDUwIDU1MCw1MCA2MDAsMTUwIDUwMCwyMDAgNDAwLDE1MCIgZmlsbD0iIzg3Y2U3YSIvPgo8L3N2Zz4=",
      },
      {
        id: "6",
        userId: "sample6",
        username: "naturelover",
        title: "Forest Path",
        description: "Digital painting of a serene forest path",
        date: "2025-12-31",
        imageData:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjODdjZTdhIi8+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI4MCIgZmlsbD0iIzM0M2E0MCIvPgogIDxjaXJjbGUgY3g9IjI1MCIgY3k9IjE1MCIgcj0iNjAiIGZpbGw9IiMzNDNhNDAiLz4KICA8Y2lyY2xlIGN4PSI0MDAiIGN5PSIxMjAiIHI9IjcwIiBmaWxsPSIjMzQzYTQwIi8+CiAgPHJlY3QgeD0iMCIgeT0iMjUwIiB3aWR0aD0iNjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzZjNjNmZiIvPgo8L3N2Zz4=",
      },
    ];
    localStorage.setItem(
      "creativeShowcaseImages",
      JSON.stringify(sampleImages)
    );
  }

  // Initialize current user if not present
  if (!localStorage.getItem("currentUser")) {
    localStorage.setItem("currentUser", JSON.stringify(null));
  }
}

// DOM elements
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let currentPage = "landing";
let selectedImageFile = null;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeStorage();
  updateAuthButtons();
  loadFeaturedImages();
  setupEventListeners();

  // Check if there's a public profile in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const publicUser = urlParams.get("user");
  if (publicUser) {
    showPublicProfile(publicUser);
  }
});

// Set up event listeners
function setupEventListeners() {
  // Hamburger menu toggle
  document.getElementById("hamburger").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".auth-buttons").classList.toggle("active");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
    const authButtons = document.querySelector(".auth-buttons");

    if (
      !hamburger.contains(event.target) &&
      !navLinks.contains(event.target) &&
      !authButtons.contains(event.target)
    ) {
      navLinks.classList.remove("active");
      authButtons.classList.remove("active");
    }
  });

  // Signup form submission
  document
    .getElementById("signupForm")
    .addEventListener("submit", handleSignup);

  // Login form submission
  document.getElementById("loginForm").addEventListener("submit", handleLogin);

  // Upload area click
  document.getElementById("uploadArea").addEventListener("click", function () {
    document.getElementById("imageUpload").click();
  });

  // File input change
  document
    .getElementById("imageUpload")
    .addEventListener("change", handleImageSelect);

  // Upload form submission
  document
    .getElementById("uploadForm")
    .addEventListener("submit", handleImageUpload);

  // Drag and drop for image upload
  const uploadArea = document.getElementById("uploadArea");
  uploadArea.addEventListener("dragover", function (e) {
    e.preventDefault();
    uploadArea.classList.add("dragover");
  });

  uploadArea.addEventListener("dragleave", function () {
    uploadArea.classList.remove("dragover");
  });

  uploadArea.addEventListener("drop", function (e) {
    e.preventDefault();
    uploadArea.classList.remove("dragover");

    if (e.dataTransfer.files.length) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        handleFileSelection(file);
      } else {
        alert("Please select an image file (JPEG, PNG, GIF)");
      }
    }
  });
}

// Show a specific page and hide others
function showPage(pageId) {
  // Update URL without reloading page
  const newUrl =
    window.location.origin +
    window.location.pathname +
    (pageId === "landing" ? "" : `?page=${pageId}`);
  window.history.pushState({ page: pageId }, "", newUrl);

  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  // Show selected page
  document.getElementById(pageId).classList.add("active");
  currentPage = pageId;

  // Update page content based on which page is shown
  if (pageId === "landing") {
    loadFeaturedImages();
  } else if (pageId === "profile") {
    if (!currentUser) {
      showPage("login");
      return;
    }
    loadUserProfile();
  } else if (pageId === "publicProfile") {
    // This is handled separately by showPublicProfile function
  }

  // Close mobile menu if open
  document.querySelector(".nav-links").classList.remove("active");
  document.querySelector(".auth-buttons").classList.remove("active");
}

// Update authentication buttons based on login state
function updateAuthButtons() {
  const authButtonsContainer = document.getElementById("authButtons");

  if (currentUser) {
    authButtonsContainer.innerHTML = `
                    <a href="#" class="btn btn-outline" onclick="showPage('profile')">
                        <i class="fas fa-user"></i> My Profile
                    </a>
                    <a href="#" class="btn btn-primary" onclick="handleLogout()">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </a>
                `;
  } else {
    authButtonsContainer.innerHTML = `
                    <a href="#" class="btn btn-outline" onclick="showPage('login')">
                        <i class="fas fa-sign-in-alt"></i> Log In
                    </a>
                    <a href="#" class="btn btn-primary" onclick="showPage('signup')">
                        <i class="fas fa-user-plus"></i> Sign Up
                    </a>
                `;
  }
}

// Handle user signup
function handleSignup(e) {
  e.preventDefault();

  const username = document.getElementById("signupUsername").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Reset error messages
  document.getElementById("usernameError").classList.remove("show");
  document.getElementById("emailError").classList.remove("show");
  document.getElementById("passwordError").classList.remove("show");
  document.getElementById("confirmPasswordError").classList.remove("show");

  let hasError = false;

  // Validate username
  if (username.length < 3) {
    document.getElementById("usernameError").textContent =
      "Username must be at least 3 characters";
    document.getElementById("usernameError").classList.add("show");
    hasError = true;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
    document.getElementById("emailError").classList.add("show");
    hasError = true;
  }

  // Validate password
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    document.getElementById("passwordError").classList.add("show");
    hasError = true;
  }

  // Validate password confirmation
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
    document.getElementById("confirmPasswordError").classList.add("show");
    hasError = true;
  }

  if (hasError) return;

  // Check if username or email already exists
  const users = JSON.parse(localStorage.getItem("creativeShowcaseUsers"));
  const usernameExists = users.some((user) => user.username === username);
  const emailExists = users.some((user) => user.email === email);

  if (usernameExists) {
    document.getElementById("usernameError").textContent =
      "Username already exists";
    document.getElementById("usernameError").classList.add("show");
    return;
  }

  if (emailExists) {
    document.getElementById("emailError").textContent =
      "Email already registered";
    document.getElementById("emailError").classList.add("show");
    return;
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(),
    username,
    email,
    password, // In a real app, this should be hashed
    joinDate: new Date().toISOString().split("T")[0],
    imageCount: 0,
  };

  users.push(newUser);
  localStorage.setItem("creativeShowcaseUsers", JSON.stringify(users));

  // Auto login after signup
  currentUser = newUser;
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  updateAuthButtons();

  // Show success message
  alert("Account created successfully! Welcome to Creative Showcase.");

  // Redirect to profile page
  showPage("profile");
}

// Handle user login
function handleLogin(e) {
  e.preventDefault();

  const usernameOrEmail = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  // Reset error message
  document.getElementById("loginError").classList.remove("show");

  // Find user by username or email
  const users = JSON.parse(localStorage.getItem("creativeShowcaseUsers"));
  const user = users.find(
    (u) =>
      (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
      u.password === password
  );

  if (user) {
    // Login successful
    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
    updateAuthButtons();

    // Redirect to profile page
    showPage("profile");
  } else {
    // Login failed
    document.getElementById("loginError").textContent =
      "Invalid username/email or password";
    document.getElementById("loginError").classList.add("show");
  }
}

// Handle user logout
function handleLogout() {
  currentUser = null;
  localStorage.setItem("currentUser", JSON.stringify(null));
  updateAuthButtons();
  showPage("landing");
}

// Load featured images for landing page
function loadFeaturedImages() {
  const images = JSON.parse(localStorage.getItem("creativeShowcaseImages"));
  const featuredGrid = document.getElementById("featuredGrid");

  if (!images || images.length === 0) {
    featuredGrid.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-images"></i>
                        <h3>No Artwork Yet</h3>
                        <p>Be the first to upload artwork to Creative Showcase!</p>
                    </div>
                `;
    return;
  }

  // Randomly select up to 9 images for featured display
  const shuffled = [...images].sort(() => 0.5 - Math.random());
  const featuredImages = shuffled.slice(0,16);

  featuredGrid.innerHTML = "";

  featuredImages.forEach((image) => {
    const imageElement = createImageElement(image, true);
    featuredGrid.appendChild(imageElement);
  });
}

// Load user profile page
function loadUserProfile() {
  if (!currentUser) return;

  // Update profile header
  const profileHeader = document.getElementById("profileHeader");
  const userImages = JSON.parse(
    localStorage.getItem("creativeShowcaseImages")
  ).filter((img) => img.userId === currentUser.id);

  profileHeader.innerHTML = `
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(
                  currentUser.username
                )}&background=${encodeURIComponent(
    "6c63ff"
  )}&color=fff&size=120" alt="${currentUser.username}" class="avatar">
                <div class="profile-info">
                    <h2>${currentUser.username}</h2>
                    <p>Member since ${currentUser.joinDate}</p>
                    <div class="stats">
                        <div class="stat">
                            <div class="stat-value">${userImages.length}</div>
                            <div class="stat-label">Artworks</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${Math.floor(
                              Math.random() * 100
                            )}</div>
                            <div class="stat-label">Followers</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${Math.floor(
                              Math.random() * 50
                            )}</div>
                            <div class="stat-label">Following</div>
                        </div>
                    </div>
                </div>
            `;

  // Load user's images
  const userImagesGrid = document.getElementById("userImagesGrid");
  const emptyUserImages = document.getElementById("emptyUserImages");

  if (userImages.length === 0) {
    userImagesGrid.innerHTML = "";
    emptyUserImages.style.display = "block";
  } else {
    emptyUserImages.style.display = "none";
    userImagesGrid.innerHTML = "";

    // Sort by date (newest first)
    userImages.sort((a, b) => new Date(b.date) - new Date(a.date));

    userImages.forEach((image) => {
      const imageElement = createImageElement(image, false);
      userImagesGrid.appendChild(imageElement);
    });
  }

  // Reset upload form
  document.getElementById("uploadForm").style.display = "none";
  document.getElementById("imagePreview").style.display = "none";
  document.getElementById("uploadArea").style.display = "block";
  document.getElementById("imageTitle").value = "";
  document.getElementById("imageDescription").value = "";
  selectedImageFile = null;
}

// Handle image selection for upload
function handleImageSelect(e) {
  const file = e.target.files[0];
  handleFileSelection(file);
}

function handleFileSelection(file) {
  if (!file || !file.type.startsWith("image/")) {
    alert("Please select an image file (JPEG, PNG, GIF)");
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("Image size should be less than 5MB");
    return;
  }

  selectedImageFile = file;

  // Show preview
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("previewImage").src = e.target.result;
    document.getElementById("imagePreview").style.display = "block";
    document.getElementById("uploadArea").style.display = "none";
    document.getElementById("uploadForm").style.display = "block";
  };
  reader.readAsDataURL(file);
}

// Cancel image upload
function cancelUpload() {
  document.getElementById("uploadForm").style.display = "none";
  document.getElementById("imagePreview").style.display = "none";
  document.getElementById("uploadArea").style.display = "block";
  document.getElementById("imageUpload").value = "";
  selectedImageFile = null;
}

// Handle image upload
function handleImageUpload(e) {
  e.preventDefault();

  if (!selectedImageFile || !currentUser) return;

  const title = document.getElementById("imageTitle").value.trim();
  const description = document.getElementById("imageDescription").value.trim();

  if (!title) {
    alert("Please provide a title for your artwork");
    return;
  }

  // Convert image to base64 for localStorage
  const reader = new FileReader();
  reader.onload = function (e) {
    // Create image object
    const newImage = {
      id: Date.now().toString(),
      userId: currentUser.id,
      username: currentUser.username,
      title,
      description,
      date: new Date().toISOString().split("T")[0],
      imageData: e.target.result,
    };

    // Save to localStorage
    const images = JSON.parse(localStorage.getItem("creativeShowcaseImages"));
    images.push(newImage);
    localStorage.setItem("creativeShowcaseImages", JSON.stringify(images));

    // Update user image count
    const users = JSON.parse(localStorage.getItem("creativeShowcaseUsers"));
    const userIndex = users.findIndex((u) => u.id === currentUser.id);
    if (userIndex !== -1) {
      users[userIndex].imageCount = (users[userIndex].imageCount || 0) + 1;
      localStorage.setItem("creativeShowcaseUsers", JSON.stringify(users));

      // Update currentUser object
      currentUser.imageCount = users[userIndex].imageCount;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }

    // Reset form and reload profile
    cancelUpload();
    loadUserProfile();

    // Show success message
    alert("Artwork uploaded successfully!");
  };
  reader.readAsDataURL(selectedImageFile);
}

// Show public profile for a specific user
function showPublicProfile(username) {
  const users = JSON.parse(localStorage.getItem("creativeShowcaseUsers"));
  const user = users.find((u) => u.username === username);

  if (!user) {
    alert("User not found");
    showPage("landing");
    return;
  }

  // Update URL
  const newUrl =
    window.location.origin + window.location.pathname + `?user=${username}`;
  window.history.pushState({ user: username }, "", newUrl);

  // Hide all pages and show public profile
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById("publicProfile").classList.add("active");
  currentPage = "publicProfile";

  // Update public profile header
  const publicProfileHeader = document.getElementById("publicProfileHeader");
  const userImages = JSON.parse(
    localStorage.getItem("creativeShowcaseImages")
  ).filter((img) => img.userId === user.id);

  publicProfileHeader.innerHTML = `
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user.username
                )}&background=${encodeURIComponent(
    "6c63ff"
  )}&color=fff&size=120" alt="${user.username}" class="avatar">
                <div class="profile-info">
                    <h2>${user.username}</h2>
                    <p>Member since ${user.joinDate}</p>
                    <div class="stats">
                        <div class="stat">
                            <div class="stat-value">${userImages.length}</div>
                            <div class="stat-label">Artworks</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${Math.floor(
                              Math.random() * 100
                            )}</div>
                            <div class="stat-label">Followers</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${Math.floor(
                              Math.random() * 50
                            )}</div>
                            <div class="stat-label">Following</div>
                        </div>
                    </div>
                </div>
            `;

  // Load user's public images
  const publicImagesGrid = document.getElementById("publicImagesGrid");
  const emptyPublicImages = document.getElementById("emptyPublicImages");

  if (userImages.length === 0) {
    publicImagesGrid.innerHTML = "";
    emptyPublicImages.style.display = "block";
  } else {
    emptyPublicImages.style.display = "none";
    publicImagesGrid.innerHTML = "";

    // Sort by date (newest first)
    userImages.sort((a, b) => new Date(b.date) - new Date(a.date));

    userImages.forEach((image) => {
      const imageElement = createImageElement(image, true);
      publicImagesGrid.appendChild(imageElement);
    });
  }
}

// Create image element for the masonry grid
function createImageElement(image, isPublic) {
  const div = document.createElement("div");
  div.className = "masonry-item";

  // Random height for masonry effect (between 250 and 400px)
  // const randomHeight = Math.floor(Math.random() * 150) + 250;
  // div.style.gridRowEnd = `span ${Math.floor(randomHeight / 10)}`;

  div.innerHTML = `
    <div class="image-wrapper">
        <img src="${image.imageData}" alt="${image.title}" loading="lazy">
        <div class="image-overlay">
            <span class="artist">
                <i class="fas fa-user"></i> ${image.username}
            </span>
        </div>
    </div>

    <div class="image-info">
        <h3 title="${image.title}">${image.title}</h3>

        <p class="desc">
            ${image.description || "A creative artwork shared by the artist."}
        </p>

        <div class="meta">
            <span class="date">
                <i class="far fa-calendar"></i> ${image.date}
            </span>
        </div>
    </div>
`;

  // Add click event to view user's public profile
  if (isPublic) {
    div.addEventListener("click", function () {
      showPublicProfile(image.username);
    });
    div.style.cursor = "pointer";
  }
  div.style.animationDelay = `${Math.random() * 0.60}s`;

  return div;
}

// Handle browser back/forward buttons
window.addEventListener("popstate", function (event) {
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get("page");
  const user = urlParams.get("user");

  if (user) {
    showPublicProfile(user);
  } else if (page) {
    showPage(page);
  } else {
    showPage("landing");
  }
});