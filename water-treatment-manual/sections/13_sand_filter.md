# Sand Filter Reference — Lakos Twin-Tank

Compiled from troubleshooting notes, September 2026.

---

## 1. Treatment train

Oily-water lagoon → frac tank → coagulant → flocculant → caustic → two weir settling
tanks → pumped inside → ozone → **sand filter** → bag filter → carbon vessel (blue) →
holding tanks → back to lagoon and dumped.

**What each stage does (from Brendan):**

| Stage | Job |
|---|---|
| Sand filter | Catches larger dirt |
| Bag filter | Backup so no dirt reaches the carbon |
| Carbon vessel (blue) | Removes hydrocarbons. Stops working properly if dirt gets into it |

Keep incoming flow from getting too high, or there isn't enough time for settling. The
whole system is a balancing act.

### Process notes

**Caustic is in an unusual spot.** The normal order is caustic, then coagulant, then
flocculant last. Worth a jar test with caustic moved to the front.

**Aeration (optional).** If used, it goes in the frac tank *after* oil is skimmed,
pulling water from below the oil layer. A venturi on a recirculation loop is the
simplest setup. Only worth adding if:

- Bag filters clog with orange, brown or black sludge
- There's an H₂S (rotten egg) smell
- The ozone can't keep up

**Do not aerate oily water or the settling tanks.**

---

## 2. Sand filter equipment

| Item | Detail |
|---|---|
| Filter | Lakos twin-tank sand media filter, tanks labelled SRS-SF-11. Carbon steel, painted green |
| Tank size | About 101" around ≈ **32" diameter** |
| Controller | Alex-Tronix F2 AC/DC-D, serial F2-04519 |
| Solenoids | One small grey solenoid per tank, next to the big green valve, with black tubing |
| Big green valve | 3-way hydraulic backwash valve on top of each tank |
| White boxes at bottom | Electric valves on the outlet — **these are not solenoids** |
| Lakos contact | (559) 255-1601, info@lakos.com — have the tank nameplate model or serial ready |

### What each part does

**Top**
- **Big green valve** — switches between filtering and backwashing
- **White pipe and green hose** — backwash waste out. Dirty flush water leaves here. It
  should go to a waste tote or back to the front of the process, **never downstream**
- **Small dome hatch** — where sand goes in

**Middle**
- **Black pipe** — dirty water in, feeds the top of each tank
- **Big side hatch** — access for digging sand out and inspecting the underdrain

**Bottom**
- **Pipe with the gauge and white electric valve** — clean water out
- **White plug** — drain

### How it flows

- **Filtering:** water in the top, down through the sand, out the bottom
- **Backwash:** water in the bottom, up through the sand, dirt out the top and down the
  green hose

If sand shows up in the backwash hose, the backwash flow is too high or a lateral is
cracked.

### How the solenoid and valve work together

The panel sends power to the solenoid → the solenoid clicks → that lets water pressure
through the black tubing into the big green valve → the water pressure flips the valve
from filtering to backwashing.

**If the solenoid doesn't click, the big valve never flips.**

---

## 3. Control panel (Alex-Tronix F2)

The panel is a timer that tells each tank when to clean itself.

### Front

- **Power switch** — on or off
- **Screen** — status ("IDLE" = filtering, "1 ON" = tank 1 backwashing) and backwash count
- **Lights:**
  - **PD** — high pressure started a backwash
  - **DWELL** — pause between tanks
  - **1** or **2** — which tank is washing
  - **ALARM** — it keeps backwashing but the pressure won't drop
- **Manual Start/Advance** — starts a backwash now. Use this to test
- **Counter Reset** — zeroes the count
- **Alarm Reset** — clears the alarm

### Knobs (as found)

| Knob | Does | Found at |
|---|---|---|
| Periodic | How often it backwashes on a timer | ~every ½ hour |
| Flush | How long each tank backwashes | ~25–30 seconds |
| Dwell | Pause between tanks | ~10 seconds |

### Terminals along the bottom

| Terminal | Function |
|---|---|
| Y, OR, Y | 24VAC power in from the transformer |
| C | Common wire for the solenoids |
| 1 and 2 | Power out to the solenoid on tank 1 and tank 2 |
| M | Master valve or pump output |
| A | Alarm output |
| PD | Pressure differential switch, from the gauge under the box |
| Output fuse | 1.6 amps |

### Full cycle

Dirty sand or the timer runs out → panel sends power (C-1) → solenoid clicks → valve
flips → tank 1 cleans → pause → tank 2 cleans → back to IDLE.

### What the previous operator was doing

Washing often and briefly, and relying on the timer more than the pressure switch. This
suggests dirty or oily water was fouling the sand fast. Only 23 backwashes were counted,
so either it ran for about 12 hours before shutdown or the counter was reset.

**Suggested settings on restart:** Flush 60–90 seconds, Periodic every few hours, and let
the PD switch trigger backwashes. Watch the pressure and adjust.

---

## 4. Current problem

**Symptom:** the controller runs a backwash ("1 ON", then "IDLE", and the count goes up),
but there's no click from the solenoids or the bottom valves, and nothing switches. The
system sat unused about 7 months.

**Note from Brendan:** water has to be pumping through the filter during a backwash test.
You should hear clicks from the bottom valve and the grey solenoids. He thinks the
solenoids aren't working.

**Most likely cause:** the solenoids aren't getting enough power. The original transformer
was replaced with an **Edwards No. 598 doorbell transformer** labelled **16V**, and the
solenoids need **24V**. One transformer wire also looks loose.

**Second most likely cause:** the solenoids are dead or stuck from sitting.

### Message for the electrician

> "The backwash controller runs, but the solenoids don't click. Someone put in a 16V
> doorbell transformer and the solenoids need 24V, and one transformer wire looks loose.
> Can you check the transformer, and if that's fine, test the solenoids?"

### Other wiring to tidy later

- The green ground wire isn't connected. Keep it off the circuit board
- Two light-blue wires have bare, unconnected ends. Tape or cap them
- The 120V wire nuts are loose in the box
- The cable entry is full of debris and needs sealing
- **Keep the power off whenever the box is open**

### Replacing a solenoid

Match the voltage (24VAC), type (usually 3-way), normally open or closed, thread and
tubing size, and the brand and part number from the white label.

Often only the coil is bad. An open reading (OL) on a meter means a dead coil.

---

## 5. Sand replacement

**Use:** Target 20/40 filter sand (No. 9992150), NSF certified, 50 lb bags, about $32 CAD
at Pool Compass.

**Do not use play sand,** alone or mixed in. It's too fine, clogs, washes out, and gets
past the underdrain.

### Amount for a 32" tank

- **Sand:** about 550–650 lb per tank = **12–13 bags per tank**, **26 bags for both**
  (about $830)
- **Gravel under the sand:** about 180–200 lb per tank. Reuse the old gravel if it's
  clean. Replace it if it's oily
- **Best check:** before emptying, measure from the hatch rim down to the top of the
  sand, and refill to that same level

Lakos chart for reference, per tank:

| Tank | Sand | Gravel |
|---|---|---|
| 30" | 500 lb | 160 lb |
| 36" | 800 lb | 240 lb |

### Removal

- Lock out the pump and controller, close the valves, bleed the pressure, and drain
- **After 7 months sitting:** expect H₂S, caked sand, slime, and mud balls. Open the top
  hatch and let it vent first. **Use a gas monitor**
- **Vac truck:** 3" hose, switch to a 2" wand for the bottom few inches if needed. Keep
  water in the tank so the sand moves as a slurry
- **Be gentle near the bottom.** The PVC laterals crack easily, and vac truck suction can
  rip them loose
- You can vacuum from the top, but open the side hatch at the end to inspect the laterals
  and get the last layer out
- If the tent wasn't heated over winter, check for freeze cracks
- Treat the old sand and wash water as contaminated waste

### Cleaning

- Rinse the tank down and vacuum it out
- Degrease any oily areas with a **water-based degreaser**. Don't use solvents — they
  damage the PVC and gaskets
- Rinse the laterals with **low pressure only**
- Replace any cracked laterals and any bad hatch gaskets
- **Clean from the hatches only. Don't enter the tank — it's a confined space**

**Manufacturer guidance:** Lakos says to inspect the PVC underdrain before adding media,
and to replace the media if it's disrupted. Flow-Guard, another filter maker, says severe
contamination means replacing all the sand and gravel, and that losing 2–3 inches of media
per tank per year is normal.

### Refill

1. Fill the tank one-third to half with water
2. Add gravel first, then sand, slowly through the top
3. Level the sand and close the hatch
4. Backwash to waste several times until it runs clear before putting it online

---

## 6. Annotated photos

To be uploaded separately:

- `control_panel_explained.jpg` — numbered guide to the panel
- `big_green_valve.jpg` — the big green valves and solenoids on both tanks
- `control_box_wiring_check.jpg` — wiring issues inside the control box
- `1_solenoids_top_view.jpg`, `2_solenoid_label.jpg`, `3_not_a_solenoid.jpg` — where the
  solenoids are
