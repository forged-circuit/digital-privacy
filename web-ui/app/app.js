function updateUI() {
  // Placeholder data (we will connect Pi-hole later)

  document.getElementById("blocked").innerText = "128";
  document.getElementById("queries").innerText = "8,432";
  document.getElementById("devices").innerText = "12";
  document.getElementById("internet").innerText = "Online";
}

updateUI();
setInterval(updateUI, 5000);
