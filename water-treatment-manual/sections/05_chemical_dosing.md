# Section 5 — Chemical Dosing

> Chemicals are the most powerful tools in your plant — and the most dangerous if used incorrectly. This section explains what each chemical does, how to dose it, how to adjust it, and how to handle it safely.

---

## 5.1 Why We Add Chemicals

Raw water is not a stable, simple substance. The chemicals we add are not "pollution" — they are precision tools. Each one does a specific job:

| Chemical | Job |
|---|---|
| Coagulant (alum, PACl) | Neutralizes the electrical charge on particles so they can clump together and settle |
| Coagulant aid / polymer | Helps small floc particles stick together into larger, heavier floc |
| pH adjustment (lime, caustic, CO₂) | Keeps pH in the optimal range for coagulation and disinfection |
| Disinfectant (chlorine, sodium hypochlorite) | Kills pathogens; maintains residual in distribution |
| Fluoride (sodium fluorosilicate, fluorosilicic acid) | Dental health benefit (where required by jurisdiction) |
| Corrosion inhibitor (orthophosphate) | Coats pipes to prevent lead and copper leaching |
| Powdered activated carbon (PAC) | Adsorbs taste and odour compounds during algae events |

---

## 5.2 Calculating Chemical Doses

### The Basic Dose Equation

```
Dose (mg/L) × Flow (L/min) = Mass added per minute (mg/min)

Convert to pump settings:
mg/min ÷ Chemical concentration (mg/mL) = mL/min pump output
```

**Example — Chlorine:**
- Target dose: 2.0 mg/L (as Cl₂)
- Plant flow: 2,000 L/min
- Sodium hypochlorite (NaOCl) solution: 12.5% = 125,000 mg/L = 125 mg/mL

```
2.0 mg/L × 2,000 L/min = 4,000 mg/min needed
4,000 mg/min ÷ 125 mg/mL = 32 mL/min pump output
```

`ℹ️ WHY:` You must re-calculate whenever flow changes. Dose is always proportional to flow. A pump running at a fixed rate while flow doubles = half the intended dose.

---

## 5.3 Chemical-by-Chemical Guide

### 5.3.1 Coagulant — Alum (Aluminium Sulphate)

**What it is:** Al₂(SO₄)₃ · 14H₂O — a white crystalline solid (or clear liquid solution).

**What it does:** When added to water, alum hydrolyses (reacts with water) to form aluminium hydroxide [Al(OH)₃] — a gelatinous, sticky precipitate that collects suspended particles as it settles.

**Typical dose:** 5–40 mg/L (varies enormously by raw water quality — use jar test to determine).

**Optimal pH:** 6.0–7.5. Outside this range, coagulation efficiency drops sharply.

**Important:** Alum consumes alkalinity. If raw water alkalinity is low (< 50 mg/L as CaCO₃), you may need to add lime or sodium bicarbonate to maintain adequate buffering.

**Signs of under-dosing:**
- Poor floc formation (pinpoint floc)
- High turbidity in settled water

**Signs of over-dosing:**
- High turbidity in settled water (the charge reverses — over-coagulated particles repel again)
- High aluminium residual in finished water
- pH drops unexpectedly

---

### 5.3.2 Coagulant — PACl (Poly-Aluminium Chloride)

**What it is:** A pre-polymerized aluminium salt — Al_n(OH)_m·Cl_{3n-m}.

**Advantages over alum:** More effective at cold temperatures (important in Canada), wider effective pH range, less sludge production.

**Typical dose:** 5–25 mg/L (lower than alum for equivalent performance).

*Site-specific dosing table to be filled in once your SOPs are provided.*

---

### 5.3.3 Disinfectant — Sodium Hypochlorite (Liquid Bleach)

**What it is:** NaOCl — the active ingredient in bleach. Typically 12–15% available chlorine as shipped, degrades over time and with heat/light exposure.

**What it does:** Reacts with water to form hypochlorous acid (HOCl), the primary active disinfectant. HOCl is more effective at lower pH.

**CT concept:**
- CT = Concentration (mg/L) × Time (minutes)
- Regulators specify a minimum CT required to inactivate specific pathogens (e.g., Giardia, Cryptosporidium).
- CT = free chlorine residual at the end of the contact chamber × hydraulic detention time.

**Chlorine demand:** The amount of chlorine consumed by organic matter, metals (iron, manganese), and other reducing substances before a residual is established. You must dose enough to satisfy the demand PLUS achieve the target residual.

**Chlorine demand = Applied dose − Residual**

**Chlorine byproducts (DBPs):** Chlorine reacts with natural organic matter (NOM) to form trihalomethanes (THMs) and haloacetic acids (HAAs) — regulated carcinogens. High NOM in raw water = higher DBP risk = more important to remove NOM before chlorination.

**Typical operating range:**
- Applied dose: 1–5 mg/L (depends on chlorine demand of your source water)
- Finished water free chlorine: 0.2–1.5 mg/L (depends on permit and distribution system length)

`⚠️ WARNING:` Sodium hypochlorite is corrosive. Never mix with acids (violent chlorine gas release). Always add to water — never add water to concentrated bleach. Wear face shield, chemical splash goggles, and chemical-resistant gloves when handling.

---

### 5.3.4 pH Adjustment — Lime (Calcium Hydroxide)

**What it is:** Ca(OH)₂ — a white powder or slurry. Also called "hydrated lime."

**What it does:** Raises pH. Used to:
- Restore alkalinity consumed by alum
- Adjust finished water pH upward for corrosion control
- Soften water (lime-soda softening)

**Typical dose:** 5–30 mg/L (highly variable — test and titrate).

**Handling:** Lime is caustic (pH > 12). Creates dust when dry. Wears through skin slowly. Goggles and dust mask required.

---

### 5.3.5 Fluoride

*If your plant adds fluoride, this section will be expanded with your site-specific target, chemical, and dosing procedure.*

**Typical target:** 0.7 mg/L (Health Canada recommendation; varies by jurisdiction).

`⚠️ WARNING:` Fluoride chemicals (fluorosilicic acid / hydrofluorosilicic acid) are highly corrosive acids. Require face shield, splash goggles, acid-resistant gloves and apron.

---

## 5.4 Chemical Dosing Pumps

Chemical dosing pumps are positive-displacement metering pumps. Common types:

| Type | How it works | Common use |
|---|---|---|
| **Peristaltic** | Rollers squeeze flexible tubing to push liquid | Corrosive chemicals, small flows |
| **Diaphragm (piston)** | A diaphragm flexes back and forth to draw and push liquid | Accurate metering, most process chemicals |

**Setting the dose:**
Most pumps have two adjustments:
1. **Stroke rate** (cycles per minute) — how often it pumps
2. **Stroke length** (% of full stroke) — how much it pumps per stroke

Output (mL/min) = Stroke rate × Stroke length × Pump capacity per stroke

Always verify the actual output by timing how long it takes to empty a measured volume from a graduated cylinder or by using a calibration column on the pump. Never trust the dial alone.

---

## 5.5 Dosing Adjustments — When and How

| Trigger | Action |
|---|---|
| Raw water turbidity increases (e.g., storm event) | Increase coagulant dose (re-run jar test if available) |
| Raw water turbidity decreases | May decrease coagulant dose |
| Settled water turbidity is rising | Increase coagulant, check flocculation, consider polymer |
| Filter effluent turbidity is rising | Check coagulation, may need backwash |
| Finished water chlorine residual is low | Increase chlorine dose |
| Finished water chlorine residual is high (wasting chemical, high DBP risk) | Decrease chlorine dose |
| Raw water pH changes significantly | May need to adjust pH correction chemical |
| Plant flow increases | Increase all doses proportionally |
| Plant flow decreases | Decrease all doses proportionally |

`ℹ️ WHY:` Chemical doses are always relative to flow and raw water quality. A static dose on a variable system means you're over-dosing during low flow and under-dosing during high flow.

---

## 5.6 Chemical Inventory Management

- Check chemical tank levels every shift. Record levels in the logbook.
- Calculate days of supply remaining: `(Tank volume remaining) ÷ (Daily consumption rate) = Days of supply`
- Reorder threshold: Order when you have ≤ 5 days of supply (or per your site policy).
- Rotate stock: First in, first out (FIFO). Sodium hypochlorite degrades rapidly — don't let old stock sit.
- Record every chemical delivery: date, supplier, quantity, lot number, concentration.

---

## 5.7 Chemical Safety Summary

> Full chemical safety procedures, including SDS references, spill response, and first aid, are in Section 9 (Safety) and Section 10 (Emergency Response).

| Chemical | Key Hazard | Critical PPE |
|---|---|---|
| Alum (liquid) | Corrosive (pH ~2) | Splash goggles, chemical gloves, apron |
| PACl (liquid) | Corrosive | Splash goggles, chemical gloves, apron |
| Sodium hypochlorite | Oxidizer, corrosive, releases chlorine gas if mixed with acid | Face shield, splash goggles, chemical gloves, apron |
| Lime (powder) | Caustic, lung irritant (dust) | Dust mask/N95, goggles, gloves |
| Fluorosilicic acid | Highly corrosive acid | Face shield, splash goggles, acid gloves, apron |
| Polymer/coagulant aid | Slippery when spilled | Gloves; clean up spills immediately |

`⚠️ WARNING:` Know the locations of all Safety Data Sheets (SDS) in your chemical storage area. Read the SDS for every chemical before you handle it for the first time.

---

*Last updated: 2026-06-04 | Source: Initial framework*
