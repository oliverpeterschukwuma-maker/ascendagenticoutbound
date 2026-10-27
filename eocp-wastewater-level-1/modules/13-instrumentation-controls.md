# Module 13 — Instrumentation, Controls & SCADA

← [Module 12](12-hydraulics.md) · [Course index](../README.md) · Next → [Module 14 — Electrical & Mechanical Basics](14-electrical-mechanical.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **DO** = Dissolved Oxygen · **HMI** = Human-Machine Interface · **HOA** = Hand-Off-Auto (switch) · **H₂S** = hydrogen sulphide · **ISE** = Ion-Selective Electrode · **LDO** = Luminescent Dissolved Oxygen (optical probe) · **LEL** = Lower Explosive Limit · **mA** = milliamps · **mg/L** = milligrams per litre · **MLSS** = Mixed Liquor Suspended Solids · **mV** = millivolts · **NTK** = Need-to-Know Criteria · **NTU** = Nephelometric Turbidity Unit · **ORP** = Oxidation-Reduction Potential · **OSHA** = Occupational Safety and Health Administration (US) · **O₂** = oxygen · **PD** = Positive Displacement · **PID** = Proportional-Integral-Derivative (control) · **PLC** = Programmable Logic Controller · **PV** = Process Variable · **RAS** = Return Activated Sludge · **RTU** = Remote Terminal Unit · **SCADA** = Supervisory Control And Data Acquisition · **SOP** = Standard Operating Procedure · **SP** = Setpoint · **TSS** = Total Suspended Solids · **UV** = Ultraviolet · **UVT** = Ultraviolet Transmittance · **VFD** = Variable Frequency Drive · **WAS** = Waste Activated Sludge · **WPI** = Water Professionals International
<!-- abbr-end -->

**NTK (Need-to-Know Criteria) areas:** Equipment (≈39%) — the 2025 WPI (Water Professionals International) Need-to-Know specifically mentions **online analyzers** and **SCADA/telemetry**. Also Security, Safety & Administration (≈13%) — **SCADA/plant security**.

> **Instruments are the plant's eyes and ears.** Controls are its hands. **SCADA** (Supervisory Control And Data Acquisition) is the brain you look at on a screen. But instruments **can be wrong** — a big part of an operator's job is knowing **when not to trust a reading**.

<!-- videos-start -->
> 🎥 **Watch (optional, helps with harder ideas):** [Introduction to 4-20 mA Signals](https://www.youtube.com/watch?v=qK_8xvI9j9Y) · [4-20mA Current Loop Explained with Animation](https://www.youtube.com/watch?v=sdfQnR19nqs) · [PLC vs SCADA vs HMI vs RTU](https://www.youtube.com/watch?v=4-ZBgLEDB7E) · [How to: Understand the Open Flow Science of Parshall Flumes](https://www.youtube.com/watch?v=ivfN4-_-wnc) · [How to Calibrate pH Sensors with Two Buffer Solutions](https://www.youtube.com/watch?v=wHTM3f-v-9I)
> 
> *Videos were found by search, not watched in full. Many are American — they may use US units and OSHA (Occupational Safety and Health Administration, US) rules. In BC, **WorkSafeBC** rules apply and the exam uses **both metric and US units**. If a link is dead, search YouTube for the title.*
<!-- videos-end -->

---

## 1. What you need to know (checklist)

- [ ] The measurement-and-control chain: **sensor → transmitter → signal → controller (PLC) → final element (valve, VFD (Variable Frequency Drive), pump)**
- [ ] **4–20 mA (milliamps)** signals; what 4 mA and 20 mA mean; what 0 mA means
- [ ] **Flow meters**: Parshall flume, weirs, magnetic, ultrasonic (transit-time, Doppler), differential pressure (recognize); totalizers
- [ ] **Level sensors**: floats, ultrasonic/radar, pressure transducers, bubblers; sludge blanket sensors
- [ ] **Pressure gauges**: Bourdon tube, diaphragm seals, snubbers
- [ ] **pH meters** — calibration with buffers, care of electrodes
- [ ] **DO (Dissolved Oxygen) meters** — membrane vs optical (luminescent); calibration; fouling
- [ ] **ORP** (Oxidation-Reduction Potential) — what it tells you
- [ ] Other **online analyzers**: turbidity/TSS, ammonia, nitrate, chlorine residual, UV transmittance
- [ ] Control types: manual, on/off, automatic (setpoint/feedback), **flow-paced** dosing; **HOA (Hand-Off-Auto, switch) switch**; interlocks
- [ ] **SCADA**, PLC (Programmable Logic Controller), HMI (Human-Machine Interface), RTU (Remote Terminal Unit), telemetry, historian; **alarms** and alarm response
- [ ] **Calibration** (zero and span), verification against lab/portable results
- [ ] Recognizing **instrument failure** and the correct operator response
- [ ] **Security**: physical and cyber security of the plant and SCADA

---

## 2. Plain-English teaching

### 2.1 The measurement and control chain

```
 PROCESS ──► SENSOR/PRIMARY ELEMENT ──► TRANSMITTER ──► SIGNAL (4–20 mA) ──► CONTROLLER (PLC) ──► FINAL ELEMENT
 (water)     (the part touching/       (converts to      (wire / network)     (compares to        (valve, pump,
              seeing the process)       a signal)                               setpoint, decides)  VFD, feeder)
                                                                    │
                                                                    └──► HMI / SCADA screen, alarms, trends, records
```

| Term | Plain meaning | Example |
|---|---|---|
| **Primary element / sensor / probe** | The part that senses the process | DO probe, flume, pressure diaphragm |
| **Transmitter** | Turns the measurement into a standard signal | Converts a level to 4–20 mA |
| **Indicator** | Shows the value | Local display, gauge |
| **Recorder / historian** | Records values over time | Chart recorder; SCADA historian |
| **Totalizer** | Adds up total volume over time | Total m³ today |
| **Controller** | Compares the measurement to a **setpoint** and adjusts output | PLC, PID (Proportional-Integral-Derivative, control) loop |
| **Final control element** | The thing that physically changes the process | Air valve, VFD, chemical pump |
| **Setpoint (SP)** | The target value | DO = 2.0 mg/L (milligrams per litre) |
| **Process variable (PV)** | The actual measured value | DO now = 1.6 mg/L |

### 2.2 4–20 mA signals

Most analog instruments send a **4–20 milliamp** signal:
- **4 mA = 0%** of the instrument's range (the bottom)
- **20 mA = 100%** of range (the top)
- **12 mA = 50%** (halfway)
- **0 mA = something is wrong** — broken wire, failed transmitter, no power. *(This is why the range starts at 4, not 0 — a "live zero" lets you tell "zero reading" from "dead signal".)*

**Example:** a level transmitter ranged 0–5 m sends 12 mA → **2.5 m** (50% of 5 m).
*(Formula: value = (mA − 4) ÷ 16 × range. So 8 mA = 4/16 = 25%.)*

### 2.3 Flow meters

**Open channel (partly full — gravity flow)**
| Meter | How it works | Notes |
|---|---|---|
| **Parshall flume** | Shaped narrowing in a channel; **level at a set point upstream** gives flow | Self-cleaning — great for raw sewage. Keep the throat and level-measuring point clean. Free flow conditions needed (downstream water mustn't back up — "submergence" causes errors) |
| **Weir** (V-notch, rectangular) | Level of water above the weir crest gives flow | Accurate in clean water; solids/algae build up behind/on it — keep crest clean and sharp |
| **Level sensor** (secondary element) | Ultrasonic or bubbler measures the level in the flume/weir | Calibrate level zero carefully |

**Closed pipe (full pipe — pressure flow)**
| Meter | How it works | Notes |
|---|---|---|
| **Magnetic flow meter ("mag meter")** | Liquid moving through a magnetic field creates a small voltage proportional to velocity | **Pipe must be full**, liquid must be **conductive** (wastewater is); **no moving parts, no headloss**, handles solids and sludge. Electrode coating (grease) and poor grounding cause errors. Needs straight pipe runs upstream |
| **Ultrasonic — transit time** | Sound pulses sent with and against flow | Clean liquids |
| **Ultrasonic — Doppler** | Sound reflects off **particles/bubbles** in the flow | **Needs** solids or bubbles (sludge, raw wastewater) |
| **Differential pressure** (venturi, orifice plate) | Narrowing creates a pressure drop proportional to flow | Recognize; venturi has low headloss, orifice higher |
| **Propeller/turbine** | Spinning rotor | Clean water only (rags wrap) |
| **Thermal mass / DP meters on air lines** | Measure **blower air flow** | Aeration control |

### 2.4 Level sensors

| Sensor | How it works | Weak points |
|---|---|---|
| **Float switch** | Floating switch tilts at a set level (on/off) | Tangled cords, grease buildup, sticking; gives **points**, not continuous level |
| **Ultrasonic / radar (non-contact)** | Sends a pulse down; time to echo = distance to surface | **Foam, condensation, spider webs, ice, obstructions in the beam, turbulence** cause false readings |
| **Pressure transducer (submersible)** | Measures water pressure at the bottom → depth (pressure ÷ 9.81 = m) | Grease/ragging over the sensor, damaged vent tube |
| **Bubbler** | Air is bubbled slowly out of a tube at the bottom; the air pressure needed = water depth | **Tube plugging** (reads high), air supply failure (reads low/zero), leaks |
| **Conductance / capacitance probes** | Detect liquid touching electrodes | Coating/fouling |
| **Sludge blanket sensor** | Optical/ultrasonic detection of the blanket | Calibrate against a sludge judge |

### 2.5 Pressure gauges
- **Bourdon tube** gauges: a curved tube straightens slightly as pressure rises, moving the needle. Most common.
- **Diaphragm seal (gauge isolator)**: a flexible diaphragm keeps **sludge, grit or corrosive chemicals** out of the gauge.
- **Snubber / liquid-filled gauge**: dampens **pulsation** (e.g., on PD (Positive Displacement) pumps) so the needle doesn't bounce.
- An isolation valve (gauge cock) lets you remove the gauge. A gauge that doesn't return to **zero** when isolated needs replacement/calibration.

### 2.6 pH meters
- **Glass electrode + reference electrode** (often combined in one probe). Measures hydrogen-ion activity.
- **Calibrate** with **standard buffer solutions** — typically **pH 7 first**, then **pH 4 and/or 10**, choosing buffers that **bracket** the expected sample pH. **[SUPPLEMENTAL]**
- Check the **slope** (meters display it; roughly 95–105% is good) — a low slope means an old or dirty electrode.
- **Rinse** the electrode with distilled/deionized water between solutions; blot (don't wipe hard).
- **Store** wet in **storage solution** (usually KCl) — **never let it dry out**; don't store long-term in distilled water.
- Use **temperature compensation**; **measure immediately** (pH changes after sampling).
- Online pH probes foul (grease, slime) → clean and recalibrate regularly; verify with a lab meter.

### 2.7 DO meters
| Type | How it works | Maintenance |
|---|---|---|
| **Membrane (polarographic/galvanic)** | Oxygen diffuses through a thin membrane to electrodes, creating a current | Replace **membrane and electrolyte**; needs water **flowing** past the membrane; air bubbles under membrane cause errors |
| **Optical / luminescent (LDO)** | A dye glows; oxygen "quenches" the glow — the change = DO | **Less maintenance**; replace sensor cap periodically; very stable |

- **Calibrate** per manufacturer — commonly in **water-saturated air** with correct **temperature and barometric pressure** (or against a Winkler titration). **[SUPPLEMENTAL]**
- **Fouling (biofilm, grease) makes DO read LOW** → the control system adds too much air (wasting energy). Clean probes regularly.
- **Location matters** — a probe in a dead zone or right over a diffuser gives a non-representative reading.
- **Verify** online DO with a calibrated **portable** meter.

### 2.8 ORP (Oxidation-Reduction Potential)
- Measured in **millivolts (mV)** with a platinum (or gold) electrode.
- **Positive (+)** = **oxidizing** conditions (oxygen, chlorine present).
- **Negative (−)** = **reducing** conditions (anoxic/anaerobic, septic, sulphides).
- Uses: confirming **anoxic/anaerobic zones** (Module 7), checking septicity, sometimes **chlorination/dechlorination** control.
- ORP shows **conditions**, not the amount of a specific chemical.

### 2.9 Other online analyzers (recognize their purpose)
| Analyzer | Measures | Typical location |
|---|---|---|
| **Turbidity** (NTU) | Cloudiness | Secondary/final effluent, filters |
| **TSS (Total Suspended Solids) / MLSS (optical)** | Solids concentration | Aeration tank, RAS (Return Activated Sludge), WAS (Waste Activated Sludge) |
| **Ammonia, nitrate (ISE (Ion-Selective Electrode) or colorimetric)** | Nutrients | Aeration, effluent |
| **Chlorine residual** (amperometric or colorimetric) | Free/total chlorine | After contact chamber; after dechlorination |
| **UVT (UV transmittance)** | How easily UV passes through water | Ahead of UV system |
| **Fixed gas detectors** | H₂S (hydrogen sulphide), methane (LEL), O₂, chlorine | Headworks, wet wells, digesters, chlorine rooms |
| **Conductivity** | Dissolved salts | Influent (industrial or seawater intrusion) |

**All online analyzers need:** regular **cleaning**, **calibration**, and **verification against lab or portable results**. Never run the plant blindly on an unverified analyzer.

### 2.10 How control works

**Manual control:** operator sets the valve/pump speed by hand.

**On/off control:** equipment turns on at one level and off at another (wet-well floats, timers).

**Automatic (closed-loop/feedback) control:**
```
   SETPOINT (DO 2.0) ──►┐
                         CONTROLLER ──► air valve opens more ──► DO rises
   MEASURED DO (1.6) ───►┘     ▲                                      │
                               └──────────── DO probe ◄──────────────┘
```
The controller keeps comparing the **measured value** to the **setpoint** and adjusts. Many loops use **PID** control (Proportional–Integral–Derivative) — recognize the name only.

**Flow-paced (feed-forward) control:** chemical feed rate changes **in proportion to flow** (double the flow → double the chemical feed) to hold a constant **dose**. Common for chlorine, hypochlorite, alum.
**Compound loop:** flow-paced **plus** trim from a residual analyzer (e.g., chlorine residual). Recognize.

**HOA switch (Hand–Off–Auto)**
| Position | Meaning |
|---|---|
| **Hand** | Runs **manually**, ignoring automatic controls (some protections like level cut-outs may be **bypassed** — a pump in Hand can **run a wet well dry**) |
| **Off** | Stopped — but **"Off" is NOT lockout** (it's a control device; someone or something can switch it back) |
| **Auto** | Controlled automatically by floats/PLC/SCADA |

**Interlocks and permissives:** safety logic that prevents unsafe operation (e.g., pump can't start on low wet-well level; chemical pump stops if the main flow stops; blower can't start with discharge valve closed).

### 2.11 SCADA

**SCADA = Supervisory Control And Data Acquisition** — the computer system that lets operators **monitor and control** the plant and remote sites.

| Part | What it is |
|---|---|
| **PLC** (Programmable Logic Controller) | Rugged industrial computer that runs equipment automatically **at the site** — keeps running even if SCADA screens go down |
| **RTU** (Remote Terminal Unit) | Similar to a PLC, at remote sites (lift stations) |
| **HMI** (Human-Machine Interface) | The **screens** operators use — graphics, values, buttons |
| **Telemetry** | Communication over distance (radio, cellular, fibre, phone line) between remote sites and the plant |
| **Historian** | Database that stores data for **trends** and reports |
| **Alarms** | Notify operators of abnormal conditions; after-hours **call-out/autodialer** to the on-call operator |

**Alarm response (good practice) [GENERAL]:**
1. **Acknowledge** the alarm.
2. **Verify** — is it real? (Check the trend, a second instrument, go look.)
3. **Respond** per SOP (Standard Operating Procedure) — protect people first, then the process and equipment.
4. **Record** what happened and what you did.
5. **Never permanently silence, bypass or disable** an alarm instead of fixing the cause (without authorization and a documented reason).

### 2.12 Calibration

**Calibration** = comparing an instrument against a known **standard** and adjusting it to read correctly.
- **Zero** = adjust the bottom of the range (e.g., level reads 0.00 m when empty; a gauge reads 0 when isolated).
- **Span** = adjust the top of the range (e.g., reads correctly at full scale / with a high standard).
- Follow the manufacturer's procedure and **schedule**; record "**as found**" and "**as left**" values, date, and who did it.
- **Verification** (a quick check against a portable meter or lab result) between calibrations.

### 2.13 Recognizing instrument failure

| Symptom | Possible problem |
|---|---|
| Reading **flat-lined** (doesn't change at all) | Frozen transmitter, failed signal, stuck sensor, communications lost |
| Reading at **0% or below 4 mA** | Broken wire, power loss, failed transmitter |
| Reading pegged at **100%** | Shorted signal, sensor failure, plugged bubbler |
| **Erratic / jumping** readings | Air bubbles, turbulence, loose wiring, electrical noise, foam (ultrasonic) |
| **Slow drift** | Fouling, aging electrode, calibration drift |
| Disagrees with **lab/portable/visual** | Fouling, calibration error, wrong location |
| Value **physically impossible** (DO 25 mg/L, pH 15, flow at 3 a.m. higher than peak) | Instrument fault |

**Operator response to a suspect instrument:**
1. **Don't make big process changes based on one strange reading.**
2. **Verify** with an independent measurement (portable meter, lab test, visual check, a second instrument).
3. If the instrument is controlling equipment, consider switching that loop to **manual** at a safe setting (per SOP).
4. **Clean/recalibrate** or call instrumentation staff.
5. **Notify** and **record** (it may affect reported data — flag it).

### 2.14 Security (part of the "Security, Safety & Administrative Procedures" content area)

**Physical security:** locked gates, doors and chemical rooms; fences; lighting; intrusion alarms at plants and lift stations; check for signs of tampering on rounds; control keys; visitor sign-in; report suspicious activity.
**Cybersecurity (SCADA):** use your own login and **never share passwords**; log off/lock screens; don't connect personal USB drives or devices to SCADA computers; follow remote-access rules; report unusual SCADA behaviour (setpoints changing on their own, unknown logins).
**Why it matters:** treatment plants are critical infrastructure — tampering could cause spills, overflows, or chemical overdoses.

---

## 3. Operator-level understanding

- **Trust, but verify.** Compare online analyzers with lab results on a schedule; trend the difference.
- **Know your normal ranges** so a bad reading stands out (e.g., overnight influent flow, typical DO).
- **A bad DO probe can waste thousands of dollars of electricity** (reading low → blowers run harder).
- **Flow meter errors affect everything**: loadings, chemical doses (flow-paced), reported data. Keep flumes clean, check level zero.
- **Know what each HOA position does** at your plant and **never use "Off" as lockout**.
- **Remote sites (lift stations)** rely on telemetry — test alarms and call-outs regularly.

---

## 4. MUST MEMORIZE

1. Chain: **sensor → transmitter → signal → controller → final element**.
2. **4 mA = 0%, 20 mA = 100%, 12 mA = 50%; 0 mA = fault.**
3. **Parshall flume/weir + level sensor** = open-channel flow. **Mag meter** = full pipe, conductive liquid, no moving parts, no headloss.
4. **Doppler ultrasonic needs particles/bubbles**; transit-time for clean liquids.
5. Ultrasonic level errors: **foam, condensation, obstructions, turbulence**. Bubbler: **plugged tube reads high**.
6. **pH:** calibrate with buffers (**7 then 4/10**, bracketing); **store wet in storage solution**; measure immediately.
7. **DO:** membrane (replace membrane/electrolyte; needs flow) vs **optical/luminescent (low maintenance)**; **fouled probe reads low**.
8. **ORP:** **mV**; **+ = oxidizing**, **− = reducing (anoxic/anaerobic)**.
9. **HOA: Hand bypasses auto controls; Off ≠ lockout.**
10. **SCADA** = supervisory control and data acquisition; **PLC** runs local logic; **HMI** = screens; **telemetry** = long-distance communication.
11. Alarm response: **acknowledge → verify → respond → record**.
12. Calibration: **zero and span**; record as-found/as-left.
13. Suspect instrument → **verify independently before changing the process**.
14. **Flow-paced** dosing = feed changes in proportion to flow.
15. Security: lock up, check for tampering, **never share SCADA passwords**, report suspicious activity.

---

## 5. Understand vs memorize vs recognize

| UNDERSTAND | MEMORIZE | RECOGNIZE |
|---|---|---|
| Why 4–20 mA starts at 4 | mA ↔ % | PID terms |
| Why a fouled DO probe wastes energy | Meter types & limits | Venturi, orifice plates, thermal mass meters |
| Why to verify before acting | pH calibration & storage | Flume submergence |
| How feedback control works | HOA meanings | RTU vs PLC differences |
| Why "Off" isn't lockout | Alarm response steps | Historian, cybersecurity terms |

---

## 6. Common exam traps

| Trap | Truth |
|---|---|
| "4 mA means the instrument has failed" | 4 mA = **0% (valid)**. **0 mA** = failure. |
| "Mag meters work in partly full pipes" | Pipe must be **full**. |
| "Doppler meters work best in clean water" | Doppler needs **particles/bubbles**. |
| "Store pH probes dry" | Keep **wet** in storage solution. |
| "A fouled DO probe reads high" | It usually reads **low** → over-aeration. |
| "Change the process immediately when an analyzer alarms" | **Verify** first. |
| "Putting the HOA in Off is the same as lockout" | **No** — lock out at the disconnect. |
| "A pump in Hand still has all its protections" | Hand may **bypass** level controls. |

---

## 7. Practice questions

1. A level transmitter with a range of 0–4 m is sending a 12 mA signal. The level is:
   A. 1 m
   B. 2 m
   C. 3 m
   D. 4 m

2. An instrument signal reads 0 mA. This most likely indicates:
   A. The process value is at 0%
   B. A broken wire, failed transmitter or loss of power
   C. The process value is at 50%
   D. Normal operation

3. A magnetic flow meter requires:
   A. A partly full pipe and non-conductive liquid
   B. A full pipe and a conductive liquid
   C. Clean water with no solids
   D. Moving parts that must be lubricated

4. An ultrasonic level sensor over a wet well gives erratic, too-high level readings when foam builds up. The cause is most likely:
   A. The foam is reflecting the signal before it reaches the liquid surface
   B. The pH is too high
   C. The pump is cavitating
   D. The 4–20 mA signal is too strong

5. A bubbler level system suddenly reads much higher than the actual level. A likely cause is:
   A. The bubbler tube is partly plugged
   B. The air supply has failed completely
   C. The level is actually low
   D. The water temperature increased

6. When calibrating a pH meter for samples expected to be around pH 8, the operator should normally use:
   A. Only a pH 4 buffer
   B. pH 7 and pH 10 buffers
   C. Distilled water only
   D. pH 1 and pH 14 solutions

7. pH electrodes should be stored:
   A. Dry, in a drawer
   B. In storage solution, as recommended by the manufacturer
   C. In wastewater
   D. In bleach

8. An online DO probe in the aeration basin reads 0.5 mg/L while a calibrated portable meter reads 2.5 mg/L. The blowers are at maximum. The most likely problem is:
   A. The basin is overloaded
   B. The online probe is fouled or out of calibration
   C. The portable meter is reading low
   D. Too much air

9. A negative ORP reading (for example, −250 mV) in a tank indicates:
   A. Strong oxidizing conditions with chlorine present
   B. Reducing conditions (anaerobic)
   C. High DO
   D. A broken pH probe

10. A pump's HOA switch is placed in "Hand". This means:
    A. The pump is locked out
    B. The pump runs manually, and automatic level controls may be bypassed
    C. The pump runs only on level control
    D. The pump will not run

11. Which is the correct first response when a SCADA screen shows the influent flow has suddenly dropped to zero during a busy morning?
    A. Shut down the aeration blowers
    B. Verify the flow by checking the flume/channel and other indicators before changing the process
    C. Increase chlorine dose
    D. Ignore it

12. A chemical feed pump that automatically increases its feed rate when plant flow increases is using:
    A. Manual control
    B. Flow-paced (proportional) control
    C. Time-of-day control
    D. On/off float control

13. Which instrument is best suited for measuring the flow of raw wastewater in an open channel?
    A. Parshall flume with an ultrasonic level sensor
    B. Turbine meter
    C. Rotameter
    D. pH meter

14. Which action is a good SCADA security practice?
    A. Sharing one login among all operators
    B. Connecting personal USB drives to the SCADA computer
    C. Using your own login and never sharing passwords
    D. Leaving the HMI logged in and unattended

15. Calibration that adjusts the bottom of an instrument's range is called the:
    A. Span adjustment
    B. Zero adjustment
    C. Setpoint
    D. Totalizer

---

## 8. Answers & explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **B** | 12 mA = 50% of 4 m = **2 m**. |
| 2 | **B** | 0 mA is outside the 4–20 mA range → fault. |
| 3 | **B** | Full pipe, conductive liquid. |
| 4 | **A** | Foam reflects the ultrasonic pulse. |
| 5 | **A** | Plugged tube → higher back-pressure → reads high. B would read low/zero. |
| 6 | **B** | Bracket the expected value: 7 and 10. |
| 7 | **B** | Wet, in storage solution. |
| 8 | **B** | Disagreement with a calibrated portable + blowers maxed = bad online probe (wasting energy). |
| 9 | **B** | Negative ORP = reducing/anaerobic. |
| 10 | **B** | Hand runs manually; may bypass level controls. |
| 11 | **B** | Verify before acting — likely instrument or communication problem. |
| 12 | **B** | Flow-paced. |
| 13 | **A** | Flume + level sensor for open-channel raw wastewater. |
| 14 | **C** | Individual logins, protect credentials. |
| 15 | **B** | Zero = bottom; span = top. |
