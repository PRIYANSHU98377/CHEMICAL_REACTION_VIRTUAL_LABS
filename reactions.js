/**
 * reactions.js
 * ============
 * Master data file for all acid–base reactions.
 * Each reaction has: acid key, base key, equation, products,
 * observation, type, pH, color, heat, and gas produced (if any).
 */

// ──────────────────────────────────────────
//  ACIDS
// ──────────────────────────────────────────
const ACIDS = [
  {
    id: "hcl",
    name: "Hydrochloric Acid",
    formula: "HCl",
    strength: "Strong",
    color: "#ffecec",
    liquidColor: "rgba(255, 80, 80, 0.35)",
    description: "A strong mineral acid, highly corrosive. Used in metal cleaning and food processing."
  },
  {
    id: "h2so4",
    name: "Sulfuric Acid",
    formula: "H₂SO₄",
    strength: "Strong",
    color: "#fff3e0",
    liquidColor: "rgba(255, 140, 0, 0.35)",
    description: "A strong diprotic acid. One of the most widely used industrial chemicals."
  },
  {
    id: "hno3",
    name: "Nitric Acid",
    formula: "HNO₃",
    strength: "Strong",
    color: "#fffde7",
    liquidColor: "rgba(220, 200, 0, 0.4)",
    description: "A strong oxidizing acid. Used in fertilizer and explosives manufacturing."
  },
  {
    id: "ch3cooh",
    name: "Acetic Acid",
    formula: "CH₃COOH",
    strength: "Weak",
    color: "#e8f5e9",
    liquidColor: "rgba(60, 180, 60, 0.30)",
    description: "A weak organic acid. Found in vinegar (5% solution). Mild, pungent smell."
  },
  {
    id: "h3po4",
    name: "Phosphoric Acid",
    formula: "H₃PO₄",
    strength: "Weak",
    color: "#fce4ec",
    liquidColor: "rgba(220, 50, 150, 0.30)",
    description: "A triprotic weak acid. Used in fertilizers, food flavoring, and dental applications."
  }
];

// ──────────────────────────────────────────
//  BASES
// ──────────────────────────────────────────
const BASES = [
  {
    id: "naoh",
    name: "Sodium Hydroxide",
    formula: "NaOH",
    strength: "Strong",
    color: "#e3f2fd",
    liquidColor: "rgba(30, 100, 255, 0.35)",
    description: "A strong base (lye). Highly caustic, used in soap making and drain cleaners."
  },
  {
    id: "koh",
    name: "Potassium Hydroxide",
    formula: "KOH",
    strength: "Strong",
    color: "#ede7f6",
    liquidColor: "rgba(120, 40, 220, 0.35)",
    description: "A strong base similar to NaOH. Used in fertilizers and soft soap production."
  },
  {
    id: "caoh2",
    name: "Calcium Hydroxide",
    formula: "Ca(OH)₂",
    strength: "Moderate",
    color: "#e0f7fa",
    liquidColor: "rgba(0, 180, 200, 0.35)",
    description: "A moderately strong base (slaked lime). Used in construction and water treatment."
  },
  {
    id: "nh3",
    name: "Ammonia",
    formula: "NH₃",
    strength: "Weak",
    color: "#e8f5e9",
    liquidColor: "rgba(0, 200, 100, 0.30)",
    description: "A weak base with a sharp pungent smell. Used in cleaning products and fertilizers."
  },
  {
    id: "mgoh2",
    name: "Magnesium Hydroxide",
    formula: "Mg(OH)₂",
    strength: "Weak",
    color: "#fff8e1",
    liquidColor: "rgba(180, 160, 0, 0.30)",
    description: "A weak, sparingly soluble base. Used as an antacid (Milk of Magnesia)."
  }
];

// ──────────────────────────────────────────
//  REACTIONS  (acid_id × base_id)
// ──────────────────────────────────────────
const REACTIONS = {

  // ── HCl + Base ──────────────────────────
  "hcl+naoh": {
    equation: "HCl + NaOH → NaCl + H₂O",
    balancedEq: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
    salt: "Sodium Chloride (NaCl)",
    products: "NaCl + H₂O",
    type: "Strong Acid + Strong Base",
    reactionColor: "rgba(200,200,200,0.5)",
    pH: 7,
    phType: "Neutral",
    heat: "Exothermic (heat released)",
    gas: null,
    precipitate: null,
    observation: "The solution becomes neutral (pH 7). Heat is released during the reaction. The product NaCl is common table salt dissolved in water — the solution is colorless and clear.",
    indicators: { litmus: "Purple (neutral)", phenolphthalein: "Colorless" },
    realWorld: "This reaction is the basis of making table salt in labs. Also used in titration experiments."
  },

  "hcl+koh": {
    equation: "HCl + KOH → KCl + H₂O",
    balancedEq: "HCl(aq) + KOH(aq) → KCl(aq) + H₂O(l)",
    salt: "Potassium Chloride (KCl)",
    products: "KCl + H₂O",
    type: "Strong Acid + Strong Base",
    reactionColor: "rgba(180,200,180,0.5)",
    pH: 7,
    phType: "Neutral",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "Neutralization produces potassium chloride salt and water. Solution is clear, neutral, and slightly warm due to exothermic nature.",
    indicators: { litmus: "Purple (neutral)", phenolphthalein: "Colorless" },
    realWorld: "KCl is used as a salt substitute for people with high blood pressure."
  },

  "hcl+caoh2": {
    equation: "2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O",
    balancedEq: "2HCl(aq) + Ca(OH)₂(aq) → CaCl₂(aq) + 2H₂O(l)",
    salt: "Calcium Chloride (CaCl₂)",
    products: "CaCl₂ + H₂O",
    type: "Strong Acid + Moderate Base",
    reactionColor: "rgba(200,220,200,0.5)",
    pH: 6.5,
    phType: "Slightly Acidic",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "CaCl₂ is highly soluble. Solution is slightly acidic because Ca(OH)₂ is only moderately strong. Reaction produces noticeable heat.",
    indicators: { litmus: "Slightly red", phenolphthalein: "Colorless" },
    realWorld: "CaCl₂ is used as a drying agent and for de-icing roads in winter."
  },

  "hcl+nh3": {
    equation: "HCl + NH₃ → NH₄Cl",
    balancedEq: "HCl(g) + NH₃(g) → NH₄Cl(s)",
    salt: "Ammonium Chloride (NH₄Cl)",
    products: "NH₄Cl",
    type: "Strong Acid + Weak Base",
    reactionColor: "rgba(240,240,200,0.6)",
    pH: 4.6,
    phType: "Acidic",
    heat: "Exothermic",
    gas: null,
    precipitate: "White NH₄Cl smoke/fumes visible",
    observation: "White dense smoke (NH₄Cl) forms when HCl gas and NH₃ gas meet. In solution, ammonium chloride makes the solution acidic. A white precipitate may form.",
    indicators: { litmus: "Red (acidic)", phenolphthalein: "Colorless" },
    realWorld: "NH₄Cl (sal ammoniac) is used in dry cell batteries and as a fertilizer."
  },

  "hcl+mgoh2": {
    equation: "2HCl + Mg(OH)₂ → MgCl₂ + 2H₂O",
    balancedEq: "2HCl(aq) + Mg(OH)₂(s) → MgCl₂(aq) + 2H₂O(l)",
    salt: "Magnesium Chloride (MgCl₂)",
    products: "MgCl₂ + H₂O",
    type: "Strong Acid + Weak Base",
    reactionColor: "rgba(200,210,230,0.5)",
    pH: 5.5,
    phType: "Weakly Acidic",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "The white Mg(OH)₂ solid dissolves in HCl. The resulting solution contains MgCl₂ and is slightly acidic. The solution clears up as the solid dissolves.",
    indicators: { litmus: "Slightly red", phenolphthalein: "Colorless" },
    realWorld: "This is similar to how antacid (Mg(OH)₂) neutralizes stomach acid (HCl) during indigestion."
  },

  // ── H₂SO₄ + Base ─────────────────────────
  "h2so4+naoh": {
    equation: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O",
    balancedEq: "H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)",
    salt: "Sodium Sulfate (Na₂SO₄)",
    products: "Na₂SO₄ + H₂O",
    type: "Strong Acid + Strong Base",
    reactionColor: "rgba(190,190,210,0.5)",
    pH: 7,
    phType: "Neutral",
    heat: "Strongly Exothermic",
    gas: null,
    precipitate: null,
    observation: "Complete neutralization. Produces sodium sulfate (Glauber's salt) and water. The reaction is very exothermic — the mixture becomes noticeably hot. Solution is clear and neutral.",
    indicators: { litmus: "Purple (neutral)", phenolphthalein: "Colorless" },
    realWorld: "Na₂SO₄ is used in paper making, glass manufacturing, and as a laxative."
  },

  "h2so4+koh": {
    equation: "H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O",
    balancedEq: "H₂SO₄(aq) + 2KOH(aq) → K₂SO₄(aq) + 2H₂O(l)",
    salt: "Potassium Sulfate (K₂SO₄)",
    products: "K₂SO₄ + H₂O",
    type: "Strong Acid + Strong Base",
    reactionColor: "rgba(200,185,220,0.5)",
    pH: 7,
    phType: "Neutral",
    heat: "Strongly Exothermic",
    gas: null,
    precipitate: null,
    observation: "Complete neutralization to give potassium sulfate, a useful fertilizer salt. The solution heats up significantly. Clear, colorless product solution.",
    indicators: { litmus: "Purple (neutral)", phenolphthalein: "Colorless" },
    realWorld: "K₂SO₄ is an important fertilizer providing both potassium and sulfur to crops."
  },

  "h2so4+caoh2": {
    equation: "H₂SO₄ + Ca(OH)₂ → CaSO₄↓ + 2H₂O",
    balancedEq: "H₂SO₄(aq) + Ca(OH)₂(aq) → CaSO₄(s)↓ + 2H₂O(l)",
    salt: "Calcium Sulfate (CaSO₄)",
    products: "CaSO₄ (precipitate) + H₂O",
    type: "Strong Acid + Moderate Base",
    reactionColor: "rgba(255,255,240,0.75)",
    pH: 7,
    phType: "Neutral",
    heat: "Exothermic",
    gas: null,
    precipitate: "White CaSO₄ precipitate forms (↓)",
    observation: "⚠️ A white precipitate of CaSO₄ (gypsum) forms immediately! CaSO₄ is nearly insoluble in water. The mixture becomes cloudy/milky white. This is a classic double displacement reaction.",
    indicators: { litmus: "Purple", phenolphthalein: "Colorless" },
    realWorld: "CaSO₄ (Gypsum) is used in making plaster of Paris, cement, and drywall."
  },

  "h2so4+nh3": {
    equation: "H₂SO₄ + 2NH₃ → (NH₄)₂SO₄",
    balancedEq: "H₂SO₄(aq) + 2NH₃(aq) → (NH₄)₂SO₄(aq)",
    salt: "Ammonium Sulfate ((NH₄)₂SO₄)",
    products: "(NH₄)₂SO₄",
    type: "Strong Acid + Weak Base",
    reactionColor: "rgba(220,230,180,0.5)",
    pH: 5.5,
    phType: "Slightly Acidic",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "Ammonia's sharp smell is neutralized by sulfuric acid. The resulting ammonium sulfate solution is mildly acidic. The pungent ammonia odor disappears as the reaction proceeds.",
    indicators: { litmus: "Slightly red", phenolphthalein: "Colorless" },
    realWorld: "(NH₄)₂SO₄ is one of the most important nitrogen fertilizers used in agriculture globally."
  },

  "h2so4+mgoh2": {
    equation: "H₂SO₄ + Mg(OH)₂ → MgSO₄ + 2H₂O",
    balancedEq: "H₂SO₄(aq) + Mg(OH)₂(s) → MgSO₄(aq) + 2H₂O(l)",
    salt: "Magnesium Sulfate (MgSO₄)",
    products: "MgSO₄ + H₂O",
    type: "Strong Acid + Weak Base",
    reactionColor: "rgba(210,220,200,0.5)",
    pH: 6,
    phType: "Slightly Acidic",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "White Mg(OH)₂ dissolves in sulfuric acid to give magnesium sulfate (Epsom salt) solution. The solid disappears gradually. Solution is slightly acidic and clear.",
    indicators: { litmus: "Slightly red", phenolphthalein: "Colorless" },
    realWorld: "MgSO₄ (Epsom salt) is used in bath salts, as a laxative, and in agriculture."
  },

  // ── HNO₃ + Base ──────────────────────────
  "hno3+naoh": {
    equation: "HNO₃ + NaOH → NaNO₃ + H₂O",
    balancedEq: "HNO₃(aq) + NaOH(aq) → NaNO₃(aq) + H₂O(l)",
    salt: "Sodium Nitrate (NaNO₃)",
    products: "NaNO₃ + H₂O",
    type: "Strong Acid + Strong Base",
    reactionColor: "rgba(195,195,195,0.5)",
    pH: 7,
    phType: "Neutral",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "Complete neutralization. The product NaNO₃ (Chile saltpeter) is highly soluble. Solution is colorless and neutral. Noticeable heat released.",
    indicators: { litmus: "Purple (neutral)", phenolphthalein: "Colorless" },
    realWorld: "NaNO₃ is used as a fertilizer, food preservative (curing meats), and in explosives."
  },

  "hno3+koh": {
    equation: "HNO₃ + KOH → KNO₃ + H₂O",
    balancedEq: "HNO₃(aq) + KOH(aq) → KNO₃(aq) + H₂O(l)",
    salt: "Potassium Nitrate (KNO₃)",
    products: "KNO₃ + H₂O",
    type: "Strong Acid + Strong Base",
    reactionColor: "rgba(200,195,215,0.5)",
    pH: 7,
    phType: "Neutral",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "Potassium nitrate (saltpeter) formed in solution. Clear, colorless, neutral solution with mild warming. KNO₃ is fully soluble.",
    indicators: { litmus: "Purple (neutral)", phenolphthalein: "Colorless" },
    realWorld: "KNO₃ (saltpeter) is a key ingredient in gunpowder, fireworks, and fertilizers."
  },

  "hno3+caoh2": {
    equation: "2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O",
    balancedEq: "2HNO₃(aq) + Ca(OH)₂(aq) → Ca(NO₃)₂(aq) + 2H₂O(l)",
    salt: "Calcium Nitrate (Ca(NO₃)₂)",
    products: "Ca(NO₃)₂ + H₂O",
    type: "Strong Acid + Moderate Base",
    reactionColor: "rgba(200,220,210,0.5)",
    pH: 6.8,
    phType: "Near Neutral",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "Calcium nitrate forms in clear solution. Slightly acidic due to moderate base strength of Ca(OH)₂. Warm, colorless solution produced.",
    indicators: { litmus: "Slightly red", phenolphthalein: "Colorless" },
    realWorld: "Ca(NO₃)₂ is used as a fast-acting nitrogen and calcium fertilizer for crops."
  },

  "hno3+nh3": {
    equation: "HNO₃ + NH₃ → NH₄NO₃",
    balancedEq: "HNO₃(aq) + NH₃(aq) → NH₄NO₃(aq)",
    salt: "Ammonium Nitrate (NH₄NO₃)",
    products: "NH₄NO₃",
    type: "Strong Acid + Weak Base",
    reactionColor: "rgba(230,230,170,0.5)",
    pH: 5.1,
    phType: "Acidic",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "Ammonia smell disappears. NH₄NO₃ solution is moderately acidic. The reaction is vigorous and exothermic. ⚠️ NH₄NO₃ is an important but potentially explosive salt when dry.",
    indicators: { litmus: "Red (acidic)", phenolphthalein: "Colorless" },
    realWorld: "⚠️ NH₄NO₃ is a major nitrogen fertilizer but is also used in mining explosives (ANFO)."
  },

  "hno3+mgoh2": {
    equation: "2HNO₃ + Mg(OH)₂ → Mg(NO₃)₂ + 2H₂O",
    balancedEq: "2HNO₃(aq) + Mg(OH)₂(s) → Mg(NO₃)₂(aq) + 2H₂O(l)",
    salt: "Magnesium Nitrate (Mg(NO₃)₂)",
    products: "Mg(NO₃)₂ + H₂O",
    type: "Strong Acid + Weak Base",
    reactionColor: "rgba(215,225,200,0.5)",
    pH: 5.8,
    phType: "Slightly Acidic",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "Mg(OH)₂ solid dissolves slowly in nitric acid. The solution becomes clear and slightly acidic. Magnesium nitrate is highly soluble and hygroscopic.",
    indicators: { litmus: "Slightly red", phenolphthalein: "Colorless" },
    realWorld: "Mg(NO₃)₂ is used as a fertilizer and in pyrotechnics."
  },

  // ── CH₃COOH + Base ───────────────────────
  "ch3cooh+naoh": {
    equation: "CH₃COOH + NaOH → CH₃COONa + H₂O",
    balancedEq: "CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l)",
    salt: "Sodium Acetate (CH₃COONa)",
    products: "CH₃COONa + H₂O",
    type: "Weak Acid + Strong Base",
    reactionColor: "rgba(180,210,180,0.5)",
    pH: 8.9,
    phType: "Basic",
    heat: "Mildly Exothermic",
    gas: null,
    precipitate: null,
    observation: "Sodium acetate is formed. The solution is basic (pH ~8.9) because acetate ion is a weak conjugate base that hydrolyzes. The vinegar smell of acetic acid disappears. Clear solution with mild smell.",
    indicators: { litmus: "Blue (basic)", phenolphthalein: "Pink" },
    realWorld: "Sodium acetate is used as a food preservative (E262), in hand warmers, and in heating pads."
  },

  "ch3cooh+koh": {
    equation: "CH₃COOH + KOH → CH₃COOK + H₂O",
    balancedEq: "CH₃COOH(aq) + KOH(aq) → CH₃COOK(aq) + H₂O(l)",
    salt: "Potassium Acetate (CH₃COOK)",
    products: "CH₃COOK + H₂O",
    type: "Weak Acid + Strong Base",
    reactionColor: "rgba(175,185,220,0.5)",
    pH: 9.2,
    phType: "Basic",
    heat: "Mildly Exothermic",
    gas: null,
    precipitate: null,
    observation: "Potassium acetate forms in a basic solution. The sour vinegar odor neutralizes. Solution is clear and basic due to hydrolysis of the acetate ion.",
    indicators: { litmus: "Blue (basic)", phenolphthalein: "Pink" },
    realWorld: "Potassium acetate is used as a de-icing agent for airport runways (safer than road salt)."
  },

  "ch3cooh+caoh2": {
    equation: "2CH₃COOH + Ca(OH)₂ → (CH₃COO)₂Ca + 2H₂O",
    balancedEq: "2CH₃COOH(aq) + Ca(OH)₂(aq) → (CH₃COO)₂Ca(aq) + 2H₂O(l)",
    salt: "Calcium Acetate ((CH₃COO)₂Ca)",
    products: "(CH₃COO)₂Ca + H₂O",
    type: "Weak Acid + Moderate Base",
    reactionColor: "rgba(190,215,195,0.5)",
    pH: 8.5,
    phType: "Basic",
    heat: "Mildly Exothermic",
    gas: null,
    precipitate: null,
    observation: "Calcium acetate forms, the solution is basic. Known historically as 'acetate of lime'. The vinegar smell gradually disappears. Clear to very slightly hazy solution.",
    indicators: { litmus: "Blue (basic)", phenolphthalein: "Pink" },
    realWorld: "Calcium acetate is used as a food additive and as a stabilizer in making methanol fuel."
  },

  "ch3cooh+nh3": {
    equation: "CH₃COOH + NH₃ → CH₃COONH₄",
    balancedEq: "CH₃COOH(aq) + NH₃(aq) → CH₃COONH₄(aq)",
    salt: "Ammonium Acetate (CH₃COONH₄)",
    products: "CH₃COONH₄",
    type: "Weak Acid + Weak Base",
    reactionColor: "rgba(200,210,190,0.5)",
    pH: 7,
    phType: "Neutral",
    heat: "Slightly Exothermic",
    gas: null,
    precipitate: null,
    observation: "Both acids and base are weak — their weaknesses cancel out! Ammonium acetate solution has a pH very close to 7. Both the vinegar smell and ammonia smell decrease. The solution shows approximately neutral pH — a rare case of weak acid + weak base giving ~neutral solution.",
    indicators: { litmus: "Purple (neutral)", phenolphthalein: "Colorless" },
    realWorld: "Ammonium acetate is used in chemical analysis as a buffer and in food as a leavening agent."
  },

  "ch3cooh+mgoh2": {
    equation: "2CH₃COOH + Mg(OH)₂ → (CH₃COO)₂Mg + 2H₂O",
    balancedEq: "2CH₃COOH(aq) + Mg(OH)₂(s) → (CH₃COO)₂Mg(aq) + 2H₂O(l)",
    salt: "Magnesium Acetate ((CH₃COO)₂Mg)",
    products: "(CH₃COO)₂Mg + H₂O",
    type: "Weak Acid + Weak Base",
    reactionColor: "rgba(205,215,185,0.5)",
    pH: 7.5,
    phType: "Slightly Basic",
    heat: "Mildly Exothermic",
    gas: null,
    precipitate: null,
    observation: "White Mg(OH)₂ slowly dissolves in acetic acid. The solution turns clear as magnesium acetate forms. Mild vinegar smell persists (weak acid not fully neutralized). Solution is slightly basic.",
    indicators: { litmus: "Slightly blue", phenolphthalein: "Faint pink" },
    realWorld: "Magnesium acetate is used in textile dyeing and as a catalyst in some chemical processes."
  },

  // ── H₃PO₄ + Base ─────────────────────────
  "h3po4+naoh": {
    equation: "H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O",
    balancedEq: "H₃PO₄(aq) + 3NaOH(aq) → Na₃PO₄(aq) + 3H₂O(l)",
    salt: "Sodium Phosphate (Na₃PO₄)",
    products: "Na₃PO₄ + H₂O",
    type: "Weak Acid + Strong Base",
    reactionColor: "rgba(185,195,220,0.5)",
    pH: 12,
    phType: "Strongly Basic",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "Trisodium phosphate (TSP) forms in a strongly basic solution. Because H₃PO₄ is a weak acid, excess NaOH or phosphate hydrolysis keeps pH high. Clear solution, noticeably warm.",
    indicators: { litmus: "Blue (basic)", phenolphthalein: "Deep pink" },
    realWorld: "Na₃PO₄ (TSP) is used as a heavy-duty cleaner, paint stripper prep, and food additive."
  },

  "h3po4+koh": {
    equation: "H₃PO₄ + 3KOH → K₃PO₄ + 3H₂O",
    balancedEq: "H₃PO₄(aq) + 3KOH(aq) → K₃PO₄(aq) + 3H₂O(l)",
    salt: "Potassium Phosphate (K₃PO₄)",
    products: "K₃PO₄ + H₂O",
    type: "Weak Acid + Strong Base",
    reactionColor: "rgba(190,180,220,0.5)",
    pH: 11.5,
    phType: "Strongly Basic",
    heat: "Exothermic",
    gas: null,
    precipitate: null,
    observation: "Tripotassium phosphate forms in a strongly basic solution. Clear, colorless, warm solution with high pH. K₃PO₄ is fully soluble.",
    indicators: { litmus: "Blue (basic)", phenolphthalein: "Pink" },
    realWorld: "K₃PO₄ is used as a fertilizer providing both potassium and phosphorus essential for plant growth."
  },

  "h3po4+caoh2": {
    equation: "2H₃PO₄ + 3Ca(OH)₂ → Ca₃(PO₄)₂↓ + 6H₂O",
    balancedEq: "2H₃PO₄(aq) + 3Ca(OH)₂(aq) → Ca₃(PO₄)₂(s)↓ + 6H₂O(l)",
    salt: "Calcium Phosphate (Ca₃(PO₄)₂)",
    products: "Ca₃(PO₄)₂ (precipitate) + H₂O",
    type: "Weak Acid + Moderate Base",
    reactionColor: "rgba(250,250,240,0.80)",
    pH: 7.2,
    phType: "Near Neutral",
    heat: "Exothermic",
    gas: null,
    precipitate: "White Ca₃(PO₄)₂ precipitate (↓)",
    observation: "⚠️ A white precipitate of Ca₃(PO₄)₂ forms — it is nearly insoluble! The mixture turns milky white. This is similar to the mineral composition of bones and teeth!",
    indicators: { litmus: "Purple (neutral)", phenolphthalein: "Colorless" },
    realWorld: "Ca₃(PO₄)₂ is the main mineral in bones and teeth. Used in fertilizers (superphosphate) and ceramics."
  },

  "h3po4+nh3": {
    equation: "H₃PO₄ + 3NH₃ → (NH₄)₃PO₄",
    balancedEq: "H₃PO₄(aq) + 3NH₃(aq) → (NH₄)₃PO₄(aq)",
    salt: "Ammonium Phosphate ((NH₄)₃PO₄)",
    products: "(NH₄)₃PO₄",
    type: "Weak Acid + Weak Base",
    reactionColor: "rgba(210,225,185,0.5)",
    pH: 8,
    phType: "Slightly Basic",
    heat: "Mildly Exothermic",
    gas: null,
    precipitate: null,
    observation: "Ammonium phosphate forms in a slightly basic solution. The sharp ammonia smell decreases. Weak acid + weak base — the result depends on the relative Ka and Kb values. Solution is clear and slightly basic.",
    indicators: { litmus: "Slightly blue", phenolphthalein: "Faint pink" },
    realWorld: "(NH₄)₃PO₄ (DAP) is one of the world's most widely used phosphate fertilizers."
  },

  "h3po4+mgoh2": {
    equation: "2H₃PO₄ + 3Mg(OH)₂ → Mg₃(PO₄)₂ + 6H₂O",
    balancedEq: "2H₃PO₄(aq) + 3Mg(OH)₂(s) → Mg₃(PO₄)₂(aq) + 6H₂O(l)",
    salt: "Magnesium Phosphate (Mg₃(PO₄)₂)",
    products: "Mg₃(PO₄)₂ + H₂O",
    type: "Weak Acid + Weak Base",
    reactionColor: "rgba(210,215,200,0.5)",
    pH: 7.8,
    phType: "Slightly Basic",
    heat: "Mildly Exothermic",
    gas: null,
    precipitate: null,
    observation: "White Mg(OH)₂ slowly dissolves in phosphoric acid. The solution clears as magnesium phosphate (sparingly soluble) forms. Solution is slightly basic. May appear slightly hazy.",
    indicators: { litmus: "Slightly blue", phenolphthalein: "Faint pink" },
    realWorld: "Mg₃(PO₄)₂ is used as a dental abrasive, in antacids, and as a mineral supplement."
  }
};
