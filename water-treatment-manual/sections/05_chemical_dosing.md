# Section 5 — Chemical Dosing

> Every chemical in this system has one job. Learn what that job is, what "working correctly" looks like, and what the warning signs of a problem are. Never mix chemicals together — several combinations on this site are dangerous.

---

## 5.1 The Chemicals On This Site and Why Each One Is Here

This is an iron-removal and hydrocarbon-removal system, not a drinking water plant. The chemicals reflect that:

| Chemical | Container | Job in this system |
|---|---|---|
| **PACl** (Poly Aluminum Chloride) | White 200L drum, Class 8, SUMAS label | Coagulant — neutralizes particle charge so solids clump |
| **CL-200** (polymer flocculant) | White drum, "FLOCCULANT" label | Flocculant — grows small clumps into big, heavy floc. **Added at 2 confirmed points: the oil/water separation cell (also called "the lagoon") and the C Can** |
| **Flopham** (dry polymer) | White bags, "NON-REGULATED" label | Backup/supplemental flocculant — same role as CL-200 |
| **HaloKlear LiquiFloc 2%** | *(chitosan acetate solution)* | Natural chitosan flocculant — used for fine silts, especially stormwater |
| **Lime — quicklime (CaO), confirmed by supervisor** (bag label says TEXLIME Hydrated Lime, but supervisor's word overrides — see Section 5.6a) | 50 lb bags, mixed 1 bag per 200L in a tank at the C Can | Added at the C Can before PACl + flocculant — raises pH to 8+ for coagulation, also precipitates dissolved metal ions. **Conditional on pH — confirmed by supervisor: only used if the pH is too low.** |
| **Sodium Hydroxide (NaOH)** — NEW, see Section 5.6b | Big tote bag *(location TBD)* | Alternative pH RAISER to lime — confirmed present on site, not yet confirmed in routine use |
| **Hydrogen Peroxide** | Blue 200L drums, Class 5.2/8, SUMAS label | Oxidizer — converts dissolved iron (invisible) to iron hydroxide (filterable) |
| **CO₂ (Carbon Dioxide)** | Air Liquide gas cylinder | pH REDUCER — lowers pH when water is too alkaline |
| **pH+ powder** (Summer Smiles Sani Marc) | 8 kg pail | pH RAISER — raises pH when water is too acidic |
| **Accu-Tab Blue** (Cal-Hypo tablets) | White pails, Class 5.1, SUMAS label | Disinfectant — final chlorination before discharge |

---

## 5.1a pH Drives Coagulant/Flocculant Dosing — CONFIRMED BY OPERATOR

`ℹ️ CONFIRMED:` PACl coagulant and flocculant dosing are not "set and forget" — when the pH of the water changes, the coagulant/flocculant treatment has to be adjusted in response.

`ℹ️ TARGET RANGE — CONFIRMED BY OPERATOR:` **pH 8 or higher is good for the coagulant. Below 8 is not good** — lime is used to bring pH up to 8+ before PACl coagulant and flocculant go in. Operator also noted PACl coagulant is itself acidic and lowers pH on its own. Supervisor (Brendan) confirmed lime is only needed when pH is too low (see Section 5.6a) — it is not a fixed every-batch step.

`ℹ️ NUANCE — CONFIRMED BY SUPERVISOR (Brendan, text message):` Asked directly about a pH 6.53 reading — raise it to 8 with lime, or just go with coagulant/flocculant as-is? Brendan: **"That's fine as long as it's floccing. 7 is neutral so it's basically neutral which isn't bad at all but chemical can work better around 8."** So 8 is the target/ideal, not a hard cutoff — mid-6s to 7 is workable if you're seeing good floc form. Brendan separately said **around 4 pH would be low** (the real danger zone). Use floc formation as your real-time guide; don't stop everything to chase pH 8 if it's already floccing well in the high 6s/7s.

`ℹ️ WHY (general water treatment principle, to be replaced with site-specific detail):` Coagulants like PACl work by neutralizing the electrical charge on suspended particles, and that charge-neutralizing reaction is pH-dependent — PACl has an optimal pH window, and outside that window it works poorly even at the correct dose. So if incoming water pH drifts below 8, the coagulant dose (and sometimes the flocculant dose right after it) needs to be re-tuned, not just left on the same setting. This is part of why pH is tested every day — it's not just a compliance number, it's a direct input into how much coagulant/flocculant to run.

`ℹ️ CONFIRMED BY SUPERVISOR (Brendan):` **There is no fixed daily target dose (mg/L) for PACl/flocculant.** In his words: "the dose is going to change daily depending what they dump. So you're just going to have to play with it and wait until you see it flocc." Raw water composition varies day to day depending on what's been dumped into the system, so the dose is set by observation each time — watch for floc forming, not a fixed setpoint. This replaces the earlier open question about a fixed target.

---

## 5.1b Ongoing Testing Drives Dose Adjustment — CONFIRMED BY OPERATOR

`ℹ️ CONFIRMED:` Dosing at the C Can is not a one-time "set it and walk away" step. The operator tests the water on an ongoing basis and adjusts dosing based on what the results show:

- **If results show under-dosing** (e.g., poor floc formation, turbidity not dropping — see Section 4 for signs), **add more coagulant or flocculant at the C Can into the weir tank.**
- **Pump speed/stroke adjustment:** if the dose itself needs to change, this is done by adjusting the **stroke rate and/or stroke length** on the relevant dosing pump (coagulant, flocculant, or lime) — not just by adding chemical by hand.
- Coagulant and flocculant dosing pumps at the C Can are both confirmed JCMB Solenoid Dosing Pumps, same model — current speeds: coagulant **34**, flocculant **56** (Sections 5.3, 5.4). Lime pump/method still pending — lime is mixed in the tote, not metered through one of these dosing pumps (Section 5.6a).

`⚠️ RULE — CONFIRMED BY OPERATOR:` **Coagulant (PACl) dose must never be more than the flocculant dose.** Flocculant ≥ coagulant, always — never the other way around. Keep this in mind any time you're adding more of either one.

### pH check during testing at the C Can
While testing at the C Can, **check the pH of the water.** Operator will read out the pH value live — based on the target range in Section 5.1a (pH 8+ is good, below 8 is not), confirm whether the reading is off and what to do about it (add lime to bring it up to 8+, per Section 5.6a).

`(still pending: lime pump/dosing method photo at the C Can; what specific test result triggers a dose increase vs. a pump adjustment)`

---

## 5.1c Full Chemical Mixing & Dosing Sequence — Step by Step (CONFIRMED BY OPERATOR, Oliver)

This ties together Sections 5.3, 5.5, and 5.6a into the order they're actually done at the C Can, before water moves on to the weir tank, ozone, bag filter, and carbon vessel (see the full Treatment Train, Section 0.2). If you're new, read the "why" line under each step before you do it — knowing why catches mistakes a checklist alone won't.

`[ACTION]`

**Step 1 — Test the pH first.**
This single reading decides everything that follows. It tells you whether lime is needed at all — lime is *conditional*, not an every-batch default (Section 5.6a).
> `ℹ️ WHY:` PACl coagulant only works well at pH 8 or above, and PACl itself is acidic — it drags pH down further once added. If you skip the pH check and the water is already low, you'll dose coagulant into water where it barely works, see no floc forming, and waste chemical chasing a problem that was actually a pH problem.

**Step 2 — Decide on lime.**
- **If pH reads below 8:** mix lime in the blue lime tote/drum at the C Can — **1 bag (50 lbs) per 200L of water.** Keep the pneumatic mixer running the *entire time* — both while you're first mixing it in and while you're pumping it back out. Lime settles and hardens fast the moment the blade stops turning.
- **If pH already reads 8 or higher:** skip lime completely and go straight to Step 3.
> `ℹ️ WHY:` Lime does two things at once — it raises pH into the range PACl needs to work, and separately, the higher pH itself can force dissolved metal ions (like iron) to turn solid so they can be filtered out, acting as a backup to ozone. But it's only needed when the pH reading actually calls for it — adding it every time regardless of pH just means pushing the pH too high (Brendan's caution: "both raise pH so don't add too much").

**Step 3 — Mix the PACl coagulant stock.**
**2 bags of dry PACl powder per 200L of clean water** — clean water, not the water you're treating. Let the mixed stock **sit for 3 hours** before you start dosing from it.
> `ℹ️ WHY:` Coagulant works by neutralizing the electrical charge on suspended particles so they can stick together (Section 5.3). A freshly mixed batch hasn't fully dissolved/activated yet — dosing too early means you're injecting partially-mixed powder instead of an effective coagulant, and you won't see good floc form even though you added the "right" amount.

**Step 4 — Mix the flocculant stock.**
**100g of flocculant per 200L of water** — measured as half a scoop from the white pail per 200L batch. Add it **slowly, sprinkled in, never dumped**, while the water is mixing. **Keep mixing for about an hour** before it's ready to use.
> `ℹ️ WHY:` Flocculant is a long-chain polymer that works like a net, bridging small coagulated clumps into bigger, faster-settling floc (Section 5.4). Dump it in too fast and it clumps into masses on contact with water — those masses don't disperse, and they're exactly what clogs the chemical dosing pumps downstream. Slow and steady gets it evenly dissolved instead.

**Step 5 — Dose both into the water together,** right before the weir tank.
**Flocculant dose must always be ≥ the coagulant dose — never less** (Section 5.1b).
> `ℹ️ WHY:` Flocculant's whole job is to bridge the floc that coagulant just created. If there's more coagulant than flocculant to bridge it, you get lots of small, weak clumps that never grow big enough to settle quickly.

**Step 6 — Watch for floc forming visually, and adjust from there.**
There is no fixed daily mg/L target for either chemical — raw water composition changes day to day depending on what's gone into the system, so the dose is tuned by what you actually see, not a setpoint you dial in once and forget. If you're not seeing good floc, adjust the dosing pump's stroke rate/length rather than assuming the ratio above is wrong.
> `ℹ️ WHY:` In Brendan's own words: "the dose is going to change daily depending what they dump. So you're just going to have to play with it and wait until you see it flocc."

**Step 7 — Don't overload the front end.**
Keep the incoming flow rate in check. If too much water comes in at once, the floc you just worked to create doesn't get enough time to actually settle before it's pushed forward, and every stage downstream inherits a problem it can't fix either.
> `ℹ️ WHY:` This site was never built as a purpose-designed treatment plant — there's no engineered buffer capacity to absorb a flow spike. Managing flow rate is as much a part of "dosing correctly" as getting the chemical ratios right; a perfect dose into water that never had time to settle still fails.

**Step 8 — Hand off to the rest of the train.**
From here the water continues exactly as mapped in Section 0.2: weir tank settling → ozone → indoor settling bins → bag filter → carbon vessel → storage tank. This site does not run a sand filter — the bag filter and carbon vessel are the only two filtration steps the water actually passes through, so anything that gets past your chemical dosing here is relying on just those two to catch it.

---

## 5.1d Batch Sizing & Timing — When to Mix the Next Batch — CONFIRMED BY SUPERVISOR (Brendan, text message)

Oliver asked directly: *"How much of the chemicals do you normally make — just enough to fill the drums that are injecting the chemicals — and do you wait till the chemicals are finished before you make more?"*

Brendan's answer, combined into the rules below:

1. **Mix about 200L, or just under, per batch.** This matches the per-batch ratios already given for each chemical above (lime, PACl, flocculant — Sections 5.6a, 5.3, 5.5) — you're not filling the tote to its full size, just making one batch's worth at a time.
2. **Always mix into an empty tote — don't top up on top of what's left.** `ℹ️ WHY:` *"They don't lower at the same rate so you need the tote empty."* Lime, PACl, and flocculant draw down at different speeds depending on dosing rate, so a partly-used tote doesn't have a clean, known concentration left in it. Mixing a fresh 200L batch into that leftover muddies the ratio — empty it out first, then mix the new batch at the full, correct ratio.
3. **Don't wait until a tote runs completely dry before starting the next batch.** Oliver asked if you wait until the chemical is finished before making more — Brendan's answer: **"No, you don't wait — then you'd have to shut down the whole system while you make more."** `ℹ️ WHY:` PACl needs a 3-hour rest before use and flocculant needs about an hour (Sections 5.3, 5.5) — if you let a tote run bone dry first, you're stuck waiting that whole mixing/rest time with nothing to dose, which means stopping the system. Watch the level and start mixing the next batch with enough lead time that it's ready before the current one is actually used up.

Put together: empty the tote out, then mix a fresh ~200L batch — timed early enough that you're never caught with an empty tote and a system that's still running.

---

## 5.2 Critical Compatibility Warning — Read Before Handling Any Chemical

`⚠️ WARNING:` Several chemicals on this site will react violently if mixed together.

| Never mix... | With... | What happens |
|---|---|---|
| **Hydrogen Peroxide** | **Calcium Hypochlorite (Cal-Hypo)** | Violent decomposition, fire, chlorine gas release |
| **Hydrogen Peroxide** | Any organic material (rags, wood, oils) | Can ignite spontaneously |
| **Cal-Hypo** | Any acid (including PACl, which is pH 2.2–2.8) | Chlorine gas released |
| **CO₂ (as gas)** | Enclosed space without ventilation | Displaces oxygen — asphyxiation risk |

**Rule:** Store each chemical in its designated location. Never move containers without supervisor approval. Never decant into an unlabelled container. Never combine leftover chemicals.

---

## 5.3 Chemical 1 — PACl (Poly Aluminum Chloride)

**Product:** CK-311 Coagulant (Aluminum Hydroxide Chloride Solution), supplied by SUMAS Environmental Services  
**SDS supplier:** CARBONeT Holdings Inc., 604-761-2308  
**Container:** White 200L drum, Class 8, UN 3264, PG III, pH 2.2–2.8  
**Pump:** Blue diaphragm dosing pump  
**Pump at the C Can — CONFIRMED BY PHOTO (IMG_2858):** Blue **JCMB Solenoid Dosing Pump** (same model as the flocculant pump, Section 5.4).

**Current setting — CONFIRMED BY OPERATOR:** coagulant pump speed adjusted to **34**.

### What it does
Water contains tiny particles that are too small to settle on their own. These particles carry a negative electrical charge, which keeps them suspended and apart — like tiny magnets repelling each other.

PACl is a positively charged aluminum compound. When it's added to the water and mixed, its positive charge neutralizes the negative charge on the particles. Once the charges are neutralized, particles can approach and stick together — this is **coagulation**.

`ℹ️ WHY:` Without coagulation, fine particles pass straight through every filter in this system. Coagulation is always the first chemical step.

### How to dose
- Typical dose range: 5–40 mg/L (highly variable based on water quality — start with your baseline and adjust)
- Dose point: add to water with good mixing (turbulent mixing zone or rapid mix)
- Check: is the pump running and consuming chemical? Watch the tank level — it should visibly drop over a shift.

### Preparing the dry PACl stock solution

`ℹ️ CONFIRMED BY CURRENT OPERATOR:` A dry PACl powder (25kg bags) is mixed into a stock/working solution before being metered into the process — this is separate from (or an alternative to) the liquid CK-311 drums described above.

- **Ratio: 1 bag of dry PACl powder per 100L of clean water — NOT the water being treated** (confirmed by current operator; matches the earlier former-operator figure of 2 bags per 200L — same ratio, now confirmed current)
- **Let it sit for 3 hours before using — CONFIRMED BY OPERATOR.** Don't dose straight from a freshly mixed batch. Plan ahead like the flocculant stock (Section 5.4, 24-hour rest) so you don't run out of usable stock mid-shift.
- Mix in the tank, then meter the resulting solution into the process via the dosing pump
- Indoors, coagulant + flocculant are injected together right before the water reaches the white settling tanks (see Section 0.2/0.2a) — the combination is what causes contaminants and dirt to clump and settle to the bottom of the tank
- You may need to adjust the dosing pump's stroke rate/length to get the right amount going in — watch visually for good floc formation as your guide

### Signs of under-dosing
- Tiny pinpoint particles that don't clump
- Water stays turbid/cloudy after settling
- Filters get dirty quickly (loading too much fine solids)

### Signs of over-dosing
- Turbidity gets WORSE, not better (charge reversal — particles go positive and repel again)
- Unusually high aluminum in discharge water
- pH drops sharply (PACl is acidic, pH 2.2–2.8)

### Safety
- Corrosive (Class 8). Causes skin and eye burns.
- **PPE:** Chemical splash goggles, chemical-resistant gloves, apron
- Eye contact: flush immediately at eyewash for 15 minutes

---

## 5.4 Chemical 2 — CL-200 Polymer Flocculant

**Product:** CL-200 Water Treatment Flocculant, aqueous solution of water-soluble polymer  
**Container:** White drum, "FLOCCULANT / NON-REGULATED MATERIAL" label  
**Pump (indoor injection point):** Yellow LMI diaphragm dosing pump  
**Pump at the C Can — CONFIRMED BY PHOTO (IMG_2807, IMG_2808):** Blue **JCMB Solenoid Dosing Pump**, Model **JCMB55-20/2.5**, Capacity 20 L/H, Pressure 2.5 bar, Power 30W, AC100–240V. Dial sets stroke length; `«` `»` buttons adjust stroke rate; `SET` and `ON/OFF` buttons; green MOTOR light confirms it's running.

**Current setting — CONFIRMED BY OPERATOR:** flocculant pump speed adjusted to **56** (updated from earlier confirmed 48.0).

### What it does
Coagulation (PACl) creates small particle clusters. Flocculation grows those small clusters into larger, heavier floc that settles faster and is easier to filter. CL-200 polymer is a long-chain molecule that acts like a net — it bridges between coagulated particles, connecting them into larger aggregates.

`ℹ️ WHY:` Coagulation alone produces fine, slow-settling floc ("pinpoint floc"). Adding polymer produces large, fast-settling floc. This is the difference between waiting hours for settling and waiting minutes.

### How to dose — TWO confirmed injection points on this site

`✏️ CORRECTED BY OPERATOR:` This section previously listed four injection points, including "the lagoon" as a separate final-dosing/disposal location. **That's been corrected — "the lagoon" is just another name for the Oil/Water Separation Cell (point 1 below), not a separate fourth point.** The operator's job ends once treated water reaches the storage tank — there is no dosing step after that. The current confirmed dosing points are:

1. **Oil/Water Separation Cell (outdoor, Step 2 — also called "the lagoon")** — added early to start clumping fine particles before the water even reaches the frac tanks
2. **The C Can (Section 0.2a, Section C)** — dosed alongside PACl coagulant, right before the outdoor weir tank

`(unconfirmed, needs checking with operator: the "two Blue Separator Bins" and "peroxide oxidizer" dosing points listed in older notes — these haven't been confirmed as part of the current live process.)`

`ℹ️ WHY MULTIPLE POINTS, NOT ONE:` Each point is treating water that has already lost some solids to the step before it, but is also picking up disturbance/mixing from pumping. Re-dosing flocculant at each major transfer point keeps floc forming continuously instead of relying on one dose to last the whole way through. Think of it like reapplying glue at each stage of an assembly line, rather than gluing everything once at the very end.

- General rule wherever it's added: dose AFTER any PACl/coagulant has had time to work, and during gentle mixing — not violent/rapid mixing (the gentle tumbling lets the polymer bridge particles together without tearing the floc apart)
- Typical dose range: 0.1–2 mg/L per injection point (much lower than coagulant — polymers are very active)
- Over-dosing polymer is easy and wastes money. Start conservative at each point.

### Preparing the flocculant stock solution

`ℹ️ CONFIRMED BY CURRENT OPERATOR:` Ratio is **1 kg polymer per 1000L of clean water (1 g/L)**, added in two half-volume pours:

1. Add the **first half of the water** (NOT the water being treated) to the tote.
2. **Turn on the mixer.**
3. Add the **polymer** while adding the **second half of the water** at the same time — pouring the water and polymer in together while mixing lets the polymer disperse instead of clumping.
4. Keep mixing well until fully dissolved.
5. **Let it sit for 24 hours before use — CONFIRMED BY OPERATOR.** Don't dose straight from a freshly mixed batch; the stock solution needs a full day to rest/cure before it's ready to inject. Plan batches a day ahead so you don't run out of usable stock mid-shift.

**Batch size confirmed by operator: 500L, not 1000L** — scaled to the same ratio, that's 250L water → mixer on → **500g polymer** added with the second 250L of water. `(scaling assumes the same 1 g/L concentration applies at the smaller batch size — confirm with operator if the polymer amount doesn't simply halve with the batch.)`

`✏️ MOVED — CONFIRMED BY OPERATOR (Oliver):` The 100g-per-200L, scoop-from-the-white-pail ratio previously logged here is **the dry Flopham polymer, not CL-200** — moved to Section 5.5 where it now lives with its mixing technique. `(This 1kg/1000L two-pour procedure right above describes a powder being poured in alongside water too — possibly also Flopham rather than liquid CL-200. Not reattributed yet since it hasn't been specifically confirmed either way — flagging for a future check.)`

### Signs of under-dosing
- Floc forms but stays small and slow to settle
- Settled water still turbid

### Signs of over-dosing
- Floc may break apart or become sticky ("restabilization")
- Water can become viscous or stringy

### Safety
- Non-regulated, pH 6.5–7.5. Low hazard.
- Can make floors very slippery if spilled — clean up immediately
- **PPE:** Gloves recommended; mop up spills right away

---

## 5.5 Chemical 3 — Flopham Dry Polymer

**Product:** Flopham water soluble polymer (polyacrylamide-based)  
**Container:** White bags, "NON-REGULATED MATERIAL" SUMAS label

### What it does
Same job as CL-200 — a flocculant. Flopham is a dry polymer that must be dissolved in water before use.

`✏️ CORRECTED BY OPERATOR (Oliver):` This is **not** a backup/supplement to CL-200 — this dry polymer, scooped from the white pail, is the one actually in routine use at the C Can for flocculant dosing (see Section 5.1c for where it fits in the full mixing sequence).

### Ratio and mixing technique — CONFIRMED BY OPERATOR (Oliver)

**Ratio: 100g of dry Flopham per 200L of water (~500 mg/L)** — measured in practice as **half a scoop from the white pail** per 200L batch.

`[ACTION]`
1. Start with water in the mixing container, mixer running.
2. **Add the polymer very slowly — sprinkle it in, never dump it.** Adding it too fast (or adding water to powder instead of powder to water) forms clumps/fish-eye lumps that will clog the chemical dosing pumps downstream.
3. **Keep mixing for about an hour** until fully dissolved and the solution looks clear/uniform.
4. This stock solution is then metered into the process alongside the PACl coagulant — together they cause contaminants and dirt to clump and settle.

`ℹ️ NOTE:` This 100g/200L ratio (~0.05%) runs lighter than the generic 0.1–0.5% solution-concentration range sometimes quoted for polyacrylamide flocculants — that generic range is kept below for reference, but **100g/200L is the live, operator-confirmed ratio to use.**

`(reference only — generic guidance, not site-specific):`
- Typical solution concentration range quoted for this polymer type: 0.1–0.5% (1–5 g polymer per litre of water)
- Add the prepared solution to the treatment stream via dosing pump or measured addition

`ℹ️ WHY:` Pre-dissolving eliminates clumping and ensures even distribution. Undissolved polymer lumps pass through the system without doing anything useful.

---

## 5.6 Chemical 4 — HaloKlear LiquiFloc 2% (Chitosan Flocculant)

**Product:** HaloKlear LiquiFloc 2%, HaloSource Inc., Bothell WA  
**Chemical:** Chitosan Acetate Solution — a natural biopolymer derived from crustacean shells  
**Appearance:** Clear to pale yellow viscous liquid with a vinegar odor

### What it does
Chitosan is a natural, biodegradable flocculant that is particularly effective for removing fine clay and silt particles from stormwater. It works similarly to synthetic polymers but is preferred in some applications because it is non-toxic and biodegradable.

### When to use it
- During high turbidity events (heavy rain, surface runoff)
- When stormwater contains fine clay that doesn't respond well to PACl alone
- When an environmentally sensitive application requires a natural flocculant

### Dose
- Typical: 1–10 mg/L (varies by turbidity and particle type)
- 100% biodegradable and nontoxic to aquatic life

### Safety
- Very low hazard. May be mildly irritating to eyes.
- Smells like vinegar — this is normal.
- **PPE:** Gloves recommended as good practice.

---

## 5.6a Chemical 4a — Lime

`ℹ️ CONFIRMED BY OPERATOR:` This is the "3rd chemical" at the C Can — lime. (Operator briefly second-guessed the chemical name in favor of "sodium hydroxide," then retracted that and confirmed lime is correct.)

**Product label (photographed, IMG_2803, IMG_2743):** TEXLIME High Calcium Hydrated Lime  
**Chemical — ✅ RESOLVED, CONFIRMED BY SUPERVISOR (Brendan, text message):** Brendan, asked directly, said: **"So it's quicklime which is calcium oxide, the bag we should around and it just says lime."** This is **quicklime (CaO)**, not hydrated lime (Ca(OH)₂) as the photographed bag label (IMG_2803) suggests — the supervisor's direct word overrides the label here; the bag itself is apparently just generically marked "lime" with no further specifics. Treat this as **CaO going forward.**

**Ratio — CONFIRMED BY SUPERVISOR (Brendan, text message):** **1 bag (50 lbs) per 200L of water.** **Must be kept mixing continuously — it will settle out and harden if you stop.** This matches the dry-bag-mixed-into-a-stock-tank pattern used for PACl/flocculant (Sections 5.3/5.4); the blue drum/tote staged at the C Can (Section 6.1b) is this mixing tank.

`⚠️ CRITICAL — CONFIRMED BY OPERATOR:` **The mixer blade on the blue lime drum must be running while you're pumping the lime out, not just while you first mix it.** Lime settles out fast — if the blade stops turning while you're dosing, it won't work well. The mixer is the pneumatic (air-driven) tote mixer, Section 6.16 — open the air valve and keep it running for the whole time you're drawing lime out.

📄 **Photo-illustrated quick steps for mixing lime, PACl, and flocculant (and running the mixer):** [CHEMICAL_MIXING_GUIDE.pdf](../CHEMICAL_MIXING_GUIDE.pdf)

**Alternative chemical — CONFIRMED BY SUPERVISOR (Brendan, text message):** "You can also use sodium hydroxide as well. Which I think they have a big tote bag worth of." Sodium hydroxide (NaOH, caustic soda) is a separate, more hazardous strong base that can substitute for lime as a pH-raiser. Confirmed present on site in a large tote bag, but not yet confirmed as in current routine use — see new chemical entry, Section 5.6b.

`⚠️ Brendan's caution, applies to both:` **"Both raise pH so don't add too much."**

`ℹ️ CONFIRMED BY SUPERVISOR (Brendan, text message):` Asked for a fixed amount/formula to add to the weir tank to raise pH (in this case using the pH+ powder, Section 5.1): **"It's all dependent on what pH you're at and where you want it. I don't have the math."** There is no fixed dose for pH+ either, same as lime — dose by jar-testing a small sample first, then adding gradually to the full tank while retesting, never one calculated amount all at once.

**Dosing logic at the C Can — ✅ RESOLVED, CONFIRMED BY SUPERVISOR (Brendan, text message):**

Brendan's direct answer: **"Lime you only need to use if the pH is too low. If it's too low sometimes the chemicals won't work."**

This confirms lime is **conditional on the pH reading**, not pumped on a fixed every-batch schedule. Earlier statements on this — one matching this conditional logic, and one saying "we pump the lime every time because the coagulant lowers the pH" — are reconciled this way: check pH every time, and add lime whenever that reading comes back below 8. In practice this may often look like "every time" if the pH is consistently low, but the decision point is the reading, not the clock — there is no fixed schedule independent of the pH check.

**How low is "too low":** The working threshold is **pH 8**. Anything less than 8 is not good and needs lime — treat 8 as the hard cutoff, not just a target to aim near.

### What it does
Lime raises pH. PACl coagulant works well at pH 8 and above, and is itself acidic — so without lime to counteract it, the coagulant would drag the water's pH down out of its own optimal range.

**Second function — CONFIRMED BY SUPERVISOR (Brendan, text message):** "If you add the lime it will force any metal ions dissolved to transform into solid particles that can be filtered out in the treatment process if you don't trust the ozone." This is a real, separate mechanism from pH-correction-for-coagulant: raising pH with lime can push dissolved metal ions (like iron) past their solubility limit, so they precipitate out as solid metal hydroxide particles that the filters can then catch — similar end result to what ozone/peroxide does by oxidation (Section 5.7), but via a pH shift instead of an oxidizing reaction. Brendan's framing suggests this is a backup/parallel pathway for metals removal, not a replacement for ozone.

`⚠️ SAFETY:` This is quicklime (CaO) — caustic/corrosive, can burn skin and eyes, and the dust is a respiratory irritant. **Quicklime reacts exothermically (releases real heat) when wetted** — on top of the causticity, mixing this generates heat, which is a bigger handling hazard than ordinary hydrated lime. Handle with confirmed PPE (chemical splash goggles, chemical-resistant gloves, dust mask) and never add water to a sealed/closed container of it.

`(still needed: PPE specifics from the SDS; where the lime is stored/staged at the C Can)`

---

## 5.6b Chemical 4b — Sodium Hydroxide (NaOH, Caustic Soda) — NEW, NOT YET FULLY DOCUMENTED

`ℹ️ CONFIRMED BY SUPERVISOR (Brendan, text message):` Sodium hydroxide is on site as an alternative pH-raiser to lime — "they have a big tote bag worth of" it. Not yet confirmed whether it's in current routine use or just available as a backup option.

**Chemical:** Sodium hydroxide (NaOH) — a strong, fast-acting base, more hazardous to handle than lime.

`⚠️ SAFETY (general — site-specific SDS still needed):` Caustic soda is highly corrosive to skin, eyes, and respiratory tract — more aggressively so than lime. Dissolving it in water is also exothermic (releases heat). Standard handling requires chemical splash goggles, face shield, chemical-resistant gloves and apron, and care to avoid generating heat too fast in a closed container.

`⚠️ Brendan's caution:` Like lime, this raises pH — **don't add too much.**

`(still needed: exact product/concentration, container type and location, current dose/ratio if actually in use, SDS, PPE confirmation.)`

---

## 5.7 Chemical 5 — Hydrogen Peroxide (H₂O₂)

**Product:** Hydrogen Peroxide, All Grades, Brenntag Canada  
**Container:** Blue 200L drums, SUMAS label "ORGANIC PEROXIDE TYPE E, LIQUID", Class 5.2 + Class 8  
**Concentration:** Likely 25–50% (confirm with supervisor and SDS)

### What it does — Iron Oxidation

The source water contains dissolved iron in its **reduced form (Fe²⁺)** — ferrous iron. In this form, iron is invisible in water (clear). You can't filter out dissolved iron — it passes straight through any filter because it's not a particle.

Hydrogen peroxide oxidizes Fe²⁺ to Fe³⁺ (ferric iron):

```
2 Fe²⁺ + H₂O₂ → 2 Fe³⁺ + 2 OH⁻

Fe³⁺ + 3 OH⁻ → Fe(OH)₃ ↓
```

Fe(OH)₃ is iron hydroxide — a reddish-brown solid that precipitates out of solution and can now be filtered. This is where the orange staining on every surface comes from.

`ℹ️ WHY:` You cannot filter dissolved iron — you must convert it to a particle first. H₂O₂ does this conversion, and then your sand filter catches the iron particles that result.

### Dose guideline
- Rule of thumb: **1 mg H₂O₂ per mg of Fe²⁺** (1:1 ratio)
- In practice, 1–3 mg/L H₂O₂ is common for iron oxidation (confirm actual Fe²⁺ concentration in your source water)
- Excess H₂O₂ is not harmful in small amounts — it decomposes to water and oxygen

### How to check it's working
- Orange/rusty precipitate forming in the settling tanks is a good sign
- If no precipitate forms after adding H₂O₂, check: Is the pump actually running? Is the tank level dropping? Is the pH in the right range (H₂O₂ iron oxidation works best at pH 5–8)?

### `⚠️ WARNING — Hydrogen Peroxide is a serious hazard`
- **Class 5.2 Organic Peroxide** and **Class 8 Corrosive** — both apply
- Concentrated H₂O₂ causes severe skin and eye burns on contact
- Strong oxidizer — reacts violently with organics (rags, wood, fuels), metals (iron, copper, manganese), and strong bases
- **NEVER mix with Cal-Hypo** — violent reaction
- Decomposition produces oxygen — sealed/hot containers can over-pressurize
- **Storage:** Cool, dry, away from all combustibles. No direct sunlight. Keep away from other chemicals. Do not store near Cal-Hypo.
- **PPE:** Full face shield, chemical splash goggles, chemical-resistant gloves (neoprene or nitrile, check SDS), apron

**First aid — skin contact:** Flush with large amounts of water for 20 minutes. Remove contaminated clothing while flushing.  
**First aid — eye contact:** Eyewash station for 15 minutes minimum. Seek medical attention.  
**First aid — inhalation (vapour/mist):** Move to fresh air. Call 911 if breathing affected.

---

## 5.8 Chemical 6 — CO₂ (Carbon Dioxide)

**Product:** Carbon Dioxide Gas/Liquid, Air Liquide Canada  
**Container:** Pressurized cylinder (high-pressure gas — handle with care)  
**Emergency contact:** Air Liquide Canada, (514) 878-1667

### What it does — pH Reduction
When CO₂ dissolves in water, it forms carbonic acid (H₂CO₃), which lowers pH:

```
CO₂ + H₂O → H₂CO₃ (carbonic acid) → H⁺ + HCO₃⁻
```

More H⁺ ions = lower pH. CO₂ is a safe, precise pH reducer — unlike strong acids (sulphuric acid), CO₂ is self-limiting (the more you add, the more equilibrium pushes back) and leaves no harmful residual.

### When to use it
- When incoming water pH is too high (too alkaline) — for example, after lime or concrete contact
- When you need to bring pH down before a treatment step that requires a certain pH range

### `⚠️ WARNING — CO₂ Cylinder Safety`
- **High pressure gas** — cylinders must be chained to wall or fixed support. A falling cylinder can rupture and become a projectile.
- CO₂ gas is heavier than air — in an enclosed/low space, it displaces oxygen without warning (no smell, no colour). **Asphyxiation risk.**
- Always work in ventilated areas; never enter a CO₂ storage vault alone
- **PPE:** Safety glasses, gloves. For CO₂ liquid contact: thermal gloves (rapid evaporation causes frostbite)

---

## 5.9 Chemical 7 — pH+ Powder (Summer Smiles Sani Marc)

**Product:** Summer Smiles pH+ (pool-grade sodium carbonate/bicarbonate blend)  
**Container:** 8 kg pail

### What it does — pH Raising
Sodium carbonate (Na₂CO₃) is a mild base. When added to water, it raises pH. This is the same product used in swimming pools to raise water pH.

### When to use it
- When water pH is too low (too acidic) — for example, after heavy PACl dosing (which is acidic, pH 2.2–2.8)
- When discharge requirements specify a minimum pH (usually ≥ 6.5)

### How to add it
`[ACTION]`  
1. Wear gloves — the powder can irritate skin and eyes.  
2. Add the powder slowly to a turbulent area (flowing water, not a stagnant tank).  
3. Add a small amount, mix thoroughly, test pH, then add more if needed.  
4. Do NOT dump in a large amount all at once — pH can overshoot.

`ℹ️ WHY:` pH adjustment requires patience. A little, mix, test, repeat. Overcorrecting costs you time and extra chemicals to correct back.

---

## 5.10 Chemical 8 — Accu-Tab Blue (Calcium Hypochlorite Tablets)

**Product:** Accu-Tab Blue, Calcium Hypochlorite  
**Container:** White pails, SUMAS label, UN 2880, Class 5.1 (Oxidizer)  
**Concentration:** Hydrated mixture, 5.5–16% water content

### What it does — Disinfection
Calcium hypochlorite dissolves in water to release hypochlorous acid (HOCl) — the same active disinfectant as liquid bleach. The tablets dissolve slowly as water passes over them in a tablet chlorinator (or contact chamber with tablets).

Cal-Hypo is the final disinfection step — it kills any remaining bacteria before discharge and provides a measurable free chlorine residual to confirm treatment is complete.

### How to use tablets
`[ACTION]`  
1. Confirm the contact vessel/chlorinator is clean and dry before adding new tablets.  
2. Wear gloves and do NOT inhale dust — the tablets are strong oxidizers and the dust irritates lungs and eyes.  
3. Add tablets per your dosing SOP — do NOT add to a vessel that has wet residue from a previous chemical batch (especially peroxide residue). Dry vessel = critical.  
4. Allow water to flow through at the designed rate — tablets dissolve proportionally to flow.  
5. Test free chlorine residual in the effluent with a DPD test kit to confirm correct dose.

### Target free chlorine for discharge
*(Confirm with supervisor and permit)* — typical range: 0.1–0.5 mg/L at discharge point.

### `⚠️ WARNING — Cal-Hypo Hazards`
- **Class 5.1 Oxidizer** — strong oxidizer. Can cause fire on contact with organics (wood, paper, clothing)
- **NEVER mix with acids** (including PACl solution) — releases chlorine gas
- **NEVER mix with hydrogen peroxide** — violent decomposition
- Store in a cool, dry, well-ventilated location, away from all other chemicals
- **PPE:** Chemical splash goggles, gloves, apron. If handling dusty tablets: N95 or half-face respirator.

---

## 5.11 Chemical Dose Calculation

All doses are proportional to the volume of water being treated. In a batch system (frac tanks):

```
Dose (mg/L) × Tank volume (L) = Total chemical mass needed (mg)

Convert to volume:
Total mass (mg) ÷ Chemical concentration (mg/mL) = Volume to add (mL)
```

**Example — adding PACl to a frac tank:**
- Target dose: 20 mg/L PACl
- Frac tank volume: 50,000 L (50 m³)
- PACl concentration: ≈ 10% = 100 g/L = 100,000 mg/L = 100 mg/mL

```
20 mg/L × 50,000 L = 1,000,000 mg total
1,000,000 mg ÷ 100 mg/mL = 10,000 mL = 10 L of PACl solution
```

`ℹ️ WHY:` In a batch system you're adding a fixed amount to a known volume, not running a continuous feed. Getting the math right matters — too little = poor treatment, too much = wasted chemical and potential exceedances.

---

## 5.12 Chemical Inventory Checklist

Check at the start of every shift:

| Chemical | Current Level | Reorder Threshold | Supplier |
|---|---|---|---|
| PACl (white drum) | _______ | < 20% remaining | SUMAS 1-250-374-4151 |
| CL-200 polymer (white drum) | _______ | < 20% remaining | SUMAS 1-250-374-4151 |
| Flopham polymer (bags) | _______ | < 2 bags | SUMAS 1-250-374-4151 |
| Hydrogen peroxide (blue drums) | _______ | < 1 full drum | SUMAS 1-250-374-4151 |
| Cal-Hypo tablets (white pails) | _______ | < 1 full pail | SUMAS 1-250-374-4151 |
| CO₂ cylinder | _______ | Cylinder < ¼ full | Air Liquide 1-800-817-7697 |
| pH+ powder | _______ | < 2 kg | *(confirm supplier)* |

Record inventory in the daily log.

---

*Last updated: 2026-06-29 | Source: MSDS binder photos (IMG_2574–2595), chemical drum labels (IMG_2597, 2600, 2617, 2630, 2631), operator (Oliver) walkthrough of mixing/dosing sequence, supervisor (Brendan) text-message confirmations*
