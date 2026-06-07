const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const OUT = "/Users/tanbui/Downloads/top-hero-graphic.lottie.json";
const DOT_LOTTIE_OUT = "/Users/tanbui/Downloads/top-hero-graphic.lottie";
const W = 236;
const H = 220;
const HERO_X = 18;
const FR = 30;
const DURATION = 120;

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

function keys(points, ease = true) {
  return {
    a: 1,
    k: points.map((point, i) => ({
      t: point[0],
      s: Array.isArray(point[1]) ? point[1] : [point[1]],
      e: points[i + 1] ? (Array.isArray(points[i + 1][1]) ? points[i + 1][1] : [points[i + 1][1]]) : undefined,
      i: { x: [ease ? 0.42 : 1], y: [ease ? 1 : 1] },
      o: { x: [ease ? 0.58 : 0], y: [ease ? 0 : 0] },
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

function linePath(points, stroke) {
  return [
    {
      ty: "sh",
      ks: hold({
        i: points.map(() => [0, 0]),
        o: points.map(() => [0, 0]),
        v: points,
        c: false,
      }),
      nm: "Path",
    },
    { ty: "st", c: hold(rgb(stroke.color)), o: hold(stroke.opacity), w: hold(stroke.width), lc: 2, lj: 2, nm: "Stroke" },
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

const frameX = HERO_X + 100;
const frameY = 110;
const red = "#c73d2b";
const cream = "#fddbc6";

add(layer("Outer wireframe container", rect(200, 220, null, 4, { color: red, opacity: 15, width: 1 }), frameX, frameY));

[
  { x: HERO_X - 2, y: -2, pts: [[8, 0], [0, 0], [0, 8]], dot: [0, 0], h: [[16, 0], [12, 0]], v: [[0, 16], [0, 12]] },
  { x: HERO_X + 162, y: -2, pts: [[32, 0], [40, 0], [40, 8]], dot: [40, 0], h: [[24, 0], [28, 0]], v: [[40, 16], [40, 12]] },
  { x: HERO_X - 2, y: 182, pts: [[8, 40], [0, 40], [0, 32]], dot: [0, 40], h: [[16, 40], [12, 40]], v: [[0, 24], [0, 28]] },
  { x: HERO_X + 162, y: 182, pts: [[32, 40], [40, 40], [40, 32]], dot: [40, 40], h: [[24, 40], [28, 40]], v: [[40, 24], [40, 28]] },
].forEach((corner, i) => {
  add(layer(`Corner bracket ${i + 1}`, linePath(corner.pts, { color: red, opacity: 50, width: 1.5 }), corner.x, corner.y));
  add(layer(`Corner dash H ${i + 1}`, linePath(corner.h, { color: red, opacity: 30, width: 1 }), corner.x, corner.y));
  add(layer(`Corner dash V ${i + 1}`, linePath(corner.v, { color: red, opacity: 30, width: 1 }), corner.x, corner.y));
  add(layer(`Corner node ${i + 1}`, ellipse(6, 6, { color: red, opacity: 60 }), corner.x + corner.dot[0], corner.y + corner.dot[1]));
});

[
  { x: HERO_X - 10, y: 40, dy: 5, dur: 90, delay: 0 },
  { x: HERO_X + 210, y: 60, dy: -5, dur: 75, delay: 15 },
  { x: HERO_X - 8, y: 170, dy: 3, dur: 84, delay: 30 },
  { x: HERO_X + 208, y: 150, dy: -4, dur: 96, delay: 45 },
].forEach((p, i) => {
  add(layer(`Floating particle ${i + 1}`, ellipse(2, 2, { color: cream, opacity: 100 }), p.x + 1, p.y + 1, {
    o: keys([[0, 40], [p.delay, 40], [p.delay + p.dur / 2, 80], [p.delay + p.dur, 40], [DURATION, 40]]),
    p: keys([[0, [p.x + 1, p.y - p.dy, 0]], [p.delay + p.dur / 2, [p.x + 1, p.y + p.dy, 0]], [p.delay + p.dur, [p.x + 1, p.y - p.dy, 0]], [DURATION, [p.x + 1, p.y - p.dy, 0]]]),
  }));
});

add(layer("Horizontal scan line backdrop", rect(200, 1, { color: red, opacity: 30 }), frameX, -11, {
  p: keys([[0, [frameX, -11, 0]], [DURATION, [frameX, 231, 0]]], false),
}));

[
  { side: "left", x: HERO_X - 18, widths: [8, 12, 8], delays: [0, 9, 18], anchor: "left" },
  { side: "right", x: HERO_X + 218, widths: [8, 12, 8], delays: [6, 15, 24], anchor: "right" },
].forEach((group) => {
  group.widths.forEach((width, i) => {
    const x = group.anchor === "left" ? group.x + width / 2 : group.x - width / 2;
    add(layer(`${group.side} indicator ${i + 1}`, rect(width, 1, { color: red, opacity: i === 1 ? 40 : 50 }), x, frameY - 8 + i * 8, {
      s: keys([[0, [50, 100, 100]], [group.delays[i] + 30, [100, 100, 100]], [group.delays[i] + 60, [50, 100, 100]], [DURATION, [50, 100, 100]]]),
    }));
  });
});

add(layer("Top glow accent", rect(1, 12, { color: cream, opacity: 60 }), frameX, 6, {
  o: keys([[0, 20], [38, 60], [75, 20], [DURATION, 20]]),
}));
add(layer("Bottom glow accent", rect(1, 12, { color: cream, opacity: 60 }), frameX, H - 6, {
  o: keys([[0, 20], [38, 20], [75, 60], [DURATION, 20]]),
}));

const cardX = frameX;
const cardY = frameY;
add(layer("Pixel card outer glow", rect(108, 168, { color: red, opacity: 12 }, 12), cardX, cardY, { bm: 1 }));
add(layer("Pixel card frame", rect(100, 160, { color: "#000000", opacity: 100 }, 10, { color: red, opacity: 40, width: 0.9 }), cardX, cardY, {
  r: hold(-0.2),
}));

for (let x = -40; x <= 40; x += 20) {
  add(layer(`Pixel card vertical grid ${x}`, rect(1, 160, { color: red, opacity: 25 }), cardX + x, cardY));
}
for (let y = -60; y <= 60; y += 20) {
  add(layer(`Pixel card horizontal grid ${y}`, rect(100, 1, { color: red, opacity: 25 }), cardX, cardY + y));
}

const pad = 6.5;
const gapX = 1;
const gapY = 1.1;
const cellW = (100 - pad * 2 - gapX * 5) / 6;
const cellH = (160 - pad * 2 - gapY * 7) / 8;
pixels.forEach((pixel, i) => {
  const col = i % 6;
  const row = Math.floor(i / 6);
  const x = cardX - 50 + pad + cellW / 2 + col * (cellW + gapX);
  const y = cardY - 80 + pad + cellH / 2 + row * (cellH + gapY);
  const base = pixel.o * 100;
  const peak = Math.min(pixel.o * 250 + 10, 100);
  const delay = (i * 11) % 28;
  const duration = 30 + ((i * 7) % 31);
  const mid = Math.min(delay + Math.round(duration / 2), DURATION - 1);
  const end = Math.min(delay + duration, DURATION - 1);
  add(layer(`Pixel ${i + 1}`, rect(cellW, cellH, { color: pixel.c, opacity: 100 }, 1.66), x, y, {
    o: keys([[0, base], [delay, base], [mid, peak], [end, base], [DURATION, base]]),
  }));
});

add(layer("Pixel scanner glow", rect(100, 40, { color: red, opacity: 30 }), cardX, cardY - 90, {
  p: keys([[0, [cardX, cardY - 90, 0]], [DURATION - 1, [cardX, cardY + 90, 0]], [DURATION, [cardX, cardY - 90, 0]]], false),
}));
add(layer("Pixel scanner blur", rect(100, 8, { color: red, opacity: 65 }), cardX, cardY - 90, {
  p: keys([[0, [cardX, cardY - 90, 0]], [DURATION - 1, [cardX, cardY + 90, 0]], [DURATION, [cardX, cardY - 90, 0]]], false),
}));
add(layer("Pixel scanner line", rect(100, 3.3, { color: cream, opacity: 100 }), cardX, cardY - 90, {
  p: keys([[0, [cardX, cardY - 90, 0]], [DURATION - 1, [cardX, cardY + 90, 0]], [DURATION, [cardX, cardY - 90, 0]]], false),
}));

const lottie = {
  v: "5.12.2",
  fr: FR,
  ip: 0,
  op: DURATION,
  w: W,
  h: H,
  nm: "Top hero graphic assembly",
  ddd: 0,
  assets: [],
  layers,
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(lottie, null, 2)}\n`);

const dotLottieDir = "/tmp/top-hero-graphic-dotlottie";
fs.rmSync(dotLottieDir, { recursive: true, force: true });
fs.mkdirSync(path.join(dotLottieDir, "animations"), { recursive: true });
fs.writeFileSync(path.join(dotLottieDir, "animations", "top-hero.json"), JSON.stringify(lottie));
fs.writeFileSync(
  path.join(dotLottieDir, "manifest.json"),
  `${JSON.stringify(
    {
      version: "1.0",
      author: "Codex",
      animations: [{ id: "top-hero", loop: true, speed: 1, themeColor: "#000000" }],
    },
    null,
    2,
  )}\n`,
);
fs.rmSync(DOT_LOTTIE_OUT, { force: true });
execFileSync("zip", ["-qr", DOT_LOTTIE_OUT, "manifest.json", "animations/top-hero.json"], { cwd: dotLottieDir });

console.log(OUT);
console.log(DOT_LOTTIE_OUT);
