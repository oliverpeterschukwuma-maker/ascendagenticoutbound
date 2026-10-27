# Module 14 — Electrical & Mechanical Basics

← [Module 13](13-instrumentation-controls.md) · [Course index](../README.md) · Next → [Module 15 — Laboratory & Sampling](15-laboratory-sampling.md)

**NTK area:** Equipment Evaluation, Maintenance and/or Operation (≈39%) — including **auxiliary (standby) power** and **ancillary equipment**, which are named in the 2025 Need-to-Know. Level I operators **are not electricians** — you need to understand the basics, recognize problems, operate safely, and know when to call a qualified person.

---

## 1. What you need to know (checklist)

**Electrical**
- [ ] **Voltage, current, resistance, power** — plain meaning and units
- [ ] **Ohm's law** (V = I × R) and power (P = V × I) — basic use
- [ ] AC vs DC; single-phase vs three-phase (recognize)
- [ ] **Motors**: nameplate information, starters, VFDs, why motors overheat, single-phasing
- [ ] **Fuses, circuit breakers, overload relays, GFCI** — what each protects
- [ ] **Grounding** — why it matters
- [ ] **Electrical hazards**: shock, arc flash, burns; safe practices; testing for absence of voltage
- [ ] **Standby generators / auxiliary power**: automatic transfer switch, testing, fuel, UPS

**Mechanical**
- [ ] **Lubrication**: oil vs grease, right type/amount/interval, over-greasing
- [ ] Bearings, couplings and **alignment**, belts, chains, gearboxes
- [ ] **Blowers** and compressors (basic)
- [ ] Causes of **vibration, heat and noise**
- [ ] **Preventive, predictive, corrective (and emergency) maintenance**; work orders and records

---

## 2. Plain-English teaching — ELECTRICAL

### 2.1 The water-pipe analogy

Electricity is easiest to understand by comparing it to water in a pipe:

| Electrical term | Symbol | Unit | Water analogy | Plain meaning |
|---|---|---|---|---|
| **Voltage** | V (or E) | **Volts (V)** | **Water pressure** | The "push" that moves electricity |
| **Current** | I | **Amperes (A, amps)** | **Flow rate** | How much electricity is flowing |
| **Resistance** | R | **Ohms (Ω)** | **Pipe narrowness / friction** | What resists the flow |
| **Power** | P | **Watts (W), kilowatts (kW)** | Work done by the flowing water | Rate of using energy |
| **Energy** | — | **kilowatt-hours (kWh)** | Total water used over time | What you pay for on the power bill |

### 2.2 Ohm's law and power — the two formulas

```
OHM'S LAW:          V  =  I  ×  R          (volts = amps × ohms)
                    I  =  V  ÷  R
                    R  =  V  ÷  I

POWER (simple):     P  =  V  ×  I          (watts = volts × amps)
```
**Triangle for Ohm's law:**
```
        ┌───────┐
        │   V   │
        ├───┬───┤
        │ I │ R │
        └───┴───┘
```

**Very easy example:** A 120 V circuit has a 60 Ω heater. Current I = V ÷ R = 120 ÷ 60 = **2 A**. Power P = V × I = 120 × 2 = **240 W**.

**Level I example:** A 240 V single-phase motor draws 10 A. Power ≈ 240 × 10 = **2,400 W = 2.4 kW** (ignoring power factor).

**Power conversions (memorize):** **1 hp = 0.746 kW** · **1 kW = 1.34 hp**.

**Energy cost:** kWh = kW × hours. A 15 kW blower running 24 h uses 15 × 24 = **360 kWh/day**. At $0.10/kWh → **$36/day**.

*(Three-phase power = V × I × 1.732 × power factor — recognize only.)*

### 2.3 AC, DC, single-phase, three-phase (recognize)
- **DC (direct current)** — flows one way: batteries, many control and instrument circuits (e.g., 24 V DC).
- **AC (alternating current)** — reverses direction many times per second (60 Hz in Canada): building and plant power.
- **Single-phase** — small loads: lights, receptacles, small motors (120 V / 240 V).
- **Three-phase** — larger motors (pumps, blowers): common Canadian voltages include **208 V, 480 V and 600 V**. Three-phase motors are efficient and self-starting.
- **Wrong rotation** in a three-phase motor is corrected by an electrician **swapping any two of the three leads**.

### 2.4 Motors

**The motor nameplate** tells you (learn to read it):
| Item | Meaning |
|---|---|
| Voltage | What voltage the motor needs |
| **FLA (Full-Load Amps)** | Normal maximum current at full load — compare to actual amps |
| hp or kW | Rated power |
| RPM | Speed |
| Phase, Hz | e.g., 3-phase, 60 Hz |
| **Service factor (SF)** | How much over rated load it can handle briefly (e.g., 1.15) |
| Enclosure | **TEFC** (Totally Enclosed Fan-Cooled), **ODP** (Open Drip-Proof), **explosion-proof** (for hazardous locations such as some headworks or digester areas) |
| Insulation class | Temperature rating of the windings |

**Starting motors**
| Method | Notes |
|---|---|
| **Across-the-line (direct-on-line) starter** | Full voltage at once — big inrush current (several times FLA) |
| **Soft starter** | Ramps voltage up gently — less mechanical shock and water hammer |
| **VFD (Variable Frequency Drive)** | Changes the **frequency** to change **motor speed** — saves energy, gentle starts, matches pump/blower output to demand |

**Why motors overheat**
- **Overload** (pump clogged, binding, running too far out on its curve)
- **Low or unbalanced voltage**
- **Single-phasing** — loss of one of the three phases (blown fuse, loose connection) → motor draws high current on the remaining phases and burns out quickly
- **Too many starts per hour** (short cycling)
- **Blocked cooling** (dirty fins, blocked fan cover, hot room)
- **Bearing failure** (friction)

**A quick check:** compare **running amps** to the nameplate **FLA**. Consistently over FLA = overloaded.

### 2.5 Protection devices — who protects what

| Device | Protects against | How it works | Operator notes |
|---|---|---|---|
| **Fuse** | **Short circuits / large over-currents** (protects wiring and equipment) | A metal strip **melts** and opens the circuit | Must be **replaced** with the **same type and rating** — **never a larger size** and **never a bypass** (e.g., a wire or coin) |
| **Circuit breaker** | Short circuits and over-currents | A switch that **trips** open | Can be **reset** — but **find the cause first**. Repeated tripping = a real problem; don't keep resetting |
| **Overload relay (motor overload, "heaters")** | **Motor overheating** from **sustained moderate over-current** | Heat-sensitive or electronic element opens the starter's control circuit | Usually **reset** after the motor cools; **investigate why** (clog, voltage, bearings) before restarting; never bypass |
| **GFCI (Ground-Fault Circuit Interrupter)** | **People** from electric shock | Detects current leaking to ground (e.g., through a person) and trips almost instantly | Required for portable tools and receptacles in **wet areas**; **test monthly** with the test button |
| **Thermal switches in motor windings** | Motor overheating (e.g., submersibles) | Opens when windings get too hot | |
| **Moisture/seal-leak sensors** | Water entering submersible motors | Alarm/trip | |

**Memory trick:** **Fuse & breaker = protect the WIRES. Overload = protects the MOTOR. GFCI = protects the PERSON.**

### 2.6 Grounding

**Grounding** connects the metal frames of equipment to the earth (ground) with a wire so that if a live wire touches the frame, the fault current flows safely to ground and **trips the breaker** — instead of flowing through **you**.
- **Never remove the ground pin** from a plug or use equipment with a damaged ground.
- Bonding/grounding also matters for **flowmeters** (mag meters) and for preventing **static** sparks (fuel, digester gas areas).

### 2.7 Electrical hazards and safe practice

| Hazard | Notes |
|---|---|
| **Electric shock** | Current through the body; **as little as a fraction of an amp** across the chest can be fatal. Wet conditions make it far worse |
| **Arc flash** | Explosive release of energy (very high heat, light, pressure) when a fault occurs — e.g., opening energized panels, racking breakers. Causes severe burns |
| **Burns, fire** | Overheated connections, overloaded cords |

**Safe practices [GENERAL / BC-LAW principles]:**
- Only **qualified/authorized** persons work on electrical equipment. Operators typically operate disconnects and reset approved devices — **not** repair wiring.
- **Treat every circuit as live** until it has been **locked out and tested**.
- **Test for absence of voltage** with an approved tester: **test the tester on a known live source, test the circuit, test the tester again** ("**live–dead–live**").
- Keep panel doors **closed**, and keep the space in front of panels **clear**.
- **Use GFCI** protection outdoors and in wet areas; inspect cords.
- **Never** stand in water while operating electrical equipment.
- **Report** burning smells, buzzing, hot panels, damaged cords.

### 2.8 Auxiliary (standby) power

Power failures stop pumps and blowers → **overflows**, **septic** conditions, **loss of disinfection**. So plants and lift stations have backup power.

| Equipment | Purpose | Operator duties |
|---|---|---|
| **Standby generator** (diesel, natural gas, propane) | Runs critical loads during an outage | **Exercise regularly** — commonly **weekly**, and **under load** periodically (per manufacturer/SOP); check **fuel level and quality**, **oil, coolant**, **battery** (and charger), **block heater** (cold weather), belts, exhaust leaks; keep a log |
| **Automatic Transfer Switch (ATS)** | Senses power loss, starts the generator, and switches loads to it; switches back when utility power returns | Test transfer during exercises |
| **Portable generator** + quick-connect | Backup for remote lift stations | Keep fuelled and tested; know how to connect |
| **UPS (Uninterruptible Power Supply)** | Battery backup for **PLCs, SCADA, alarms, instruments** — keeps them running during the gap before the generator starts | Test and replace batteries per schedule |
| **Dual power feeds** | Two utility supplies | Recognize |

**Safety:** generator **exhaust contains carbon monoxide** — never run in enclosed spaces without proper exhaust; refuel only when cool/off; hearing protection.

---

## 2B. Plain-English teaching — MECHANICAL

### 2.9 Lubrication

**Lubrication** puts a film of oil or grease between moving parts to **reduce friction, heat and wear**, and to keep out dirt and moisture.

| | **Oil** | **Grease** |
|---|---|---|
| What it is | Liquid lubricant | Oil thickened with a "soap" |
| Used in | Gearboxes, some bearings, compressors | Most rolling bearings (pumps, motors) |
| Checks | **Oil level** (sight glass), colour/milky (water), metal particles; change on schedule | Amount and interval per manufacturer |

**The 5 "rights" of lubrication:** the **right lubricant**, in the **right amount**, at the **right place**, at the **right time (interval)**, using the **right method** (clean fittings, clean grease gun). **[GENERAL]**

**Over-greasing** is a very common mistake: too much grease → the bearing **churns** the grease → **overheats**, can **blow out seals**. Follow the manufacturer's amount; open the relief/drain plug if specified so excess can escape.

**Don't mix** incompatible greases or oils.

### 2.10 Bearings, couplings, alignment

- **Bearings** support rotating shafts. Signs of failure: **noise (grinding, squealing), heat, vibration**.
- **Couplings** connect the motor shaft to the pump/blower shaft. Flexible couplings tolerate tiny misalignment — **not** large misalignment.
- **Alignment** (getting the two shafts perfectly in line) is checked with a straightedge, **dial indicators** or **laser alignment tools**. **Misalignment = vibration + premature bearing, seal and coupling failure.** Re-check alignment after any pump or motor work.

### 2.11 Belts, chains and gearboxes

| Component | Checks |
|---|---|
| **V-belts** | **Correct tension** (not too tight → bearing load; not too loose → slipping, squealing, heat), **sheave alignment**, cracks/glazing; replace matched sets; **guards in place** |
| **Chains & sprockets** (clarifier collectors, conveyors) | Tension/slack, lubrication, wear, broken links, **shear pins** (designed to break to protect the drive if jammed) |
| **Gearboxes / speed reducers** | **Oil level** and condition, temperature, noise, leaks, breather vent clean |

### 2.12 Blowers and compressors

- **Blowers** supply low-pressure air to aeration diffusers, grit chambers, channels. Types: **positive displacement (rotary lobe)** and **centrifugal** (single-stage/multistage, turbo). **[SUPPLEMENTAL]**
- Checks: **inlet filters** (dirty → less air, more power), discharge pressure (**rising pressure → fouled diffusers** or closed valves), temperature, oil levels, belts, vibration, noise; **pressure relief valves** on PD blowers; **hearing protection**.
- **Compressors** supply higher-pressure air for tools, instruments, pneumatic valves — drain **condensate** (water) from receivers regularly; check pressure relief valves.

### 2.13 Vibration, heat and noise — your senses as tools

| Sign | Common causes |
|---|---|
| **Vibration** | Misalignment, unbalance (clogged/damaged impeller), worn bearings, loose mounting bolts, bent shaft, cavitation, resonance |
| **Heat** | Lubrication problems (too much/too little), overload, misalignment, worn bearings, blocked cooling |
| **Noise** | Bearings (grinding/squeal), cavitation (gravel), belts (squeal), gears (whine/knock), loose parts (rattle) |

**Tools:** infrared thermometer / thermal camera, vibration pen/analyzer, stethoscope. **Record readings** so you can see **trends**.

### 2.14 Types of maintenance

| Type | Meaning | Example |
|---|---|---|
| **Preventive (PM)** | **Scheduled** tasks done **before** failure, based on time or run-hours | Grease bearings every 500 h; change gearbox oil yearly |
| **Predictive / condition-based** | Measure condition and fix when readings show a problem developing | Vibration analysis, oil analysis, thermography |
| **Corrective** | **Repair after** something breaks or is found defective | Replace a failed seal |
| **Emergency** | Urgent corrective work to protect people, environment, or critical equipment | Repair a failed lift-station pump during a storm |

**Good maintenance programs** use **work orders**, a **CMMS** (Computerized Maintenance Management System) or card system, **equipment history records**, **manufacturers' O&M manuals**, **spare parts inventory**, and **run-hour tracking**. Good PM **reduces** corrective and emergency work.

---

## 3. Operator-level understanding

- **Your daily rounds are the plant's best predictive maintenance.** Look, listen, feel (carefully, with the back of the hand near — not on — hot or moving parts), smell. Write it down.
- **When a motor trips:** don't just reset it. Ask *why* — clog? low voltage? bearing? Check, then reset once. If it trips again, **lock out and call** the electrician/supervisor.
- **Never replace a fuse with a bigger one** or bypass an overload "to get it running".
- **Test the generator like you'll need it tonight** — because one day you will.
- **Keep guards on.** If a guard must be removed for maintenance, the equipment is **locked out**.

---

## 4. MUST MEMORIZE

1. **Voltage = push (V); current = flow (A); resistance = opposition (Ω); power = rate of work (W/kW).**
2. **Ohm's law: V = I × R.** **Power: P = V × I.**
3. **1 hp = 0.746 kW**; **kWh = kW × hours**.
4. **Fuses/breakers protect wiring** (short circuits). **Overloads protect motors** (sustained over-current). **GFCI protects people**.
5. **Never oversize a fuse or bypass protection.** Find the cause before resetting.
6. **Grounding** gives fault current a safe path and trips protection.
7. **Single-phasing** burns out three-phase motors.
8. **VFD changes motor speed** by changing frequency.
9. **Test for absence of voltage: live–dead–live.**
10. **Arc flash** = explosive electrical fault — panels closed, qualified people only.
11. Standby generators: **exercise regularly (weekly), test under load**, check fuel, oil, coolant, battery; **ATS** switches loads; **UPS** keeps PLC/SCADA alive.
12. **Over-greasing causes overheating.** Right lubricant, amount, place, time, method.
13. **Misalignment → vibration, bearing/seal failure.**
14. **Belts:** correct tension and alignment; guards on.
15. **Shear pins** protect drives from jams.
16. Maintenance types: **preventive, predictive, corrective, emergency**.

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Water analogy for V/I/R | Ohm's law, P = VI | 3-phase power formula, power factor |
| Fuse vs overload vs GFCI | hp ↔ kW | Insulation class, megger testing |
| Why single-phasing burns motors | Live–dead–live | Arc-flash boundaries, CSA Z462 |
| Why over-greasing harms bearings | Generator checks | Soft starter vs VFD details |
| Why PM reduces breakdowns | Maintenance types | Laser alignment, thermography |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "Overloads protect people" | Overloads protect **motors**. **GFCIs** protect people. |
| "If a fuse keeps blowing, install a bigger one" | **Never** — find the fault. |
| "A breaker that trips can be reset over and over" | Repeated trips = a real problem → investigate. |
| "More grease = better" | Over-greasing **overheats** bearings. |
| "Turning a motor control to Off makes it safe to work on" | Must **lock out** and **test** for absence of voltage. |
| "Generators only need testing after an outage" | **Exercise regularly** under load. |
| "Voltage is the flow of electricity" | Voltage is the **push**; current is the **flow**. |

---

## 7. Practice questions

1. In the water-pipe analogy, electrical **current** is most like:
   A. Water pressure
   B. Water flow rate
   C. Pipe size
   D. Water temperature

2. A circuit has 240 volts and 20 ohms resistance. What is the current?
   A. 4.8 A
   B. 12 A
   C. 220 A
   D. 4,800 A

3. A single-phase heater draws 15 A at 120 V. Its power is approximately:
   A. 8 W
   B. 135 W
   C. 1,800 W
   D. 18,000 W

4. A 20 hp motor is equal to approximately:
   A. 2.7 kW
   B. 14.9 kW
   C. 26.8 kW
   D. 200 kW

5. Which device is specifically designed to protect PEOPLE from electric shock?
   A. Overload relay
   B. Fuse
   C. GFCI
   D. Motor starter

6. A motor's overload relay has tripped. Before resetting it, the operator should:
   A. Install a larger overload heater
   B. Look for the cause (clogged pump, low voltage, bearing problem) and let it cool
   C. Bypass the overload
   D. Reset it repeatedly until the motor runs

7. A three-phase motor loses one phase while running. This condition is called:
   A. Grounding
   B. Single-phasing, which can quickly overheat and damage the motor
   C. Short cycling
   D. Cavitation

8. The purpose of equipment grounding is to:
   A. Increase motor speed
   B. Provide a safe path for fault current so protective devices trip
   C. Reduce the power bill
   D. Measure voltage

9. When testing a circuit for absence of voltage, the operator should:
   A. Test the circuit once
   B. Test the tester on a known live source, test the circuit, then test the tester again
   C. Touch the wire with the back of the hand
   D. Rely on the panel indicator light

10. A standby generator should be:
    A. Tested only when the power fails
    B. Exercised on a regular schedule, including periodically under load
    C. Kept with an empty fuel tank to avoid fuel aging
    D. Disconnected from the transfer switch

11. A VFD (variable frequency drive) is used to:
    A. Protect people from shock
    B. Change motor speed
    C. Measure flow
    D. Disinfect effluent

12. A pump bearing runs hot right after greasing. The most likely cause is:
    A. Under-lubrication
    B. Over-greasing
    C. Correct lubrication
    D. Low flow

13. Which is an example of PREVENTIVE maintenance?
    A. Replacing a pump after it fails
    B. Changing gearbox oil on a scheduled interval
    C. Emergency repair during a storm
    D. Calling an electrician after a breaker trips

14. A clarifier drive chain is protected from damage during a jam by a:
    A. Fuse
    B. Shear pin
    C. GFCI
    D. Check valve

15. A blower's discharge pressure has gradually increased over several months while airflow has dropped. A likely cause is:
    A. Fouled or clogged diffusers
    B. A clean inlet filter
    C. Lower water level in the tank
    D. New diffusers

16. A V-belt drive is squealing on start-up. The most likely cause is:
    A. Belt too loose (slipping)
    B. Belt guard installed
    C. Correct tension
    D. New bearings

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | Current = flow. Voltage = pressure. |
| 2 | **B** | I = V ÷ R = 240 ÷ 20 = **12 A**. |
| 3 | **C** | P = 120 × 15 = **1,800 W**. |
| 4 | **B** | 20 × 0.746 = **14.9 kW**. C wrongly multiplied by 1.34. |
| 5 | **C** | GFCI. |
| 6 | **B** | Investigate the cause; never bypass or upsize. |
| 7 | **B** | Single-phasing. |
| 8 | **B** | Safe fault path. |
| 9 | **B** | Live–dead–live. |
| 10 | **B** | Regular exercise under load. |
| 11 | **B** | Speed control. |
| 12 | **B** | Over-greasing. |
| 13 | **B** | Scheduled = preventive. |
| 14 | **B** | Shear pin. |
| 15 | **A** | Fouled diffusers raise back-pressure, reducing airflow. |
| 16 | **A** | Loose belts slip and squeal. |
