

# Add Newsletter Signup Section to Landing Page

## Approach
Add a visually appealing newsletter signup section between the "Open Source Tools" section and the CTA section on the landing page. Since this is a static site with no backend, the form will use a simple `mailto:` fallback or show a success toast on submit (ready to wire up to a service like Mailchimp/ConvertKit later).

## Implementation
1. **New section in `src/pages/Index.tsx`** — Email input + subscribe button with a heading like "Stay Updated" and subtext. On submit, show a success toast via sonner.
2. **Styling** — Subtle gradient background card, centered layout, consistent with the clean/modern design. Input + button inline on desktop, stacked on mobile.

## Notes
- No backend wiring needed now — the form captures the intent and shows confirmation. When you later connect Supabase or an email service, we can wire it up.
- Uses existing `Input`, `Button` components and `sonner` toast.

