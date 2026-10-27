# Formula & Conversion Study Sheet (Level I)

← [Course index](../README.md)

<!-- abbr-start -->
> 🔤 **Abbreviations in this file:** **bhp** = brake horsepower · **BOD** = Biochemical Oxygen Demand · **cfs** = cubic feet per second · **CT** = Concentration × Time · **DT** = Detention Time · **EOCP** = Environmental Operators Certification Program · **F/M** = Food-to-Microorganism ratio · **gpd** = gallons per day · **gpm** = gallons per minute · **hp** = horsepower · **kPa** = kilopascal · **kW** = kilowatt · **kWh** = kilowatt-hour · **L/s** = litres per second · **MCRT** = Mean Cell Residence Time · **MG** = million gallons · **mg/L** = milligrams per litre · **MGD** = Million Gallons per Day · **mhp** = motor horsepower · **ML** = megalitre (1,000 m³) · **mL** = millilitre · **MLSS** = Mixed Liquor Suspended Solids · **MLVSS** = Mixed Liquor Volatile Suspended Solids · **m³/d** = cubic metres per day · **m³/m²·d** = cubic metres per square metre per day · **ppm** = parts per million · **psi** = pounds per square inch · **RAS** = Return Activated Sludge · **SG** = Specific Gravity · **SRT** = Solids Retention Time · **SSV₃₀** = Settled Sludge Volume after 30 minutes · **SVI** = Sludge Volume Index · **TSS** = Total Suspended Solids · **VSS** = Volatile Suspended Solids · **WAS** = Waste Activated Sludge · **whp** = water horsepower · **WPI** = Water Professionals International
<!-- abbr-end -->

> **This is a study version, not the official exam sheet.** At the exam you receive the **WPI (Water Professionals International) Formula/Conversion Table** (revised for the 2025 exams). Download the official sheet (see [SOURCES-TO-GET.md](../SOURCES-TO-GET.md)) and compare it line by line with this page. If the official sheet writes a formula differently, **practise with the official version**.
> **π = 3.14** on EOCP (Environmental Operators Certification Program) exams.

---

## Geometry
| Find | Formula |
|---|---|
| Area — rectangle | L × W |
| Area — circle | 0.785 × D²  (= π × r²) |
| Area — triangle | 0.5 × base × height |
| Circumference | π × D = 3.14 × D |
| Volume — rectangular tank | L × W × D(depth) |
| Volume — cylinder | 0.785 × D² × depth |
| Volume — cone | (1/3) × 0.785 × D² × height |
| Volume — trough/trapezoid channel (recognize) | ((top width + bottom width) ÷ 2) × depth × length |

## Flow, velocity, time
| Find | Formula |
|---|---|
| Flow | Q = A × V |
| Velocity | V = Q ÷ A  ·  V = distance ÷ time |
| Detention time | DT = Volume ÷ Flow |
| Fill/empty time | Time = Volume ÷ Flow |
| Flow from level change | (L × W × level change) ÷ time |
| Pump rate (with inflow) | (volume drawn down ÷ time) + inflow |

## Loading rates
| Find | Formula | Units |
|---|---|---|
| Surface overflow rate | Flow ÷ surface area | m³/m²·d (cubic metres per square metre per day) · gpd/ft² |
| Weir overflow rate | Flow ÷ weir length | m³/m·d · gpd/ft |
| Hydraulic loading rate | Flow ÷ area | m³/m²·d · gpd/ft² |
| Solids loading rate | kg/d solids ÷ area | kg/m²·d · lb/ft²·d |
| Organic loading (recognize) | kg/d BOD (Biochemical Oxygen Demand) ÷ volume | kg/m³·d |

## Mass ("kilograms / pounds formula")
| Find | Metric | US |
|---|---|---|
| Mass per day | **kg/d = mg/L (milligrams per litre) × m³/d (cubic metres per day) ÷ 1,000** (= mg/L × ML/d) | **lb/d = mg/L × MGD (Million Gallons per Day) × 8.34** |
| Mass in a tank | kg = mg/L × m³ ÷ 1,000 | lb = mg/L × MG × 8.34 |
| Chemical with purity | kg/d product = kg/d active ÷ purity (decimal) | lb/d product = lb/d active ÷ purity |
| Dose from feed | mg/L = kg/d × 1,000 ÷ m³/d | mg/L = lb/d ÷ (MGD × 8.34) |
| Liquid feed pump | mL/min = (m³/d × mg/L) ÷ (density g/mL × active decimal × 1,440) | gpd (gallons per day) = lb/d ÷ (8.34 × SG (Specific Gravity) × active decimal) |
| Dry solids in sludge | kg/d = m³/d × % × 10 | lb/d = gpd × 8.34 × % (decimal) |

## Chemistry & efficiency
| Find | Formula |
|---|---|
| Chlorine dose | Dose = Demand + Residual |
| % removal | (In − Out) ÷ In × 100 |
| % strength | mass chemical ÷ mass solution × 100 |
| Dilution | C₁V₁ = C₂V₂ |
| Thickening volume | V₂ = V₁ × %₁ ÷ %₂ |
| CT | Concentration (mg/L) × time (min) |

## Activated sludge
| Find | Formula |
|---|---|
| MLVSS (Mixed Liquor Volatile Suspended Solids) | MLSS (Mixed Liquor Suspended Solids) × % volatile (decimal) |
| F/M (Food-to-Microorganism ratio) | kg/d BOD to aeration ÷ kg MLVSS in aeration |
| SRT (Solids Retention Time) / MCRT (Mean Cell Residence Time) | kg solids in system ÷ (kg/d WAS (Waste Activated Sludge) + kg/d effluent solids) |
| Sludge age | kg MLSS in aeration ÷ kg/d TSS (Total Suspended Solids) entering aeration |
| SVI (Sludge Volume Index) | SSV₃₀ (mL/L) × 1,000 ÷ MLSS (mg/L) |
| RAS (Return Activated Sludge) % | RAS flow ÷ influent flow × 100 |
| WAS needed (kg/d) | (kg inventory ÷ target SRT) − kg/d effluent solids |

## Pressure, pumps, electricity
| Find | Metric | US |
|---|---|---|
| Pressure from head | kPa (kilopascal) = m × 9.81 | psi (pounds per square inch) = ft × 0.433 |
| Head from pressure | m = kPa ÷ 9.81 | ft = psi × 2.31 |
| Water power | kW (kilowatt) = 9.81 × Q (m³/s) × H (m) | whp (water horsepower) = gpm (gallons per minute) × ft ÷ 3,960 |
| Brake/pump input | ÷ pump efficiency | bhp (brake horsepower) = whp ÷ pump eff. |
| Motor input | ÷ motor efficiency | mhp (motor horsepower) = bhp ÷ motor eff. |
| Ohm's law | V = I × R | |
| Power (simple) | P = V × I | |
| Energy | kWh (kilowatt-hour) = kW × h | |

## Lab
| Find | Formula |
|---|---|
| TSS (mg/L) | (dry wt − filter wt, g) × 1,000,000 ÷ mL |
| VSS (mg/L) | (dry wt − ignited wt, g) × 1,000,000 ÷ mL |
| % volatile | VSS ÷ TSS × 100 |
| BOD (unseeded) | (DOi − DOf) × 300 ÷ mL sample |
| Temperature | °F = °C × 1.8 + 32 · °C = (°F − 32) ÷ 1.8 |

---

## Conversions

### Metric
| | |
|---|---|
| 1 m³ = 1,000 L | 1 ML = 1,000 m³ = 1,000,000 L |
| 1 L water = 1 kg | 1 m³ water = 1,000 kg = 1 tonne |
| 1 mg/L = 1 g/m³ = 1 kg/ML = 1 ppm (parts per million) | 1% = 10,000 mg/L |
| 1 m = 100 cm = 1,000 mm | 1 km = 1,000 m |
| 1 ha = 10,000 m² | 1 kg = 1,000 g = 1,000,000 mg |
| 1 m³/s = 1,000 L/s (litres per second) = 86,400 m³/d | 1 L/s = 86.4 m³/d |
| 1 day = 24 h = 1,440 min = 86,400 s | 1 m water ≈ 9.81 kPa |

### US
| | |
|---|---|
| 1 ft³ = 7.48 gal | 1 gal water = 8.34 lb |
| 1 ft³ water = 62.4 lb | 1 MGD = 694.4 gpm = 1.547 cfs (cubic feet per second) |
| 1 cfs = 448.8 gpm | 1 psi = 2.31 ft · 1 ft = 0.433 psi |
| 1 acre = 43,560 ft² | 1 mile = 5,280 ft |
| 1 hp = 0.746 kW = 33,000 ft·lb/min | 1 ton = 2,000 lb |

### Metric ↔ US
| | |
|---|---|
| 1 gal (US) = 3.785 L | 1 m³ = 264.2 gal |
| 1 m = 3.281 ft | 1 in = 2.54 cm |
| 1 kg = 2.205 lb | 1 lb = 0.4536 kg (453.6 g) |
| 1 psi = 6.895 kPa | 1 kW = 1.34 hp |
| 1 ha = 2.47 acres | 1 m³/d = 264.2 gpd |
