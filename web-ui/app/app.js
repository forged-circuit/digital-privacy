function updateUI() {
  // Placeholder data (will be replaced with real Pi-hole data later)

  document.getElementById("blocked").innerText = "128";
  document.getElementById("queries").innerText = "8,432";
  document.getElementById("devices").innerText = "12";
  document.getElementById("internet").innerText = "Online";
}

// Initial load
updateUI();

// Refresh every 5 seconds
setInterval(updateUI, 5000);
