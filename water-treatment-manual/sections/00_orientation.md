# Section 0 — Site Orientation

> **Before you touch anything:** read this section completely. Understanding the big picture makes every other procedure make sense.

---

## 0.1 What This System Actually Does

This is **not** a municipal drinking water plant. It is an **industrial site water treatment system** — its job is to clean contaminated site water (stormwater, process water, and groundwater collected from the industrial site) to a standard that meets discharge regulations before that water is released or reused.

The source water is not river or lake water — it is water that has been in contact with industrial operations. That means it carries:

| What's in it | Why it's a problem |
|---|---|
| Dissolved iron (Fe²⁺) | Turns water orange/brown; clogs filters; must be oxidized and filtered out |
| Petroleum hydrocarbons (oils, fuels) | Toxic to aquatic life; regulated discharge limit; requires oil/water separation |
| High suspended solids / turbidity | Carries other contaminants; must be settled and filtered out |
| pH imbalance (too high or too low) | Affects chemical treatment steps; affects downstream ecology |
| Fine silts and colloidal particles | Too small to settle on their own — need coagulants and flocculants to clump together |

**The goal:** treated water that meets the site's discharge permit standards, so it can be legally released to the environment or reused on site.

`ℹ️ WHY:` Industrial discharge is regulated under BC's *Environmental Management Act* and the site's specific permit. Discharging water that doesn't meet standards can result in regulatory fines, stop-work orders, and environmental damage. Every step in this system exists to protect that permit.

---

## 0.2 The Treatment Train (Overview)

`🆕 IN PROGRESS — newest account, directly from the operator learning the system in real time (not yet fully reconciled with the diagram below):`
> Oil/water cell → frac tank (settles) → pumped to the **"C Can"** (= the sea can — **confirmed to physically exist on site**) → inside the C Can, lime (TEXLOME High Calcium Hydrated Lime) is added to bring pH up to 8+ (good for the coagulant — below 8 is not), before PACl coagulant + flocculant go in — `⚠️ whether this is conditional on the day's pH reading or pumped every single time is still being reconciled, see Section 5.6a` → flows to the **weir tank, which IS one of the blue bins — only 1 blue bin is currently in use**, not 2 → settles in the weir tank/blue bin → pumped out to the intake pump → **ozone** injected → *(steps after this are still being confirmed)*.
>
> This differs from the diagram below in two important ways that still need reconciling: **(1)** chemical dosing here happens at the C Can, before the blue bin/weir tank stage — not "indoors near the white tanks" as currently documented in step [7]; **(2)** only **one** blue bin is in current use, not both. Treat this account as the most current/authoritative until the rest of the sequence (post-ozone) is confirmed and the diagram is rebuilt around it.

Water moves through this system in a series of steps. Each step removes something — think of it as a series of increasingly fine sieves. Here is the flow from raw contaminated water to treated water ready for discharge or storage:

```
SITE WATER (stormwater, process water, groundwater)
      │
      ▼
[1] OUTDOOR RETENTION / SETTLING PONDS
    (gravity pre-settling — heavy solids sink, oil floats)
      │
      ▼
[2] OIL / WATER SEPARATION CELL
    (petroleum floats and is separated from water)
    (FLOCCULANT added here — chemical dosing starts this early, not just indoors)
      │
      ▼
[3] FRAC TANKS (outdoor storage/settling)
    (water sits and settles further — oil continues rising to the top,
     clearer water is drawn off from below)
      │
      ▼
[4] BLUE SEPARATOR BINS — outdoor, 2 units (Section 6.1a)
    (steel baffled bins — final outdoor polishing separation before
     water is pumped indoors)
    (FLOCCULANT added again here — 2nd of 3 dosing points)
      │
      ▼
[5] INTAKE PUMP (submersible) → pumped indoors
      │
      ▼
[6] OZONE TREATMENT (AERQUS diffuser + CD30TIX generator)
    (FIRST thing that happens once water is pumped indoors — per a former
     site operator's account. Ozone breaks down organic and inorganic
     contaminants before any chemicals are added.)
      │
      ▼
[7] CHEMICAL DOSING — PACl coagulant + flocculant injected
    (added just before the white settling tanks; this is the 3rd
     flocculant dosing point, on top of the 2 outdoor points above.
     Stock solutions are mixed in 200L tanks — see Section 5 for exact
     ratios — then metered in by dosing pump.)
      │
      ▼
[8] SETTLING TANK / WET CELL (Section 6.2a — baffled, NOT the white cylindrical
    storage tanks in Section 6.2, which is a separate piece of equipment)
    (gravity settling — coagulant + flocculant cause contaminants and
     dirt to clump and sink to the bottom of the tank)
      │
      ▼
[9] SAND FILTER (SRS-SF-11 — green pressure vessel)
    ⚠️ CURRENTLY BYPASSED — CONFIRMED BY OPERATOR. Not in use until repaired
    (see Section 6.4 — solenoid fault, needs an electrician). Water currently
    skips this step entirely and goes straight from settling to the bag filter.
    Needs periodic backwash and periodic sand replacement once back in service.
      │
      ▼
[10] BAG FILTER HOUSING (blue cartridge housing)
    (CURRENTLY the first filtration step while the sand filter is bypassed —
     normally a safety screen behind the sand filter, now carrying its full load)
      │
      ▼
[11] CARBON VESSEL (SRS-CV-15 — blue PV Series vessel, "the blue vessel")
    (activated carbon adsorbs dissolved petroleum hydrocarbons; loses
     effectiveness as it gets dirty/saturated)
      │
      ▼
DISCHARGE → HOLDING TANKS → trucked/transferred to lagoon for disposal
                    │
                    ▼ (parallel process)
              SLUDGE MANAGEMENT
              (sludge builds up in every settling step;
               Kontek filter press status unconfirmed — see Section 6.11)
```

`ℹ️ NOTE — TWO SOURCES, NOT FULLY RECONCILED YET:` Steps [2]–[6] (oil separation cell → frac tanks → 2 outdoor blue bins → intake pump → indoors) were confirmed directly by the current site operator. Steps [6]–[11] (ozone first, then chemical dosing, settling, sand filter, bag filter, carbon vessel, discharge to lagoon) come from a **former operator's** detailed account and visibly conflict with what was documented earlier from photos — most notably: **ozone is now placed first indoors instead of near the end**, and **chlorination (Accu-Tab) and hydrogen peroxide dosing were not mentioned at all** in this account. It's possible those steps were removed, were never really used, or were just left out of a "without going in depth" summary. **Confirm with Brennan/Rob/Glen** whether peroxide and chlorination are still part of the live process before you rely on this order being complete.

---

## 0.2a Plain-English Walkthrough — How This System Actually Works

> Read this if the diagram above and the equipment sections feel overwhelming. This is the same information, told as one continuous story, with every term defined the first time it's used. Some details below are still unconfirmed — they're marked clearly so you know what to double check with your supervisor.

**Mostly gravity outdoors — but flocculant starts early:**

1. **Open pit/pond.** Raw dirty water collects here first — dark water, often an oily film on top. It just sits, and because oil is lighter than water, it floats; because solids are heavier, they sink. No equipment needed for this — gravity does the work.
2. **Oil/Water Separation Cell.** A vessel built to make that floating/sinking happen efficiently. The floating oil is skimmed off and disposed of as waste — it never reaches the clean side. `ℹ️ CONFIRMED:` This is also the **first of three points** where **flocculant** (polymer — CL-200) is added on this site. Flocculant acts like a net, bundling tiny stuck-together particles into bigger, heavier clumps called **floc** — big enough to settle out instead of drifting in the water. Starting this here means floc is already forming before the water even reaches the frac tanks.
3. **Frac Tanks** *(frac tank = a large portable steel storage tank, borrowed from the oil/gas industry)*. More settling time outdoors. The clearer water in the middle of the tank is drawn off to continue; oil and solids stay behind.
4. **Two Blue Separator Bins.** Steel bins with **baffles** inside *(baffle = an internal divider wall that forces water to take a longer zig-zag path instead of flowing straight through)*. This gives any remaining oil and grit more time and surface area to separate out — the last outdoor cleanup step. `ℹ️ CONFIRMED:` Flocculant is dosed again here — the **second of three points** — to keep building floc as the water gets jostled through the baffles and pumped onward.
5. **Transfer Pumps — how water actually moves between outdoor tanks.** It's easy to assume every tank has its own pump built in, like a sink has its own tap. **It doesn't.** This site only has a small number of pumps, and operators carry them to wherever they're needed next.

   A **submersible pump** is a single sealed unit — the motor and the pump are built together inside one waterproof housing, so the whole thing can sit fully underwater while running (unlike a pump that stays on dry ground and sucks water up through a pipe). It has one power cord and one hose connection.

   Here's how a transfer actually happens, step by step:
   1. An operator carries the pump to the tank that needs to be **emptied** (the "source" tank).
   2. The pump is lowered in until it's fully underwater — running it dry can damage it.
   3. A hose is connected from the pump's outlet to the tank that needs to **receive** the water (the "destination" tank).
   4. The pump is switched on; water moves through the hose from source to destination.
   5. When the transfer is done, the pump is switched off, pulled out, and carried to wherever it's needed next.

   On this site, the same pumps do double duty:
   - **Frac tank → Blue bin:** pump goes into a frac tank, hose runs to a blue bin.
   - **Blue bin → indoors:** the same style of pump goes into a blue bin, hose runs into the building.

   `ℹ️ WHY THIS MATTERS:` Because nothing here is permanently plumbed together, water never moves on its own — it only moves when someone has physically set up a pump and hose for that specific transfer. Before assuming water is flowing somewhere, always check: is a pump actually sitting in a tank right now, and where does its hose go?

**Now the heavier treatment indoors — per a former operator's account (see note below):**

6. **Ozone — the FIRST thing that happens once water is pumped indoors.** Ozone gas (O₃) is a strong oxidizer that breaks down organic contaminants (like hydrocarbons) and inorganic contaminants (like dissolved iron) before any chemicals are even added. `ℹ️ CONFLICTS WITH EARLIER NOTES:` Photos earlier suggested ozone happened near the very end of the process, right before chlorination. A former operator's direct account places it here instead, first thing indoors. Confirm with your current supervisor which is actually correct — it's possible the order changed over time, or one account is incomplete.
7. **Chemical dosing — coagulant and flocculant, injected right before the white settling tanks.** This is the same two chemicals from before:
   - **PACl coagulant** — neutralizes the electrical charge keeping fine particles apart so they can stick together (**coagulation**).
   - **Flocculant** — this is the **third** dosing point (after the oil cell and the blue bins outdoors) — nets the stuck-together particles into bigger floc (**flocculation**).
   - Both are prepared as **stock solutions** in 200L mixing tanks before being metered into the flow — see Section 5 for the exact mixing ratios (2 bags of dry PACl per 200L; about 100g of flocculant per 200L, added very slowly).
8. **Settling Tank / Wet Cell.** This is where gravity finally takes over again — the coagulant and flocculant have caused contaminants and dirt to clump together, and those clumps settle to the bottom of the tank. `ℹ️ CONFIRMED:` This is a baffled tank, separate and distinct from the two big white cylindrical tanks in Section 6.2 — those are storage tanks only, not where settling happens. `ℹ️ WHY:` You may need to adjust the chemical dosing pump settings to get this right, but you should be able to SEE it working — clear water on top, sludge settling below.
   - `❓ STILL UNCONFIRMED:` Earlier notes mentioned hydrogen peroxide added here too (a second oxidizer, for dissolved iron). Not mentioned in the former operator's account — confirm whether peroxide dosing still happens.

**Filtering out everything the chemistry created:**

9. **Sand Filter (SRS-SF-11).** A pressure tank full of sand. Water is pushed down through it; the sand traps larger debris and the floc clumps made in step 7 — like a coffee filter for rust. `⚠️ CURRENTLY BYPASSED — CONFIRMED BY OPERATOR.` Not in use right now (solenoid fault — see Section 6.4, needs an electrician). **While bypassed, water flows straight from settling to the bag filter and carbon vessel only.** Even when working, sand filters need two kinds of maintenance: **backwashing** (reversing the flow periodically to break up the channels the water carves through the sand over time, which otherwise let water sneak through without being filtered) and **full sand replacement** every so often as the sand gets dirty.
10. **Bag Filter.** Normally a safety net whose only job is making sure no dirt reaches the carbon vessel next. **Right now, with the sand filter bypassed, this is the first filtration step the water sees** and is carrying the full solids load alone — check/change this filter more often than usual until the sand filter is back in service.
11. **Carbon Vessel (SRS-CV-15, "the blue vessel").** Sand and bag filters can't catch *dissolved* fuel smell and color (dissolved = mixed into the water like sugar, not filterable). **Activated carbon** is riddled with microscopic pores giving it huge surface area; dissolved hydrocarbons stick to that surface as water flows through (called **adsorption**). If the carbon gets dirty/saturated, it stops working properly and needs to be changed out.
12. **Discharge to holding tanks → lagoon.** Treated water goes to holding tanks, then is trucked or transferred to a lagoon for final disposal.

`ℹ️ OPERATING PHILOSOPHY — worth remembering:` "Make sure the flow coming in isn't too much or there won't be enough time for settling. It's all a balancing process because they never really made a proper treatment facility." This site runs on careful adjustment, not a fully automated/engineered system — watching, adjusting, and using judgment at every step is the actual job.

**Running the whole time, off to the side:** every settling step above (ponds, frac tanks, blue bins, wet cell) builds up **sludge** (thick heavy gunk) at the bottom. The **AODD pump** *(air-powered, no electric motor — gentle enough not to clog on thick sludge)* moves that sludge to the **Kontek filter press**, which squeezes the water out of it like a sponge press. The dry leftover ("filter cake") goes to waste disposal; the squeezed-out water rejoins the system to be treated again.

`ℹ️ WHY THE WHOLE SEQUENCE MATTERS:` Each step only works on one specific problem — gravity removes big stuff, chemicals fix invisible/microscopic stuff, filters catch what the chemicals created, carbon removes dissolved odour, ozone/chlorine handle disinfection. Skip or weaken any one step and the steps after it get overloaded with a problem they weren't designed to handle.

> **Your job:** Keep each step running correctly so the water leaving the system always meets discharge standards. If one step fails, the steps after it work harder — and sometimes can't compensate. That's why you monitor everything.

---

## 0.3 A Note on Iron — What the Staining Means

You will notice heavy orange/rust staining on virtually every concrete surface in this facility — the settling tanks, wet cell walls, floors, and pipe connections. **This is normal for this site.** It is not a sign of neglect or failure.

The source water contains high levels of **dissolved iron (Fe²⁺)** — iron that is invisible in solution but turns orange-brown the moment it is oxidized (exposed to oxygen or hydrogen peroxide). When this oxidized iron [Fe³⁺] precipitates out of solution as iron hydroxide [Fe(OH)₃], it coats everything it touches with that characteristic rusty stain.

`ℹ️ WHY:` Understanding iron chemistry is central to this operation. The treatment system is specifically designed to first oxidize dissolved iron so it precipitates, then filter that iron precipitate out. The staining on the walls is just a record of years of iron removal doing its job.

---

## 0.4 A Note on Oil/Water Separation

Petroleum hydrocarbons are less dense than water — they float. The Shell Canada oil/water separator exploits this: site water enters the separator, oil and fuel float to the top and are skimmed off, while cleaner water is drawn from below. Sludge (heavier-than-water solids) settles to the bottom.

The recovered petroleum product and sludge are managed as regulated waste — they do NOT go to the discharge point.

`ℹ️ WHY:` Hydrocarbons in discharge water are toxic to fish and aquatic invertebrates. Even small concentrations (parts per million) violate discharge permits. The oil/water separator is a critical protection step.

---

## 0.5 Site-Specific Information

| Field | Details |
|---|---|
| Site type | Industrial/commercial site water treatment |
| Associated operation | Shell Canada petroleum operations |
| Location | Kamloops, BC Interior |
| Water treatment supplier | SUMAS Environmental Services Inc. |
| SUMAS contact number | **1-250-374-4151** |
| Regulatory framework | BC *Environmental Management Act*; site discharge permit |
| Discharge permit number | *(confirm with supervisor)* |
| Regulatory authority | BC Ministry of Environment and Climate Change Strategy |
| Site supervisor | Brennan *(confirm full name and contact)* |
| On-call operators | Rob, Glen *(confirm contact numbers)* |
| Emergency contact — regulatory hotline | *(confirm with supervisor)* |

---

## 0.6 Site Layout Walkthrough

On your first day, physically walk the entire site with a supervisor and locate each item below. Check it off when you know exactly where it is and what it looks like.

**Outdoor area:**
- [ ] Primary settling pond (turbid green/grey water — first pond)
- [ ] Secondary/stabilization pond (dark red/iron-rich water — second pond)
- [ ] Frac tanks (large portable above-ground steel storage tanks — note which are "clean" vs. "dirty")
- [ ] Shell Canada above-ground oil/water separator
- [ ] Underground holding tank access port (for dipping the OWS underground tank)
- [ ] Site drainage and stormwater collection points

**Indoor building (wet cell / chemical room):**
- [ ] Wet cell / separation cell (concrete multi-compartment indoor settling tanks)
- [ ] Chemical dosing room — PACl drum (white, Class 8 label) + blue diaphragm pump
- [ ] Chemical dosing room — CL-200 polymer drum (white, "FLOCCULANT" label) + yellow LMI pump
- [ ] Other chemical drums (hydrogen peroxide, CO2 cylinder, pH+ powder pail, HaloKlear)
- [ ] SRS-SF-11 sand filter (green pressure vessel on legs, pump below)
- [ ] SRS-CV-15 carbon vessel (blue PV Series vessel on pallet)
- [ ] Bag filter housing (blue cartridge housing with Les Hall filter bags)
- [ ] CD30TIX ozone generator (stainless steel cabinet with pressure gauge)
- [ ] AERQUS ozone diffuser (in-line or in-tank)
- [ ] Accu-Tab chlorinator and Cal-Hypo tablet storage
- [ ] Kontek APC5 filter press (blue/white frame, ~30 filter plates, blue control panel)
- [ ] AODD pump (aluminum body, air-operated, for sludge transfer)
- [ ] Portable pH meter (grey case) and calibration buffer solutions (pH 4.0, 7.0, 10.0)

**Safety locations (memorize these — do not just check them off):**
- [ ] Safety shower and eyewash station(s) — know the closest one to the chemical room
- [ ] Chemical spill kit(s)
- [ ] Fire extinguisher(s)
- [ ] First aid kit
- [ ] All Safety Data Sheets (SDS binder or posted location) — know where these are for EVERY chemical on site
- [ ] Electrical panels and LOTO (Lockout/Tagout) points for each major piece of equipment

---

## 0.7 The "Brennan's List" — Understanding the Basic Operational Flow

A handwritten operational note on site (referred to as "Brennan's List") captures the day-to-day task sequence:

> *"Transfer dirty water from least full frac tank to most full frac tank. Transfer water from Wet Cell through carbon or sand filter to clean frac tank. Get wet cell as water free as possible to transfer solids out. Treat water, fill up storage tanks, collect sample. Transfer oil and dirty water from wet cell to Stabilization pit."*

In plain terms, the operating cycle is:
1. **Consolidate dirty water** — move raw/untreated water so it's in the right tanks for processing.
2. **Filter the wet cell water** — push water from the wet cell through the sand or carbon filter to the clean frac tank.
3. **Empty the wet cell** — get it as dry as possible so the accumulated sludge/solids can be pumped out.
4. **Treat and store** — dose chemicals, run the full treatment train, fill clean storage tanks, collect a compliance sample.
5. **Move oil and dirty residuals** — transfer separated oil and dirty wet cell water to the stabilization pit for further management.

`ℹ️ WHY:` This system operates in **batch mode** — it processes water in batches rather than as a continuous flow. Understanding which tanks hold what type of water, and in what order to process them, is the core operational skill on this site.

---

## 0.8 Who Does What

| Role | Responsibilities | Name / Contact |
|---|---|---|
| Site Supervisor | Operational decisions, compliance, directing daily tasks | Brennan *(confirm full contact)* |
| Operator | Daily rounds, chemical dosing, equipment checks, log entries | Rob *(confirm contact)* |
| Operator | Daily rounds, chemical dosing, equipment checks, log entries | Glen *(confirm contact)* |
| Chemical/Equipment Supplier | Chemical deliveries, equipment support, technical advice | SUMAS Environmental Services Inc. — **1-250-374-4151** |

---

## 0.9 How to Read This Manual

- **Bold text** = a term defined in the Glossary (Section 12).
- `[ACTION]` boxes = something you physically do.
- `[CHECK]` boxes = something you observe and record.
- `⚠️ WARNING` = potential for injury, equipment damage, or compliance violation.
- `ℹ️ WHY` callouts = explains the reason behind a step (don't skip these — understanding why helps you catch problems).
- *(confirm with supervisor)* = information specific to this site that was not confirmed at time of writing — ask Brennan or call SUMAS before proceeding if this is unclear.

---

*Last updated: 2026-06-05 | Source: Site photo analysis — SUMAS Environmental Services / Shell Canada industrial water treatment system, Kamloops BC*
