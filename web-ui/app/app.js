// ==========================================
// Forged Circuit - App Controller v1
// ==========================================

// Pull globals from feature system
const USER_TIER = window.USER_TIER;
const hasFeature = window.hasFeature;

// ==========================================
// MAIN RENDER CONTROLLER
// ==========================================
function renderDashboard() {

  renderBasic();

  if (hasFeature("alerts")) {
    document.getElementById("alerts-panel").style.display = "block";
    renderAlerts();
  }

  if (hasFeature("advancedCharts")) {
    document.getElementById("advanced-charts").style.display = "block";
    renderCharts();
  }

  if (hasFeature("deviceControl")) {
    document.getElementById("device-control").style.display = "block";
    renderDeviceControl();
  }

  if (hasFeature("userManagement")) {
    document.getElementById("admin-panel").style.display = "block";
    renderAdmin();
  }

}

// ==========================================
// BASIC UI (ALWAYS SHOWN)
// ==========================================
function renderBasic() {
  document.getElementById("basic-panels").innerHTML = `
    <h2>Network Overview</h2>
    <div>Total Queries: --</div>
    <div>Threats Blocked: --</div>
    <div>Active Devices: --</div>
    <div>Internet Status: --</div>
  `;
}

// ==========================================
// PRO FEATURES
// ==========================================
function renderAlerts() {
  document.getElementById("alerts-panel").innerHTML = `
    <h3>Alerts</h3>
    <p>No alerts yet</p>
  `;
}

function renderCharts() {
  document.getElementById("advanced-charts").innerHTML = `
    <h3>Advanced Charts</h3>
    <p>Chart system loading...</p>
  `;
}

function renderDeviceControl() {
  document.getElementById("device-control").innerHTML = `
    <h3>Device Control</h3>
    <p>Device management panel</p>
  `;
}

// ==========================================
// BUSINESS FEATURES
// ==========================================
function renderAdmin() {
  document.getElementById("admin-panel").innerHTML = `
    <h3>Admin Panel</h3>
    <p>User management system</p>
  `;
}

// ==========================================
// INIT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("Forged Circuit running as:", USER_TIER);
  renderDashboard();
});
