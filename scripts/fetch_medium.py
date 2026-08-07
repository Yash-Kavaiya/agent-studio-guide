import re
import sys
import urllib.request

sys.stdout.reconfigure(encoding="utf-8")

url = "https://medium.com/@yashkavaiya"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req).read().decode("utf-8", errors="ignore")
# medium embeds links like /google-cloud/title-slug
links = re.findall(r'href="(https://medium\.com/google-cloud/[a-z0-9-]+)"', html)
for l in dict.fromkeys(links):
  if "what-is" in l or "google-cx" in l:
    print(l)

# also try relative
rels = re.findall(r'href="(/google-cloud/[a-z0-9-]+)"', html)
for l in dict.fromkeys(rels):
  if "what-is" in l:
    print("https://medium.com" + l)
