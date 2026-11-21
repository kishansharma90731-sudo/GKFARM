# GK Resort — Luxury Farmhouse Retreat (Bento Redesign)

A modern, high-end, human-crafted web experience for **GK Resort**, an exclusive luxury farmhouse retreat in Rajasthan, India. Designed using an architectural **Bento Grid layout** with subtle depth, micro-interactions, varied typography, and an earthy color palette.

---

## ✦ Bento Architecture & Design System

### 1. 🍱 Bento Grid Framework
- **Sanctuary Hero Bento** (`BentoHero.jsx`):
  - **Tile 01 (8-Col Master Visual)**: Deep perspective card showcasing the signature starlit swimming pool (`hero-pool.jpg`) with ambient gradients, floating badge, and reservation CTA.
  - **Tile 02 (4-Col Manifesto)**: Editorial philosophy card on sole-occupancy and privacy.
  - **Tile 03 (4-Col Key Specs)**: 5,000+ sq. ft. private grounds, 100% sole occupancy, ★ 4.9 guest rating.
  - **Tile 04 (12-Col Ticker Strip)**: Architectural ticker highlighting pool, manicured lawns, salon lounge, and al fresco terrace.
- **Architectural Spaces Bento** (`BentoEstate.jsx`):
  - Asymmetric 12-column grid showcasing all 5 uploaded high-res photographs:
    - *The Main Residence & Great Lawn* (7 cols)
    - *The Private Salon Lounge* (5 cols)
    - *Sconce-Lit Stargazing Yard* (5 cols)
    - *The Midnight Pool Deck & Bar* (7 cols)
- **Curated Amenities Bento** (`BentoAmenities.jsx`):
  - 6 modular Bento cells with micro-interactions, distinct earth backgrounds, and feature highlights (Oasis Pool, Bermuda Lawn, Al Fresco Dining, Event Hosting, Twilight Sconces, 100% Seclusion).
- **Guest Whispers Bento** (`BentoStories.jsx`):
  - 3-column review bento with authentic guest reflections, occasions, star ratings, and verified badge.
- **Location & Concierge Bento** (`BentoContact.jsx`):
  - **Left (7 cols)**: Desaturated Google Maps iframe with GPS coordinates (`26.9124° N, 75.7873° E`) and one-click direct directions button.
  - **Right (5 cols)**: Concierge card with 1-click tap-to-call (`+91 7230939853`), Instagram (`@gk_resort_67`), and interactive date reservation form.

---

### 2. 🎨 Earth-Toned Palette
- **Bone & Cream** (`#FAF6EE`, `#FDFBF7`, `#F3EDE0`): Warm, mineral-rich travertine canvas that eliminates blinding clinical whites.
- **Raw Sand & Stone** (`#EFE7DA`, `#D2C1A6`, `#B9A183`): Tactile card borders and secondary surface textures.
- **Aged Earth & Espresso** (`#211912`, `#140E0A`): High-contrast typography and deep evening backgrounds.
- **Terracotta Clay** (`#BD6440`, `#D47E59`): Warm accent highlights on micro-badges, stars, and active states.
- **Wild Olive** (`#687B59`, `#849675`): Organic vegetation pills and verified status badges.

---

### 3. ✍️ Varied Human-Crafted Typography
- **Serif (Headings & Quotes)**: *Cormorant Garamond* (light, italic, and display scales).
- **Humanist Sans (Body)**: *Plus Jakarta Sans* for clean, modern readability.
- **Architectural Mono (Labels & Coordinates)**: *Space Grotesk* for technical coordinates, specs, and status pills.

---

### 4. ⚡ Smooth Micro-Interactions & Depth
- **Hardware-Accelerated Scale**: Smooth image zoom on hover (`scale-[1.03] duration-700 ease-out`).
- **Tactile Bento Cards**: Layered box-shadows (`shadow-bento`) with warm border transitions.
- **Zero Lag**: No heavy unthrottled JavaScript scroll events or infinite SVG filter repaints — 100% 60–120 FPS performance.

---

## ✦ Contact & Map Integration

- **Contact Number**: `+91 7230939853` (tap-to-call enabled)
- **Instagram**: `@gk_resort_67`
- **Location**: [Google Maps Place Link](https://maps.google.com/maps/place//data=!4m2!3m1!1s0x396db900573f91ed:0x3dfafe63d05e867c?entry=s&sa=X&ved=2ahUKEwiHzuOskZaYAxVaRmwGHf1fPQ0Q4kB6BAgWEAA&hl=en)
- **Local Server**: `http://localhost:5173/`
