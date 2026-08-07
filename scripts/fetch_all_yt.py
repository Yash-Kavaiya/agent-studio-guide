import json
import re
import sys
import urllib.request

sys.stdout.reconfigure(encoding="utf-8")

url = "https://www.youtube.com/playlist?list=PLOAciEalMV3GGRZD2RJ7mjOEcI4DXQs0j"
html = urllib.request.urlopen(url).read().decode("utf-8", errors="ignore")
ids = list(dict.fromkeys(re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)))

results = []
for vid in ids:
    oembed = f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json"
    try:
        data = json.loads(urllib.request.urlopen(oembed).read())
        results.append({"id": vid, "title": data.get("title", "")})
    except Exception as e:
        results.append({"id": vid, "title": str(e)})

for r in results:
    print(f"{r['id']}|{r['title']}")
