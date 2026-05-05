# ⚗️ Acid–Base Reaction Simulator
### Virtual Labs Chemistry Education Project

---

## 📁 Project File Structure

```
acid-base-sim/
│
├── index.html               ← Main HTML page (structure & layout)
├── style.css                ← All styling (dark lab theme)
├── reactions.js             ← Chemical data (acids, bases, reactions)
├── script.js                ← App logic (UI, interactions, animations)
├── acid-base-sim.code-workspace  ← VS Code workspace settings
└── README.md                ← This file
```

---

## 🚀 How to Run in VS Code

### Method 1 — Live Server (Recommended)
1. Open the folder in **VS Code**
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **"Open with Live Server"**
4. App opens at `http://127.0.0.1:5500`

### Method 2 — Direct Browser
1. Simply double-click `index.html`
2. Opens directly in your default browser

---

## 🧪 Features

| Feature | Description |
|---|---|
| **Interactive Lab** | Select any acid + base and click MIX to see the reaction |
| **25 Reactions** | All combinations of 5 acids × 5 bases are covered |
| **Beaker Animation** | Visual liquid fill and bubble animation on mixing |
| **pH Meter** | Real-time pH indicator with color scale |
| **Result Card** | Equation, salt formed, heat, observations, real-world use |
| **Reaction Table** | Full reference table — click any row to load in Lab |
| **Theory Page** | Acid/base definitions, pH scale, Arrhenius & Brønsted-Lowry |
| **Indicators** | Litmus and phenolphthalein indicator results shown |

---

## 🔬 Chemicals Covered

### Acids
| Chemical | Formula | Strength |
|---|---|---|
| Hydrochloric Acid | HCl | Strong |
| Sulfuric Acid | H₂SO₄ | Strong |
| Nitric Acid | HNO₃ | Strong |
| Acetic Acid | CH₃COOH | Weak |
| Phosphoric Acid | H₃PO₄ | Weak |

### Bases
| Chemical | Formula | Strength |
|---|---|---|
| Sodium Hydroxide | NaOH | Strong |
| Potassium Hydroxide | KOH | Strong |
| Calcium Hydroxide | Ca(OH)₂ | Moderate |
| Ammonia | NH₃ | Weak |
| Magnesium Hydroxide | Mg(OH)₂ | Weak |

---

## 📄 File Descriptions

### `index.html`
The main HTML page. Contains:
- Header with navigation
- Lab section (acid panel, base panel, reaction zone)
- pH meter bar
- Reaction Table section
- Theory section

### `style.css`
All CSS styles including:
- Dark lab theme with CSS variables
- Beaker and liquid animations
- Responsive layout (grid)
- pH color gradient bar
- Result card styling
- Table and theory card styles

### `reactions.js`
Data file containing:
- `ACIDS[]` — array of 5 acid objects
- `BASES[]` — array of 5 base objects
- `REACTIONS{}` — 25 reaction objects (keyed as `"acidId+baseId"`)

Each reaction includes: balanced equation, salt formed, products, type, pH, heat, gas, precipitate, observations, indicators, and real-world applications.

### `script.js`
Application logic:
- `renderChemicalList()` — builds chemical selector cards
- `selectChemical()` — handles acid/base selection
- `runReaction()` — fetches and displays reaction data
- `animateReaction()` — triggers beaker fill + bubble animation
- `displayResult()` — renders the full result card
- `updatePHMeter()` — animates pH indicator
- `buildReactionTable()` — generates reference table
- `showSection()` — handles tab navigation

---

## 🎓 Educational Concepts Demonstrated

1. **Neutralization reactions** (acid + base → salt + water)
2. **Strong vs. weak acids and bases** and their effect on pH
3. **Precipitate formation** (CaSO₄, Ca₃(PO₄)₂)
4. **Exothermic reactions** and heat release
5. **Indicator behavior** (litmus, phenolphthalein)
6. **Real-world applications** of salts produced
7. **pH scale** interpretation
8. **Arrhenius & Brønsted-Lowry theories**

---

## 🛠️ Recommended VS Code Extensions

- **Live Server** — `ritwickdey.LiveServer`
- **Prettier** — `esbenp.prettier-vscode`
- **Auto Close Tag** — `formulahendry.auto-close-tag`
- **Auto Rename Tag** — `formulahendry.auto-rename-tag`
- **CSS Peek** — `pranaygp.vscode-css-peek`

---

*Developed for Virtual Labs Internship | Chemistry Education Simulation*
