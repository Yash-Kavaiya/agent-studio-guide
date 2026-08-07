import json
import urllib.request

playlist_id = "PLOAciEalMV3GGRZD2RJ7mjOEcI4DXQs0j"
url = (
    "https://www.youtube.com/youtubei/v1/browse?prettyPrint=false"
)
# Use oembed for first few videos from playlist fetch
ids = [
    "0lKsU1iRyBc", "dfvBNr4uLjk", "kX-DkvaHCiE", "cOuQppyE3kg", "rXKYdGX5gUI",
    "RSAFAeX1ruE", "fgsG6IJqbiY", "8jgI7byzy7M", "dYjyar9E3ro",
]
for vid in ids:
    oembed = f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json"
    try:
        data = json.loads(urllib.request.urlopen(oembed).read())
        print(vid, "|", data.get("title", ""))
    except Exception as e:
        print(vid, "|", e)
