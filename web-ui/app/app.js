function updateUI() {
  const blocked = 128;
  const queries = 8432;
  const devices = 12;
  const internet = "Online";

  // Set values
  setValue("blocked", blocked);
  setValue("queries", queries.toLocaleString());
  setValue("devices", devices);
  setStatus("internet", internet);
}

function setValue(id, value) {
  const el = document.getElementById(id);
  el.innerText = value;
}

function setStatus(id, status) {
  const el = document.getElementById(id);
  el.innerText = status;

  el.classList.remove("good", "warn", "bad");

  if (status === "Online") {
    el.classList.add("good");
  } else {
    el.classList.add("bad");
  }
}

// Initial load
updateUI();

// Refresh loop
setInterval(updateUI, 5000);
