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
    fontSize: "clamp(4rem, 9vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
  headline-services:
    fontFamily: 'Barlow, "Arial Narrow", sans-serif'
    fontSize: "clamp(2rem, 4.3vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 0.95
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
  services-inline: "clamp(1.45rem, 4.4vw, 3rem)"
  services-block: "clamp(2.25rem, 5vw, 4rem)"
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
  button-services:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.night}"
    rounded: "{rounded.square}"
    padding: ".5rem 1rem"
  quote-email-services:
    backgroundColor: "{colors.night}"
    textColor: "{colors.cream}"
    padding: "12px 18px"
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
- Five horizontal homepage panels, a vertical Services page and a shared quote drawer.

## Colors

Use dark pine and warm paper for large surfaces, with gold and rust for emphasis and actions. Frontmatter records the source values; page-specific roles below preserve the existing differences.

### Primary

- **Pine night:** Homepage frame and dark panels; Services text, header, hero and closing quote section. Services uses this value for its local ink variable.
- **Warm gold:** Homepage action tickets, active panel navigation and process panel; Services quote buttons and pickup-day chapter.

### Secondary

- **Rust:** Homepage dark tickets and light-surface focus; quote text actions and drawer focus on both pages. The Services email ticket uses pine instead.
- **Burnt outline:** Services link and FAQ focus outlines.

### Neutral

- **Cream:** Light panels, Services page and shared drawer.
- **Ink:** Homepage light-panel text and ticket borders; shared drawer text resolves to each page’s local ink value.
- **Sand:** Crew portrait frames, homepage brand badge and Services hero frame.
- **Line / Services line:** Thin dividers and borders; retain the distinct page values.
- **Field:** Slightly lighter quote inputs and textareas.

## Typography

The bundled display face is Barlow Condensed, registered in CSS as `Barlow`. The body face is DM Sans, registered as `DM`. Keep these local aliases when using the supplied font files.

Use heavy uppercase display type for headings. DM Sans carries body text, form labels and navigation. Frontmatter records the main desktop roles; these are page instances rather than a universal type scale.

- **Homepage:** Main headings use the home display role. At widths up to (950px), the size becomes `clamp(61px, 9vw, 100px)`; at (720px), `clamp(54px, 13vw, 76px)`. Process headings have their own smaller clamps. Supporting copy runs from (17px) to (21px), with a (36ch) maximum, then becomes (16px) on phones.
- **Services:** The page title uses the Services display role, capped at (6rem). Chapter headings use the Services headline role; FAQ group headings use (1.65rem) with (1.05) line height. General paragraphs allow up to (68ch), with shorter hero and chapter measures.
- **Quote drawer:** Uppercase heading uses `clamp(56px, 8vw, 76px)` at (.91) line height. Labels use the shared label role; fields remain (16px).

## Layout

**Homepage:** Fit the outer page to the viewport with header, horizontal rail and pager. Five full-width panels snap horizontally: Crew, Pickups, How it works, Area and Quote. Keep the outer page free of vertical scrolling; individual panels can scroll when content exceeds their height. Desktop panels use two columns within a (1570px) maximum. The process panel uses one column with three steps across. At (720px), stack the content and compact the artwork and pager. Edge spacing becomes (28px) at (950px), then (18px) at (720px); the smallest pager and brand adjustments start at (370px).

**Services:** Use ordinary vertical page scrolling and a sticky header. Center content within (1160px). Alternate image and copy proportions, then use a three-column illustrated service grid, a gold pickup-day chapter and two columns of FAQ groups. At (720px), stack the hero, split chapters and FAQ groups; each small service card keeps its image and caption side by side. The desktop chapter proportions and mobile artwork crops belong to this page.

**Shared drawer:** Anchor the native dialog to the right at `min(570px, 100%)`, with viewport height and internal vertical scrolling. Keep the ZIP and preferred-day row in two columns, allow actions to wrap and return focus to the opening control on close.

## Elevation & Depth

Use flat color fields, thin borders and the grain within the supplied illustrations. The homepage gold and rust tickets have a small hard offset shadow; crew portrait cards have a softer shadow. The shared drawer adds a broad left shadow and dark translucent backdrop. Services content cards and callouts use borders without shadows.

Portrait entry and exit motion applies only when reduced motion is not requested. The drawer slides in over (.28s); reduced motion removes that animation. Exact shadow and motion values live in the sidecar.

## Shapes

Keep controls, fields, tags, cards and the drawer square. Use thin single-pixel dividers and borders. The circular homepage brand badge is a local exception. On the homepage, the two crew portraits rest at opposing (5deg) tilts with vertical offsets; the Services hero scene has a (−3deg) tilt and a sand frame. Keep service scene crops and aspect ratios specific to their illustrations; the revised washer scene displays as a full image.

## Components

### Buttons

Homepage tickets use gold with ink text or rust with cream text, a thin border and a hard offset shadow. Hover lightens gold or darkens rust; press shifts the ticket by (1px) and reduces its shadow. Reduced motion removes the shift. Homepage tickets have a (46px) minimum height.

Services quote buttons use gold, square corners and a (44px) minimum height. Hover changes the fill and reveals the border; phone padding is tighter. The shared drawer’s email action inherits the page’s ticket style: rust and shadow on the homepage, pine with (12px 18px) padding and a (48px) minimum height on Services. Keep these instance differences explicit.

### Navigation

The homepage uses previous/next arrow buttons and labeled panel buttons. Gold fill marks the current panel; disabled arrows fade. Hide panel numbers below (950px), keeping the labels. The Services header uses text links and a gold quote button, with wrapping on narrow screens. The footer and hero offer a return to Pickups.

### Tags and containers

Services item tags are static bordered labels. Callouts use a thin border, cream fill and compact inset copy; the pickup-day chapter places them on gold. Small illustrated cards use a border and bold caption. They have no action states.

### FAQ disclosure

Use native `details` and `summary`, with a visible disclosure marker, bold question, thin row dividers and a minimum (48px) summary height. Opening a question reveals its answer in the same row. Keep keyboard focus visible. Arrange the groups in two columns on desktop and one on phones.

### Quote fields and drawer

Use native inputs and textareas with square corners, a thin muted border and a light field fill. Inputs have a minimum (44px) height; textareas start at (82px) and resize vertically. Rust outlines identify focused drawer controls. Preserve native required-field validation rather than inventing a new error style. The close control is a bordered (44px) square; copy and phone actions use underlined or bold rust text.

### Illustrations

Preserve the approved crew avatars, textured scene sheet and revised washer scene. Crop art differently for the homepage’s limited panel space and the Services chapters. Generated scenes illustrate service examples; they do not establish a completed-job portfolio.

## Do's and Don'ts

### Do:

- Do keep the approved crew avatars and illustrated service examples.
- Do vary image crops to suit the scene and available space.
- Do preserve the separate homepage and Services layout models.
- Do keep quote fields readable at phone sizes and preserve visible keyboard focus.

### Don't:

- Don’t apply the homepage’s horizontal rail to the Services page.
- Don’t replace the square controls with rounded pills.
- Don’t present generated illustrations as photographs of completed jobs.
- Don’t turn the static service tags into filters without a product requirement.
