import json
import re
import sys
import urllib.request
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

PLAYLIST_URL = "https://youtube.com/playlist?list=PLOAciEalMV3GGRZD2RJ7mjOEcI4DXQs0j"


def fetch_playlist() -> list[tuple[str, str]]:
    url = PLAYLIST_URL.replace("youtube.com", "www.youtube.com")
    html = urllib.request.urlopen(url).read().decode("utf-8", errors="ignore")
    ids = list(dict.fromkeys(re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)))
    results: list[tuple[str, str]] = []
    for vid in ids:
        oembed = f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json"
        data = json.loads(urllib.request.urlopen(oembed).read())
        results.append((vid, data.get("title", "")))
    return results

def categorize(title: str) -> str:
    t = title.lower()
    if "shorts" in t or "60 seconds" in t:
        return "Shorts"
    if "30 days" in t or "day " in t and "/30" in t:
        return "30 Days Series"
    if "lab" in t or "challenge" in t:
        return "Course Labs"
    if "scrapi" in t or "scrape" in t:
        return "SCRAPI & Tooling"
    if "hackathon" in t:
        return "Labs & Hackathons"
    return "Demos & Tutorials"


from pathlib import Path

playlist_path = Path(__file__).parent / "yt_playlist.txt"
if playlist_path.exists():
    lines = playlist_path.read_text(encoding="utf-8-sig").strip().splitlines()
    entries = [line.split("|", 1) for line in lines if "|" in line]
else:
    entries = fetch_playlist()
videos = []
for vid, title in entries:
    videos.append(
        {
            "id": f"video-{vid}",
            "title": title.strip(),
            "description": title.strip(),
            "youtubeId": vid,
            "duration": "",
            "category": categorize(title),
            "date": "2026",
        }
    )

categories = sorted(set(v["category"] for v in videos))

out_path = Path(__file__).parent.parent / "src" / "data" / "videos.ts"
lines_out: list[str] = []
lines_out.append(f"export const PLAYLIST_URL = {repr(PLAYLIST_URL)};")
lines_out.append("")
lines_out.append("export interface Video {")
lines_out.append("  id: string;")
lines_out.append("  title: string;")
lines_out.append("  description: string;")
lines_out.append("  youtubeId: string;")
lines_out.append("  duration: string;")
lines_out.append("  category: string;")
lines_out.append("  date: string;")
lines_out.append("}")
lines_out.append("")
lines_out.append("export const videos: Video[] = [")
for v in videos:
    title = v["title"].replace('"', '\\"')
    desc = v["description"].replace('"', '\\"')
    lines_out.append(
        f"  {{ id: \"{v['id']}\", title: \"{title}\", description: \"{desc}\", "
        f"youtubeId: \"{v['youtubeId']}\", duration: \"\", category: \"{v['category']}\", date: \"{v['date']}\" }},"
    )
lines_out.append("];")
lines_out.append("")
lines_out.append("export const videoCategories = [\"All\", " + ", ".join(repr(c) for c in categories) + "];")
out_path.write_text("\n".join(lines_out) + "\n", encoding="utf-8")
print(f"Wrote {len(videos)} videos to {out_path}")
