# Section 6 — Equipment Guide

> This section covers how each major piece of equipment works, how to operate its controls, what normal looks like, and what warning signs to watch for. Site-specific equipment details will be filled in as you provide manuals and photos.

---

## 6.1 Pumps

### What pumps do
Pumps move water (or chemicals) from one point to another by adding energy (pressure) to the liquid.

### Types of pumps you'll encounter

| Type | How it works | Common use |
|---|---|---|
| **Centrifugal** | Impeller spins, flinging water outward — creates suction at centre | Raw water, high-lift, backwash, transfer |
| **Submersible centrifugal** | Same as centrifugal, but motor is submerged with pump | Wet well, intake, sumps |
| **Positive displacement (diaphragm, peristaltic)** | Traps and pushes a fixed volume per stroke/rotation | Chemical dosing |
| **Vertical turbine** | Centrifugal impeller on a long shaft; pump is submerged, motor is above | Deep wells, large intakes |

### Reading a pump's performance
Every centrifugal pump has a **pump curve** — a graph showing flow rate (GPM or L/min) vs. head (pressure it can develop). As flow increases, pressure drops. Your pump must always operate on its curve.

**Signs a pump is in trouble:**

| Symptom | Likely cause |
|---|---|
| Vibration, noise like gravel | Cavitation — pump is running with insufficient suction pressure or too much flow |
| Motor overheating (tripping thermal overload) | Pump is working too hard; check discharge valve restriction, or impeller wear |
| No flow, pump running | Impeller clogged, or pump lost prime (air in suction) |
| Low flow | Partially blocked impeller or discharge line |
| Seal / packing leaks significantly | Worn seal or packing — schedule replacement |

### Pump LOTO points
*(To be filled in with site-specific valve tags and breaker numbers when you provide your P&ID and electrical single-line diagram.)*

---

## 6.2 Valves

### Types
| Type | Symbol | Use |
|---|---|---|
| **Gate valve** | Diamond shape | Fully open or fully closed; not for throttling |
| **Ball valve** | Circle with line | Quick open/close; handle parallel = open, perpendicular = closed |
| **Butterfly valve** | Circle with line | Good for throttling large flows |
| **Check valve** | Arrow symbol | Allows flow in one direction only; prevents backflow |
| **Pressure relief valve** | Spring symbol | Opens automatically if pressure exceeds set point |
| **Solenoid valve** | Box with coil | Electrically operated; opens/closes on signal from controller |

### The 25% rule for startup
When opening any large valve for the first time, open to 25%, wait 30 seconds, then proceed to 50%, then 75%, then 100%. This prevents water hammer.

---

## 6.3 Mixers (Rapid Mix and Flocculation)

**Rapid mixer** — high-speed, short-contact mixer at the coagulant injection point. Disperses the coagulant instantly throughout the water before it can settle in one spot.

**Flocculation mixer** — slow-speed, long-contact mixer in the flocculation basin. Provides gentle agitation that promotes particle collision without breaking up forming floc.

| Mixer type | G-value (turbulence) | Contact time |
|---|---|---|
| Rapid mix | 300–1000 s⁻¹ | 10–60 seconds |
| Flocculation | 10–75 s⁻¹ | 15–30 minutes |

`ℹ️ WHY:` G-value measures turbulence. Too much turbulence in flocculation breaks the floc apart — it's like trying to make snowballs in a hurricane. Too little means particles never collide to form floc.

**Signs of mixer problems:**
- Floc remains pinpoint-sized → possible over-mixing or under-dosing
- Floc is large but breaks apart before settling → possible over-mixing in flocculation, or floc is too fragile (polymer may help)
- Mixer vibrating unusually → impeller imbalance; check for debris and wear

---

## 6.4 Sedimentation Basins / Clarifiers

**What they do:** Allow floc-laden water to sit long enough for floc to settle to the bottom under gravity. The heavier the floc, the faster it settles.

**Types:**
- **Conventional rectangular basin** — water flows horizontally
- **Upflow clarifier / solids contact clarifier** — water flows upward through a sludge blanket
- **Lamella / tube settlers / plate settlers** — inclined plates that increase effective settling surface area dramatically

**Key parameter: Surface overflow rate (SOR)**
```
SOR = Flow (m³/day) ÷ Basin surface area (m²)
```
Lower SOR = better settling. If flow increases beyond the basin's design SOR, solids carry over to the filters.

**Sludge removal:**
Settled sludge must be periodically removed from the basin floor. Methods:
- **Automated scrapers** (continuous) — blades push sludge to a sump
- **Manual drain** (intermittent) — open sludge drain valve and flush to sewer/lagoon

Signs of sludge problems:
- Sludge blanket rising too high → settled water quality deteriorates → reduce flow or increase drain frequency
- Dark/septic-smelling sludge → anaerobic decomposition → drain more frequently

---

## 6.5 Filters

### How they work

Water passes downward through a bed of granular media (typically sand, anthracite coal, or a combination). Particles attach to media grains by physical straining, sedimentation, and adsorption.

**Dual-media filter:** Anthracite (coarse, light) on top of sand (fine, dense). Allows deeper penetration of the floc before the fine layer captures the rest — gives longer filter runs.

**Key parameters to monitor:**

| Parameter | What it tells you | Normal range |
|---|---|---|
| Filter effluent turbidity | Filter performance | ≤ 0.1–0.3 NTU |
| Differential pressure (headloss) | How clogged the filter is | Increases throughout run; backwash when it reaches set point |
| Filter run time | Time since last backwash | Typically 24–72 hours |
| Flow rate through filter | Filtration rate | Per design spec |

### When to backwash

Backwash when ANY of the following occur:
1. Headloss reaches the maximum set point (e.g., 2.0 m or as per your SOP)
2. Filter effluent turbidity starts rising above target
3. Filter run time exceeds the maximum interval (even if headloss is OK)
4. After a plant shutdown > a few hours

### Backwash procedure (generic — update with site-specific steps)

`[ACTION]`  
1. Take the filter offline: slowly close the inlet and outlet valves.  
2. Open the backwash drain valve (to sewer or settling lagoon).  
3. Start the backwash pump (or open the backwash supply valve from the clear well).  
4. Increase backwash flow gradually — avoid media loss over the weir (too high a flow will wash your media out).  
5. Target backwash expansion: 20–30% bed expansion (visually — media should look fluffy and turbulent but not going over the weir).  
6. Backwash for the specified time (typically 5–15 minutes) or until the backwash drain runs clear.  
7. Optionally, run an air scour first (if your filter has air scour capability) to break up compacted media.  
8. Slowly ramp down backwash flow and close backwash valve.  
9. Allow the filter to drain to the bed surface, then slowly re-introduce influent.  
10. Direct the first 10–15 minutes of filter effluent to waste (filter ripening) — do NOT send to the clear well.  
11. Record backwash in the logbook: start time, end time, peak headloss before backwash, turbidity before and after.

---

## 6.6 Disinfection Systems

### 6.6.1 Chlorine Contact Chamber

A long, baffled chamber that provides a specific hydraulic detention time to ensure the water–chlorine contact needed to achieve the required CT value.

`[CHECK]` Each shift: measure free chlorine at the inlet and outlet. Record both. The difference is the chlorine consumed in the chamber.

### 6.6.2 UV Disinfection System (if installed)

UV light damages the DNA of pathogens so they cannot reproduce. Advantages: no chemical byproducts (no THMs/HAAs), effective against Cryptosporidium (resistant to chlorine at practical doses).

**Key parameters:**
- UV dose (mJ/cm²) — must meet the requirement in your permit
- UV transmittance (UVT) — how "clear" the water is to UV light. Turbidity, iron, and NOM reduce UVT and reduce effective dose.
- Lamp intensity — lamps age and dim over time; replace per manufacturer schedule
- Sleeve cleaning — quartz sleeves accumulate deposits; clean on schedule

`[CHECK]` Each shift: record UV intensity, UVT, and any fault alarms.

---

## 6.7 Online Instruments

### Turbidimeters (online, continuous)
Installed at filter effluent and at the entry to distribution. They read every few minutes and trigger an alarm if turbidity exceeds the setpoint.

**Maintenance:**
- Clean the flow-through cell weekly (algae and debris accumulate)
- Calibrate weekly with Formazin or StablCal standard
- Check the zero reading with distilled water monthly

### Chlorine Analyzers (online, continuous)
Measure free or total chlorine in real time. Typically amperometric (electrochemical) sensors.

**Maintenance:**
- Change reagents per manufacturer schedule
- Clean sensor cell weekly
- Calibrate weekly using a DPD manual test on the same sample stream

### Flow Meters
**Electromagnetic (mag meter):** Measures conductivity change in a magnetic field — no moving parts. Accurate and low maintenance. Cannot measure non-conductive fluids.

**Venturi / differential pressure meter:** Uses the pressure drop across a constriction. Requires periodic cleaning of pressure taps.

---

*Last updated: 2026-06-04 | Source: Initial framework — site-specific details to be added from equipment manuals*
