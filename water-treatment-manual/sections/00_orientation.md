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
[6] TWO WHITE INDOOR TANKS (Section 6.2)
    (PACl coagulant added here for the first time; FLOCCULANT added
     again — 3rd of 3 dosing points; clumps fine particles)
    (Hydrogen peroxide added — oxidizes dissolved iron so it can be filtered)
    (pH adjustment with CO2 or pH+ powder as needed)
      │
      ▼
[7] WET CELL / SEPARATION CELL (indoor — *confirm this is a separate
    step from the blue bins above, see Section 6.2a note*)
    (secondary settling + floc formation after chemical dosing)
      │
      ▼
[8] SAND FILTER (SRS-SF-11 — green pressure vessel)
    (removes fine iron floc and suspended solids)
      │
      ▼
[9] CARBON VESSEL (SRS-CV-15 — blue PV Series vessel)
    (adsorbs dissolved petroleum hydrocarbons, colour, odour)
      │
      ▼
[10] BAG FILTER HOUSING (blue cartridge housing)
    (100-micron pre-filter + 10-micron polishing filter)
      │
      ▼
[11] OZONE TREATMENT (AERQUS diffuser + CD30TIX generator)
    (ozone oxidizes remaining iron and organics; disinfects)
      │
      ▼
[12] CHLORINATION (Accu-Tab Cal-Hypo tablets)
    (final disinfection; maintains residual)
      │
      ▼
[13] FRAC TANK STORAGE (clean/treated)
     (large portable tanks hold treated water before discharge or reuse)
      │
      ▼
DISCHARGE (to approved discharge point per permit)
                    │
                    ▼ (parallel process)
              SLUDGE MANAGEMENT
              Kontek APC5 Filter Press
              (dewatering sludge from wet cell and separator)
              ↓
              Filter cakes → licensed waste disposal
```

`ℹ️ NOTE:` Steps [2]–[6] were confirmed directly by the site operator (oil separation cell → frac tanks → 2 outdoor blue separator bins → intake pump → two white indoor tanks). Step [7] (indoor wet cell) is still pending confirmation — it's unclear whether this is a separate piece of equipment from the blue bins in step [4], or whether earlier notes about an indoor concrete wet cell were actually describing the same blue bins. See Section 6.1a / 6.2a.

---

## 0.2a Plain-English Walkthrough — How This System Actually Works

> Read this if the diagram above and the equipment sections feel overwhelming. This is the same information, told as one continuous story, with every term defined the first time it's used. Some details below are still unconfirmed — they're marked clearly so you know what to double check with your supervisor.

**Mostly gravity outdoors — but flocculant starts early:**

1. **Open pit/pond.** Raw dirty water collects here first — dark water, often an oily film on top. It just sits, and because oil is lighter than water, it floats; because solids are heavier, they sink. No equipment needed for this — gravity does the work.
2. **Oil/Water Separation Cell.** A vessel built to make that floating/sinking happen efficiently. The floating oil is skimmed off and disposed of as waste — it never reaches the clean side. `ℹ️ CONFIRMED:` This is also the **first of three points** where **flocculant** (polymer — CL-200) is added on this site. Flocculant acts like a net, bundling tiny stuck-together particles into bigger, heavier clumps called **floc** — big enough to settle out instead of drifting in the water. Starting this here means floc is already forming before the water even reaches the frac tanks.
3. **Frac Tanks** *(frac tank = a large portable steel storage tank, borrowed from the oil/gas industry)*. More settling time outdoors. The clearer water in the middle of the tank is drawn off to continue; oil and solids stay behind.
4. **Two Blue Separator Bins.** Steel bins with **baffles** inside *(baffle = an internal divider wall that forces water to take a longer zig-zag path instead of flowing straight through)*. This gives any remaining oil and grit more time and surface area to separate out — the last outdoor cleanup step. `ℹ️ CONFIRMED:` Flocculant is dosed again here — the **second of three points** — to keep building floc as the water gets jostled through the baffles and pumped onward.
5. **Transfer Pumps.** This system doesn't use one fixed pump bolted in place at every stage — instead, **portable submersible pumps** *(motor and pump sealed together, sits underwater)* are physically moved to wherever water needs to go next. The same style of pump is dropped into a frac tank with a hose run to a blue bin, and later dropped into a blue bin with a hose run into the building. Always check which tank a pump is currently sitting in before assuming a transfer is happening — nothing moves on its own here.

**Now the heavier chemistry — problems gravity alone can't fix:**

6. **Two White Indoor Tanks.** Three things happen here:
   - **Coagulant (PACl)** is added for the first time here. It cancels out the electrical charge that's been keeping tiny dirt particles apart (like magnets repelling each other) so they can finally stick together. This is called **coagulation**.
   - **Flocculant (polymer — CL-200 or Flopham)** is added a **third time** here, on top of the two outdoor doses from steps 2 and 4 — the final top-up alongside the fresh coagulant, continuing the same job: bundling clumps into bigger floc. This is called **flocculation**. `ℹ️ WHY THREE DOSING POINTS INSTEAD OF ONE:` Each transfer (pumping, baffles, settling) disturbs floc that's already formed. Re-dosing a little flocculant at each major step keeps floc building continuously along the whole journey, instead of asking one single dose to survive from the pit all the way to the white tanks.
   - **An oxidizer (hydrogen peroxide, and possibly the peroxyacetic acid blend found on site — use not yet confirmed)** converts **dissolved iron** *(invisible — it's dissolved in the water, not floating as a particle, so no filter can catch it)* into solid rust-colored particles that filters CAN catch. This is why the whole plant is stained orange — that staining is iron being successfully caught, doing exactly what it's supposed to.
   - `❓ UNCONFIRMED:` There may be a 7th step here — an indoor concrete "wet cell" with baffles for more settling after the chemicals are added. It's not yet clear if this is real separate equipment or the same blue bins from step 4 described twice. Confirm with supervisor.

**Filtering out everything the chemistry created:**

7. **Sand Filter (SRS-SF-11).** A pressure tank full of sand. Water is pushed down through it; the sand traps the iron particles and floc clumps made in step 6 — like a coffee filter for rust.
8. **Carbon Vessel (SRS-CV-15).** Sand can't catch *dissolved* fuel smell and color (dissolved = mixed into the water like sugar, not filterable). **Activated carbon** is riddled with microscopic pores giving it huge surface area; dissolved hydrocarbons stick to that surface as water flows through (called **adsorption**). This step removes the fuel odour.
9. **Bag Filters.** Two fabric bags in a row — coarse (100 micron) then fine (10 micron — a micron is a millionth of a metre). Final mechanical catch-all for anything that snuck through.

**Final polish and disinfection:**

10. **Ozone.** Ozone gas (O₃) is an even stronger oxidizer than the peroxide from step 6 — it mops up any remaining iron or organics, and kills bacteria.
11. **Chlorination (Cal-Hypo tablets).** Tablets dissolve slowly, releasing chlorine — the same disinfectant used in pools — as a final guarantee nothing biological survives before discharge.
12. **Clean Frac Tank Storage → Discharge.** Treated water is held, sampled and tested against the legal discharge limits, then released.

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
