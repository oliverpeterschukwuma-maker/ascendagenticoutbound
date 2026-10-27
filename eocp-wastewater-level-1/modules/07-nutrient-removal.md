# Module 7 — Nutrient Removal (Nitrogen & Phosphorus) — Level I depth

← [Module 6](06-secondary-clarification.md) · [Course index](../README.md) · Next → [Module 8 — Disinfection](08-disinfection.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **A2O** = Anaerobic-Anoxic-Oxic process · **BNR** = Biological Nutrient Removal · **BOD** = Biochemical Oxygen Demand · **CaCO₃** = calcium carbonate · **DO** = Dissolved Oxygen · **EBPR** = Enhanced Biological Phosphorus Removal · **mg/L** = milligrams per litre · **MLE** = Modified Ludzack-Ettinger (anoxic-first nitrogen removal) · **mV** = millivolts · **NH₃** = ammonia · **NH₃-N** = ammonia measured as nitrogen · **NO₂** = nitrite · **NO₂-N** = nitrite measured as nitrogen · **NO₃** = nitrate · **NO₃-N** = nitrate measured as nitrogen · **NTK** = Need-to-Know Criteria · **N₂** = nitrogen gas · **ORP** = Oxidation-Reduction Potential · **OSHA** = Occupational Safety and Health Administration (US) · **O₂** = oxygen · **PAOs** = Phosphorus-Accumulating Organisms · **PPE** = Personal Protective Equipment · **RAS** = Return Activated Sludge · **SOP** = Standard Operating Procedure · **SRT** = Solids Retention Time · **TKN** = Total Kjeldahl Nitrogen · **TN** = Total Nitrogen · **TSS** = Total Suspended Solids · **VFAs** = Volatile Fatty Acids · **WAS** = Waste Activated Sludge
<!-- abbr-end -->

**NTK (Need-to-Know Criteria) area:** Treatment Process Evaluation & Adjustment. Level I tests the **basic ideas**: what nitrification and denitrification are, what conditions they need, why phosphorus matters, and the basics of chemical and biological phosphorus removal. Detailed BNR (Biological Nutrient Removal) design is Level III–IV — not covered here.

<!-- videos-start -->
> 🎥 **Watch (optional, helps with harder ideas):** [Wastewater Instructional Video: Wastewater Nitrification](https://www.youtube.com/watch?v=ttNdhxw0Dcg) · [Wastewater Instructional Video: Wastewater DeNitrification](https://www.youtube.com/watch?v=Gma25jZ0lwI) · [Nitrogen Removal in Municipal Wastewater](https://www.youtube.com/watch?v=M3VDmhYQRrU)
> 
> *Videos were found by search, not watched in full. Many are American — they may use US units and OSHA (Occupational Safety and Health Administration, US) rules. In BC, **WorkSafeBC** rules apply and the exam uses **both metric and US units**. If a link is dead, search YouTube for the title.*
<!-- videos-end -->

---

## 1. What you need to know (checklist)

**Nitrogen**
- [ ] Forms of nitrogen: organic N, ammonia, nitrite, nitrate, nitrogen gas; TKN (Total Kjeldahl Nitrogen)
- [ ] Why ammonia is a problem (toxic to fish, oxygen demand)
- [ ] **Nitrification**: what it is, which bacteria, what it needs (DO (Dissolved Oxygen), SRT (Solids Retention Time), temperature, pH, alkalinity)
- [ ] Nitrification uses **oxygen** and **alkalinity**
- [ ] **Denitrification**: what it is, what it needs (anoxic, carbon/BOD, nitrate)
- [ ] Denitrification in the wrong place → **rising sludge**
- [ ] Partial nitrification → nitrite → higher chlorine demand

**Phosphorus**
- [ ] Why phosphorus matters (eutrophication)
- [ ] **Chemical P removal** (alum, ferric): how, where, side effects
- [ ] **Biological P removal**: anaerobic then aerobic; removed in WAS (Waste Activated Sludge); secondary release
- [ ] Basic operator monitoring (ammonia, nitrate, phosphate, alkalinity, ORP (Oxidation-Reduction Potential))

---

## 2. Plain-English teaching

### 2.1 Why remove nutrients?

**Nutrients = nitrogen (N) and phosphorus (P).** They're fertilizer. In rivers and lakes, too much fertilizer causes:
- **Algae blooms** → when algae die, bacteria decompose them and **use up oxygen** → fish die (**eutrophication**).
- **Ammonia** is also **directly toxic to fish**, and bacteria use oxygen to convert it, so it creates an **oxygen demand** in the receiving water.

### 2.2 The nitrogen "family" — follow the nitrogen

```
 ORGANIC N ──(bacteria break down; "ammonification")──► AMMONIA (NH₃ / NH₄⁺)
 (urine, feces, proteins)                                  │
                                                           │ NITRIFICATION (needs O₂ — aerobic)
                                                           ▼
                                                     NITRITE (NO₂⁻)   ← short-lived middle step
                                                           │
                                                           ▼
                                                     NITRATE (NO₃⁻)
                                                           │
                                                           │ DENITRIFICATION (no O₂ — anoxic, needs BOD)
                                                           ▼
                                                   NITROGEN GAS (N₂) → escapes to the air ✓
```

**TKN (Total Kjeldahl Nitrogen) = organic N + ammonia N.** It's the "unconverted" nitrogen.
**Total nitrogen (TN) = TKN + nitrite N + nitrate N.**

**Memory trick: "A → I → A → N"** — **A**mmonia → n**I**trite → nitr**A**te → **N**itrogen gas. (Or remember: nitr**I**te comes before nitr**A**te — "I before A".)

### 2.3 Nitrification

**Nitrification** = bacteria convert **ammonia → nitrite → nitrate**, using **oxygen**.

| Step | Bacteria (recognize) | Conversion |
|---|---|---|
| 1 | *Nitrosomonas* ("**so**" = first) | Ammonia → **nitrite** |
| 2 | *Nitrobacter* (and *Nitrospira*) | Nitrite → **nitrate** |

**Nitrifying bacteria are "fussy"** — they are:
- **Slow-growing** → need a **long sludge age (SRT)**. If you waste too much, they wash out first.
- **Aerobic only** → need DO (commonly **≥ 2 mg/L (milligrams per litre)** in the aeration tank for good nitrification). **[SUPPLEMENTAL]**
- **Temperature-sensitive** → slow way down in cold water (BC winters!). Need an even longer SRT in winter.
- **pH-sensitive** → like roughly **7.0–8.0**; slow down a lot below ~6.8. **[SUPPLEMENTAL]**
- **Sensitive to toxics** (metals, solvents) — often the first thing to stop working after a toxic discharge.

**Nitrification costs the plant two things [SUPPLEMENTAL — standard textbook values]:**
| Uses | Amount per 1 mg of ammonia-N converted |
|---|---|
| **Oxygen** | ≈ **4.6 mg O₂** (textbook 4.57) |
| **Alkalinity** | ≈ **7.1 mg as CaCO₃** (textbook 7.14) |

**What this means for you:**
- When a plant starts nitrifying, **air demand goes up a lot**.
- **Alkalinity drops and pH can fall.** If alkalinity runs out (commonly keep at least ~50–100 mg/L as CaCO₃ remaining in effluent), pH crashes and nitrification stops. Fix: add alkalinity (lime, caustic soda, sodium bicarbonate, magnesium hydroxide). **[SUPPLEMENTAL]**

### 2.4 Denitrification

**Denitrification** = bacteria convert **nitrate → nitrogen gas (N₂)**, which bubbles off into the air.

**What it needs:**
1. **Nitrate** (from nitrification)
2. **Anoxic conditions** — no DO (low, roughly < 0.3–0.5 mg/L), so bacteria "breathe" the oxygen in nitrate instead **[SUPPLEMENTAL]**
3. **A carbon source ("food")** — BOD (Biochemical Oxygen Demand) from the wastewater, or added carbon (e.g., methanol) at some plants

**Good side effects:** denitrification **gets back about half the alkalinity** lost in nitrification and reduces oxygen demand.

**Where it happens (on purpose):** in an **anoxic zone/tank** — often at the **front** of the aeration basin, with **internal recycle** of nitrate-rich mixed liquor from the end of the aerobic zone. (A common layout is the "MLE (Modified Ludzack-Ettinger, anoxic-first nitrogen removal)" — recognize only.)

```
                        internal recycle (nitrate-rich mixed liquor)
            ┌───────────────────────────────────────────────────┐
            ▼                                                   │
Influent ─► ANOXIC zone ─────────► AEROBIC zone ────────────────┴──► Clarifier ─► Effluent
           (no DO; nitrate +       (DO ~2 mg/L;                         │
            BOD → N₂ gas)           ammonia → nitrate)                   │
            ▲                                                           │
            └──────────────────────── RAS ──────────────────────────────┘
```

**Where it happens by accident:** in the **secondary clarifier sludge blanket** if sludge sits too long → **N₂ bubbles float the sludge** → **rising sludge** (Module 6). Fix: increase RAS (Return Activated Sludge), lower the blanket.

### 2.5 Partial nitrification and chlorine ("nitrite lock") [SUPPLEMENTAL]

If nitrification is only **partly** working (e.g., during start-up, cold weather, or recovery from a toxic upset), **nitrite** builds up. Nitrite **reacts with chlorine** and uses it up quickly (about **5 mg of chlorine per mg of nitrite-N**).
**Result:** chlorine demand jumps, chlorine residual disappears, and **disinfection can fail** even though you're dosing the normal amount. Watch for this when ammonia removal is unstable.

### 2.6 Phosphorus — why it matters

- In fresh water, phosphorus is usually the **limiting nutrient** — algae can't grow without it. Add a little phosphorus and algae explode.
- That's why lakes (e.g., the Okanagan) are very sensitive to phosphorus, and some BC plants have strict phosphorus limits.
- Phosphorus is never "destroyed" — it can only be **moved from the water into the sludge**. So **all phosphorus removal ends with sludge wasting**.

### 2.7 Chemical phosphorus removal

**How it works:** add a **metal salt** that reacts with dissolved phosphate and forms a solid (**precipitate**) that settles out with the sludge.

| Chemical | Notes |
|---|---|
| **Alum** (aluminum sulphate) | Common; acidic |
| **Ferric chloride** / **ferric sulphate** | Common; acidic, corrosive, **stains** (orange-brown) |
| **Lime** | Raises pH; less common for P at small plants |

**Where it can be added:** before the primary clarifier, into the aeration basin/before the secondary clarifier, or before a tertiary filter (multiple points possible).

**Side effects / operator considerations [SUPPLEMENTAL]:**
- **Consumes alkalinity → lowers pH** (watch nitrification).
- **Makes more sludge** (chemical sludge).
- **Overdosing** wastes money and can depress pH; **underdosing** misses the limit.
- Dose is set by **jar testing** and adjusted with flow and phosphorus load.
- Chemicals are **corrosive** — PPE (Personal Protective Equipment), eyewash, compatible storage (keep away from hypochlorite and strong bases).

### 2.8 Biological phosphorus removal (Bio-P / EBPR) — basic idea

Special bacteria called **PAOs (Phosphorus-Accumulating Organisms)** can store extra phosphorus.

```
 ANAEROBIC zone (no DO, no nitrate)           AEROBIC zone (DO present)
 PAOs RELEASE phosphorus and take up    ──►   PAOs TAKE UP MUCH MORE phosphorus
 simple food (volatile fatty acids)            than they released ("luxury uptake")
                                                        │
                                                        ▼
                                          Phosphorus leaves the system in the WAS
```

**Key operator points:**
- The anaerobic zone must be **truly anaerobic** — **nitrate or DO entering it ruins bio-P** (other bacteria use the food first).
- PAOs need **simple food (VFAs)** — septic/fermented influent can actually help here.
- **Secondary release:** if phosphorus-rich sludge goes anaerobic somewhere it shouldn't (sludge blanket, sludge storage, digesters), the bugs **release phosphorus back into the water** → it returns to the plant in **recycle streams** (supernatant, filtrate). Keep clarifier blankets low and manage recycle streams.
- Plants often use **chemical "trim" dosing** as a backup.

### 2.9 What operators monitor

| Test | Where | Tells you |
|---|---|---|
| **Ammonia (NH₃-N)** | Influent, aeration end, effluent | Is nitrification working? |
| **Nitrite (NO₂-N)** | Effluent | Partial nitrification? Chlorine demand risk |
| **Nitrate (NO₃-N)** | Anoxic zone, effluent | Is denitrification working? |
| **Alkalinity** | Influent, effluent | Enough for nitrification? |
| **pH** | Aeration, effluent | Alkalinity running low? |
| **DO** | Aerobic and anoxic zones | Enough O₂ for nitrifiers; none in anoxic/anaerobic zones |
| **ORP** | Anoxic/anaerobic zones | Confirms zone conditions (more negative = more reduced/anaerobic) |
| **Orthophosphate / total P** | Influent, anaerobic/aerobic zones, effluent | P release/uptake; removal |
| **Temperature** | Aeration | Cold → slower nitrification |

**ORP rough guide [SUPPLEMENTAL — ranges vary by probe/plant]:** aerobic = positive (about +100 mV (millivolts) and up); anoxic = around −50 to +50 mV; anaerobic = negative (below about −100 mV).

---

## 3. Operator-level understanding

**Scenario: effluent ammonia is rising in January.**
Think: nitrifiers are slow in the cold → **reduce wasting** (raise SRT), keep **DO ≥ 2 mg/L**, check **alkalinity/pH**, check for toxic discharges.

**Scenario: effluent pH is dropping and ammonia is rising.**
Think: nitrification ate the **alkalinity** → **add alkalinity** (per SOP (Standard Operating Procedure)), check DO.

**Scenario: chlorine residual suddenly disappears; dose unchanged.**
Think: **nitrite** from partial nitrification (or a higher load) → test nitrite, increase dose temporarily, fix nitrification.

**Scenario: effluent phosphorus is high at a chemical-P plant.**
Think: check **chemical feed pump** (running? airlocked? empty tank?), dose vs flow, pH, mixing, and solids carryover (P is in the solids — TSS (Total Suspended Solids) escaping = P escaping).

**Scenario: bio-P plant losing phosphorus removal.**
Think: **nitrate or DO** entering the anaerobic zone; not enough VFAs (food); **secondary release** from long sludge holding; wasting too little.

---

## 4. MUST MEMORIZE

1. Nutrients = **N and P**; excess → **eutrophication**; ammonia is **toxic to fish** and has an **oxygen demand**.
2. Nitrogen path: **organic N → ammonia → nitrite → nitrate → N₂ gas**.
3. **TKN = organic N + ammonia N.**
4. **Nitrification = ammonia → nitrite → nitrate; aerobic; Nitrosomonas then Nitrobacter.**
5. Nitrifiers: **slow-growing (need long SRT), need DO (≈2 mg/L), sensitive to cold, low pH and toxics.**
6. Nitrification uses **≈4.6 mg O₂** and **≈7.1 mg alkalinity** per mg ammonia-N.
7. **Denitrification = nitrate → N₂ gas; anoxic (no DO); needs carbon (BOD).** Returns some alkalinity.
8. Denitrification in the clarifier → **rising sludge**.
9. **Nitrite** uses up chlorine (~5 mg Cl₂/mg NO₂-N (nitrite measured as nitrogen)) → disinfection failure.
10. Phosphorus is the **limiting nutrient** in fresh water; it can only be **moved into sludge** — removed by **wasting**.
11. **Chemical P removal:** alum or ferric → precipitate; **lowers alkalinity/pH; more sludge**.
12. **Bio-P:** **anaerobic (P release) → aerobic (P uptake)**; nitrate/DO in the anaerobic zone ruins it; **secondary release** from anaerobic sludge.

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why nitrifiers wash out with low SRT | N pathway and order | MLE, A2O (Anaerobic-Anoxic-Oxic process), Bardenpho, 4-stage/5-stage |
| Why nitrification lowers pH | 4.6 O₂ / 7.1 alkalinity | *Nitrospira*, AOB/NOB |
| Why denitrification needs no DO but needs BOD | Conditions for nitrification vs denitrification | Methanol as carbon source |
| Why P can only leave in sludge | Alum/ferric; alkalinity loss | Struvite (scaling of pipes in digesters) |
| How nitrite causes chlorine demand | Anaerobic → aerobic for bio-P | Un-ionized ammonia toxicity increases with pH and temperature |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "Denitrification needs oxygen" | It needs **no DO** (anoxic) — bacteria use nitrate's oxygen. |
| "Nitrification raises pH" | It **consumes alkalinity** → pH **drops**. |
| "Nitrate comes before nitrite" | **Nitrite first**, then nitrate (I before A). |
| "Increase wasting to improve nitrification" | **Decrease** wasting (longer SRT) — nitrifiers grow slowly. |
| "Nitrifiers work fine in cold water" | They slow dramatically in cold water. |
| "Chemical P removal reduces sludge" | It **increases** sludge production. |
| "Bio-P needs oxygen in the first zone" | First zone must be **anaerobic** (no DO, no nitrate). |
| "Anoxic = anaerobic" | Anoxic has **nitrate**; anaerobic has **neither**. |
| "Phosphorus is converted to a gas" | Phosphorus has no gas form here — it leaves in **sludge**. |

---

## 7. Practice questions

1. Nitrification is the biological conversion of:
   A. Nitrate to nitrogen gas
   B. Ammonia to nitrite and then nitrate
   C. Organic nitrogen to phosphorus
   D. Nitrogen gas to ammonia

2. Which condition is required for denitrification?
   A. DO of at least 2 mg/L
   B. Anoxic conditions with nitrate and a carbon source present
   C. pH below 5
   D. No bacteria present

3. During cold winter months a plant loses nitrification. The operator's BEST long-term process adjustment is to:
   A. Increase wasting to lower the sludge age
   B. Decrease wasting to increase the sludge age
   C. Turn off the blowers to save energy
   D. Add chlorine to the aeration tank

4. Nitrification has been occurring at a plant with low-alkalinity influent. The aeration tank pH has dropped from 7.2 to 6.2 and effluent ammonia is rising. The operator should:
   A. Add alkalinity (e.g., lime, sodium bicarbonate or caustic per SOP)
   B. Add alum
   C. Reduce aeration
   D. Increase wasting

5. TKN is the sum of:
   A. Nitrate and nitrite
   B. Organic nitrogen and ammonia nitrogen
   C. Ammonia and nitrate
   D. Total nitrogen and phosphorus

6. Approximately how much oxygen is required to nitrify 1 mg/L of ammonia-nitrogen?
   A. 0.5 mg/L
   B. 1.0 mg/L
   C. 4.6 mg/L
   D. 14.6 mg/L

7. The chlorine residual in a plant's effluent has disappeared even though the chlorine dose has not changed. Nitrification has been unstable this week. A likely cause is:
   A. High nitrate
   B. High nitrite exerting a chlorine demand
   C. Low ammonia
   D. High alkalinity

8. Excess phosphorus discharged to a lake mainly causes:
   A. Fish toxicity at very low concentrations
   B. Algae blooms and later oxygen depletion (eutrophication)
   C. Increased water hardness
   D. Corrosion of the outfall

9. A side effect of adding alum or ferric chloride for phosphorus removal is:
   A. Increased alkalinity
   B. Reduced sludge production
   C. Reduced alkalinity and pH, and increased sludge production
   D. Increased effluent phosphorus

10. In biological phosphorus removal, phosphorus is released by PAOs in the ______ zone and taken up in the ______ zone.
    A. aerobic; anaerobic
    B. anaerobic; aerobic
    C. anoxic; anaerobic
    D. aerobic; anoxic

11. Biological phosphorus removal deteriorates at a plant. Testing shows high nitrate in the anaerobic zone. The most likely explanation is:
    A. Nitrate allows other bacteria to consume the food the PAOs need, so P release/uptake is reduced
    B. Nitrate improves P removal
    C. Nitrate raises the pH too high
    D. Nitrate is toxic to all bacteria

12. Phosphorus is ultimately removed from a biological treatment system by:
    A. Escaping as a gas
    B. Wasting sludge
    C. Disinfection
    D. Aeration

13. Which bacteria convert ammonia to nitrite?
    A. *Nitrobacter*
    B. *Nitrosomonas*
    C. *E. coli*
    D. *Beggiatoa*

14. Ammonia in effluent is a concern for the receiving water mainly because it is:
    A. A source of hardness
    B. Toxic to fish and exerts an oxygen demand
    C. Responsible for turbidity
    D. A disinfectant

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | Ammonia → nitrite → nitrate. A = denitrification. C/D wrong. |
| 2 | **B** | Anoxic + nitrate + carbon. A = conditions for nitrification. C kills bugs. |
| 3 | **B** | Longer SRT keeps slow-growing nitrifiers. A washes them out. C stops nitrification. D kills bugs. |
| 4 | **A** | Nitrification consumed alkalinity → pH fell → add alkalinity. B lowers pH further. C stops nitrification. D lowers SRT. |
| 5 | **B** | TKN = organic N + ammonia N. |
| 6 | **C** | ≈4.57 mg O₂ per mg NH₃-N (ammonia measured as nitrogen). |
| 7 | **B** | Nitrite consumes chlorine (~5:1). A: nitrate doesn't consume chlorine. C would lower demand. |
| 8 | **B** | Eutrophication. |
| 9 | **C** | Metal salts consume alkalinity and add chemical sludge. |
| 10 | **B** | Release in anaerobic, uptake in aerobic. |
| 11 | **A** | Nitrate makes the zone anoxic; denitrifiers use the VFAs first. |
| 12 | **B** | P leaves only in wasted sludge. |
| 13 | **B** | Nitro**so**monas — first step. A does the second step. |
| 14 | **B** | Toxic + oxygen demand. |
