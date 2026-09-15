from PIL import Image, ImageFilter
from pathlib import Path

ROOT = Path(r"c:\Users\ASUS\Asilsmelody\public\images\exhibits")
SRC = Path(
    r"C:\Users\ASUS\.cursor\projects\c-Users-ASUS-Asilsmelody\assets"
    r"\c__Users_ASUS_AppData_Roaming_Cursor_User_workspaceStorage_"
    r"1a929d5d8a800f9e020aa1fde3e2aea1_images_image-5cf9629f-bde9-4b21-b513-b99c97b84dd2.png"
)


def fit_cover_45(im: Image.Image, target_h: int = 2000) -> Image.Image:
    im = im.convert("RGB")
    w, h = im.size
    target_ratio = 4 / 5
    current = w / h
    if current > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        im = im.crop((left, 0, left + new_w, h))
    elif current < target_ratio:
        new_h = int(w / target_ratio)
        top = (h - new_h) // 2
        im = im.crop((0, top, w, top + new_h))
    tw = int(target_h * target_ratio)
    return im.resize((tw, target_h), Image.Resampling.LANCZOS)


cover = Image.open(SRC).convert("RGB")
bw, bh = cover.size
btn = (int(bw * 0.62), int(bh * 0.88), bw - 2, bh - 2)
sample = cover.crop((btn[0] - 40, btn[1], btn[0] - 5, btn[3]))
sample = sample.resize((btn[2] - btn[0], btn[3] - btn[1]), Image.Resampling.BILINEAR)
cover.paste(sample, (btn[0], btn[1]))
region = cover.crop(btn).filter(ImageFilter.GaussianBlur(1.2))
cover.paste(region, (btn[0], btn[1]))

fitted = fit_cover_45(cover, 2000)
out_webp = ROOT / "anlat-sen-ben-dinlerim.webp"
out_jpg = ROOT / "anlat-sen-ben-dinlerim.jpg"
fitted.save(out_jpg, "JPEG", quality=98, optimize=True, subsampling=0)
fitted.save(out_webp, "WEBP", quality=95, method=6)
print("anlat-sen", fitted.size, out_webp.stat().st_size, out_jpg.stat().st_size)

used = [
    "asil-azmaz-bal-kokmaz",
    "yildirim-kivilcim",
    "abece",
    "firavunun-tovbesi",
    "my-kahin",
    "gercek-zaman",
    "serbest-zaman",
    "2x2-5",
]


def best_source(stem: str) -> Path | None:
    candidates = [ROOT / f"{stem}.jpg", ROOT / f"{stem}.png", ROOT / f"{stem}.webp"]
    existing = [p for p in candidates if p.exists()]
    if not existing:
        return None

    def score(p: Path):
        i = Image.open(p)
        return (i.size[0] * i.size[1], p.stat().st_size)

    return max(existing, key=score)


for stem in used:
    src = best_source(stem)
    if not src:
        print("missing", stem)
        continue
    im = Image.open(src).convert("RGB")
    w, h = im.size
    long_edge = max(w, h)
    if long_edge < 1600:
        scale = 1600 / long_edge
        im = im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
        print(stem, "upscaled to", im.size)
    else:
        print(stem, "keep", im.size, "from", src.name)
    dest = ROOT / f"{stem}.webp"
    im.save(dest, "WEBP", quality=95, method=6)
    print("  ->", dest.name, dest.stat().st_size)

test = ROOT / "_yt_test.jpg"
if test.exists():
    test.unlink()
print("done")
