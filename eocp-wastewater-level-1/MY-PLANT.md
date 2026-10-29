# My Plant — Study Using What You See at Work

← [Course index](README.md) · [Checklist](EOCP-LEVEL-1-CHECKLIST.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **BOD** = Biochemical Oxygen Demand · **BOD₅** = 5-day Biochemical Oxygen Demand · **COD** = Chemical Oxygen Demand · **DO** = Dissolved Oxygen · **DT** = Detention Time · **EOCP** = Environmental Operators Certification Program · **F/M** = Food-to-Microorganism ratio · **H₂S** = hydrogen sulphide · **kPa** = kilopascal · **LEL** = Lower Explosive Limit · **mg/L** = milligrams per litre · **mL** = millilitre · **MLSS** = Mixed Liquor Suspended Solids · **NTU** = Nephelometric Turbidity Unit · **psi** = pounds per square inch · **RBCs** = Rotating Biological Contactors · **SDS** = Safety Data Sheet · **SRT** = Solids Retention Time · **SVI** = Sludge Volume Index · **TSS** = Total Suspended Solids · **UV** = Ultraviolet
<!-- abbr-end -->

**What it is:** an **industrial liquid-waste treatment facility** that treats **hydrovac truck loads**: oily water, fairly clean water, mud and "whatever comes in". It uses **physical and chemical** treatment rather than biological, then polishes the water and sends it to the **sanitary sewer** or a **lagoon**.

> ⚠ **Do this first: check in the CRM** that your facility is **classified with EOCP (Environmental Operators Certification Program) as a wastewater treatment facility**, and note its **class** (checklist A6, collection item #24). Ask your supervisor to confirm that your hours count toward **Wastewater Treatment Level I**. EOCP only counts hours at a **classified** facility.

---

## 1. Your process, start to finish

```
 HYDROVAC TRUCK unloads
        │
        ▼
 SEPARATION CELL ──► OIL SKIMMER (floating oil off the top)
   (heavy solids/grit settle; oil floats)
        │  submersible pump
        ▼
 SEA CAN – CHEMICAL TREATMENT (3 injection/metering pumps)
   ① Sodium hydroxide (NaOH)  → raise pH
   ② Coagulant                → neutralize charges, tiny particles start to clump
   ③ Flocculant (polymer)     → bridge clumps into big, heavy floc
        │
        ▼
 WEIR TANK #1 (baffles) ──► WEIR TANK #2   (floc settles → sludge on bottom)
        │                                       │ settled sludge
        │                                       ▼
        │                     SLUDGE (FILTER) PRESS — Kontek Ecology Systems
        │                       ├─► dry CAKE → bin → disposal
        │                       └─► FILTRATE (squeezed-out water) → back to the start for re-treatment
        │  submersible pump takes CLEAR water from the top
        ▼
 OZONE (O₃) — oxidizes/breaks down organic & inorganic contaminants (also disinfects)
        │
        ▼
 INDOOR WEIR TANK
        │
        ▼
 SAND FILTER → BAG FILTER → ACTIVATED CARBON FILTER
        │
        ▼
 SANITARY SEWER  (or hauled to a LAGOON)
```

---

## 2. Each step: what it does, what to watch, where to study it

| Step | What it does (plain words) | What to watch / common problems | Study in |
|---|---|---|---|
| **Receiving hydrovac loads** | Unknown mix: water, mud, oil, sometimes chemicals | Ask what's in the load; gases (**H₂S** (hydrogen sulphide), hydrocarbon vapours = flammable **LEL** (Lower Explosive Limit)); use a gas monitor; SDS (Safety Data Sheet) for anything known | [Module 2 §2.3, 2.5, 2.11](modules/02-safety.md) · [Module 1](modules/01-wastewater-fundamentals.md) |
| **Separation cell** | **Gravity separation**: heavy solids and grit **sink**, oil and grease **float** | Don't overfill (short **detention time** = poor separation); remove settled solids before they fill the cell | [Module 3 §2.5 grit](modules/03-preliminary-treatment.md) · [Module 4 §2.1, 2.5 scum](modules/04-primary-treatment.md) |
| **Oil skimmer** | Removes the floating oil layer | Skim before pumping, so oil doesn't go forward and foul filters and carbon | [Module 4 §2.5](modules/04-primary-treatment.md) · [Module 19 §2.3](modules/19-tertiary-effluent-odour.md) |
| **Submersible pumps** | Move water between stages | Don't run dry; clogging with rags and solids; check float and level controls; **lockout** before pulling a pump | [Module 10 §2.5, 2.12](modules/10-pumps.md) · [Module 2 §2.10](modules/02-safety.md) |
| **① Sodium hydroxide (caustic)** | Raises **pH** so metals form solids and the coagulant works in its best pH range | **Strongly corrosive** — face shield, gloves, eyewash; check pH before and after; too much = pH too high for discharge | [Module 19 §2.6](modules/19-tertiary-effluent-odour.md) · [Module 2 §2.5, 2.9](modules/02-safety.md) · [Module 15 §2.7](modules/15-laboratory-sampling.md) |
| **② Coagulant** | Cancels the electric charges that keep tiny particles apart; they start sticking together (**coagulation**) | Needs **fast mixing**; dose by **jar test**; overdose = cloudy water and wasted chemical | [Module 19 §2.6](modules/19-tertiary-effluent-odour.md) |
| **③ Flocculant (polymer)** | Long-chain polymer **bridges** small clumps into big, heavy **floc** (**flocculation**) | Needs **gentle mixing**, because hard mixing breaks the floc; overdose = sticky, slimy floc that floats or plugs filters | [Module 19 §2.6](modules/19-tertiary-effluent-odour.md) |
| **Injection (metering) pumps** | Add an exact dose of each chemical | **Calibrate** them (timed draw-down); check for air in lines, empty tanks and plugged injection points | [Module 10 §2.4](modules/10-pumps.md) · [Math 17C §C10 feed pump](math/17c-loading-dosage-concentration.md) |
| **Weir tanks with baffles** | **Settling (sedimentation)** — floc sinks, clear water flows over the weir. Baffles slow the water and stop **short-circuiting** | Floc carry-over (sludge too deep, flow too fast); remove settled **sludge** regularly | [Module 4 §2.1–2.7](modules/04-primary-treatment.md) · [Module 6 §2.7 weirs](modules/06-secondary-clarification.md) |
| **Sludge (filter) press — Kontek Ecology Systems** | **Dewatering**: a feed pump pushes the wet sludge between **filter plates covered with cloth**. Water (**filtrate**) passes through the cloth and solids stay behind as a **cake**. When the chambers are full, the press is opened and the **cake drops out** for disposal. Kontek lists its presses as turning a **2–5% solids** slurry into a **30–35% solids** cake, at up to about **80 psi** (≈ 550 kPa (kilopascal)). *(Third-party product listings; check your unit's manual.)* | **Batch cycle:** fill → press until filtrate slows → open → drop cake → wash cloths. Watch for **wet or sloppy cake** (stopped too early, poor flocculation upstream, or blinded cloths), **cloudy filtrate** (torn cloth, bad gasket), and leaks between plates. **Hydraulic closing pressure and pinch points**: lockout, guards, never reach between plates. **Filtrate goes back to the front of the plant** (a **return stream**). Keep **disposal records** (manifests). | [Module 9 §2.6 dewatering, §2.7 return streams](modules/09-sludge-biosolids.md) · [Module 2 §2.10, 2.12](modules/02-safety.md) · [Module 19 §2.5](modules/19-tertiary-effluent-odour.md) |
| **Ozone (O₃)** | Very strong **oxidizer**: breaks down organics, odour, colour and some dissolved contaminants; also **disinfects** | **Toxic gas** — ozone room monitor, ventilation, off-gas destruct unit; leaves **no lasting residual** | [Module 8 §2.11](modules/08-disinfection.md) · [Module 2 §2.3](modules/02-safety.md) |
| **Sand filter** | Traps fine particles left after settling | **Backwash** when headloss (pressure drop) climbs or the water turns cloudy; mudballs and channelling | [Module 19 §2.1](modules/19-tertiary-effluent-odour.md) |
| **Bag filter** | Catches finer particles; protects the carbon | Change the bag when **differential pressure** rises | [Module 19 §2.1](modules/19-tertiary-effluent-odour.md) |
| **Activated carbon** | **Adsorbs** (sticks to its surface) dissolved organics, oil traces, odour and colour | Gets **used up**; when contaminants **break through**, replace the carbon; oil and solids foul it early | [Module 19](modules/19-tertiary-effluent-odour.md) |
| **Discharge to sewer / lagoon** | Final destination — must meet the **sewer-use permit/bylaw limits** | Sample and test before discharge; keep records; never discharge if out of spec | [Module 18 §2.2–2.3, 2.7](modules/18-administration.md) · [Module 15 §2.1–2.5](modules/15-laboratory-sampling.md) |

**Why the chemicals go in this order (pH → coagulant → flocculant):** coagulants only work well in a certain pH range, so you **set the pH first**. The coagulant then **neutralizes** the particles so they can touch, and the flocculant **ties** them into big floc that settles. Reverse the order and the floc won't form properly.

---

## 3. Use your plant as math practice

Measure these at work and fill in the blanks. Each one is a real exam formula.

| Do this | Formula | Study |
|---|---|---|
| Volume of each **weir tank** (L × W × water depth) | V = L × W × D | [17B §B4](math/17b-area-volume-flow-time.md) |
| **Detention time** in the weir tanks at your pump rate | DT = Volume ÷ Flow | [17B §B9](math/17b-area-volume-flow-time.md) |
| How long a pump takes to **empty** the separation cell or sea can | Time = Volume ÷ pump rate | [17B §B13](math/17b-area-volume-flow-time.md) |
| **Calibrate** an injection pump: mL drawn down in 1 minute → L/h → L/day | mL/min × 60 ÷ 1,000 = L/h | [17C §C10](math/17c-loading-dosage-concentration.md) |
| **Chemical dose** in mg/L (milligrams per litre) from the feed rate and flow | kg/d = mg/L × ML/d | [17C](math/17c-loading-dosage-concentration.md) |
| **% removal** (e.g., TSS (Total Suspended Solids) or oil in vs out) | (In − Out) ÷ In × 100 | [17C](math/17c-loading-dosage-concentration.md) |
| Making up a chemical **dilution** (e.g., polymer solution) | C₁V₁ = C₂V₂ | [17C §C9](math/17c-loading-dosage-concentration.md) |

Your tanks: weir tank #1 ____ × ____ × ____ m · weir tank #2 ____ × ____ × ____ m · pump rate ____ L/min

---

## 4. ⚠ Exam topics you DON'T see at work: give these extra study time

Your plant is **physical-chemical**, but the Level I exam is mostly about **municipal, biological plants**. Most of the **Treatment Process** marks (38% of the exam) come from things you don't operate, so plan extra time for these:

| Topic | Module | Why it matters |
|---|---|---|
| **Activated sludge** (MLSS (Mixed Liquor Suspended Solids), F/M (Food-to-Microorganism ratio), SRT (Solids Retention Time), SVI (Sludge Volume Index), RAS/WAS, bulking, foaming) | [Module 5](modules/05-biological-treatment.md) · [Module 6](modules/06-secondary-clarification.md) | The **single biggest** process topic on the exam |
| Nitrification / denitrification, phosphorus | [Module 7](modules/07-nutrient-removal.md) | Common process questions |
| **Lagoons** (biological), trickling filters, RBCs (Rotating Biological Contactors) | [Module 5 Parts B–C](modules/05-biological-treatment.md) | Recognize how they work |
| **Chlorination / dechlorination**, UV | [Module 8](modules/08-disinfection.md) | Dose vs residual is very testable |
| **Anaerobic and aerobic digesters**, thickening | [Module 9](modules/09-sludge-biosolids.md) | Digester gas, pH, volatile acids/alkalinity |
| Bar screens, comminutors, grit chambers | [Module 3](modules/03-preliminary-treatment.md) | Headworks equipment |
| Blowers, aeration, DO (Dissolved Oxygen) control | [Modules 5, 14](modules/14-electrical-mechanical.md) | Equipment (39% of the exam) |
| Process math: **F/M, SRT/MCRT, SVI, sludge age** | [Math 17D](math/17d-process-pumps-pressure-lab.md) | 9 of the 10 math questions are process math |

**Tip:** if you can, **tour a municipal plant** (ask your supervisor or a local city plant). Seeing activated sludge in person makes Modules 5–6 much easier to learn.

---

## What "classified facility" means *(EOCP Program Guide)*
- **Classified** = EOCP has scored the facility's **complexity** and given it a class: **Small System**, or **Class I–IV**. The score uses **infrastructure points** (what equipment and processes it has) plus **"influencer" points** (how variable the incoming waste is, how strict the discharge requirements are, and how much lab control is done).
- The **chief operator / person in charge** submits it through the **EOCP CRM**. It is **redone every 5 years** or after a major process change. There's an **annual facility fee** ($100/year for Class I in 2021).
- **Counts as a wastewater *treatment* facility** if it **changes the physical, chemical or biological quality** of the water. Only screening, grinding, lift stations or chlorination doesn't count; that's "collection". **Your plant does chemical treatment, settling, ozone and filtration, so it fits the treatment definition.**
- Classification is **mandatory for municipal** plants (Municipal Wastewater Regulation). **Industrial** plants *can* be classified too, but it may not be required, so **don't assume yours is**.
- **How to check:** in the CRM, look at the facility linked to your profile (it shows the facility **type and class**), or ask your supervisor or chief operator. If it's **not classified**, ask your employer about getting it classified, and email EOCP about whether your hours can count. EOCP may consider your situation **case by case**, and the Board can count **related experience for up to half** of the hours.

## Reclassifying from "Collection" to "Wastewater Treatment" — full rundown

**Status (Oct 2026):** the facility is registered with EOCP as **wastewater collection**. Your employer is willing to change it.

### Why "treatment" is the correct type
- EOCP's **wastewater treatment** category covers **municipal and industrial** facilities. A treatment facility is one that **changes the physical, chemical or biological quality** of the wastewater.
- A site doing **only** screening/grinding, lift stations, chlorination or odour control counts as **collection**. *(EOCP Program Guide)*
- This plant does oil separation, pH adjustment, coagulation/flocculation, settling, **sludge dewatering (filter press)**, ozone and sand/bag/carbon filtration, so **"treatment" is the accurate type**.

### Step by step
1. **Confirm who can do it.** Only the person listed as **Chief Operator or Person in Charge** for the facility can request (re)classification. Check this in the CRM under the **Relationships** tab. If your boss isn't listed, or has lost the login, EOCP can fix it.
2. **Email EOCP first** (facilities@eocp.ca or eocp@eocp.ca). EOCP doesn't publish steps for changing a facility's **type**; the CRM button is for re-classifying. Ask whether to **change** the existing facility or **add** a new treatment facility (email below).
3. **Do the classification in the CRM** (crm.eocp.ca): **Relationships** tab → open the facility → **Classifications** tab (shows status), or **facility details → Action → Request Re-classification**.
4. **Answer the form accurately.** EOCP scores **physical infrastructure** (what equipment and processes you have) plus **operational influencers** (how variable the incoming loads are, discharge requirements, lab testing). It adds the two to set the class: Small System or **Class I–IV**. EOCP can **adjust the class up or down**.
5. **EOCP reviews it and assigns the class.** Then you and the other operators **link yourselves** to the facility in your own CRM profiles.

### What comes with it
| Item | Detail |
|---|---|
| **Annual facility fee** | **$100 Class I · $200 Class II · $300 Class III · $400 Class IV**, plus GST, invoiced **July 1** each year *(EOCP fees/FAQ pages; confirm current amounts)* |
| **Reclassify** | Every **5 years**, or after a **major process change** (e.g., adding new treatment equipment) |
| **Certified operator** | EOCP expects a facility to have an operator **certified to match its class** (a **Class I** plant → **Level I WWT** or higher in charge). Ask EOCP how they handle a plant that doesn't have one yet. |
| **Your eligibility** | Level I needs **1,800 h at a Class I or higher** facility. EOCP doesn't say publicly whether hours worked **before** the change count, so **ask**. |

### Email to EOCP
> **To:** facilities@eocp.ca, eocp@eocp.ca
> **Subject:** Changing our facility from wastewater collection to wastewater treatment
>
> Hello,
>
> Our facility is registered with EOCP as **wastewater collection**, but it treats hydrovac liquid waste: oil/water separation and skimming, pH adjustment (sodium hydroxide), coagulation and flocculation, settling in baffled weir tanks, sludge dewatering in a filter press, ozone, and sand, bag and activated-carbon filtration, before discharge to sanitary sewer or a lagoon. We'd like it classified correctly as **wastewater treatment (industrial)**.
>
> 1. Should we **change** the existing facility's type, or **add** a new treatment facility in the CRM?
> 2. Will operating hours **already worked** here count toward **Wastewater Treatment Level I** once it's classified as treatment?
> 3. Roughly what class would a facility like ours be?
> 4. Is the annual fee still $100 for a Class I facility?
> 5. What applies if the facility doesn't yet have a Level I WWT certified operator?
>
> Thank you,
> [Name · title · company · facility name · phone]

⚠ Describe the plant **accurately**. EOCP says a certificate isn't valid if it's obtained using **inaccurate information**, and EOCP makes the final call on the type and class anyway.

## Discharge to the City of Kamloops sewer — the bylaw *(researched Oct 2026; confirm the current version)*
**City of Kamloops Sanitary Sewer Bylaw No. 32-35** (1983, amended many times):
- **Industrial wastewater needs a Sanitary Sewer Discharge Permit** before you discharge (s.27(b)). Your **permit** may set **stricter or extra** limits, and the permit wins.
- **No stormwater, surface water, groundwater or cooling water** into the sanitary sewer without the City Engineer's approval (s.27(a)). This matters for hydrovac loads that are mostly groundwater or rainwater.

| Parameter | Bylaw limit (older text found online) | How you'd check it |
|---|---|---|
| **pH** | **6.0 – 9.5** | pH meter (watch this after adding **caustic**) |
| **BOD₅** (5-day Biochemical Oxygen Demand) | **≤ 300 mg/L** | BOD test (5 days); COD as a quick daily check |
| **Suspended solids** | **≤ 400 mg/L** | TSS; **turbidity (NTU)** as a quick daily check |
| **Oil & grease** | **≤ 50 mg/L** | Oil & grease lab test |

**Get from your boss:** the plant's actual **discharge permit**, which may add metals, temperature, sampling frequency and reporting.

## 5. Still to fill in

- [ ] Facility **class** (from the CRM): ____ · counts toward WWT Level I? ☐ yes ☐ ask EOCP
- [ ] **Discharge permit / sewer-use limits** (pH, TSS, oil & grease, metals…): ask your supervisor (collection item #25)
- [ ] Lab tests you run (pH? TSS? oil & grease? turbidity?): ____
- [ ] Chemical names on the totes (coagulant ____ · flocculant ____) → read their **SDS**
