const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const OUT = "/Users/tanbui/Downloads/pixel-card-animation.lottie.json";
const DOT_LOTTIE_OUT = "/Users/tanbui/Downloads/pixel-card-animation.lottie";
const W = 100;
const H = 160;
const FR = 30;
const DURATION = 90;

const pixels = [
  { c: "#fddbc6", o: 0.83 }, { c: "#c73d2b", o: 0.02 }, { c: "#c73d2b", o: 0.05 }, { c: "#c73d2b", o: 0.01 }, { c: "#fddbc6", o: 0.09 }, { c: "#c73d2b", o: 0.11 },
  { c: "#fddbc6", o: 0.79 }, { c: "#fddbc6", o: 0.02 }, { c: "#c73d2b", o: 0.01 }, { c: "#c73d2b", o: 0.01 }, { c: "#c73d2b", o: 0.04 }, { c: "#fddbc6", o: 0.06 },
  { c: "#fddbc6", o: 0.32 }, { c: "#c73d2b", o: 0.05 }, { c: "#c73d2b", o: 0.06 }, { c: "#fddbc6", o: 0.08 }, { c: "#fddbc6", o: 0.02 }, { c: "#c73d2b", o: 0.05 },
  { c: "#fddbc6", o: 0.41 }, { c: "#c73d2b", o: 0.03 }, { c: "#c73d2b", o: 0.89 }, { c: "#fddbc6", o: 0.09 }, { c: "#fddbc6", o: 0.10 }, { c: "#fddbc6", o: 0.06 },
  { c: "#c73d2b", o: 0.04 }, { c: "#c73d2b", o: 0.08 }, { c: "#c73d2b", o: 0.00 }, { c: "#fddbc6", o: 0.04 }, { c: "#c73d2b", o: 0.08 }, { c: "#c73d2b", o: 0.85 },
  { c: "#fddbc6", o: 0.00 }, { c: "#fddbc6", o: 0.07 }, { c: "#fddbc6", o: 0.18 }, { c: "#c73d2b", o: 0.16 }, { c: "#c73d2b", o: 0.01 }, { c: "#c73d2b", o: 0.11 },
  { c: "#fddbc6", o: 0.14 }, { c: "#c73d2b", o: 0.09 }, { c: "#fddbc6", o: 0.22 }, { c: "#c73d2b", o: 0.07 }, { c: "#fddbc6", o: 0.13 }, { c: "#c73d2b", o: 0.04 },
  { c: "#c73d2b", o: 0.17 }, { c: "#fddbc6", o: 0.11 }, { c: "#c73d2b", o: 0.03 }, { c: "#fddbc6", o: 0.26 }, { c: "#c73d2b", o: 0.08 }, { c: "#fddbc6", o: 0.15 },
];

function rgb(hex) {
  const n = Number.parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255, 1];
}

function hold(k) {
  return { a: 0, k };
}

function keys(points) {
  return {
    a: 1,
    k: points.map((point, i) => ({
      t: point[0],
      s: Array.isArray(point[1]) ? point[1] : [point[1]],
      e: points[i + 1] ? (Array.isArray(points[i + 1][1]) ? points[i + 1][1] : [points[i + 1][1]]) : undefined,
      i: { x: [0.42], y: [1] },
      o: { x: [0.58], y: [0] },
    })),
  };
}

function transform(x, y, extra = {}) {
  return {
    o: extra.o || hold(100),
    r: extra.r || hold(0),
    p: extra.p || hold([x, y, 0]),
    a: hold(extra.a || [0, 0, 0]),
    s: extra.s || hold([100, 100, 100]),
  };
}

function rect(w, h, fill, radius = 0, stroke = null) {
  const shapes = [{ ty: "rc", p: hold([0, 0]), s: hold([w, h]), r: hold(radius), nm: "Rect" }];
  if (fill) shapes.push({ ty: "fl", c: hold(rgb(fill.color)), o: hold(fill.opacity), r: 1, nm: "Fill" });
  if (stroke) shapes.push({ ty: "st", c: hold(rgb(stroke.color)), o: hold(stroke.opacity), w: hold(stroke.width), lc: 2, lj: 2, nm: "Stroke" });
  shapes.push({ ty: "tr", p: hold([0, 0]), a: hold([0, 0]), s: hold([100, 100]), r: hold(0), o: hold(100), sk: hold(0), sa: hold(0) });
  return shapes;
}

function ellipse(w, h, fill) {
  return [
    { ty: "el", p: hold([0, 0]), s: hold([w, h]), nm: "Ellipse" },
    { ty: "fl", c: hold(rgb(fill.color)), o: hold(fill.opacity), r: 1, nm: "Fill" },
    { ty: "tr", p: hold([0, 0]), a: hold([0, 0]), s: hold([100, 100]), r: hold(0), o: hold(100), sk: hold(0), sa: hold(0) },
  ];
}

function layer(name, shapes, x, y, extra = {}) {
  return {
    ddd: 0,
    ind: extra.ind,
    ty: 4,
    nm: name,
    sr: 1,
    ks: transform(x, y, extra),
    ao: 0,
    shapes,
    ip: extra.ip ?? 0,
    op: extra.op ?? DURATION,
    st: 0,
    bm: extra.bm ?? 0,
  };
}

const layers = [];
let ind = 1;
function add(l) {
  l.ind = ind++;
  layers.unshift(l);
}

add(layer("Card background", rect(W, H, { color: "#000000", opacity: 100 }, 10, { color: "#c73d2b", opacity: 70, width: 1.8 }), W / 2, H / 2));
add(layer("Subtle bottom glow", rect(W - 8, 22, { color: "#c73d2b", opacity: 26 }, 6), W / 2, H - 13, { bm: 1 }));
add(layer("Bottom highlight", rect(W - 8, 2, { color: "#fddbc6", opacity: 62 }, 1), W / 2, H - 8));

const pad = 6.5;
const gapX = 1;
const gapY = 1.1;
const cellW = (W - pad * 2 - gapX * 5) / 6;
const cellH = (H - pad * 2 - gapY * 7) / 8;

pixels.forEach((pixel, i) => {
  const col = i % 6;
  const row = Math.floor(i / 6);
  const x = pad + cellW / 2 + col * (cellW + gapX);
  const y = pad + cellH / 2 + row * (cellH + gapY);
  const base = pixel.o * 100;
  const peak = Math.min(pixel.o * 250 + 10, 100);
  const delay = (i * 11) % 28;
  const duration = 30 + ((i * 7) % 31);
  const mid = Math.min(delay + Math.round(duration / 2), DURATION - 1);
  const end = Math.min(delay + duration, DURATION - 1);

  add(layer(`Pixel ${i + 1}`, rect(cellW, cellH, { color: pixel.c, opacity: 100 }, 1.66), x, y, {
    o: keys([
      [0, base],
      [delay, base],
      [mid, peak],
      [end, base],
      [DURATION, base],
    ]),
  }));
});

add(layer("Scan glow", rect(W - 2, 40, { color: "#c73d2b", opacity: 24 }, 0), W / 2, -20, {
  p: keys([
    [0, [W / 2, -20, 0]],
    [DURATION - 1, [W / 2, H + 20, 0]],
    [DURATION, [W / 2, -20, 0]],
  ]),
}));
add(layer("Scan line", rect(W - 2, 3.3, { color: "#fddbc6", opacity: 100 }, 0), W / 2, -2, {
  p: keys([
    [0, [W / 2, -2, 0]],
    [DURATION - 1, [W / 2, H + 2, 0]],
    [DURATION, [W / 2, -2, 0]],
  ]),
}));
add(layer("Top red edge glow", rect(W - 12, 2, { color: "#c73d2b", opacity: 45 }, 1), W / 2, 8));

const lottie = {
  v: "5.12.2",
  fr: FR,
  ip: 0,
  op: DURATION,
  w: W,
  h: H,
  nm: "Pixel card animation",
  ddd: 0,
  assets: [],
  layers,
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(lottie, null, 2)}\n`);

const dotLottieDir = "/tmp/pixel-card-animation-dotlottie";
fs.rmSync(dotLottieDir, { recursive: true, force: true });
fs.mkdirSync(path.join(dotLottieDir, "animations"), { recursive: true });
fs.writeFileSync(path.join(dotLottieDir, "animations", "pixel-card.json"), JSON.stringify(lottie));
fs.writeFileSync(
  path.join(dotLottieDir, "manifest.json"),
  `${JSON.stringify(
    {
      version: "1.0",
      author: "Codex",
      animations: [{ id: "pixel-card", loop: true, speed: 1, themeColor: "#000000" }],
    },
    null,
    2,
  )}\n`,
);
fs.rmSync(DOT_LOTTIE_OUT, { force: true });
execFileSync("zip", ["-qr", DOT_LOTTIE_OUT, "manifest.json", "animations/pixel-card.json"], { cwd: dotLottieDir });

console.log(OUT);
console.log(DOT_LOTTIE_OUT);
