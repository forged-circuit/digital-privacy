let activityChart;
let threatChart;

function initCharts() {
  activityChart = new Chart(document.getElementById("activityChart"), {
    type: "line",
    data: { labels: [], datasets: [
      { label: "Traffic", data: [], borderColor: "#00bfff" },
      { label: "Blocked", data: [], borderColor: "#00ff7f" }
    ]},
    options: { responsive: true, maintainAspectRatio: false }
  });

  threatChart = new Chart(document.getElementById("threatChart"), {
    type: "bar",
    data: { labels: [], datasets: [
      { label: "Blocked", data: [], backgroundColor: "#00ff7f" }
    ]},
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function updateAlert(blocked) {
  const alert = document.querySelector(".alert-text");

  if (blocked > 300) {
    alert.innerText = "High number of blocked requests detected.";
    alert.parentElement.style.borderLeftColor = "#ff3b30";
  } else if (blocked > 100) {
    alert.innerText = "Moderate activity detected. Monitoring traffic.";
    alert.parentElement.style.borderLeftColor = "#ffff00";
  } else {
    alert.innerText = "No active threats detected. System operating normally.";
    alert.parentElement.style.borderLeftColor = "#00ff7f";
  }
}

function updateTables() {
  const devices = [
    { name: "iPhone", ip: "192.168.1.10", req: 1200, status: "good" },
    { name: "TV", ip: "192.168.1.15", req: 800, status: "warn" },
    { name: "Laptop", ip: "192.168.1.20", req: 2300, status: "good" }
  ];

  const domains = [
    { domain: "ads.google.com", hits: 540, risk: "bad" },
    { domain: "tracker.site.com", hits: 320, risk: "warn" },
    { domain: "malware.test", hits: 150, risk: "bad" }
  ];

  document.getElementById("devicesTable").innerHTML =
    devices.map(d => `
      <tr>
        <td>${d.name}</td>
        <td>${d.ip}</td>
        <td>${d.req}</td>
        <td><span class="status-dot status-${d.status}"></span></td>
      </tr>`).join("");

  document.getElementById("domainsTable").innerHTML =
    domains.map(d => `
      <tr>
        <td>${d.domain}</td>
        <td>${d.hits}</td>
        <td><span class="status-dot status-${d.risk}"></span></td>
      </tr>`).join("");
}

function updateUI() {
  const blocked = Math.floor(Math.random() * 500);

  document.getElementById("blocked").innerText = blocked;
  document.getElementById("queries").innerText = Math.floor(Math.random() * 10000);
  document.getElementById("devices").innerText = Math.floor(Math.random() * 20);
  document.getElementById("internet").innerText = "Online";

  updateAlert(blocked);
}

function updateCharts() {
  const t = new Date().toLocaleTimeString();
  const val = Math.random() * 200;
  const blocked = Math.random() * 100;

  activityChart.data.labels.push(t);
  activityChart.data.datasets[0].data.push(val);
  activityChart.data.datasets[1].data.push(blocked);

  if (activityChart.data.labels.length > 10) {
    activityChart.data.labels.shift();
    activityChart.data.datasets.forEach(d => d.data.shift());
  }

  activityChart.update();

  threatChart.data.labels.push(t);
  threatChart.data.datasets[0].data.push(blocked);

  if (threatChart.data.labels.length > 10) {
    threatChart.data.labels.shift();
    threatChart.data.datasets[0].data.shift();
  }

  threatChart.update();
}

initCharts();
updateTables();
updateUI();

setInterval(() => {
  updateUI();
  updateCharts();
  updateTables();
}, 5000);
