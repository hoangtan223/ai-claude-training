const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const OUT = "/Users/tanbui/Downloads/figma-loading-animation.lottie.json";
const DOT_LOTTIE_OUT = "/Users/tanbui/Downloads/figma-loading-animation.lottie";
const W = 375;
const H = 812;
const FR = 30;

const bgDots = [
  { bg: "#f79c6e", left: 43.5, top: 26.42, size: 1, opacity: 0.29 },
  { bg: "#f7b96e", left: 189, top: 427.93, size: 2, opacity: 0.61 },
  { bg: "#f7d76e", left: 334.52, top: 78.55, size: 3, opacity: 0.19 },
  { bg: "#f7f56e", left: 86.75, top: 491.84, size: 4, opacity: 0.17 },
  { bg: "#f7b76e", left: 232.25, top: 118.82, size: 1, opacity: 0.31 },
  { bg: "#f7d56e", left: 377.77, top: 522.58, size: 2, opacity: 0.53 },
  { bg: "#f7f36e", left: 130.01, top: 169.19, size: 3, opacity: 0.24 },
  { bg: "#f7b56e", left: 275.52, top: 584.27, size: 4, opacity: 0.18 },
  { bg: "#f7d36e", left: 27.77, top: 207.48, size: 1, opacity: 0.42 },
  { bg: "#f7f06e", left: 173.27, top: 612.96, size: 2, opacity: 0.74 },
  { bg: "#f7b36e", left: 318.78, top: 267.57, size: 3, opacity: 0.15 },
  { bg: "#f7d06e", left: 71.02, top: 674.83, size: 4, opacity: 0.22 },
  { bg: "#f7ee6e", left: 216.54, top: 295.13, size: 1, opacity: 0.67 },
  { bg: "#f7b06e", left: 362.03, top: 717.11, size: 2, opacity: 0.3 },
  { bg: "#f7ce6e", left: 114.28, top: 360.74, size: 3, opacity: 0.15 },
  { bg: "#f7ec6e", left: 259.79, top: -11, size: 4, opacity: 0.27 },
  { bg: "#f7ae6e", left: 12.03, top: 391.32, size: 1, opacity: 0.5 },
  { bg: "#f7cc6e", left: 157.55, top: 22.6, size: 2, opacity: 0.76 },
  { bg: "#f7ea6e", left: 303.05, top: 453.89, size: 3, opacity: 0.15 },
  { bg: "#f7ac6e", left: 55.28, top: 77.64, size: 4, opacity: 0.36 },
  { bg: "#f7c96e", left: 200.8, top: 489.24, size: 1, opacity: 0.36 },
  { bg: "#f7e76e", left: 346.3, top: 135.2, size: 2, opacity: 0.16 },
  { bg: "#f7a96e", left: 98.56, top: 544.63, size: 3, opacity: 0.19 },
  { bg: "#f7c76e", left: 244.05, top: 171.35, size: 4, opacity: 0.35 },
  { bg: "#f7e56e", left: 389.55, top: 576.26, size: 1, opacity: 0.56 },
  { bg: "#f7a76e", left: 141.81, top: 228.1, size: 2, opacity: 0.16 },
  { bg: "#f7c56e", left: 287.31, top: 636.12, size: 3, opacity: 0.22 },
  { bg: "#f7e36e", left: 39.57, top: 260.33, size: 4, opacity: 0.46 },
];

const pixels = [
  { c: "#fddbc6", o: 0.83 }, { c: "#c73d2b", o: 0.02 }, { c: "#c73d2b", o: 0.05 }, { c: "#c73d2b", o: 0.01 }, { c: "#fddbc6", o: 0.09 }, { c: "#c73d2b", o: 0.11 },
  { c: "#fddbc6", o: 0.79 }, { c: "#fddbc6", o: 0.02 }, { c: "#c73d2b", o: 0.01 }, { c: "#c73d2b", o: 0.01 }, { c: "#c73d2b", o: 0.04 }, { c: "#fddbc6", o: 0.06 },
  { c: "#fddbc6", o: 0.32 }, { c: "#c73d2b", o: 0.05 }, { c: "#c73d2b", o: 0.06 }, { c: "#fddbc6", o: 0.08 }, { c: "#fddbc6", o: 0.02 }, { c: "#c73d2b", o: 0.05 },
  { c: "#fddbc6", o: 0.41 }, { c: "#c73d2b", o: 0.03 }, { c: "#c73d2b", o: 0.89 }, { c: "#fddbc6", o: 0.09 }, { c: "#fddbc6", o: 0.1 }, { c: "#fddbc6", o: 0.06 },
  { c: "#c73d2b", o: 0.04 }, { c: "#c73d2b", o: 0.08 }, { c: "#c73d2b", o: 0 }, { c: "#fddbc6", o: 0.04 }, { c: "#c73d2b", o: 0.08 }, { c: "#c73d2b", o: 0.85 },
  { c: "#fddbc6", o: 0 }, { c: "#fddbc6", o: 0.07 }, { c: "#fddbc6", o: 0.18 }, { c: "#c73d2b", o: 0.16 }, { c: "#c73d2b", o: 0.01 }, { c: "#c73d2b", o: 0.11 },
  { c: "#fddbc6", o: 0.14 }, { c: "#c73d2b", o: 0.09 }, { c: "#fddbc6", o: 0.22 }, { c: "#c73d2b", o: 0.07 }, { c: "#fddbc6", o: 0.13 }, { c: "#c73d2b", o: 0.04 },
  { c: "#c73d2b", o: 0.17 }, { c: "#fddbc6", o: 0.11 }, { c: "#c73d2b", o: 0.03 }, { c: "#fddbc6", o: 0.26 }, { c: "#c73d2b", o: 0.08 }, { c: "#fddbc6", o: 0.15 },
];

const steps = [
  { id: 1, text: "Phân tích yêu cầu", start: 0, end: 188 },
  { id: 2, text: "Thu thập vật liệu", start: 203, end: 391 },
  { id: 3, text: "Đang dệt các điểm ảnh 4K", start: 406, end: 906 },
  { id: 4, text: "Hoàn thiện chi tiết", start: 921, end: 1221 },
];
const totalFrames = 1236;

function rgb(hex) {
  const n = Number.parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255, 1];
}

function hold(value) {
  return { a: 0, k: value };
}

function linearKeys(points) {
  return {
    a: 1,
    k: points.map((p, i) => ({
      t: p[0],
      s: Array.isArray(p[1]) ? p[1] : [p[1]],
      e: points[i + 1] ? (Array.isArray(points[i + 1][1]) ? points[i + 1][1] : [points[i + 1][1]]) : undefined,
      i: { x: [0.833], y: [1] },
      o: { x: [0.167], y: [0] },
    })),
  };
}

function transform(x, y, opts = {}) {
  return {
    o: opts.o || hold(100),
    r: opts.r || hold(0),
    p: opts.p || hold([x, y, 0]),
    a: hold(opts.a || [0, 0, 0]),
    s: opts.s || hold([100, 100, 100]),
  };
}

function rectShape(w, h, fill, opts = {}) {
  const shapes = [{ ty: "rc", p: hold([0, 0]), s: opts.s || hold([w, h]), r: hold(opts.r || 0), nm: "Rect" }];
  if (opts.stroke) {
    shapes.push({ ty: "st", c: hold(rgb(opts.stroke.color)), o: hold(opts.stroke.opacity), w: hold(opts.stroke.width), lc: 2, lj: 2, nm: "Stroke" });
  }
  if (fill) shapes.push({ ty: "fl", c: hold(rgb(fill.color)), o: hold(fill.opacity), r: 1, nm: "Fill" });
  shapes.push({ ty: "tr", p: hold([0, 0]), a: hold([0, 0]), s: hold([100, 100]), r: hold(0), o: hold(100), sk: hold(0), sa: hold(0) });
  return shapes;
}

function ellipseShape(w, h, fill, opts = {}) {
  const shapes = [{ ty: "el", p: hold([0, 0]), s: hold([w, h]), nm: "Ellipse" }];
  if (opts.stroke) shapes.push({ ty: "st", c: hold(rgb(opts.stroke.color)), o: hold(opts.stroke.opacity), w: hold(opts.stroke.width), lc: 2, lj: 2, nm: "Stroke" });
  if (fill) shapes.push({ ty: "fl", c: hold(rgb(fill.color)), o: hold(fill.opacity), r: 1, nm: "Fill" });
  shapes.push({ ty: "tr", p: hold([0, 0]), a: hold([0, 0]), s: hold([100, 100]), r: hold(0), o: hold(100), sk: hold(0), sa: hold(0) });
  return shapes;
}

function shapeLayer(name, shapes, x, y, opts = {}) {
  return {
    ddd: 0,
    ind: opts.ind,
    ty: 4,
    nm: name,
    sr: 1,
    ks: transform(x, y, opts),
    ao: 0,
    shapes,
    ip: opts.ip ?? 0,
    op: opts.op ?? totalFrames,
    st: 0,
    bm: opts.bm ?? 0,
  };
}

function textDocument(text, size, color, justify = 0) {
  return {
    s: {
      sz: [330, 40],
      ps: [-165, -20],
      s: size,
      f: "Inter-Medium",
      t: text,
      j: justify,
      tr: 0,
      lh: size * 1.3,
      ls: 0,
      fc: rgb(color).slice(0, 3),
    },
    t: 0,
  };
}

function textLayer(name, text, x, y, size, color, opts = {}) {
  return {
    ddd: 0,
    ind: opts.ind,
    ty: 5,
    nm: name,
    sr: 1,
    ks: transform(x, y, opts),
    ao: 0,
    t: { d: { k: opts.source || [textDocument(text, size, color, opts.justify ?? 0)] }, p: {}, m: { g: 1, a: { a: 0, k: [0, 0] } }, a: [] },
    ip: opts.ip ?? 0,
    op: opts.op ?? totalFrames,
    st: 0,
    bm: 0,
  };
}

function progressTextSource(step) {
  const keys = [];
  for (let p = 0; p <= 100; p += 5) {
    const t = Math.round(step.start + ((step.end - step.start) * p) / 100);
    keys.push({ t, s: textDocument(`${p}%`, 15, "#fddbc6") });
  }
  return keys;
}

const layers = [];
let ind = 1;
const add = (layer) => {
  layer.ind = ind++;
  layers.unshift(layer);
};

add(shapeLayer("Screen background", rectShape(W, H, { color: "#0d0d0f", opacity: 100 }, { r: 40 }), W / 2, H / 2));
add(shapeLayer("Dark radial glow base", ellipseShape(540, 540, { color: "#1e0c04", opacity: 46 }), W / 2, 284, { bm: 1 }));
add(shapeLayer("Orange ambient glow", ellipseShape(416, 416, { color: "#e86830", opacity: 18 }), W / 2, 225, { bm: 1 }));

bgDots.forEach((dot, i) => {
  const dur = 90 + (i % 3) * 30;
  add(shapeLayer(`Background dot ${i + 1}`, ellipseShape(dot.size, dot.size, { color: dot.bg, opacity: 100 }), dot.left + dot.size / 2, dot.top + dot.size / 2, {
    o: linearKeys([[0, [dot.opacity * 100]], [dur / 2, [dot.opacity * 30]], [dur, [dot.opacity * 100]], [totalFrames, [dot.opacity * 100]]]),
    p: linearKeys([[0, [dot.left, dot.top, 0]], [dur / 2, [dot.left, dot.top - 4, 0]], [dur, [dot.left, dot.top, 0]], [totalFrames, [dot.left, dot.top, 0]]]),
  }));
});

const heroX = W / 2;
const heroY = 220;
add(shapeLayer("Hero wireframe", rectShape(200, 220, null, { r: 4, stroke: { color: "#c73d2b", opacity: 15, width: 1 } }), heroX, heroY));

[
  [86, 110], [104, 110], [86, 128],
  [289, 110], [271, 110], [289, 128],
  [86, 330], [104, 330], [86, 312],
  [289, 330], [271, 330], [289, 312],
].forEach(([x, y], i) => {
  const horizontal = i % 3 !== 2;
  add(shapeLayer(`Corner bracket ${i + 1}`, rectShape(horizontal ? 16 : 2, horizontal ? 2 : 16, { color: "#c73d2b", opacity: i % 3 === 0 ? 50 : 30 }), x, y));
});

[
  [76, 160, 90], [299, 180, 75], [78, 280, 84], [297, 260, 96],
].forEach(([x, y, dur], i) => {
  add(shapeLayer(`Hero floating particle ${i + 1}`, ellipseShape(2, 2, { color: "#fddbc6", opacity: 80 }), x, y, {
    o: linearKeys([[0, [40]], [dur / 2, [80]], [dur, [40]], [totalFrames, [40]]]),
    p: linearKeys([[0, [x, y - 5, 0]], [dur / 2, [x, y + 5, 0]], [dur, [x, y - 5, 0]], [totalFrames, [x, y - 5, 0]]]),
  }));
});

add(shapeLayer("Hero scan line backdrop", rectShape(200, 1, { color: "#c73d2b", opacity: 30 }), heroX, 110, {
  p: linearKeys([[0, [heroX, 105, 0]], [120, [heroX, 335, 0]], [121, [heroX, 105, 0]], [totalFrames, [heroX, 105, 0]]]),
}));

add(shapeLayer("Pixel card frame", rectShape(100, 160, { color: "#000000", opacity: 100 }, { r: 10, stroke: { color: "#c73d2b", opacity: 40, width: 1 } }), heroX, heroY));
for (let x = -40; x <= 40; x += 20) add(shapeLayer(`Grid vertical ${x}`, rectShape(1, 160, { color: "#c73d2b", opacity: 25 }), heroX + x, heroY));
for (let y = -60; y <= 60; y += 20) add(shapeLayer(`Grid horizontal ${y}`, rectShape(100, 1, { color: "#c73d2b", opacity: 25 }), heroX, heroY + y));

const cellW = 13.75;
const cellH = 17.8;
pixels.forEach((p, i) => {
  const col = i % 6;
  const row = Math.floor(i / 6);
  const x = heroX - 40.5 + col * (cellW + 1) + cellW / 2;
  const y = heroY - 67.3 + row * (cellH + 1.1) + cellH / 2;
  const base = p.o * 100;
  const peak = Math.min(p.o * 250 + 10, 100);
  add(shapeLayer(`Pixel ${i + 1}`, rectShape(cellW, cellH, { color: p.c, opacity: 100 }, { r: 1.7 }), x, y, {
    o: linearKeys([[0, [base]], [30 + (i % 12) * 3, [peak]], [90 + (i % 10) * 3, [base]], [totalFrames, [base]]]),
  }));
});

add(shapeLayer("Pixel scanner glow", rectShape(100, 40, { color: "#c73d2b", opacity: 32 }), heroX, heroY - 90, {
  p: linearKeys([[0, [heroX, heroY - 90, 0]], [90, [heroX, heroY + 90, 0]], [91, [heroX, heroY - 90, 0]], [totalFrames, [heroX, heroY - 90, 0]]]),
}));
add(shapeLayer("Pixel scanner line", rectShape(100, 3.3, { color: "#fddbc6", opacity: 100 }), heroX, heroY - 90, {
  p: linearKeys([[0, [heroX, heroY - 90, 0]], [90, [heroX, heroY + 90, 0]], [91, [heroX, heroY - 90, 0]], [totalFrames, [heroX, heroY - 90, 0]]]),
}));

add(textLayer("Title", "Đang tạo ảnh của bạn...", heroX, 385, 20, "#fddbc6", { justify: 1 }));
add(textLayer("Subtitle", "Quá trình có thể mất vài phút. Vui lòng chờ...", heroX, 418, 13, "#9b9b9b", { justify: 1 }));

const stepX = 52;
steps.forEach((step, idx) => {
  const y = 476 + idx * 62;
  const visibleFrom = idx === 0 ? 0 : step.start - 12;
  add(textLayer(`Step ${step.id} label`, step.text, stepX + 40, y + 1, 15, "#fddbc6", { ip: visibleFrom, op: totalFrames }));
  add(shapeLayer(`Step ${step.id} icon backplate`, ellipseShape(22, 22, { color: "#0d0d0f", opacity: 100 }), stepX, y, { ip: visibleFrom, op: totalFrames }));
  add(shapeLayer(`Step ${step.id} active spinner`, ellipseShape(17.6, 17.6, null, { stroke: { color: "#00e5ff", opacity: 80, width: 1.5 } }), stepX, y, {
    ip: step.start,
    op: step.end,
    r: linearKeys([[step.start, [0]], [step.start + 45, [360]], [step.start + 90, [720]], [step.end, [720 + (step.end - step.start) * 8]]]),
  }));
  add(shapeLayer(`Step ${step.id} completed ring`, ellipseShape(20, 20, null, { stroke: { color: "#00ff66", opacity: 100, width: 1.83 } }), stepX, y, { ip: step.end, op: totalFrames }));
  add(shapeLayer(`Step ${step.id} completed check A`, rectShape(8, 2, { color: "#00ff66", opacity: 100 }, { r: 1 }), stepX - 2, y + 3, { ip: step.end, op: totalFrames, r: hold(45) }));
  add(shapeLayer(`Step ${step.id} completed check B`, rectShape(13, 2, { color: "#00ff66", opacity: 100 }, { r: 1 }), stepX + 4, y + 1, { ip: step.end, op: totalFrames, r: hold(-45) }));
  if (idx < steps.length - 1) {
    add(shapeLayer(`Step ${step.id} connector`, rectShape(2, 40, { color: "#ffffff", opacity: 10 }), stepX, y + 35, { ip: visibleFrom, op: totalFrames }));
  }
  add(shapeLayer(`Step ${step.id} progress track`, rectShape(186, 6.6, { color: "#000000", opacity: 100 }, { r: 3.3, stroke: { color: "#ffffff", opacity: 8, width: 0.6 } }), stepX + 133, y + 31, { ip: step.start, op: step.end }));
  add(shapeLayer(`Step ${step.id} progress fill`, rectShape(186, 6.6, { color: "#f19b7f", opacity: 100 }, { r: 3.3, s: linearKeys([[step.start, [0, 6.6]], [step.end, [186, 6.6]]]) }), stepX + 40, y + 31, {
    ip: step.start,
    op: step.end,
    a: [0, 0, 0],
  }));
  add(shapeLayer(`Step ${step.id} progress shimmer`, rectShape(60, 6.6, { color: "#ffffff", opacity: 35 }, { r: 3.3 }), stepX + 40, y + 31, {
    ip: step.start,
    op: step.end,
    p: linearKeys([[step.start, [stepX + 50, y + 31, 0]], [step.start + 75, [stepX + 230, y + 31, 0]], [step.end, [stepX + 230, y + 31, 0]]]),
  }));
  add(textLayer(`Step ${step.id} percentage`, "0%", stepX + 258, y + 31, 15, "#fddbc6", { ip: step.start, op: step.end, source: progressTextSource(step) }));
  [0, 1, 2].forEach((dot) => {
    add(textLayer(`Step ${step.id} animated dot ${dot + 1}`, ".", stepX + 40 + step.text.length * 7.2 + dot * 5, y + 1, 15, "#fddbc6", {
      ip: step.start,
      op: step.end,
      o: linearKeys([[step.start + dot * 9, [0]], [step.start + 15 + dot * 9, [100]], [step.start + 30 + dot * 9, [0]], [step.end, [0]]]),
    }));
  });
});

const lottie = {
  v: "5.12.2",
  fr: FR,
  ip: 0,
  op: totalFrames,
  w: W,
  h: H,
  nm: "Figma Make loading screen",
  ddd: 0,
  assets: [],
  fonts: { list: [{ fName: "Inter-Medium", fFamily: "Inter", fStyle: "Medium", ascent: 75 }] },
  layers,
  markers: steps.map((s) => ({ tm: s.start, cm: `Step ${s.id}: ${s.text}`, dr: s.end - s.start })),
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(lottie, null, 2)}\n`);
const dotLottieDir = "/tmp/figma-loading-animation-dotlottie";
fs.rmSync(dotLottieDir, { recursive: true, force: true });
fs.mkdirSync(path.join(dotLottieDir, "animations"), { recursive: true });
fs.writeFileSync(path.join(dotLottieDir, "animations", "loading.json"), JSON.stringify(lottie));
fs.writeFileSync(
  path.join(dotLottieDir, "manifest.json"),
  `${JSON.stringify(
    {
      version: "1.0",
      author: "Codex",
      animations: [
        {
          id: "loading",
          loop: true,
          speed: 1,
          themeColor: "#0d0d0f",
        },
      ],
    },
    null,
    2,
  )}\n`,
);
fs.rmSync(DOT_LOTTIE_OUT, { force: true });
execFileSync("zip", ["-qr", DOT_LOTTIE_OUT, "manifest.json", "animations/loading.json"], { cwd: dotLottieDir });
console.log(OUT);
console.log(DOT_LOTTIE_OUT);
