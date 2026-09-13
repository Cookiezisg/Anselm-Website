import sharp from 'sharp';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f5f5f7"/>
  <g fill="#1d1d1f" transform="translate(96 96) scale(0.2133)">
    <rect x="0" y="0" width="88" height="88"/><rect x="106" y="0" width="88" height="88"/><rect x="212" y="0" width="88" height="88"/>
    <rect x="0" y="106" width="88" height="88"/><rect x="106" y="106" width="88" height="88"/>
    <rect x="0" y="212" width="88" height="88"/>
  </g>
  <text x="180" y="150" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="30" font-weight="600" fill="#1d1d1f">Anselm</text>
  <text x="96" y="330" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="68" font-weight="600" letter-spacing="-2" fill="#1d1d1f">The Agentic Workflow</text>
  <text x="96" y="410" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="68" font-weight="600" letter-spacing="-2" fill="#1d1d1f">Platform That Builds Itself.</text>
  <text x="96" y="500" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="28" fill="#6e6e73">Describe the work. Anselm builds it, schedules it, and runs it on your machine.</text>
  <text x="96" y="560" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif" font-size="24" fill="#8e8e93">anselm.website</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('og.png written');
