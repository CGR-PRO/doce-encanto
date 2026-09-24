/* =====================================================================
   ÍCONES
   ===================================================================== */
const ICONS = {
  logo:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 32h24"/><path d="M11 32V22h18v10"/><path d="M9 22c0-2.8 1.8-4 3.5-4h15c1.7 0 3.5 1.2 3.5 4"/><path d="M11 26c2 1.3 4 1.3 6 0s4-1.3 6 0 4 1.3 6 0"/><path d="M20 18v-4"/><path d="M20 10.5c1.4 0 2-1.1 2-2.2 0-1.6-2-3.3-2-3.3s-2 1.7-2 3.3c0 1.1.6 2.2 2 2.2z" fill="currentColor" stroke="none"/></svg>',
  bag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.08.9.9-3-.2-.31a8.2 8.2 0 1 1 6.88 3.74zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.17-.29.19-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.66.31 2.77 2.77 0 0 0-.86 2.06 4.8 4.8 0 0 0 1 2.55 11 11 0 0 0 4.2 3.7c1.56.67 2.17.73 2.95.61.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.11-.22-.17-.47-.3z"/></svg>',
  ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  minus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  left:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  right:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  star:'<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.6L10 14.7l-5.1 2.7 1-5.6-4.1-4 5.7-.8z"/></svg>',
  info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  hand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6" width="19" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v5M18 9.5v5"/></svg>',
  whisk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 21v-5"/><path d="M12 16c-3.5 0-5-4-5-8a5 5 0 0 1 10 0c0 4-1.5 8-5 8z"/><path d="M12 16c-1.5 0-2.3-4-2.3-8S10.5 3 12 3s2.3 1 2.3 5-.8 8-2.3 8z"/></svg>'
};

/* =====================================================================
   ILUSTRAÇÕES (SVG gerado) — substituem fotos no modelo.
   Troque por fotos reais em CONFIG usando uma URL em "image".
   ===================================================================== */
const ART = (() => {
  let n = 0;
  const nid = () => 'a' + (++n);
  const R = v => Math.round(v * 10) / 10;
  function sh(hex, p) {
    const c = hex.replace('#', '');
    const f = [0, 2, 4].map(i => parseInt(c.substr(i, 2), 16));
    const t = p < 0 ? 0 : 255, a = Math.abs(p);
    return '#' + f.map(v => Math.round((t - v) * a + v).toString(16).padStart(2, '0')).join('');
  }
  function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  function frame(o, defs, body) {
    const id = nid(), w = o.w || 400, h = o.h || 400, ty = o.tableY;
    return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><defs><radialGradient id="${id}g" cx=".45" cy=".3" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".42"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><linearGradient id="${id}t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".07"/><stop offset=".3" stop-color="#000" stop-opacity="0"/></linearGradient>${defs}</defs><rect width="${w}" height="${h}" fill="${o.bg || '#EBDDCB'}"/>${o.table ? `<rect y="${ty}" width="${w}" height="${h - ty}" fill="${o.table}"/><rect y="${ty}" width="${w}" height="${h - ty}" fill="url(#${id}t)"/>` : ''}<rect width="${w}" height="${h}" fill="url(#${id}g)"/>${body}</svg>`;
  }
  const shadeDef = id => `<linearGradient id="${id}" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#1e0f09" stop-opacity=".30"/><stop offset=".3" stop-color="#fff" stop-opacity=".16"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#1e0f09" stop-opacity=".36"/></linearGradient>`;
  const cyl = (cx, y, r, ry, h) => `M${R(cx - r)} ${R(y)}L${R(cx - r)} ${R(y + h)}A${R(r)} ${R(ry)} 0 0 0 ${R(cx + r)} ${R(y + h)}L${R(cx + r)} ${R(y)}Z`;
  const ball = (x, y, r, c, hi = .35) => `<circle cx="${R(x)}" cy="${R(y)}" r="${R(r)}" fill="${c}"/><circle cx="${R(x - r * .35)}" cy="${R(y - r * .38)}" r="${R(r * .3)}" fill="#fff" opacity="${hi}"/>`;
  const soft = (cx, cy, rx, ry, o = .07) => [1.15, 1, .82].map(k => `<ellipse cx="${R(cx)}" cy="${R(cy)}" rx="${R(rx * k)}" ry="${R(ry * k)}" fill="#3a2016" opacity="${o}"/>`).join('');

  function sprinkles(x, y, r, colors, rnd, k = 9) {
    let s = '';
    for (let i = 0; i < k; i++) {
      const a = rnd() * 6.28, d = Math.sqrt(rnd()) * r * .75;
      s += `<rect x="-2.2" y="-.8" width="4.4" height="1.6" rx=".8" fill="${colors[i % colors.length]}" transform="translate(${R(x + Math.cos(a) * d)} ${R(y + Math.sin(a) * d)}) rotate(${Math.round(rnd() * 180)})"/>`;
    }
    return s;
  }
  const brig = (x, y, r, c, sc, rnd) => ball(x, y, r, c, .22) + sprinkles(x, y, r, sc, rnd, Math.round(r * .7));
  const strawberry = (x, y, s, rot = 0) => `<g transform="translate(${R(x)} ${R(y)}) rotate(${rot}) scale(${s})"><path d="M0 -9C8 -9 11 -1 0 11C-11 -1 -8 -9 0 -9Z" fill="#C52F3E"/><path d="M-4 -6C-2 -8 2 -8 3 -5" stroke="#fff" stroke-opacity=".35" stroke-width="1.6" fill="none" stroke-linecap="round"/><g fill="#F6D48E"><circle cx="-3" cy="-1" r=".8"/><circle cx="2.5" cy="0" r=".8"/><circle cx="-.5" cy="4" r=".8"/><circle cx="3" cy="-4.5" r=".7"/></g><path d="M-7 -9L-2 -8L0 -12L2 -8L7 -9L3 -6L0 -7L-3 -6Z" fill="#6E8E4B"/></g>`;
  const leaf = (x, y, len, rot, c = '#8C9A76') => `<g transform="translate(${R(x)} ${R(y)}) rotate(${rot})"><path d="M0 0C${R(len * .35)} ${R(-len * .28)} ${R(len * .75)} ${R(-len * .22)} ${R(len)} 0C${R(len * .75)} ${R(len * .22)} ${R(len * .35)} ${R(len * .28)} 0 0Z" fill="${c}"/><path d="M1 0H${R(len * .85)}" stroke="${sh(c, .25)}" stroke-width=".8"/></g>`;
  function rose(x, y, r, c) {
    const d = sh(c, -.22), l = sh(c, .18);
    return `<g transform="translate(${R(x)} ${R(y)})"><circle r="${R(r)}" fill="${c}"/><circle cx="${R(r * .06)}" cy="${R(r * .08)}" r="${R(r * .74)}" fill="${l}"/><path d="M${R(-r * .62)} ${R(r * .1)}A${R(r * .6)} ${R(r * .6)} 0 1 1 ${R(r * .3)} ${R(r * .56)}" fill="none" stroke="${d}" stroke-width="${R(r * .09)}" stroke-linecap="round"/><path d="M${R(-r * .32)} ${R(r * .02)}A${R(r * .3)} ${R(r * .3)} 0 1 1 ${R(r * .12)} ${R(r * .3)}" fill="none" stroke="${d}" stroke-width="${R(r * .08)}" stroke-linecap="round"/><circle cx="${R(r * .02)}" cy="${R(r * .02)}" r="${R(r * .12)}" fill="${d}"/><circle cx="${R(-r * .35)}" cy="${R(-r * .4)}" r="${R(r * .22)}" fill="#fff" opacity=".22"/></g>`;
  }
  const heart = (x, y, s, c) => `<path d="M${R(x)} ${R(y + s * .9)}C${R(x - s * 1.3)} ${R(y)} ${R(x - s * .7)} ${R(y - s * .9)} ${R(x)} ${R(y - s * .3)}C${R(x + s * .7)} ${R(y - s * .9)} ${R(x + s * 1.3)} ${R(y)} ${R(x)} ${R(y + s * .9)}Z" fill="${c}"/>`;
  const sparkle = (x, y, s, c) => `<path d="M${R(x)} ${R(y - s)}Q${R(x + s * .15)} ${R(y - s * .15)} ${R(x + s)} ${R(y)}Q${R(x + s * .15)} ${R(y + s * .15)} ${R(x)} ${R(y + s)}Q${R(x - s * .15)} ${R(y + s * .15)} ${R(x - s)} ${R(y)}Q${R(x - s * .15)} ${R(y - s * .15)} ${R(x)} ${R(y - s)}Z" fill="${c}"/>`;
  function candle(x, y, h, c) {
    const top = y - h;
    return `<rect x="${R(x - 3)}" y="${R(top)}" width="6" height="${R(h)}" rx="2" fill="${c}"/><path d="M${R(x - 3)} ${R(top + 6)}l6 -4M${R(x - 3)} ${R(top + 14)}l6 -4M${R(x - 3)} ${R(top + 22)}l6 -4" stroke="#fff" stroke-opacity=".7" stroke-width="1.6"/><circle cx="${R(x)}" cy="${R(top - 11)}" r="12" fill="#F6C75E" opacity=".18"/><path d="M${R(x)} ${R(top - 2)}C${R(x + 5)} ${R(top - 7)} ${R(x + 2)} ${R(top - 15)} ${R(x)} ${R(top - 20)}C${R(x - 2)} ${R(top - 15)} ${R(x - 5)} ${R(top - 7)} ${R(x)} ${R(top - 2)}Z" fill="#F2B84B"/><path d="M${R(x)} ${R(top - 3)}C${R(x + 2)} ${R(top - 6)} ${R(x + 1)} ${R(top - 10)} ${R(x)} ${R(top - 12)}C${R(x - 1)} ${R(top - 10)} ${R(x - 2)} ${R(top - 6)} ${R(x)} ${R(top - 3)}Z" fill="#FFF1C9"/>`;
  }

  function deco(list, g) {
    const { cx, ty, r, ry, by } = g, rnd = rng(g.seed || 7);
    let back = '', mid = '', front = '';
    const ring = (k, sc, off = 0) => {
      const b = [], f = [];
      for (let i = 0; i < k; i++) { const a = (i + off) / k * Math.PI * 2; const p = [cx + Math.cos(a) * r * sc, ty + Math.sin(a) * ry * sc, a]; (Math.sin(a) < 0 ? b : f).push(p); }
      const s = (p, q) => p[1] - q[1];
      return [b.sort(s), f.sort(s)];
    };
    (list || []).forEach(t => {
      if (t === 'piped') {
        const [b, f] = ring(22, .9);
        b.forEach(p => back += ball(p[0], p[1] - 2, r * .07, '#FCF4E8', .55));
        f.forEach(p => front += ball(p[0], p[1] - 2, r * .07, '#FCF4E8', .55));
        for (let i = 0; i <= 20; i++) { const u = -1 + i / 10; const x = cx + u * r * .985; front += ball(x, by + ry * Math.sqrt(Math.max(0, 1 - u * u)) - 3, r * .06, '#FCF4E8', .5); }
      }
      if (t === 'pearls') {
        for (let i = 0; i <= 26; i++) { const u = -1 + i / 13; front += ball(cx + u * r * .985, by + ry * Math.sqrt(Math.max(0, 1 - u * u)) - 2, r * .035, '#FFFDF7', .8); }
      }
      if (t === 'berries') {
        const cols = ['#7B1E3A', '#A5283C', '#4B2A4D', '#C33A4B', '#8E2140'], pts = [];
        for (let i = 0; i < 14; i++) { const a = rnd() * 6.28, d = Math.sqrt(rnd()) * .55; pts.push([cx + Math.cos(a) * r * d, ty + Math.sin(a) * ry * d - 4, 5 + rnd() * 4, cols[i % 5]]); }
        mid += leaf(cx - r * .3, ty - 4, 20, -150) + leaf(cx + r * .25, ty - 6, 18, -30);
        pts.sort((p, q) => p[1] - q[1]).forEach(p => mid += ball(p[0], p[1], p[2], p[3], .4));
        mid += strawberry(cx + 6, ty - 10, 1.1, 20);
      }
      if (t === 'strawberries') {
        const [b, f] = ring(9, .72, .5);
        b.forEach(p => back += strawberry(p[0], p[1] - 8, 1.05, (p[2] * 57) % 30 - 15));
        mid += strawberry(cx - 10, ty - 12, 1.3, -15) + strawberry(cx + 12, ty - 10, 1.2, 18) + leaf(cx - 3, ty - 4, 18, -80);
        f.forEach(p => front += strawberry(p[0], p[1] - 8, 1.05, (p[2] * 57) % 30 - 15));
      }
      if (t === 'brigadeiros') {
        const [b, f] = ring(11, .8);
        b.forEach(p => back += brig(p[0], p[1] - 7, r * .1, '#3A2015', ['#1F0F09', '#6B4130'], rnd));
        f.forEach(p => front += brig(p[0], p[1] - 7, r * .1, '#3A2015', ['#1F0F09', '#6B4130'], rnd));
        mid += brig(cx, ty - 9, r * .13, '#3A2015', ['#1F0F09', '#7A4A36'], rnd);
      }
      if (t === 'flowers') {
        mid += leaf(cx - r * .62, ty + 2, 30, 170) + leaf(cx - r * .45, ty - 8, 26, -140) + leaf(cx + r * .28, ty - 2, 26, -20) + leaf(cx + r * .1, ty + 10, 24, 40);
        mid += rose(cx - r * .32, ty - 8, r * .2, '#C97F87') + rose(cx + r * .12, ty - 2, r * .15, '#EBC3BE') + rose(cx - r * .02, ty + ry * .45, r * .12, '#F6E3D6');
        mid += ball(cx + r * .34, ty - 10, 4, '#F2D6CF', .4) + ball(cx - r * .6, ty - 6, 3.5, '#E4B0B1', .4) + ball(cx + r * .3, ty + 8, 3, '#FFF6EC', .5);
      }
      if (t === 'gold') {
        const gl = (x, y, s, rot) => `<path d="M0 0l${R(6 * s)} ${R(-3 * s)}l${R(5 * s)} ${R(4 * s)}l${R(-2 * s)} ${R(6 * s)}l${R(-7 * s)} ${R(1 * s)}z" fill="#D6B36A" transform="translate(${R(x)} ${R(y)}) rotate(${rot})"/>`;
        for (let i = 0; i < 6; i++) { const u = .15 + rnd() * .7; front += gl(cx + r * (u - .1), g.ty + h_(g) * (.3 + rnd() * .45), .5 + rnd() * .5, Math.round(rnd() * 90)); }
        mid += gl(cx + r * .2, ty - 3, 1.1, 20) + gl(cx - r * .1, ty + 3, .8, 70);
      }
      if (t === 'topper') {
        mid += `<path d="M${R(cx - 22)} ${R(ty)}L${R(cx - 16)} ${R(ty - 64)}M${R(cx + 22)} ${R(ty)}L${R(cx + 16)} ${R(ty - 64)}" stroke="#C9A45C" stroke-width="2"/>` + heart(cx, ty - 76, 18, '#B06A72') + heart(cx, ty - 76, 12, '#D38D95');
      }
      if (t === 'sparkles') {
        mid += sparkle(cx - r * .3, ty - 30, 10, '#D6B36A') + sparkle(cx + r * .35, ty - 44, 7, '#E3C88C') + sparkle(cx + r * .05, ty - 60, 12, '#C9A45C') + sparkle(cx - r * .5, ty - 60, 5, '#E3C88C');
      }
      if (t === 'candles') {
        const cols = ['#E9B8BD', '#F2E1C4', '#B7C9B5', '#E9B8BD', '#F2E1C4'];
        const [b, f] = ring(5, .5, .25);
        [...b, ...f].sort((p, q) => p[1] - q[1]).forEach((p, i) => mid += candle(p[0], p[1], 34, cols[i]));
      }
      if (t === 'sprinkles') {
        const cols = ['#E9A3AE', '#F3D08A', '#9FC3B7', '#FFFFFF', '#C98A93'];
        for (let i = 0; i < 40; i++) { const a = rnd() * 6.28, d = Math.sqrt(rnd()) * .9; back += `<rect x="-2.6" y="-.9" width="5.2" height="1.8" rx=".9" fill="${cols[i % 5]}" transform="translate(${R(cx + Math.cos(a) * r * d)} ${R(ty + Math.sin(a) * ry * d)}) rotate(${Math.round(rnd() * 180)})"/>`; }
      }
      if (t === 'heart') {
        mid += `<g transform="translate(${R(cx)} ${R(ty)}) scale(1 .5)">${heart(0, 0, 18, '#B06A72')}</g>`;
      }
    });
    return back + mid + front;
  }
  const h_ = g => g.h;

  function cakeG(o) {
    const id = nid(), cx = o.cx, by = o.by, r = o.r, h = o.h, ry = r * .27, ty = by - h, rnd = rng(o.seed || 3);
    let s = '';
    if (o.bands) {
      const tot = o.bands.reduce((a, b) => a + b[1], 0);
      let y = ty; const segs = o.bands.map(b => { const bh = b[1] / tot * h; const g = { y, bh, c: b[0], tex: b[2] }; y += bh; return g; });
      for (let i = segs.length - 1; i >= 0; i--) {
        const g = segs[i];
        s += `<path d="${cyl(cx, g.y, r, ry, g.bh)}" fill="${g.c}"/>`;
        if (g.tex) {
          const k = Math.round(r / 5);
          for (let j = 0; j < k; j++) {
            const u = -0.95 + rnd() * 1.9, x = cx + u * r, yy = g.y + ry * Math.sqrt(1 - u * u) + g.bh * (.2 + rnd() * .6);
            s += g.tex === 'berry' ? `<circle cx="${R(x)}" cy="${R(yy)}" r="${R(1.4 + rnd() * 1.8)}" fill="#C8394A" opacity=".85"/>` : `<circle cx="${R(x)}" cy="${R(yy)}" r="${R(.8 + rnd())}" fill="${sh(g.c, -.25)}" opacity=".7"/>`;
          }
        }
      }
      if (o.semi) s += `<path d="${cyl(cx, ty, r, ry, h)}" fill="#FBF4EA" opacity=".38"/>`;
    } else {
      s += `<path d="${cyl(cx, ty, r, ry, h)}" fill="${o.frost}"/>`;
    }
    if (o.drip) {
      s += `<ellipse cx="${cx}" cy="${R(ty + ry * .35)}" rx="${R(r)}" ry="${R(ry)}" fill="${o.drip}"/>`;
      const k = Math.max(9, Math.round(r / 8));
      for (let i = 0; i < k; i++) { const u = -0.94 + i * (1.88 / (k - 1)); const x = cx + u * r; const yb = ty + ry * .35 + ry * Math.sqrt(1 - u * u); const L = h * (.14 + rnd() * .34); s += `<rect x="${R(x - 5)}" y="${R(yb - 6)}" width="10" height="${R(L)}" rx="5" fill="${o.drip}"/>`; }
    }
    s += `<path d="${cyl(cx, ty, r, ry, h)}" fill="url(#${id}s)"/>`;
    const topC = o.drip || o.top || o.frost || '#F7ECDC';
    s += `<ellipse cx="${cx}" cy="${R(ty)}" rx="${R(r)}" ry="${R(ry)}" fill="${topC}"/><ellipse cx="${R(cx - r * .15)}" cy="${R(ty - ry * .12)}" rx="${R(r * .62)}" ry="${R(ry * .5)}" fill="#fff" opacity=".1"/>`;
    s += deco(o.deco, { cx, ty, r, ry, by, h, seed: o.seed });
    return { defs: shadeDef(id + 's'), body: s };
  }
  function stand(cx, by, r) {
    const pr = r * 1.3, pry = pr * .26, foot = by + 64;
    return soft(cx, foot + 4, pr * .75, 12, .08) +
      `<ellipse cx="${cx}" cy="${R(foot)}" rx="${R(pr * .5)}" ry="${R(pr * .11)}" fill="#E6D9C8"/><path d="${cyl(cx, foot - 5, pr * .5, pr * .11, 5)}" fill="#D9CAB6"/><ellipse cx="${cx}" cy="${R(foot - 5)}" rx="${R(pr * .5)}" ry="${R(pr * .11)}" fill="#F6EFE5"/>` +
      `<path d="M${R(cx - 11)} ${R(by + 4)}L${R(cx - 24)} ${R(foot - 5)}L${R(cx + 24)} ${R(foot - 5)}L${R(cx + 11)} ${R(by + 4)}Z" fill="#EDE3D6"/><path d="M${R(cx + 4)} ${R(by + 4)}L${R(cx + 10)} ${R(foot - 5)}L${R(cx + 24)} ${R(foot - 5)}L${R(cx + 11)} ${R(by + 4)}Z" fill="#D8C9B5" opacity=".7"/>` +
      `<path d="${cyl(cx, by, pr, pry, 7)}" fill="#DED0BE"/><ellipse cx="${cx}" cy="${R(by)}" rx="${R(pr)}" ry="${R(pry)}" fill="#F8F2EA"/><ellipse cx="${cx}" cy="${R(by)}" rx="${R(pr - 3)}" ry="${R(pry - 1.5)}" fill="none" stroke="#C9A45C" stroke-width="1" opacity=".7"/>`;
  }
  function cupcake(x, y, s, fc, top) {
    const hi = sh(fc, .25);
    let t = '';
    if (top === 'berry') t = ball(0, -86, 6.5, '#A5283C', .45) + leaf(2, -90, 12, -40);
    if (top === 'brig') t = ball(0, -87, 8, '#3A2015', .25);
    if (top === 'gold') t = sparkle(0, -92, 7, '#D6B36A');
    let pl = '';
    for (let i = 1; i < 10; i++) pl += `<path d="M${R(-30 + i * 6)} -42L${R(-22 + i * 4.4)} -1" stroke="#000" stroke-opacity=".12" stroke-width="1.2"/>`;
    return `<g transform="translate(${R(x)} ${R(y)}) scale(${s})">${soft(0, 2, 36, 8, .07)}<path d="M-30 -42L30 -42L22 0Q0 4 -22 0Z" fill="#C8956F"/>${pl}<path d="M-30 -42L30 -42L27 -26Q0 -22 -28 -26Z" fill="#fff" opacity=".08"/><ellipse cx="0" cy="-47" rx="37" ry="13" fill="${fc}"/><ellipse cx="-8" cy="-51" rx="18" ry="5" fill="${hi}" opacity=".5"/><ellipse cx="0" cy="-60" rx="30" ry="12" fill="${fc}"/><ellipse cx="-7" cy="-64" rx="14" ry="4.5" fill="${hi}" opacity=".5"/><ellipse cx="0" cy="-72" rx="21" ry="10" fill="${fc}"/><ellipse cx="-5" cy="-75" rx="9" ry="3.5" fill="${hi}" opacity=".5"/><path d="M-12 -76Q0 -96 3 -84Q10 -80 12 -76Z" fill="${fc}"/>${t}</g>`;
  }
  function gift(cx, by, w, h, box, rib) {
    const dx = w * .2, dy = w * .12, x0 = cx - w / 2, x1 = cx + w / 2, lt = by - h - 20;
    return soft(cx + dx * .4, by + 2, w * .72, 10, .08) +
      `<path d="M${R(x1)} ${R(by - h)}L${R(x1 + dx)} ${R(by - h - dy)}L${R(x1 + dx)} ${R(by - dy)}L${R(x1)} ${R(by)}Z" fill="${sh(box, -.25)}"/>` +
      `<rect x="${R(x0)}" y="${R(by - h)}" width="${R(w)}" height="${R(h)}" fill="${box}"/>` +
      `<path d="M${R(x1)} ${R(by - h * .55)}L${R(x1 + dx)} ${R(by - h * .55 - dy)}L${R(x1 + dx)} ${R(by - h * .55 - dy + 14)}L${R(x1)} ${R(by - h * .55 + 14)}Z" fill="${sh(rib, -.2)}"/>` +
      `<rect x="${R(cx - 8)}" y="${R(by - h)}" width="16" height="${R(h)}" fill="${rib}"/>` +
      `<path d="M${R(x0 - 5)} ${R(lt)}L${R(x1 + 5)} ${R(lt)}L${R(x1 + 5 + dx)} ${R(lt - dy)}L${R(x0 - 5 + dx)} ${R(lt - dy)}Z" fill="${sh(box, .14)}"/>` +
      `<path d="M${R(x1 + 5)} ${R(lt)}L${R(x1 + 5 + dx)} ${R(lt - dy)}L${R(x1 + 5 + dx)} ${R(lt - dy + 22)}L${R(x1 + 5)} ${R(lt + 22)}Z" fill="${sh(box, -.3)}"/>` +
      `<rect x="${R(x0 - 5)}" y="${R(lt)}" width="${R(w + 10)}" height="22" fill="${sh(box, .05)}"/><rect x="${R(x0 - 5)}" y="${R(lt + 20)}" width="${R(w + 10)}" height="3" fill="#000" opacity=".1"/>` +
      `<rect x="${R(cx - 8)}" y="${R(lt)}" width="16" height="22" fill="${rib}"/>` +
      `<path d="M${R(cx - 8)} ${R(lt)}L${R(cx + 8)} ${R(lt)}L${R(cx + 8 + dx)} ${R(lt - dy)}L${R(cx - 8 + dx)} ${R(lt - dy)}Z" fill="${sh(rib, .12)}"/>` +
      `<g transform="translate(${R(cx + dx * .5)} ${R(lt - dy * .5)})"><path d="M-2 2L-16 26L-9 24L-4 30Z" fill="${sh(rib, -.12)}"/><path d="M2 2L14 27L8 25L4 30Z" fill="${sh(rib, -.12)}"/><ellipse cx="-17" cy="-8" rx="19" ry="10" transform="rotate(-24 -17 -8)" fill="${rib}"/><ellipse cx="-16" cy="-7" rx="9" ry="4" transform="rotate(-24 -16 -7)" fill="${sh(rib, -.28)}"/><ellipse cx="17" cy="-8" rx="19" ry="10" transform="rotate(24 17 -8)" fill="${rib}"/><ellipse cx="16" cy="-7" rx="9" ry="4" transform="rotate(24 16 -7)" fill="${sh(rib, -.28)}"/><ellipse cx="0" cy="-2" rx="7" ry="6" fill="${sh(rib, .1)}"/></g>`;
  }
  function brick(x, y, w, h, dx, dy, rnd, drizzle) {
    const A = [x, y], B = [x + w, y], C = [x + w + dx, y - dy], D = [x + dx, y - dy];
    const p = (u, v) => [A[0] + u * (B[0] - A[0]) + v * (D[0] - A[0]), A[1] + v * (D[1] - A[1])];
    let s = `<path d="M${R(B[0])} ${R(B[1])}L${R(C[0])} ${R(C[1])}L${R(C[0])} ${R(C[1] + h)}L${R(B[0])} ${R(B[1] + h)}Z" fill="#2C170F"/>`;
    s += `<path d="M${R(A[0])} ${R(A[1])}L${R(B[0])} ${R(B[1])}L${R(B[0])} ${R(B[1] + h)}L${R(A[0])} ${R(A[1] + h)}Z" fill="#4B2A1C"/>`;
    for (let i = 0; i < 26; i++) s += `<circle cx="${R(x + 4 + rnd() * (w - 8))}" cy="${R(y + 6 + rnd() * (h - 10))}" r="${R(.8 + rnd() * 1.4)}" fill="${rnd() > .5 ? '#2B160E' : '#6A4331'}"/>`;
    s += `<path d="M${R(A[0])} ${R(A[1])}L${R(B[0])} ${R(B[1])}L${R(C[0])} ${R(C[1])}L${R(D[0])} ${R(D[1])}Z" fill="#3A1F14"/><path d="M${R(A[0])} ${R(A[1])}L${R(B[0])} ${R(B[1])}" stroke="#6A4331" stroke-width="1.5"/>`;
    for (let i = 0; i < 5; i++) { const a = p(rnd() * .8 + .1, rnd() * .8 + .1), b = [a[0] + 8 + rnd() * 14, a[1] + (rnd() - .5) * 6]; s += `<path d="M${R(a[0])} ${R(a[1])}L${R(b[0])} ${R(b[1])}" stroke="#5B3626" stroke-width="1.2" stroke-linecap="round"/>`; }
    if (drizzle) {
      let d = ''; for (let i = 0; i <= 8; i++) { const q = p(.08 + i * .105, i % 2 ? .82 : .18); d += (i ? 'L' : 'M') + R(q[0]) + ' ' + R(q[1]); }
      s += `<path d="${d}" fill="none" stroke="#F4E6D0" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    return s;
  }
  function brownieStack(x, y, s, rnd) {
    const w = 150, h = 40, dx = 44, dy = 28;
    return `<g transform="translate(${R(x)} ${R(y)}) scale(${s})">${soft(90, 4, 120, 16, .08)}<path d="M-18 -4L178 -4L214 -38L18 -38Z" fill="#F5EDE0"/>${brick(0, -h, w, h, dx, dy, rnd)}${brick(8, -2 * h - 3, w, h, dx, dy, rnd)}${brick(-4, -3 * h - 6, w, h, dx, dy, rnd, true)}</g>`;
  }
  function mug(x, y, s) {
    return `<g transform="translate(${R(x)} ${R(y)}) scale(${s})">${soft(0, 4, 58, 11, .08)}<ellipse cx="0" cy="2" rx="54" ry="12" fill="#EFE6D9"/><ellipse cx="0" cy="0" rx="32" ry="6" fill="#DDD0BF"/><path d="M30 -56C56 -56 56 -18 26 -22" fill="none" stroke="#F1E9DE" stroke-width="8" stroke-linecap="round"/><path d="M-32 -70L32 -70L28 -8Q26 0 16 0L-16 0Q-26 0 -28 -8Z" fill="#F4EDE3"/><path d="M8 -70L32 -70L28 -8Q26 0 16 0L6 0Z" fill="#000" opacity=".06"/><ellipse cx="0" cy="-70" rx="32" ry="8" fill="#E4D8C8"/><ellipse cx="0" cy="-69" rx="27" ry="6" fill="#6B4028"/><g transform="translate(0 -69) scale(1 .45)">${heart(0, 0, 8, '#D6AE86')}</g><path d="M-8 -84C-14 -92 -2 -98 -8 -108M6 -84C0 -92 12 -98 6 -108" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3" stroke-linecap="round"/></g>`;
  }
  function brigBox(x, y, sc, cols, rows, rnd, rot = -5) {
    const flavors = [['#3A2015', ['#1F0F09', '#6B4130'], '#3D2419'], ['#F3EADB', ['#FFFFFF', '#E6D6BF'], '#E8DCCB'], ['#E2A0A6', ['#FFFFFF', '#C66F7A'], '#B8646F'], ['#8B5A3C', ['#D8B37A', '#5A3524'], '#C8A25E']];
    const cw = 64, chh = 68, W = cols * cw + 24, H = rows * chh + 24;
    let s = `<g transform="translate(${R(x)} ${R(y)}) rotate(${rot}) scale(${sc})"><rect x="${-W / 2 + 6}" y="${-H / 2 + 10}" width="${W}" height="${H}" rx="14" fill="#3a2016" opacity=".14"/><rect x="${-W / 2}" y="${-H / 2}" width="${W}" height="${H}" rx="14" fill="#C99E73"/><rect x="${-W / 2 + 10}" y="${-H / 2 + 10}" width="${W - 20}" height="${H - 20}" rx="8" fill="#B58A60"/>`;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const f = flavors[(r * cols + c + r) % 4], px = -W / 2 + 12 + cw * (c + .5), py = -H / 2 + 12 + chh * (r + .5);
      s += `<circle cx="${px}" cy="${py}" r="27" fill="${f[2]}" stroke="${sh(f[2], -.2)}" stroke-width="3" stroke-dasharray="3 2.4"/><circle cx="${px}" cy="${py + 2}" r="20" fill="#000" opacity=".15"/>` + brig(px, py, 19, f[0], f[1], rnd);
    }
    return s + '</g>';
  }

  const api = {
    cake(o) {
      const cx = 200, st = o.stand !== false, by = st ? 262 : 312, r = o.r || 100, h = o.h || 92;
      const c = cakeG({ ...o, cx, by, r, h });
      const body = (st ? stand(cx, by, r) : soft(cx, by + r * .27 - 2, r * 1.12, r * .3, .08)) + c.body;
      return frame({ bg: o.bg, table: o.table || sh(o.bg || '#EBDDCB', -.06), tableY: 300 }, c.defs, body);
    },
    hero(o) {
      const c = cakeG({ cx: 200, by: 322, r: 112, h: 128, frost: '#F4E8DA', drip: '#4A2A1E', deco: ['flowers', 'berries'], seed: 5 });
      return frame({ w: 400, h: 520, bg: o.bg || '#EAE0D3', table: o.table || '#DDCDBB', tableY: 390 }, c.defs, stand(200, 322, 112) + c.body);
    },
    tiered(o) {
      const low = cakeG({ cx: 200, by: 322, r: 104, h: 84, frost: '#F7F1E7', deco: ['pearls', 'gold'], seed: 4 });
      const up = cakeG({ cx: 200, by: 238, r: 70, h: 72, frost: '#F4E6DD', deco: ['flowers'], seed: 9 });
      const body = soft(200, 350, 140, 22, .08) + `<ellipse cx="200" cy="330" rx="128" ry="32" fill="#E9DFD2"/><path d="${cyl(200, 322, 128, 32, 6)}" fill="#D9CBB9"/><ellipse cx="200" cy="322" rx="128" ry="32" fill="#F4EEE6"/>` + low.body + up.body +
        rose(128, 250, 16, '#C97F87') + leaf(110, 256, 22, 160) + rose(150, 262, 11, '#EBC3BE') + ball(166, 262, 3, '#F2D6CF', .4);
      return frame({ w: 400, h: 400, bg: o.bg, table: o.table, tableY: 320 }, low.defs + up.defs, body);
    },
    bento(o) {
      const c = cakeG({ cx: 200, by: 296, r: 80, h: 60, frost: o.frost || '#F1D2CE', deco: ['piped', 'heart'], seed: 8 });
      const lid = `<g transform="rotate(-7 210 190)"><rect x="112" y="92" width="200" height="170" rx="14" fill="#C99E73"/><rect x="124" y="104" width="176" height="146" rx="8" fill="#BA8E64"/></g>`;
      const base = soft(200, 334, 136, 20, .08) + `<path d="${cyl(200, 306, 122, 34, 8)}" fill="#B98C62"/><ellipse cx="200" cy="306" rx="122" ry="34" fill="#D2AA80"/>`;
      return frame({ bg: o.bg, table: o.table, tableY: 290 }, c.defs, lid + base + c.body);
    },
    brigadeiros(o) {
      const rnd = rng(o.seed || 2);
      return frame({ bg: o.bg }, '', brigBox(200, 196, 1, 4, 3, rnd) + brig(64, 360, 19, '#3A2015', ['#1F0F09', '#6B4130'], rnd) + brig(338, 48, 17, '#F3EADB', ['#fff', '#E6D6BF'], rnd) + leaf(300, 362, 34, -30) + leaf(318, 350, 26, -80));
    },
    brownie(o) {
      const rnd = rng(o.seed || 6);
      return frame({ bg: o.bg, table: o.table, tableY: 250 }, '', brownieStack(106, 318, 1, rnd) + `<rect x="60" y="346" width="10" height="9" rx="2" fill="#3A1F14" transform="rotate(20 65 350)"/><rect x="330" y="330" width="7" height="6" rx="2" fill="#4B2A1C"/><circle cx="84" cy="336" r="2.5" fill="#3A1F14"/>`);
    },
    cupcakes(o) {
      if (o.single) return frame({ bg: o.bg, table: o.table, tableY: 280 }, '', cupcake(200, 330, 2.2, '#EFC9C8', 'berry'));
      return frame({ bg: o.bg, table: o.table, tableY: 262 }, '', cupcake(110, 300, 1.25, '#6B3F2E', 'gold') + cupcake(292, 298, 1.25, '#F4E7D4', 'brig') + cupcake(200, 340, 1.5, '#EFC9C8', 'berry'));
    },
    roses(o) {
      return frame({ bg: o.bg }, '', leaf(40, 250, 110, -20) + leaf(250, 110, 120, -60) + leaf(160, 360, 100, -110) + leaf(330, 280, 90, 30, '#9CAA88') + rose(150, 180, 92, '#C97F87') + rose(300, 300, 64, '#EBC3BE') + rose(310, 90, 40, '#F6E3D6') + rose(70, 340, 48, '#E4B0B1') + ball(250, 210, 9, '#FFF6EC', .5) + ball(230, 60, 7, '#F2D6CF', .4) + ball(60, 90, 10, '#EBC3BE', .4));
    },
    kitCafe(o) {
      const rnd = rng(12);
      return frame({ bg: o.bg, table: o.table, tableY: 250 }, '', brownieStack(196, 302, .62, rnd) + mug(116, 318, 1.15) + brig(214, 350, 15, '#3A2015', ['#1F0F09', '#6B4130'], rnd) + brig(250, 358, 15, '#F3EADB', ['#fff', '#E6D6BF'], rnd) + brig(286, 350, 15, '#E2A0A6', ['#fff', '#C66F7A'], rnd) + leaf(318, 370, 26, -20));
    },
    kitParabens(o) {
      const c = cakeG({ cx: 152, by: 312, r: 74, h: 58, frost: '#F7E6DA', deco: ['piped', 'candles', 'sprinkles'], seed: 13 });
      const rnd = rng(14);
      let conf = ''; const cols = ['#E9A3AE', '#F3D08A', '#9FC3B7', '#fff'];
      for (let i = 0; i < 22; i++) conf += `<circle cx="${R(20 + rnd() * 360)}" cy="${R(20 + rnd() * 200)}" r="${R(2 + rnd() * 3)}" fill="${cols[i % 4]}" opacity=".7"/>`;
      return frame({ bg: o.bg, table: o.table, tableY: 262 }, c.defs, conf + soft(152, 330, 86, 16, .08) + c.body + gift(292, 336, 84, 70, '#B06A72', '#EFD6A6') + brig(214, 362, 13, '#3A2015', ['#1F0F09', '#6B4130'], rnd) + brig(244, 368, 13, '#F3EADB', ['#fff', '#E6D6BF'], rnd));
    },
    kitRomantico(o) {
      const rnd = rng(21);
      return frame({ bg: o.bg, table: o.table, tableY: 258 }, '', gift(236, 322, 128, 96, '#8E3B46', '#E3C27F') + leaf(64, 346, 46, 190) + leaf(92, 326, 40, -120) + rose(110, 336, 30, '#B8505C') + rose(160, 356, 20, '#D98A92') + brig(236, 362, 14, '#3A2015', ['#1F0F09', '#6B4130'], rnd) + brig(270, 368, 14, '#E2A0A6', ['#fff', '#C66F7A'], rnd) + heart(330, 360, 9, '#B8505C') + heart(60, 120, 6, '#fff'));
    },
    premium(o) {
      const rnd = rng(31);
      let pearls = ''; for (let i = 0; i < 14; i++) pearls += ball(40 + rnd() * 320, 330 + rnd() * 60, 2.5 + rnd() * 2.5, '#E3C88C', .6);
      return frame({ bg: o.bg, table: o.table, tableY: 262 }, '', gift(196, 326, 150, 104, '#4A2E24', '#D2B06E') + pearls + brig(98, 356, 16, '#6B4130', ['#D8B37A', '#E3C88C'], rnd) + brig(300, 360, 16, '#3A2015', ['#D8B37A', '#E3C88C'], rnd) + sparkle(330, 90, 10, '#D2B06E') + sparkle(70, 70, 6, '#D2B06E'));
    },
    builder(o) {
      const c = cakeG({ cx: 200, by: 262, r: o.r, h: o.h, bands: o.bands, frost: o.frost, semi: o.semi, top: o.top, deco: o.deco, seed: 17 });
      return frame({ bg: o.bg || '#ECE2D5', table: o.table || '#DFCFBD', tableY: 300 }, c.defs, stand(200, 262, o.r) + c.body);
    },
    empty() {
      return frame({ bg: '#EEE3D5' }, '', cupcake(200, 300, 2, '#F3E6D6', 'berry'));
    }
  };
  return api;
})();

/* =====================================================================
   UTILITÁRIOS
   ===================================================================== */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const money = v => v.toLocaleString('pt-BR', { style: 'currency', currency: CONFIG.currency });
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad = n => String(n).padStart(2, '0');
const localISO = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const fmtDate = iso => { if (!iso) return ''; const [y, m, d] = iso.split('-').map(Number); const dt = new Date(y, m - 1, d); const wd = dt.toLocaleDateString('pt-BR', { weekday: 'long' }); return `${pad(d)}/${pad(m)}/${y} (${wd})`; };
const waLink = text => `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
const store = {
  get(k, f) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : f; } catch (e) { return f; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
function img(image, alt = '') {
  if (typeof image === 'string') return `<img src="${esc(image)}" alt="${esc(alt)}" loading="lazy">`;
  const fn = ART[image.art] || ART.cake;
  return fn(image);
}
function setArt(el, image, alt) { if (el) el.innerHTML = img(image, alt); if (el && alt) { el.setAttribute('role', 'img'); el.setAttribute('aria-label', alt); } }
const getPath = (o, p) => p.split('.').reduce((a, k) => a && a[k], o);

/* =====================================================================
   RENDERIZAÇÃO DAS SEÇÕES
   ===================================================================== */
function applyTheme() {
  const c = CONFIG.theme.colors || {};
  const map = { bg: '--bg', ink: '--ink', rose: '--rose', gold: '--gold', caramel: '--caramel', choco: '--choco' };
  const css = Object.entries(c).filter(([k]) => map[k]).map(([k, v]) => `${map[k]}:${v}`).join(';');
  if (css) { const st = document.createElement('style'); st.textContent = `:root{${css}}`; document.head.appendChild(st); }
}
function hoursShort() {
  return CONFIG.hours.map(h => h.open ? `${h.label}: ${h.open}–${h.close}` : `${h.label}: fechado`).join(' · ');
}
function renderStatic() {
  $$('[data-icon]').forEach(el => { el.innerHTML = ICONS[el.dataset.icon] || ''; el.setAttribute('aria-hidden', 'true');  });
  const derived = {
    hoursShort: hoursShort(), phoneDisplay: CONFIG.phoneDisplay, year: String(new Date().getFullYear() < 2026 ? 2026 : new Date().getFullYear()),
    fromPrice: money(Math.min(...CONFIG.products.filter(p => /bolo/i.test(p.name)).map(p => p.price))),
    'address.full': `${CONFIG.address.street} — ${CONFIG.address.cityLine}`,
    topAdvance: `Bolos personalizados com ${CONFIG.customCakeAdvanceDays} dias de antecedência`
  };
  $$('[data-bind]').forEach(el => { const k = el.dataset.bind; const v = derived[k] ?? getPath(CONFIG, k); if (v != null) el.textContent = v; });
  $$('[data-wa]').forEach(a => a.href = waLink(a.dataset.wa));
  $$('[data-ig]').forEach(a => a.href = CONFIG.instagram.url);
  $('#routeBtn').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CONFIG.address.mapsQuery);

  const links = CONFIG.nav.map(([t, h]) => `<a href="${h}">${esc(t)}</a>`).join('');
  const half = Math.ceil(CONFIG.nav.length / 2);
  $('#navDesk').innerHTML = CONFIG.nav.slice(0, half).map(([t, h]) => `<a href="${h}">${esc(t)}</a>`).join('');
  $('#navDesk2').innerHTML = CONFIG.nav.slice(half).map(([t, h]) => `<a href="${h}">${esc(t)}</a>`).join('');
  $('#navMob').innerHTML = CONFIG.nav.map(([t, h], i) => `<a href="${h}" style="--k:${i}">${esc(t)}<span>${pad(i + 1)}</span></a>`).join('');
  $('#fLinks').innerHTML = CONFIG.nav.map(([t, h]) => `<li><a href="${h}">${esc(t)}</a></li>`).join('');

  $('#heroArt').innerHTML = ART.hero({});
  $('#heroArt').setAttribute('role', 'img'); $('#heroArt').setAttribute('aria-label', 'Bolo artesanal com cobertura de chocolate, flores e frutas vermelhas');
  setArt($('#heroThumb'), { art: 'brigadeiros', bg: '#E4D0BC', seed: 4 }, 'Caixa de brigadeiros');

  $('#moments').innerHTML = CONFIG.categories.map((c, i) => `
    <a class="moment rv" href="${c.target}" style="transition-delay:${i * .08}s">
      <div class="art-box">${img(c.image, c.title)}</div>
      <span class="num">Nº ${pad(i + 1)}</span>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.text)}</p>
      <span class="link-btn">Ver opções</span>
    </a>`).join('');

  const card = (p, i, kit) => `
    <article class="${kit ? 'kit' : 'product'} rv" style="transition-delay:${(i % 3) * .08}s">
      <div class="art-box" role="img" aria-label="${esc(p.name)}">${p.tag ? `<span class="tag">${esc(p.tag)}</span>` : ''}${img(p.image, p.name)}</div>
      <div class="p-body">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.description)}</p>
        <div class="p-foot"><span class="price">${money(p.price)}</span><span class="micro">${kit ? 'Kit pronto' : 'Sob encomenda'}</span></div>
        <button class="btn btn-line btn-sm add-btn" data-add="${p.id}"><span class="def">Adicionar ao pedido</span><span class="ok">Adicionado ao pedido</span></button>
      </div>
    </article>`;
  $('#products').innerHTML = CONFIG.products.map((p, i) => card(p, i)).join('');
  $('#kitsList').innerHTML = CONFIG.kits.map((p, i) => card(p, i, true)).join('');

  $('#gallery').innerHTML = CONFIG.gallery.map((g, i) => `
    <button class="g-item rv" data-gi="${i}" aria-label="Ampliar: ${esc(g.caption)}">
      <figure style="margin:0"><div class="art-box" style="aspect-ratio:1/${g.h || 1}">${img(g.image, g.caption)}</div><figcaption>${esc(g.caption)}</figcaption></figure>
    </button>`).join('');

  setArt($('#aboutA1'), CONFIG.about.image, 'Bolo decorado com flores');
  setArt($('#aboutA2'), CONFIG.about.image2, 'Cupcake com frutas vermelhas');
  $('#stats').innerHTML = CONFIG.stats.map(s => `<div class="stat"><b data-count="${s.value}" data-prefix="${s.prefix || ''}" data-dec="${s.decimals || 0}">${s.prefix || ''}0</b><span>${esc(s.label)}</span></div>`).join('');

  $('#reviews').innerHTML = CONFIG.testimonials.map((t, i) => `
    <figure class="review rv" style="transition-delay:${i * .1}s">
      <div class="stars" aria-label="${t.stars} de 5 estrelas">${ICONS.star.repeat(t.stars)}</div>
      <blockquote>${esc(t.text)}</blockquote>
      <figcaption><span class="avatar">${esc(t.name[0])}</span><span>${esc(t.name)}<small>${esc(t.note || '')}</small></span></figcaption>
    </figure>`).join('');

  $('#howSteps').innerHTML = CONFIG.howItWorks.map((s, i) => `
    <div class="step rv" style="transition-delay:${i * .1}s"><div class="n">${pad(i + 1)}</div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join('');

  const hs = CONFIG.hours.filter(h => h.open).map(h => `${esc(h.label)} <span style="white-space:nowrap;color:var(--ink-2)">${h.open}–${h.close}</span>`).join('<br>');
  $('#cGrid').innerHTML = `
    <a class="c-item" href="${waLink('Olá! Gostaria de mais informações.')}" target="_blank" rel="noopener">${ICONS.wa}<small>WhatsApp</small><b>${esc(CONFIG.phoneDisplay)}</b></a>
    <a class="c-item" href="${CONFIG.instagram.url}" target="_blank" rel="noopener">${ICONS.ig}<small>Instagram</small><b>${esc(CONFIG.instagram.user)}</b></a>
    <a class="c-item" href="#localizacao">${ICONS.pin}<small>Endereço</small><b>${esc(CONFIG.address.street)}<br>${esc(CONFIG.address.cityLine)}</b></a>
    <div class="c-item">${ICONS.clock}<small>Horário de atendimento</small><b>${hs}</b></div>`;

  // Horários + aberto agora
  const now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  const toM = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  $('#hoursTable').insertAdjacentHTML('beforeend', '<tbody>' + CONFIG.hours.map(h => `<tr class="${h.days.includes(day) ? 'today' : ''}"><td>${esc(h.label)}</td><td>${h.open ? `${h.open} — ${h.close}` : 'Fechado'}</td></tr>`).join('') + '</tbody>');
  const today = CONFIG.hours.find(h => h.days.includes(day));
  const open = today && today.open && mins >= toM(today.open) && mins < toM(today.close);
  const on = $('#openNow'); on.classList.toggle('closed', !open);
  $('span', on).textContent = open ? `Aberto agora · até ${today.close}` : 'Fechado agora · peça pelo WhatsApp';

  // Mapa estilizado
  $('#map').innerHTML = `<svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="800" height="520" fill="#EFE4D5"/>
    <path d="M-20 400C150 360 250 470 420 430S700 330 820 360V540H-20Z" fill="#D8E0CF"/>
    <path d="M540 -10C520 90 600 160 580 250S640 420 620 540" fill="none" stroke="#CFDDE0" stroke-width="34"/>
    <rect x="90" y="70" width="170" height="120" rx="18" fill="#DCE3CF"/><circle cx="140" cy="115" r="16" fill="#C9D4BA"/><circle cx="200" cy="140" r="22" fill="#C9D4BA"/>
    <g fill="none" stroke="#FBF6EF" stroke-linecap="round">
      <path d="M0 260H800" stroke-width="26"/><path d="M400 0V520" stroke-width="22"/>
      <path d="M0 110H800M0 380H800M150 0V520M290 0V520M680 0V520" stroke-width="12"/>
      <path d="M-20 520L520 -20" stroke-width="16"/>
    </g>
    <g fill="#E4D6C3">${[[170, 280, 100, 88], [300, 280, 88, 88], [170, 400, 100, 100], [420, 120, 100, 110], [420, 280, 120, 88], [700, 130, 110, 100], [700, 280, 120, 88], [20, 280, 110, 88], [300, 125, 100, 110], [20, 120, 110, 110]].map(r => `<rect x="${r[0]}" y="${r[1]}" width="${r[2]}" height="${r[3]}" rx="10"/>`).join('')}</g>
    <text x="416" y="252" font-family="Figtree, sans-serif" font-size="13" fill="#A58F7E" font-weight="600">Rua das Flores</text>
    <text x="60" y="253" font-family="Figtree, sans-serif" font-size="12" fill="#A58F7E">Av. Primavera</text>
    <circle cx="400" cy="260" r="110" fill="#A8656B" opacity=".07"/>
  </svg><div class="map-pin"><span class="lbl">${esc(CONFIG.brand.nameTitle)}</span><span class="dot"></span></div>`;
}

/* =====================================================================
   CARRINHO
   ===================================================================== */
let cart = store.get('de-cart', []);
const findItem = id => CONFIG.products.find(p => p.id === id) || CONFIG.kits.find(p => p.id === id);
const cartCount = () => cart.reduce((a, i) => a + i.qty, 0);
const cartTotal = () => cart.reduce((a, i) => a + i.qty * i.price, 0);
function saveCart() { store.set('de-cart', cart); renderCart(); }

function addToCart(id, btn) {
  const p = findItem(id); if (!p) return;
  const ex = cart.find(i => i.key === id);
  if (ex) ex.qty++; else cart.push({ key: id, type: 'product', name: p.name, price: p.price, qty: 1, image: p.image });
  saveCart(); bump(); toast(`${p.name} adicionado ao pedido`);
  if (btn) { btn.classList.add('added'); clearTimeout(btn._t); btn._t = setTimeout(() => btn.classList.remove('added'), 1600); }
}
function bump() { const b = $('#cartBtn'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }
function changeQty(key, d) {
  const it = cart.find(i => i.key === key); if (!it) return;
  it.qty += d;
  if (it.qty <= 0) return removeItem(key);
  saveCart();
}
function removeItem(key) {
  const row = $(`.c-row[data-key="${CSS.escape(key)}"]`);
  const go = () => { cart = cart.filter(i => i.key !== key); saveCart(); };
  if (row) { row.classList.add('out'); setTimeout(go, 260); } else go();
}
function customDetails(c) {
  return [['Tamanho', c.size], ['Massa', c.dough], ['Recheio', c.filling], ['Decoração', c.decor], ...(c.idea ? [['Ideia', c.idea]] : []), ['Data', fmtDate(c.date)]];
}
function renderCart() {
  const n = cartCount();
  const badge = $('#cartCount'); badge.textContent = n; badge.classList.toggle('show', n > 0);
  $('#cartBtn').setAttribute('aria-label', n ? `Abrir seu pedido (${n} ${n === 1 ? 'item' : 'itens'})` : 'Abrir seu pedido');
  $('#dCount').textContent = n ? `${n} ${n === 1 ? 'item' : 'itens'}` : '';
  $('#dFoot').hidden = !n;
  $('#dSubtotal').textContent = money(cartTotal());
  if (!n) {
    $('#dList').innerHTML = `<div class="d-empty"><div class="art-box">${ART.empty()}</div><h4>Seu pedido está vazio</h4><p>Escolha um doce do cardápio ou monte um bolo com a sua cara.</p><a class="btn btn-primary" href="#cardapio" data-close-cart>Ver cardápio</a><a class="btn btn-ghost" href="#monte" data-close-cart>Monte seu bolo</a><a class="link-btn" href="${waLink('Olá! Gostaria de tirar uma dúvida sobre um pedido.')}" target="_blank" rel="noopener" style="margin-top:8px">Prefere conversar? Chame no WhatsApp</a></div>`;
    return;
  }
  $('#dList').innerHTML = cart.map(i => `
    <div class="c-row" data-key="${esc(i.key)}">
      <div class="art-box">${img(i.image, i.name)}</div>
      <div>
        <h4>${esc(i.name)}</h4>
        <p class="c-meta">${money(i.price)} ${i.type === 'custom' ? 'estimado' : 'cada'}</p>
        ${i.type === 'custom' ? `<p class="c-details">${customDetails(i.custom).map(([k, v]) => `${k}: ${esc(v)}`).join('<br>')}</p>` : ''}
        <div class="c-ctrl">
          <div class="qty" role="group" aria-label="Quantidade de ${esc(i.name)}">
            <button data-dec="${esc(i.key)}" aria-label="Diminuir">${ICONS.minus}</button><output>${i.qty}</output><button data-inc="${esc(i.key)}" aria-label="Aumentar">${ICONS.plus}</button>
          </div>
          <span class="c-sub">${money(i.price * i.qty)}</span>
        </div>
        <button class="rm" data-rm="${esc(i.key)}">Remover</button>
      </div>
    </div>`).join('');
}

/* ---------- Overlays ---------- */
let lastFocus = null;
function lockScroll() { document.documentElement.classList.toggle('lock', !!$('.drawer.open, .modal.open, .lightbox.open, .mnav.open')); }
function openCart() {
  closeMenu(); lastFocus = document.activeElement;
  $('#toast').classList.remove('show');
  const dr = $('#drawer'); dr.classList.add('anim'); clearTimeout(dr._a); dr._a = setTimeout(() => dr.classList.remove('anim'), 1200);
  $('#drawer').classList.add('open'); $('#scrim').classList.add('open'); $('#drawer').setAttribute('aria-hidden', 'false');
  lockScroll(); setTimeout(() => $('[data-close-cart]', $('#drawer')).focus(), 60);
}
function closeCart() {
  $('#drawer').classList.remove('open'); $('#scrim').classList.remove('open'); $('#drawer').setAttribute('aria-hidden', 'true'); lockScroll();
  if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
}
function openMenu() { $('#mnav').classList.add('open'); $('#mnav').setAttribute('aria-hidden', 'false'); $('#burger').setAttribute('aria-expanded', 'true'); $('#burger').setAttribute('aria-label', 'Fechar menu'); lockScroll(); }
function closeMenu() { $('#mnav').classList.remove('open'); $('#mnav').setAttribute('aria-hidden', 'true'); $('#burger').setAttribute('aria-expanded', 'false'); $('#burger').setAttribute('aria-label', 'Abrir menu'); lockScroll(); }

let toastT;
function toast(msg) {
  $('#toastMsg').textContent = msg; $('#toast').classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => $('#toast').classList.remove('show'), 3200);
}

/* =====================================================================
   MONTE SEU BOLO
   ===================================================================== */
const B = CONFIG.builder;
const bState = { step: 0, size: null, dough: null, filling: null, decor: null, idea: '', date: '' };
const bSteps = [
  { key: 'size', label: 'Tamanho', title: 'Qual o tamanho?', text: 'Pense em quantas pessoas vão provar.', list: B.sizes, sub: o => o.sub + ' · ' + money(o.price) },
  { key: 'dough', label: 'Massa', title: 'Escolha a massa', text: 'A base de tudo. Todas feitas no dia.', list: B.doughs, sub: o => o.add ? `+ ${money(o.add)}` : 'incluso' },
  { key: 'filling', label: 'Recheio', title: 'Agora, o recheio', text: 'Duas camadas generosas entre as massas.', list: B.fillings, sub: o => o.add ? `+ ${money(o.add)}` : 'incluso' },
  { key: 'decor', label: 'Decoração', title: 'Como vai ser a decoração?', text: 'Do clássico ao seu tema. Se tiver referência, envie pelo WhatsApp.', list: B.decors, sub: o => `${o.sub}${o.add ? ' · + ' + money(o.add) : ''}` },
  { key: 'date', label: 'Data', title: 'Para quando é o bolo?', text: 'Escolha a data da retirada ou entrega.' },
  { key: 'done', label: 'Resumo', title: 'Seu bolo' }
];
const minCakeDate = () => localISO(addDays(new Date(), CONFIG.customCakeAdvanceDays));
const pick = (list, id) => list.find(o => o.id === id);
function bPrice() {
  const s = pick(B.sizes, bState.size); if (!s) return null;
  return s.price + [pick(B.doughs, bState.dough), pick(B.fillings, bState.filling), pick(B.decors, bState.decor)].reduce((a, o) => a + (o ? o.add : 0), 0);
}
function bValid(i) {
  const st = bSteps[i];
  if (st.key === 'decor') { const d = pick(B.decors, bState.decor); return !!d && (!d.idea || bState.idea.trim().length >= 5); }
  if (st.key === 'date') return !!bState.date && bState.date >= minCakeDate();
  if (st.key === 'done') return true;
  return !!bState[st.key];
}
function bImage() {
  const s = pick(B.sizes, bState.size) || B.sizes[1];
  const d = pick(B.doughs, bState.dough), f = pick(B.fillings, bState.filling), dec = pick(B.decors, bState.decor);
  const dc = d ? d.color : '#EAD9BF', fc = f ? f.color : '#F7EDDF';
  return { art: 'builder', r: s.r, h: s.h, bands: [['#F7ECDC', 5], [dc, 26, 'crumb'], [fc, 11, f && f.tex], [dc, 26, 'crumb'], [fc, 11, f && f.tex], [dc, 26, 'crumb']], semi: true, top: '#F7ECDC', deco: dec ? dec.deco : [] };
}
function renderBuilderPreview() {
  const art = $('#bArt');
  art.innerHTML = ART.builder(bImage());
  art.setAttribute('role', 'img'); art.setAttribute('aria-label', 'Prévia do bolo montado');
  const rows = [['Tamanho', pick(B.sizes, bState.size)?.label], ['Massa', pick(B.doughs, bState.dough)?.label], ['Recheio', pick(B.fillings, bState.filling)?.label], ['Decoração', pick(B.decors, bState.decor)?.label], ['Data', bState.date ? fmtDate(bState.date).split(' ')[0] : null]];
  $('#bLive').innerHTML = rows.map(([k, v]) => `<dt>${k}</dt><dd>${v ? esc(v) : '<span style="color:var(--ink-3)">—</span>'}</dd>`).join('');
  showBuilderPrice(bPrice());
}
let bShown = 0, bRaf = 0;
function showBuilderPrice(p) {
  const el = $('#bLivePrice');
  cancelAnimationFrame(bRaf);
  if (!p) { el.textContent = '—'; bShown = 0; return; }
  const from = bShown || p;
  if (from === p || matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = `a partir de ${money(p)}`; bShown = p; return; }
  el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick');
  const t0 = performance.now(), dur = 520;
  const step = t => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); bShown = from + (p - from) * e; el.textContent = `a partir de ${money(Math.round(bShown * 100) / 100)}`; if (k < 1) bRaf = requestAnimationFrame(step); else bShown = p; };
  bRaf = requestAnimationFrame(step);
}
function renderBuilder(dir = 1) {
  const i = bState.step, st = bSteps[i];
  $('#bProgress').innerHTML = bSteps.map((s, j) => {
    const reach = j <= i || bSteps.slice(0, j).every((_, k) => bValid(k));
    return `<button role="tab" data-bstep="${j}" data-short="${j < 5 ? pad(j + 1) : '✓'}" class="${j < i ? 'done' : ''} ${j === i ? 'on' : ''}" aria-selected="${j === i}" ${reach ? '' : 'disabled'}>${j < 5 ? pad(j + 1) + ' — ' : ''}${s.label}</button>`;
  }).join('');
  $('#bBar').style.width = `${(i / (bSteps.length - 1)) * 100}%`;
  let html = `<div class="b-step on ${dir < 0 ? 'back' : ''}" role="tabpanel">`;
  if (st.list) {
    html += `<h3>${st.title}</h3><p>${st.text}</p><div class="opts" role="radiogroup" aria-label="${st.label}">` + st.list.map(o => `
      <button class="opt" role="radio" aria-checked="${bState[st.key] === o.id}" data-bopt="${o.id}">
        ${o.color ? `<span class="sw" style="background:${o.color}"></span>` : ''}<b>${esc(o.label)}</b><small>${esc(st.sub(o))}</small>
      </button>`).join('') + '</div>';
    if (st.key === 'decor') {
      const d = pick(B.decors, bState.decor);
      html += `<div class="idea ${d && d.idea ? 'show' : ''}" id="ideaBox"><label for="ideaTxt" style="font-size:.88rem;font-weight:600;display:block;margin-bottom:6px">Conte sua ideia</label><textarea id="ideaTxt" placeholder="Ex.: tema jardim, tons de lilás, topo com o nome Sofia…">${esc(bState.idea)}</textarea><div class="notice"><span>${ICONS.info}</span><span>O valor final é confirmado pelo WhatsApp depois de avaliarmos a sua ideia.</span></div></div>`;
    }
  } else if (st.key === 'date') {
    const min = minCakeDate();
    html += `<h3>${st.title}</h3><p>${st.text}</p><label for="bDate" class="sr">Data desejada</label><input type="date" id="bDate" class="date-in" min="${min}" value="${bState.date}" style="max-width:320px">
      <p id="bDateErr" style="color:#B3424A;font-size:.85rem;margin:8px 0 0;display:none">Escolha uma data a partir de ${fmtDate(min).split(' ')[0]}.</p>
      <div class="notice"><span>${ICONS.info}</span><span><strong>Pedidos personalizados precisam ser feitos com antecedência.</strong><br>Datas disponíveis a partir de ${fmtDate(min)}.</span></div>`;
  } else {
    const rows = [['Tamanho', pick(B.sizes, bState.size).label], ['Massa', pick(B.doughs, bState.dough).label], ['Recheio', pick(B.fillings, bState.filling).label], ['Decoração', pick(B.decors, bState.decor).label], ...(bState.idea && pick(B.decors, bState.decor).idea ? [['Sua ideia', bState.idea]] : []), ['Data', fmtDate(bState.date)]];
    html += `<div class="b-final"><span class="micro">Ficha do pedido</span><h3>Seu bolo</h3><p style="color:var(--ink-2);margin:0 0 18px">Confira os detalhes antes de adicionar ao pedido.</p><dl>${rows.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
      <div class="b-est"><span>Total estimado</span><span class="price">${money(bPrice())}</span></div>
      <p style="font-size:.84rem;color:var(--ink-3);margin:10px 0 0">Valor estimado. O valor final é confirmado pelo WhatsApp.</p>
      <div class="b-final-act"><button class="btn btn-rose" id="bAdd">Adicionar ao pedido</button><button class="btn btn-ghost" id="bReset">Montar outro bolo</button></div></div>`;
  }
  html += '</div>';
  if (st.key !== 'done') html += `<div class="b-nav"><button class="btn btn-ghost" id="bPrev" ${i === 0 ? 'disabled' : ''}>Voltar</button><button class="btn btn-primary" id="bNext" ${bValid(i) ? '' : 'disabled'}>${i === 4 ? 'Ver resumo' : 'Próximo'}</button></div>`;
  $('#bSteps').innerHTML = html;
  renderBuilderPreview();
}
function bGo(to) {
  const dir = to > bState.step ? 1 : -1;
  bState.step = Math.max(0, Math.min(bSteps.length - 1, to));
  renderBuilder(dir);
  const panel = $('.b-panel');
  const top = panel.getBoundingClientRect().top;
  if (top < 60 || top > innerHeight * .6) window.scrollTo({ top: scrollY + top - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--hdr')) || 78) - 16, behavior: 'smooth' });
}
function bAdd() {
  const c = {
    size: pick(B.sizes, bState.size).label, dough: pick(B.doughs, bState.dough).label, filling: pick(B.fillings, bState.filling).label,
    decor: pick(B.decors, bState.decor).label, idea: pick(B.decors, bState.decor).idea ? bState.idea.trim() : '', date: bState.date
  };
  cart.push({ key: 'custom-' + Date.now(), type: 'custom', name: 'Bolo personalizado', price: bPrice(), qty: 1, image: bImage(), custom: c });
  saveCart(); bump();
  toast('Bolo personalizado adicionado ao pedido');
  Object.assign(bState, { step: 0, size: null, dough: null, filling: null, decor: null, idea: '', date: '' });
  renderBuilder();
  setTimeout(openCart, 450);
}

/* =====================================================================
   CHECKOUT E MENSAGEM DO WHATSAPP
   ===================================================================== */
const coForm = $('#coForm');
function maskPhone(v) { const d = v.replace(/\D/g, '').slice(0, 11); if (d.length <= 2) return d.length ? `(${d}` : ''; if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`; if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`; return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`; }
function maskCep(v) { const d = v.replace(/\D/g, '').slice(0, 8); return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d; }

function coMinDate() { return cart.some(i => i.type === 'custom') ? minCakeDate() : localISO(new Date()); }
function openCheckout() {
  if (!cart.length) return;
  closeCart();
  const d = $('#fData'), min = coMinDate();
  d.min = min;
  const customDates = cart.filter(i => i.type === 'custom').map(i => i.custom.date).sort();
  if (!d.value || d.value < min) d.value = customDates[0] || '';
  $('#dataErr').textContent = `Escolha uma data a partir de ${fmtDate(min).split(' ')[0]}.`;
  $('#coTotal').textContent = money(cartTotal());
  $('#miniCount').textContent = `${cartCount()} ${cartCount() === 1 ? 'item' : 'itens'} · ${money(cartTotal())}`;
  $('#miniList').innerHTML = cart.map(i => `<li><span>${i.qty}× ${esc(i.name)}</span><span>${money(i.qty * i.price)}</span></li>`).join('');
  showCoView('form');
  lastFocus = document.activeElement;
  $('#checkout').classList.add('open'); $('#checkout').setAttribute('aria-hidden', 'false'); lockScroll();
  setTimeout(() => $('#fNome').focus({ preventScroll: true }), 120);
}
function closeCheckout() { $('#checkout').classList.remove('open'); $('#checkout').setAttribute('aria-hidden', 'true'); lockScroll(); }
function showCoView(v) {
  $('#coBody').hidden = v !== 'form'; $('#footForm').hidden = v !== 'form';
  $('#coReview').hidden = v !== 'review'; $('#footReview').hidden = v !== 'review';
  $('#coDone').hidden = v !== 'done'; $('#footDone').hidden = v !== 'done';
  $('#coTitle').textContent = v === 'form' ? 'Seus dados e recebimento' : v === 'review' ? 'Revise sua mensagem' : 'Tudo certo!';
  $('#ms1').classList.toggle('on', v === 'form'); $('#ms2').classList.toggle('on', v !== 'form');
  $$('.m-body').forEach(b => b.scrollTop = 0);
}
function setErr(id, bad) { const f = $('#' + id).closest('.f'); f.classList.toggle('err', bad); return !bad; }
function validateCo() {
  const v = n => (coForm.elements[n].value || '').trim();
  const rec = coForm.elements.rec.value, pay = coForm.elements.pay.value;
  const checks = [
    setErr('fNome', v('nome').length < 2),
    setErr('fTel', v('tel').replace(/\D/g, '').length < 10),
    setErr('fEmail', !!v('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))),
    setErr('fData', !v('data') || v('data') < coMinDate())
  ];
  $('#rgRec').classList.toggle('err', !rec); $('#recErr').style.display = rec ? 'none' : 'block'; checks.push(!!rec);
  if (rec === 'entrega') {
    checks.push(setErr('fCep', v('cep').replace(/\D/g, '').length !== 8), setErr('fEnd', v('end').length < 3), setErr('fNum', !v('num')), setErr('fBairro', v('bairro').length < 2));
  }
  $('#rgPay').classList.toggle('err', !pay); $('#payErr').style.display = pay ? 'none' : 'block'; checks.push(!!pay);
  const ok = checks.every(Boolean);
  if (!ok) { const first = $('.f.err input, .f.err textarea, .rg.err input', coForm); if (first) { first.scrollIntoView({ behavior: 'smooth', block: 'center' }); if (first.type !== 'radio') setTimeout(() => first.focus({ preventScroll: true }), 300); } }
  return ok;
}
function buildMessage() {
  const v = n => (coForm.elements[n].value || '').trim();
  const L = [];
  L.push(`Olá! Gostaria de fazer um pedido na ${CONFIG.brand.nameTitle}.`, '');
  const prods = cart.filter(i => i.type !== 'custom'), customs = cart.filter(i => i.type === 'custom');
  if (prods.length) {
    L.push('*PEDIDO:*');
    prods.forEach(i => L.push(`• ${i.name}`, `   Quantidade: ${i.qty}`, `   Valor: ${money(i.price * i.qty)}${i.qty > 1 ? ` (${money(i.price)} cada)` : ''}`));
    L.push('');
  }
  customs.forEach((i, k) => {
    L.push(customs.length > 1 ? `*BOLO PERSONALIZADO ${k + 1}:*` : '*BOLO PERSONALIZADO:*');
    customDetails(i.custom).forEach(([a, b]) => L.push(`• ${a}: ${b}`));
    L.push(`• Quantidade: ${i.qty}`, `• Valor estimado: ${money(i.price * i.qty)}`, '');
  });
  L.push('*DADOS:*', `Nome: ${v('nome')}`, `Telefone: ${v('tel')}`);
  if (v('email')) L.push(`E-mail: ${v('email')}`);
  L.push('');
  const rec = v('rec');
  L.push('*RECEBIMENTO:*', rec === 'entrega' ? 'Entrega' : 'Retirada na loja');
  if (rec === 'entrega') {
    let end = `${v('end')}, ${v('num')}`; if (v('comp')) end += ` — ${v('comp')}`; end += ` — ${v('bairro')} — CEP ${v('cep')}`;
    L.push(`Endereço: ${end}`); if (v('ref')) L.push(`Referência: ${v('ref')}`);
  } else L.push(`Endereço: ${CONFIG.address.street} — ${CONFIG.address.cityLine} (loja)`);
  L.push(`Data: ${fmtDate(v('data'))}`, '');
  L.push('*PAGAMENTO:*', v('pay'), '(pagamento na retirada/entrega)', '');
  L.push('*OBSERVAÇÕES:*', v('obs') || 'Nenhuma', '');
  L.push(`*TOTAL ESTIMADO:* ${money(cartTotal())}${rec === 'entrega' ? ' + taxa de entrega' : ''}`);
  return L.join('\n');
}

/* =====================================================================
   GALERIA / LIGHTBOX
   ===================================================================== */
let lbI = 0;
function lbShow(i) {
  const g = CONFIG.gallery; lbI = (i + g.length) % g.length;
  const box = $('#lbArt'), open = $('#lightbox').classList.contains('open');
  const put = () => { box.innerHTML = img(g[lbI].image, g[lbI].caption); $('#lbCap').textContent = g[lbI].caption; box.style.opacity = 1; };
  if (open && !matchMedia('(prefers-reduced-motion: reduce)').matches) { box.style.opacity = 0; clearTimeout(box._t); box._t = setTimeout(put, 200); } else put();
}
function lbOpen(i) { lastFocus = document.activeElement; lbShow(i); $('#lightbox').classList.add('open'); $('#lightbox').setAttribute('aria-hidden', 'false'); lockScroll(); setTimeout(() => $('.lb-close').focus(), 50); }
function lbClose() { $('#lightbox').classList.remove('open'); $('#lightbox').setAttribute('aria-hidden', 'true'); lockScroll(); if (lastFocus) lastFocus.focus({ preventScroll: true }); }

/* =====================================================================
   ANIMAÇÕES: reveal, contadores, header
   ===================================================================== */
function counters(el) {
  const to = parseFloat(el.dataset.count), dec = +el.dataset.dec, pre = el.dataset.prefix, t0 = performance.now(), dur = 1600;
  const fmt = v => pre + v.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = fmt(to); return; }
  const tick = t => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = fmt(to * e); if (k < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}
function initObservers() {
  if (!('IntersectionObserver' in window)) { $$('.rv').forEach(e => e.classList.add('in')); $$('[data-count]').forEach(counters); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  $$('.rv').forEach(e => io.observe(e));
  const co = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { counters(e.target); co.unobserve(e.target); } }), { threshold: .6 });
  $$('[data-count]').forEach(e => co.observe(e));
  // WhatsApp flutuante sai de cena no configurador em telas pequenas (não cobre os botões)
  const fo = new IntersectionObserver(es => es.forEach(e => $('.fab').classList.toggle('away', e.isIntersecting && innerWidth < 961)), { threshold: .05 });
  fo.observe($('.builder'));
  // link ativo no menu
  const secs = CONFIG.nav.map(([, h]) => $(h)).filter(Boolean);
  const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) $$('.nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach(s => so.observe(s));
}
function onScroll() { $('#hdr').classList.toggle('scrolled', scrollY > 24); if (!pTick) { pTick = true; requestAnimationFrame(parallax); } }
let pTick = false;
function parallax() {
  pTick = false;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const y = Math.min(scrollY, innerHeight);
  $('#heroArt').style.setProperty('--py', (y * .045).toFixed(1) + 'px');
  $('#heroThumb').style.setProperty('--py2', (-y * .05).toFixed(1) + 'px');
}
function splitWords() {
  $$('[data-words]').forEach(el => {
    let i = 0;
    const walk = n => [...n.childNodes].forEach(c => {
      if (c.nodeType === 3) {
        const f = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(w => { if (!w) return; if (/^\s+$/.test(w)) f.append(w); else { const s = document.createElement('span'); s.className = 'w'; s.style.setProperty('--i', i++); s.textContent = w; f.append(s); } });
        c.replaceWith(f);
      } else if (c.nodeType === 1) walk(c);
    });
    walk(el); el.classList.add('rv', 'words');
  });
}

/* =====================================================================
   EVENTOS
   ===================================================================== */
function bindEvents() {
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  document.addEventListener('click', e => {
    const t = e.target;
    const add = t.closest('[data-add]'); if (add) return addToCart(add.dataset.add, add);
    if (t.closest('[data-open-cart]')) { e.preventDefault(); return openCart(); }
    const cc = t.closest('[data-close-cart]'); if (cc) { closeCart(); return; }
    if (t.closest('#scrim')) return closeCart();
    const inc = t.closest('[data-inc]'); if (inc) return changeQty(inc.dataset.inc, 1);
    const dec = t.closest('[data-dec]'); if (dec) return changeQty(dec.dataset.dec, -1);
    const rm = t.closest('[data-rm]'); if (rm) return removeItem(rm.dataset.rm);
    if (t.closest('[data-close-co]')) return closeCheckout();
    const gi = t.closest('[data-gi]'); if (gi) return lbOpen(+gi.dataset.gi);
    const lb = t.closest('[data-lb]'); if (lb) { const a = lb.dataset.lb; return a === 'close' ? lbClose() : lbShow(lbI + (a === 'next' ? 1 : -1)); }
    if (t === $('#lightbox')) return lbClose();
    if (t.closest('#mnav a')) closeMenu();
    // configurador
    const bo = t.closest('[data-bopt]');
    if (bo) {
      const key = bSteps[bState.step].key; bState[key] = bo.dataset.bopt;
      $$('.opt', $('#bSteps')).forEach(o => o.setAttribute('aria-checked', o === bo));
      if (key === 'decor') { const d = pick(B.decors, bState.decor); $('#ideaBox').classList.toggle('show', !!d.idea); if (d.idea) setTimeout(() => $('#ideaTxt')?.focus(), 100); }
      $('#bNext').disabled = !bValid(bState.step);
      renderBuilderPreview(); refreshProgress();
      return;
    }
    const bs = t.closest('[data-bstep]'); if (bs && !bs.disabled) return bGo(+bs.dataset.bstep);
    if (t.closest('#bNext')) return bGo(bState.step + 1);
    if (t.closest('#bPrev')) return bGo(bState.step - 1);
    if (t.closest('#bAdd')) return bAdd();
    if (t.closest('#bReset')) { Object.assign(bState, { step: 0, size: null, dough: null, filling: null, decor: null, idea: '', date: '' }); return bGo(0); }
  });
  $('#burger').addEventListener('click', () => $('#mnav').classList.contains('open') ? closeMenu() : openMenu());
  $('#toastBtn').addEventListener('click', () => { $('#toast').classList.remove('show'); openCart(); });
  $('#continueBtn').addEventListener('click', openCheckout);

  document.addEventListener('input', e => {
    if (e.target.id === 'ideaTxt') { bState.idea = e.target.value; $('#bNext').disabled = !bValid(bState.step); refreshProgress(); }
    if (e.target.id === 'bDate') bDateChange(e.target);
    if (e.target.id === 'fTel') e.target.value = maskPhone(e.target.value);
    if (e.target.id === 'fCep') e.target.value = maskCep(e.target.value);
    const f = e.target.closest('.f.err'); if (f) f.classList.remove('err');
  });
  document.addEventListener('change', e => {
    if (e.target.id === 'bDate') bDateChange(e.target);
    if (e.target.name === 'rec') { $('#pRet').hidden = e.target.value !== 'retirada'; $('#pEnt').hidden = e.target.value !== 'entrega'; $('#rgRec').classList.remove('err'); $('#recErr').style.display = 'none'; $('#coTotal').textContent = money(cartTotal()) + (e.target.value === 'entrega' ? ' + entrega' : ''); }
    if (e.target.name === 'pay') { $('#rgPay').classList.remove('err'); $('#payErr').style.display = 'none'; }
  });
  coForm.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateCo()) return;
    const msg = buildMessage();
    $('#msgPreview').textContent = msg;
    $('#waSend').href = waLink(msg); $('#waAgain').href = waLink(msg);
    showCoView('review');
  });
  $('#backEdit').addEventListener('click', () => showCoView('form'));
  $('#waSend').addEventListener('click', () => setTimeout(() => showCoView('done'), 400));
  $('#finishBtn').addEventListener('click', () => {
    cart = []; saveCart(); coForm.reset(); $('#pRet').hidden = $('#pEnt').hidden = true; closeCheckout(); toast('Pedido concluído. Obrigado!');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if ($('#lightbox').classList.contains('open')) return lbClose();
      if ($('#checkout').classList.contains('open')) return closeCheckout();
      if ($('#drawer').classList.contains('open')) return closeCart();
      if ($('#mnav').classList.contains('open')) return closeMenu();
    }
    if ($('#lightbox').classList.contains('open')) { if (e.key === 'ArrowRight') lbShow(lbI + 1); if (e.key === 'ArrowLeft') lbShow(lbI - 1); }
  });
  addEventListener('resize', () => { if (innerWidth > 960) closeMenu(); });
}
function bDateChange(el) {
  const ok = !!el.value && el.value >= minCakeDate();
  bState.date = ok ? el.value : '';
  $('#bDateErr').style.display = el.value && !ok ? 'block' : 'none';
  $('#bNext').disabled = !bValid(bState.step);
  renderBuilderPreview(); refreshProgress();
}
function refreshProgress() {
  $$('#bProgress button').forEach((b, j) => { b.disabled = !(j <= bState.step || bSteps.slice(0, j).every((_, k) => bValid(k))); });
}

/* =====================================================================
   INICIALIZAÇÃO
   ===================================================================== */
applyTheme();
renderStatic();
$('#rgPay').innerHTML = CONFIG.paymentMethods.map((m, i) => `<div class="rc"><input type="radio" name="pay" id="pay${i}" value="${esc(m)}"><label for="pay${i}">${esc(m)}</label></div>`).join('');
// Remove itens do carrinho salvos que não existem mais no cardápio
cart = cart.filter(i => i.type === 'custom' || findItem(i.key));
renderCart();
renderBuilder();
splitWords();
bindEvents();
initObservers();
