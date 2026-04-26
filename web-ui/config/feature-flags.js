// ==========================================
// Forged Circuit - Feature Flag System v1
// ==========================================

// 🔐 Change this to test tiers
const USER_TIER = "basic"; 
// Options: "basic" | "pro" | "business"

// ==========================================
// FEATURE DEFINITIONS
// ==========================================
const FEATURES = {
  basic: {
    login: false,
    alerts: false,
    deviceControl: false,
    history: false,
    userManagement: false,
    auditLogs: false,
    advancedCharts: false
  },

  pro: {
    login: true,
    alerts: true,
    deviceControl: true,
    history: true,
    userManagement: false,
    auditLogs: false,
    advancedCharts: true
  },

  business: {
    login: true,
    alerts: true,
    deviceControl: true,
    history: true,
    userManagement: true,
    auditLogs: true,
    advancedCharts: true
  }
};

// ==========================================
// FEATURE CHECK HELPER
// ==========================================
function hasFeature(featureName) {
  return FEATURES[USER_TIER]?.[featureName] === true;
}

// ==========================================
// EXPORT (IMPORTANT FIX)
// ==========================================
window.USER_TIER = USER_TIER;
window.hasFeature = hasFeature;

console.log("Forged Circuit Tier:", USER_TIER);
console.log("Features Loaded:", FEATURES[USER_TIER]);
