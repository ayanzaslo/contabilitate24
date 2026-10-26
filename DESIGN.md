---
name: Contabilitate 24
description: An accountant's adding machine on a grey desk; the page reads as the thermal tape it prints, and one signal green means only action or "la zi".
colors:
  ink: "#14191a"
  desk: "#e3e6de"
  desk-shade: "#d3d8cd"
  paper: "#fafaf5"
  graphite: "#1f2325"
  graphite-raised: "#2b3033"
  graphite-footer: "#15191b"
  signal: "#00c27a"
  signal-hi: "#25dc96"
  signal-deep: "#0a7a4d"
  signal-text: "#076b43"
  lcd: "#b9c9a2"
  lcd-ink: "#1f2d1a"
  mute: "#46514b"
  mute-night: "#aab3ad"
  text-night: "#eceee8"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.05rem, 3.6vw, 3.3rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 108"
  headline:
    fontFamily: "Archivo, Arial Narrow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.85rem, 3.1vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo, Arial Narrow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 108"
  body:
    fontFamily: "Onest, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.35vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Martian Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.05em"
  figure:
    fontFamily: "Martian Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "clamp(1.4rem, 3.4vw, 2.2rem)"
    fontWeight: 500
    lineHeight: 1.2
rounded:
  xs: "4px"
  sm: "6px"
  md: "10px"
  btn: "11px"
  lg: "16px"
  xl: "20px"
  pill: "999px"
spacing:
  gutter: "clamp(18px, 4vw, 40px)"
  section-y: "clamp(72px, 9vw, 128px)"
  wrap: "1200px"
  row: "1.5rem"
  line: "0.7rem"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "0.65rem 1.25rem"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.signal-hi}"
  button-dark:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.paper}"
    rounded: "{rounded.btn}"
    padding: "0.65rem 1.25rem"
  button-dark-hover:
    backgroundColor: "{colors.graphite-raised}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "0.65rem 1.25rem"
  tape-slab:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "clamp(1.5rem, 4vw, 3rem)"
  night-block:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.text-night}"
    rounded: "{rounded.xl}"
    padding: "clamp(1.1rem, 3vw, 2rem)"
  lcd-readout:
    backgroundColor: "{colors.lcd}"
    textColor: "{colors.lcd-ink}"
    rounded: "{rounded.md}"
    padding: "1rem 1.3rem"
  select-night:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    height: "48px"
---

# Design System: Contabilitate 24

## Overview

**Creative North Star: "Masina de adunat"**

The page is built around a real desk adding machine and reads as the tape it prints. The ground is matte grey desk plastic; content sits on thermal-paper slabs whose top and bottom edges are serrated like a torn roll; graphite (calculator body) appears only for the night guard block, the price calculator, the final call to action and the footer; every computed figure is lit on a sage LCD. Content is ruled tape lines, leader-dotted rows and two-column text rather than boxed cards.

Archivo semi-expanded works like key legends, Onest carries reading, Martian Mono prints tape figures and ledger labels. One signal green carries one meaning: an action to take, or "la zi" (up to date). It is rare by design.

The 3D scenes (calculator, night clock) share the same palette and PBR plastic, graphite and paper materials as the CSS surfaces. Density is moderate: generous section rhythm, tight ruled rows inside.

**Key Characteristics:**
- Grey desk ground, paper slabs with serrated edges, graphite night blocks, LCD sage figures.
- Structure by rules (2px ink, 1px line, dotted leaders), not by boxes.
- Single signal green, split into fill and text values for legibility.
- Tabular numerals on the whole page (body sets tabular-nums).
- Flat sections; depth only on physical objects (keys, LCD, slabs).

## Colors

A cool-neutral desk palette with warm-white paper, near-black graphite and one electric green.

### Primary
- **Signal Green** (`signal`): fills for primary buttons, ticks, done checks, pulse dot, selection, and green on night blocks. Means action or "la zi" only.
- **Signal Hi** (`signal-hi`): hover state of the primary button.
- **Signal Deep** (`signal-deep`): green when it must be a line or icon on light ground: list dashes, stamp borders, focus ring, caret.
- **Signal Text** (`signal-text`): green as small text on desk or paper (tags, ledger OK, facts labels, brand "24"). Chosen darker for legibility.

### Neutral
- **Desk Plastic** (`desk`): page ground, sticky header, mobile menu.
- **Desk Shade** (`desk-shade`): secondary desk tone, used for tonal separation.
- **Thermal Paper** (`paper`): content slabs, ledger table, contract, extract and contact card.
- **Graphite** (`graphite`): night section, calculator panel, final CTA, dark buttons, key-style marks. **Graphite Raised** (`graphite-raised`) for selects and hover; **Graphite Footer** (`graphite-footer`) for the footer base.
- **Ink** (`ink`): text and heavy rules on light ground; also text on green fills.
- **Mute** (`mute`): secondary text on light; **Mute Night** (`mute-night`) and **Text Night** (`text-night`) are the secondary and primary text on graphite.
- **LCD Sage** (`lcd`) with **LCD Ink** (`lcd-ink`): the only home of computed figures.

Lines are ink at 15% (hairline) and 40% (strong) on light, light text at 14% and 40% on night; the variables flip inside night blocks.

### Named Rules
**The One Meaning Rule.** Green means act or "la zi". It is never decoration, never a second accent, and never a text color on light ground except Signal Text.
**The LCD Rule.** A computed or quoted figure lives on the sage LCD in mono; prose numbers stay in body type.
**The Night Scope Rule.** Graphite is reserved for the 24/7 block, the calculator, the final CTA and the footer. It does not return as card fill elsewhere.

## Typography

**Display Font:** Archivo (variable width axis, set to 104-112% stretch; fallback Arial Narrow, Arial)
**Body Font:** Onest (fallback system-ui)
**Label/Mono Font:** Martian Mono (fallback Cascadia Mono, Consolas)

**Character:** Wide, engineered Archivo reads as key legends; Onest keeps long Romanian text calm; Martian Mono is the tape's printing.

### Hierarchy
- **Display** (700, clamp 2.05-3.3rem, 1.04): hero title only; underlined emphasis uses a thin green rule.
- **Headline** (700, clamp 1.85-2.75rem, 1.06): section titles; a smaller variant runs 1.6-2.15rem.
- **Title** (650, clamp 1.15-1.4rem, 1.2): block and row headings, 1.15rem in ruled rows.
- **Body** (400, 1.0625rem, 1.6): reading text capped at 62ch; lead paragraphs 1.05-1.2rem in mute.
- **Label** (Martian Mono 500, 0.68-0.78rem, +0.04 to +0.06em, uppercase): ledger headers, column heads inside ledgers, hours, figure captions, legends.
- **Figure** (Martian Mono 500, clamp 1.4-2.2rem): LCD values.
- **Quote** (Archivo 500-600, 1.12-2.1rem, stretch 104-106%): testimonials and the personal statement.

### Named Rules
**The Three Voices Rule.** Archivo for lettering, Onest for reading, Martian Mono for figures and ledger labels; no fourth family.
**The Tabular Rule.** Numerals are tabular everywhere so columns align like a tape.

## Layout

A 1200px wrap with fluid gutter (18-40px). Sections use fluid vertical padding (72-128px) and alternate desk, paper and graphite grounds. Two-column splits are asymmetric (about 0.8fr / 1.4fr or 1.15fr / 1fr), with the lead column sticky below the header on wide screens. Content rows are ruled lists: label left, text right, 1.5rem row padding, 1px strong rule between. Three-column groups use 2px ink top rules. Leader-dotted rows (name ... value) carry prices and facts. The hero is headline left, calculator scene right, then the five-line control ledger.

Breakpoints observed: 1280px (hide brand sub-line), 1060px (nav collapses to menu), 980px (all grids single column, sticky released), 720px (header and ledger compact; fixed mobile action bar appears with 72px body padding). Mobile ledger rewrites rows to a two-column grid.

## Elevation & Depth

Sections are flat. Depth belongs to physical objects and is soft and low: paper slabs sit with a long, faint ink shadow (`0 24px 50px -30px rgba(20,25,26,.55)`); graphite blocks add an inset top highlight and a deep drop shadow; keys and primary buttons carry an inset top highlight and an inset bottom edge like a bevel. The LCD is inset (`inset 0 2px 6px rgba(20,35,15,.35)`). Section-to-section depth is shown by the serrated paper edge (8px conic-gradient teeth on a 16px pitch) overlapping the desk.

### Named Rules
**The Tooth Rule.** A paper section meets the desk with a serrated edge, top and bottom; the same teeth close the incident tickets.
**The Bevel Rule.** Raised controls get an inset highlight plus an inset bottom edge and a soft drop; flat content never does.

## Shapes

Small, machined corners. Paper slabs 4px, ledger and contract 4-6px, selects and LCD 10px, buttons 9/11/13px by size, dark panels 16-20px, key marks and ticks 6-8px, round only for the pulse dot and small mono pills (999px). Dividers are 1px or 2px solid ink, dotted for leaders, dashed for tear lines between a slab's halves.

## Components

### Buttons
- **Shape:** 11px radius; large 13px (56px high), small 9px (38px); default 46px high, 650 weight Onest.
- **Primary (and WhatsApp):** signal fill, ink text, bevel shadow; hover lightens to signal-hi; press moves 1px down.
- **Dark:** graphite fill, light text, hover graphite-raised.
- **Ghost / Light / Alt:** transparent, 1px strong line, hover a faint 6-14% wash.
- **Focus:** 2px signal-deep outline, 3px offset (signal on night grounds).

### Paper slabs and ledger
Paper fill, 4px corners, long faint shadow. The ledger is a table with mono uppercase heads over a 2px ink rule, dotted row rules, right-aligned figures, and a total row closed by a double rule.

### Contract extract
Paper box, 1px strong border, 2px ink head and foot rules, dashed vertical tear line between document fields and checklist; checks are 20px 6px-radius squares filled signal when done.

### Calculator panel and LCD
Graphite panel (20px), mono uppercase field labels, graphite-raised selects (48px), results on the sage LCD with a mono figure and small mono unit.

### Navigation
Sticky desk header with hairline and strong bottom rule; mono top bar for contact; brand mark is three graphite key tiles with one signal key; links 0.93rem 550 weight with a faint hover wash; below 1060px a 44px menu button opens a stacked list with dotted rules.

### FAQ
Ruled accordion rows; Archivo question, graphite 28px toggle square with a plus that rolls to a minus; the answer opens by grid-row transition (0.35s, ease-out-expo).

### Incident tickets
Off-white (`#f4f4ee`) tickets on graphite with a serrated bottom edge and dotted inner rule.

### Motion
One easing, `cubic-bezier(0.22, 1, 0.36, 1)`; durations 0.14-0.35s on state changes. The green pulse ring runs only under no-preference motion. Smooth scroll is also gated by reduced motion.

## Do's and Don'ts

### Do:
- **Do** let paper slabs overlap the desk with the serrated edge, and keep the desk grey `#e3e6de` as the page ground.
- **Do** use Signal Text (`#076b43`) for green text on light ground and Signal (`#00c27a`) only for fills and on graphite.
- **Do** put every computed figure on the sage LCD in Martian Mono.
- **Do** structure content with 1px and 2px ink rules, dotted leaders and two-column ruled rows.
- **Do** flip the line and text variables inside night blocks rather than restyling children.

### Don't:
- **Don't** use graphite as a fill for ordinary content blocks outside the night, calculator, final and footer grounds.
- **Don't** introduce a second accent hue or use green as decoration.
- **Don't** add glass, tilt, or hard offset shadows; depth is soft and physical.
- **Don't** replace the three type voices with a fourth family or a system display face.
- **Don't** put prose numbers on the LCD or computed figures in body type.
