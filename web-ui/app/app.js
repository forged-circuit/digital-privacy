let activityChart;
let threatChart;

function initCharts() {
  const ctx1 = document.getElementById("activityChart");
  const ctx2 = document.getElementById("threatChart");

  activityChart = new Chart(ctx1, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Total Traffic",
          data: [],
          borderColor: "#00bfff",
          tension: 0.3
        },
        {
          label: "Blocked",
          data: [],
          borderColor: "#00ff7f",
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  threatChart = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          label: "Blocked Requests",
          data: [],
          backgroundColor: "#00ff7f"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function updateCharts() {
  const time = new Date().toLocaleTimeString();

  const total = Math.floor(Math.random() * 200);
  const blocked = Math.floor(Math.random() * 100);

  // Update activity chart
  activityChart.data.labels.push(time);
  activityChart.data.datasets[0].data.push(total);
  activityChart.data.datasets[1].data.push(blocked);

  if (activityChart.data.labels.length > 10) {
    activityChart.data.labels.shift();
    activityChart.data.datasets.forEach(d => d.data.shift());
  }

  activityChart.update();

  // Update threat chart
  threatChart.data.labels.push(time);
  threatChart.data.datasets[0].data.push(blocked);

  if (threatChart.data.labels.length > 10) {
    threatChart.data.labels.shift();
    threatChart.data.datasets[0].data.shift();
  }

  threatChart.update();
}

function updateUI() {
  const blocked = Math.floor(Math.random() * 500);
  const queries = Math.floor(Math.random() * 10000);
  const devices = Math.floor(Math.random() * 20);
  const internet = "Online";

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

// INIT
initCharts();
updateUI();

// LOOP
setInterval(() => {
  updateUI();
  updateCharts();
}, 5000);
