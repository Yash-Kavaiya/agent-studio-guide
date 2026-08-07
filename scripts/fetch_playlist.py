import re
import urllib.request

url = "https://www.youtube.com/playlist?list=PLOAciEalMV3GGRZD2RJ7mjOEcI4DXQs0j"
html = urllib.request.urlopen(url).read().decode("utf-8", errors="ignore")
ids = list(dict.fromkeys(re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)))
print("count:", len(ids))
for i in ids:
    print(i)
