/**
 * script.js
 * =========
 * Main application logic for the Acid–Base Reaction Simulator.
 * Handles: UI rendering, selection, reaction display, pH meter, animations.
 */

// ──────────────────────────────────────────
//  STATE
// ──────────────────────────────────────────
let selectedAcid = null;
let selectedBase = null;

// ──────────────────────────────────────────
//  INIT
// ──────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderChemicalList("acid-list", ACIDS, "acid");
  renderChemicalList("base-list", BASES, "base");
  buildReactionTable();
});

// ──────────────────────────────────────────
//  SECTION NAVIGATION
// ──────────────────────────────────────────
function showSection(name) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));

  document.getElementById("section-" + name).classList.add("active");

  const buttons = document.querySelectorAll(".nav-btn");
  const map = { lab: 0, reactions: 1, theory: 2 };
  if (map[name] !== undefined) buttons[map[name]].classList.add("active");
}

// ──────────────────────────────────────────
//  RENDER CHEMICAL SELECTION CARDS
// ──────────────────────────────────────────
function renderChemicalList(containerId, chemicals, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  chemicals.forEach(chem => {
    const card = document.createElement("div");
    card.className = "chem-card";
    card.dataset.id = chem.id;
    card.innerHTML = `
      <div class="chem-formula">${chem.formula}</div>
      <div class="chem-name">${chem.name}</div>
      <div class="chem-strength strength-${chem.strength.toLowerCase().replace(' ', '-')}">${chem.strength}</div>
    `;
    card.addEventListener("click", () => selectChemical(type, chem, card, containerId));
    container.appendChild(card);
  });
}

// ──────────────────────────────────────────
//  CHEMICAL SELECTION HANDLER
// ──────────────────────────────────────────
function selectChemical(type, chem, card, containerId) {
  // Deselect others
  document.querySelectorAll(`#${containerId} .chem-card`).forEach(c => c.classList.remove("selected"));
  card.classList.add("selected");

  if (type === "acid") {
    selectedAcid = chem;
    updateBeaker("acid", chem);
  } else {
    selectedBase = chem;
    updateBeaker("base", chem);
  }

  // Reset reaction area if selection changes
  resetReactionArea();
}

// ──────────────────────────────────────────
//  BEAKER UI UPDATE
// ──────────────────────────────────────────
function updateBeaker(type, chem) {
  const liquid = document.getElementById(`${type}-liquid`);
  const label = document.getElementById(`${type}-label`);

  liquid.style.background = chem.liquidColor;
  liquid.style.height = "55%";
  label.textContent = chem.formula;

  // Animated fill
  liquid.style.transition = "height 0.6s ease, background 0.4s ease";
  setTimeout(() => { liquid.style.height = "60%"; }, 50);
}

// ──────────────────────────────────────────
//  RESET REACTION AREA
// ──────────────────────────────────────────
function resetReactionArea() {
  const card = document.getElementById("result-card");
  card.innerHTML = `
    <div class="result-placeholder">
      <span>🔬</span>
      <p>Select an acid and a base, then press <strong>MIX</strong> to see the reaction!</p>
    </div>
  `;
  card.className = "result-card";

  const rxnLiquid = document.getElementById("reaction-liquid");
  rxnLiquid.style.background = "rgba(180,200,220,0.15)";
  rxnLiquid.style.height = "0%";

  document.getElementById("ph-value").textContent = "—";
  document.getElementById("ph-indicator").style.left = "-20px";
}

// ──────────────────────────────────────────
//  RUN REACTION
// ──────────────────────────────────────────
function runReaction() {
  if (!selectedAcid || !selectedBase) {
    showError(!selectedAcid ? "Please select an Acid first! 🔴" : "Please select a Base first! 🔵");
    return;
  }

  const key = `${selectedAcid.id}+${selectedBase.id}`;
  const reaction = REACTIONS[key];

  if (!reaction) {
    showError("Reaction data not found. Please try another combination.");
    return;
  }

  // Button animation
  const btn = document.getElementById("mix-btn");
  btn.classList.add("mixing");
  setTimeout(() => btn.classList.remove("mixing"), 1000);

  // Animate reaction beaker
  animateReaction(reaction);

  // Display result after short delay
  setTimeout(() => {
    displayResult(reaction);
    updatePHMeter(reaction.pH, reaction.phType);
  }, 800);
}

// ──────────────────────────────────────────
//  REACTION BEAKER ANIMATION
// ──────────────────────────────────────────
function animateReaction(reaction) {
  const rxnLiquid = document.getElementById("reaction-liquid");
  const rxnBubbles = document.getElementById("reaction-bubbles");

  // Fill beaker
  rxnLiquid.style.transition = "height 0.7s ease, background 0.5s ease";
  rxnLiquid.style.height = "65%";
  rxnLiquid.style.background = reaction.reactionColor;

  // Bubbles
  rxnBubbles.innerHTML = "";
  for (let i = 0; i < 12; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${10 + Math.random() * 80}%`;
    bubble.style.animationDelay = `${Math.random() * 1.5}s`;
    bubble.style.animationDuration = `${0.8 + Math.random() * 1.2}s`;
    bubble.style.width = bubble.style.height = `${4 + Math.random() * 8}px`;
    rxnBubbles.appendChild(bubble);
  }

  // Remove bubbles after animation
  setTimeout(() => { rxnBubbles.innerHTML = ""; }, 2500);
}

// ──────────────────────────────────────────
//  DISPLAY RESULT CARD
// ──────────────────────────────────────────
function displayResult(reaction) {
  const card = document.getElementById("result-card");

  // Determine pH color class
  let phClass = "ph-neutral";
  if (reaction.pH < 6) phClass = "ph-acid";
  else if (reaction.pH < 6.5) phClass = "ph-weak-acid";
  else if (reaction.pH > 8) phClass = "ph-base";
  else if (reaction.pH > 7.5) phClass = "ph-weak-base";

  card.className = `result-card result-active ${phClass}`;

  const gasHTML = reaction.gas
    ? `<div class="info-tag tag-gas">💨 Gas: ${reaction.gas}</div>`
    : "";
  const precipHTML = reaction.precipitate
    ? `<div class="info-tag tag-precip">⬇️ ${reaction.precipitate}</div>`
    : "";

  card.innerHTML = `
    <div class="result-header">
      <h3 class="result-title">⚗️ Reaction Result</h3>
      <span class="type-badge">${reaction.type}</span>
    </div>

    <div class="equation-display">
      <p class="eq-balanced">${reaction.balancedEq}</p>
    </div>

    <div class="result-grid">
      <div class="result-item">
        <span class="ri-icon">🧂</span>
        <div>
          <p class="ri-label">Salt Formed</p>
          <p class="ri-value">${reaction.salt}</p>
        </div>
      </div>
      <div class="result-item">
        <span class="ri-icon">🌡️</span>
        <div>
          <p class="ri-label">Energy</p>
          <p class="ri-value">${reaction.heat}</p>
        </div>
      </div>
      <div class="result-item">
        <span class="ri-icon">🔬</span>
        <div>
          <p class="ri-label">Products</p>
          <p class="ri-value">${reaction.products}</p>
        </div>
      </div>
      <div class="result-item">
        <span class="ri-icon">📊</span>
        <div>
          <p class="ri-label">Final pH</p>
          <p class="ri-value ph-highlight">${reaction.pH} — ${reaction.phType}</p>
        </div>
      </div>
    </div>

    ${gasHTML}${precipHTML}

    <div class="observation-box">
      <h4>🔭 Observation</h4>
      <p>${reaction.observation}</p>
    </div>

    <div class="indicator-row">
      <div class="indicator-item">
        <span class="ind-name">Litmus:</span>
        <span class="ind-result">${reaction.indicators.litmus}</span>
      </div>
      <div class="indicator-item">
        <span class="ind-name">Phenolphthalein:</span>
        <span class="ind-result">${reaction.indicators.phenolphthalein}</span>
      </div>
    </div>

    <div class="realworld-box">
      <h4>🌍 Real-World Application</h4>
      <p>${reaction.realWorld}</p>
    </div>
  `;
}

// ──────────────────────────────────────────
//  PH METER
// ──────────────────────────────────────────
function updatePHMeter(pH, phType) {
  const indicator = document.getElementById("ph-indicator");
  const phValue = document.getElementById("ph-value");

  // pH 0-14 maps to 0-100%
  const percent = (pH / 14) * 100;

  indicator.style.transition = "left 1s ease";
  indicator.style.left = `calc(${percent}% - 10px)`;

  phValue.textContent = pH;

  // Color
  if (pH < 3) phValue.style.color = "#e53935";
  else if (pH < 6) phValue.style.color = "#f57c00";
  else if (pH <= 8) phValue.style.color = "#43a047";
  else if (pH <= 11) phValue.style.color = "#1e88e5";
  else phValue.style.color = "#7b1fa2";
}

// ──────────────────────────────────────────
//  BUILD REACTION TABLE
// ──────────────────────────────────────────
function buildReactionTable() {
  const tbody = document.getElementById("reaction-table-body");
  tbody.innerHTML = "";

  Object.entries(REACTIONS).forEach(([key, rxn]) => {
    const [acidId, baseId] = key.split("+");
    const acid = ACIDS.find(a => a.id === acidId);
    const base = BASES.find(b => b.id === baseId);
    if (!acid || !base) return;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${acid.formula}</strong><br><small>${acid.name}</small></td>
      <td><strong>${base.formula}</strong><br><small>${base.name}</small></td>
      <td>${rxn.products}</td>
      <td class="eq-cell">${rxn.equation}</td>
      <td><span class="type-tag">${rxn.type}</span></td>
      <td><span class="ph-tag ph-${getPhClass(rxn.pH)}">${rxn.pH}</span></td>
    `;
    // Click row to load in lab
    tr.style.cursor = "pointer";
    tr.title = "Click to open in Lab";
    tr.addEventListener("click", () => {
      loadInLab(acidId, baseId);
    });
    tbody.appendChild(tr);
  });
}

function getPhClass(pH) {
  if (pH < 5) return "very-acid";
  if (pH < 7) return "acid";
  if (pH === 7) return "neutral";
  if (pH <= 9) return "base";
  return "strong-base";
}

// ──────────────────────────────────────────
//  LOAD REACTION IN LAB FROM TABLE
// ──────────────────────────────────────────
function loadInLab(acidId, baseId) {
  showSection("lab");

  const acid = ACIDS.find(a => a.id === acidId);
  const base = BASES.find(b => b.id === baseId);

  if (!acid || !base) return;

  // Select acid card
  setTimeout(() => {
    const acidCard = document.querySelector(`#acid-list .chem-card[data-id="${acidId}"]`);
    const baseCard = document.querySelector(`#base-list .chem-card[data-id="${baseId}"]`);
    if (acidCard) acidCard.click();
    if (baseCard) baseCard.click();

    setTimeout(runReaction, 300);
  }, 100);
}

// ──────────────────────────────────────────
//  ERROR DISPLAY
// ──────────────────────────────────────────
function showError(msg) {
  const card = document.getElementById("result-card");
  card.innerHTML = `
    <div class="error-msg">
      <span>⚠️</span>
      <p>${msg}</p>
    </div>
  `;

  card.classList.add("shake");
  setTimeout(() => card.classList.remove("shake"), 500);
}
