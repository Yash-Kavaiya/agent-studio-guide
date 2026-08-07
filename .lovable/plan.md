# Play videos in place on the Videos page

## Problem

Every card on `/videos` is a plain anchor to `youtube.com/watch?v=<id>`. In the embedded preview that navigation is blocked/opens a broken tab, so cards feel like dead links — most visible when the "All" filter shows the whole list.

## What changes

- Clicking a card opens an in-page player instead of leaving the site:
  - A modal (shadcn `Dialog`) with a responsive 16:9 YouTube iframe (`youtube-nocookie.com/embed/<id>?autoplay=1`), the video title, its category badge, and a "Watch on YouTube" link.
  - Closing the modal stops playback (iframe unmounts).
- Keyboard/accessibility: cards become real buttons with `aria-label`, focus ring, and Escape/overlay close from Dialog.
- Fallback: if a video cannot be embedded, the modal's "Watch on YouTube" link (with `target="_blank" rel="noopener noreferrer"`) still works, and thumbnails keep an `onError` fallback to `mqdefault.jpg`.
- The "Watch Playlist" button at the top keeps opening YouTube in a new tab (unchanged).

## Technical notes

- Only `src/pages/Videos.tsx` is touched; no data or routing changes.
- Local state `const [active, setActive] = useState<Video | null>(null)`; the grid item's `onClick` sets it, `Dialog open={!!active}` renders the player.
- Iframe: `allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"`, `allowFullScreen`, `title={video.title}`, wrapped in `aspect-video w-full rounded-lg overflow-hidden`.
- Styling stays on existing semantic tokens and the `google-card` class.
