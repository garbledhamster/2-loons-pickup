---
name: 2 Loons Pickup
description: Illustrated furniture carryouts and small cleanouts around St. Paul.
colors:
  night: "#19271f"
  ink: "#1a251d"
  cream: "#fbf2df"
  sand: "#eee0c4"
  gold: "#f3bf6a"
  rust: "#8f3428"
  line: "#c4b698"
  services-line: "#b4a587"
  outline: "#b95a38"
  field: "#fff9ea"
typography:
  display-home:
    fontFamily: 'Barlow, "Arial Narrow", sans-serif'
    fontSize: "clamp(66px, 8.3vw, 142px)"
    fontWeight: 800
    lineHeight: 0.91
    letterSpacing: "-.025em"
  display-services:
    fontFamily: 'Barlow, "Arial Narrow", sans-serif'
    fontSize: "clamp(50px, 7vw, 104px)"
    fontWeight: 800
    lineHeight: 0.95
  headline-services:
    fontFamily: 'Barlow, "Arial Narrow", sans-serif'
    fontSize: "clamp(28px, 3.2vw, 44px)"
    fontWeight: 800
    lineHeight: 0.95
  subhead-services:
    fontFamily: 'Barlow, "Arial Narrow", sans-serif'
    fontSize: "clamp(25px, 2.6vw, 32px)"
    fontWeight: 800
    lineHeight: 0.96
  body-home:
    fontFamily: "DM, Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.4
  body-services:
    fontFamily: "DM, Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.5
  label:
    fontFamily: "DM, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
rounded:
  square: "0"
spacing:
  home-edge: "clamp(25px, 5vw, 82px)"
  home-gap: "clamp(25px, 5vw, 83px)"
  services-block: "clamp(28px, 4.5vw, 52px)"
components:
  ticket-home:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "0 15px"
  ticket-home-dark:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.cream}"
    rounded: "{rounded.square}"
    padding: "0 15px"
  quote-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "9px 10px"
---

# Design System: 2 Loons Pickup

## Overview

**Creative North Star: "Approved illustrated pickup world"**

Use the approved pine, cream, gold and rust palette with condensed headings, square controls and grainy generated illustrations of Devin and Jonathan. The crew portraits and service scenes give this small pickup site its character. This record describes the implemented design; no separate visual-world cards or new identity workshop were created.

**Key Characteristics:**

- Condensed uppercase display type with readable DM Sans body copy.
- Thin borders, paper-colored surfaces and small offset button shadows on the homepage.
- Varied illustration crops and tilted crew artwork.
- Seven horizontal homepage slides with dedicated Services and FAQ slides and a shared quote drawer.

## Colors

Use dark pine and warm paper for large surfaces, with gold and rust for emphasis and actions. Frontmatter records the source values; the roles below describe the site’s shared palette.

### Primary

- **Pine night:** Homepage frame, dark panels and the Services contact block.
- **Warm gold:** Action tickets, active slide navigation and the process slide. Blend with cream for the pickup-day section.

### Secondary

- **Rust:** Light-surface action tickets, Services heading accent and drawer focus.
- **Burnt outline:** Services link and FAQ focus outlines.

### Neutral

- **Cream:** Light slides, including Services and FAQs, and the quote drawer.
- **Ink:** Light-slide text, ticket borders and drawer text.
- **Sand:** Crew portrait frames, homepage brand badge and the stairs card.
- **Line / Services line:** Thin dividers and borders; use the Services line for guides and FAQ rows.
- **Field:** Slightly lighter quote inputs and textareas.

## Typography

The bundled display face is Barlow Condensed, registered in CSS as `Barlow`. The body face is DM Sans, registered as `DM`. Keep these local aliases when using the supplied font files.

Use heavy uppercase display type for headings. DM Sans carries body text, form labels and navigation. Frontmatter records the main desktop roles; the Services slide uses a tighter scale for long-form reading.

- **Homepage:** Main headings use the home display role. At widths up to (950px), the size becomes `clamp(61px, 9vw, 100px)`; at (720px), `clamp(54px, 13vw, 76px)`. Process headings have their own smaller clamps. Supporting copy runs from (17px) to (21px), with a (36ch) maximum, then becomes (16px) on phones.
- **Services and FAQs:** Both titles use the Services display role. Cards and section headings use the Services headline role. Smaller cards, pickup-day labels and FAQ groups use the Services subheading role.
- **Quote drawer:** Uppercase heading uses `clamp(56px, 8vw, 76px)` at (.91) line height. Labels use the shared label role; fields remain (16px).

## Layout

**Homepage:** Fit the outer page to the viewport with header, horizontal rail and pager. Seven full-width slides snap horizontally in this order: Crew, Pickups, Services, FAQs, How it works, Area and Quote. Keep the outer page free of vertical scrolling; individual panels can scroll when content exceeds their height. Desktop panels use two columns within a (1570px) maximum. The process panel uses one column with three steps across. At (720px), stack the content and compact the artwork and pager. Edge spacing becomes (28px) at (950px), then (18px) at (720px); the smallest pager and brand adjustments start at (370px).

**Services and FAQs:** Scroll within each slide and keep the shared header and pager in place. Center the content within (1220px). Services contains two feature callouts, three smaller job callouts and the pickup-day section. FAQs presents the questions in two columns and opens with a quote button. On phones, use one column on both slides. Keep service art beside its copy where it fits.

**Shared drawer:** Anchor the native dialog to the right at `min(570px, 100%)`, with viewport height and internal vertical scrolling. Keep the ZIP and preferred-day row in two columns, allow actions to wrap and return focus to the opening control on close.

## Elevation & Depth

Use flat color fields, thin borders and the grain within the supplied illustrations. The homepage gold and rust tickets have a small hard offset shadow; crew portrait cards have a softer shadow. The shared drawer adds a broad left shadow and dark translucent backdrop. Services content cards and callouts use borders without shadows.

Portrait entry and exit motion applies only when reduced motion is not requested. The drawer slides in over (.28s); reduced motion removes that animation. Exact shadow and motion values live in the sidecar.

## Shapes

Keep controls, fields, tags, cards and the drawer square. Use thin single-pixel dividers and borders. The circular homepage brand badge is a local exception. On the homepage, the two crew portraits rest at opposing (5deg) tilts with vertical offsets. Furniture and stairs pair the cutouts with separate, aligned text columns. The garage cutout sits over a sand circle on the right, and Jonathan and his box sit in front of a gold star on the left. The larger dresser illustration crosses from the Curbside Loads card into the right-hand side of Pickup Day. On phones, give the illustration room above the pickup instructions.

## Components

### Buttons

Homepage tickets use gold with ink text or rust with cream text, a thin border and a hard offset shadow. Hover lightens gold or darkens rust; press shifts the ticket by (1px) and reduces its shadow. Reduced motion removes the shift. Homepage tickets have a (46px) minimum height.

The Services slide uses the shared ticket styles and quote drawer.

### Navigation

The homepage uses previous/next arrow buttons and labeled panel buttons. Gold fill marks the current panel; disabled arrows fade. Hide panel numbers below (950px), keeping the labels. The Services slide includes a jump to FAQs and a link back to Pickups. Phones use Process as the short label for How it works. At widths up to (450px), keep all seven labeled buttons visible. Swipe or tap a label to change slides.

### Tags and containers

Service callouts use cream or sand, a thin border and compact copy. Crew and objects reach beyond the edge with a soft shadow. Keep the text column’s left edge aligned from the heading through its body copy. The furniture note uses a thin divider and spans the full card at narrow phone widths. The gold Pickup Day section reserves space for the dresser scene and its instructions.

### FAQ disclosure

Use native `details` and `summary`, with a visible disclosure marker, bold question, thin row dividers and a minimum (48px) summary height. Opening a question reveals its answer in the same row. Keep keyboard focus visible. Arrange the groups in two columns on desktop and one on phones.

### Quote fields and drawer

Use native inputs and textareas with square corners, a thin muted border and a light field fill. Inputs have a minimum (44px) height; textareas start at (82px) and resize vertically. Rust outlines identify focused drawer controls. Preserve native required-field validation rather than inventing a new error style. The close control is a bordered (44px) square; copy and phone actions use underlined or bold rust text.

### Illustrations

Preserve the approved crew avatars, textured scene sheet and revised washer scene. Use transparent action art on the Services slide. Generated scenes illustrate service examples; they do not establish a completed-job portfolio.

## Do's and Don'ts

### Do:

- Do keep the approved crew avatars and illustrated service examples.
- Do vary image crops to suit the scene and available space.
- Do keep long-form reading inside the Services slide.
- Do keep quote fields readable at phone sizes and preserve visible keyboard focus.

### Don't:

- Don’t replace the square controls with rounded pills.
- Don’t present generated illustrations as photographs of completed jobs.
