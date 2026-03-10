

# Redesign: Google-Inspired Theme

## Overview
Restyle the entire site to look and feel like a Google product page — clean whites, Google's signature 4-color palette, rounded pill buttons, soft card shadows, and Google Sans-like typography.

## Key Changes

### 1. Fonts (src/index.css)
- Replace Inter with **Google Sans Text** (via `Product Sans` fallback to `Outfit` which is the closest freely available Google-like font on Google Fonts)
- Keep JetBrains Mono for code blocks

### 2. Color Palette (src/index.css)
Adopt Google's brand colors as CSS variables:
- **Primary**: Google Blue `#4285F4`
- **Accent**: Google Green `#34A853` (secondary accent)
- Google Red `#EA4335` and Yellow `#FBBC04` used as decorative accents
- Backgrounds stay clean white/near-white
- Muted foreground in Google's standard gray `#5f6368`
- Borders in light gray `#dadce0`

### 3. Button Styles (src/components/ui/button.tsx)
- More rounded (pill-like) — `rounded-full` for default buttons
- Google Blue filled primary, white outline secondary
- Subtle hover states (slight background shift, no heavy shadows)

### 4. Cards
- Lighter borders (`#dadce0`), subtle shadow on hover
- More padding, cleaner spacing

### 5. Navbar (src/components/Navbar.tsx)
- Google-style: clean white bar, logo with 4-color dots/icon, simple text links with blue active underline instead of background highlight
- Remove the heavy `Zap` icon, use a simple colored dot grid or text logo with Google colors

### 6. Landing Page (src/pages/Index.tsx)
- Hero: clean white background, large Google-style heading with the 4-color word highlight (each letter of "CX Agent Studio" could use Google colors)
- Feature cards with Google-colored icons (blue, red, yellow, green for each)
- CTA section uses Google Blue instead of gradient
- Pill-shaped buttons throughout

### 7. Footer (src/components/Footer.tsx)
- Light gray background, minimal Google-style footer

### 8. All Other Pages
- Consistent application of the new color tokens, rounded buttons, and typography

## Files Modified
- `src/index.css` — fonts + color variables
- `src/components/ui/button.tsx` — rounded-full styling
- `src/components/Navbar.tsx` — Google-style nav
- `src/components/Footer.tsx` — lighter styling
- `src/pages/Index.tsx` — Google-colored hero and sections
- `src/pages/Courses.tsx` — updated gradient to Google Blue
- `src/pages/Tools.tsx` — consistent styling
- `src/pages/Blog.tsx` — consistent styling
- `src/pages/Videos.tsx` — consistent styling
- `src/pages/BlogPost.tsx` — consistent styling

