

# Add Newsletter Signup Section (Substack)

## What
Add a "Stay Updated" newsletter section to the landing page that links directly to Yash's Substack for subscription, placed between the "Open Source Tools" and "Support & Community" sections.

## Implementation

### Single file change: `src/pages/Index.tsx`

Insert a new section after the Open Source Tools section (after line 156):

- **Heading**: "Stay Updated" with subtext about getting the latest on CX Agent Studio
- **Design**: Clean card with `bg-secondary/40` background, centered layout, Google Blue accent
- **CTA**: A pill-shaped "Subscribe on Substack" button linking to `https://substack.com/@yashkavaiya` (opens in new tab)
- **Icon**: Mail icon from lucide-react
- **Animation**: Same `fadeUp` motion variant used elsewhere
- **No form needed** — direct link to Substack handles subscription

