const fs = require('fs');
const files = ['魚油.html','葉黃素.html','薑黃補精.html','舒立鈣.html','舒關.html','益生菌.html','乳清蛋白.html'];
const hero = '.product-hero{background:transparent;border:0;border-radius:0;padding:0;display:flex;align-items:center;justify-content:center;height:100%;width:100%;}';
const heroImg = '.product-hero img{width:100%;height:auto;max-width:none;border-radius:0;box-shadow:none;display:block;}';
const media = '@media(max-width:1024px){.product-page{grid-template-columns:1fr;}.product-hero{order:-1;width:100%;height:auto;}.product-hero img{width:100%;height:auto;}}';
files.forEach(f=>{
  let h = fs.readFileSync(f, 'utf8');
  h = h.replace(/\.product-hero\{[^}]*\}/g, hero);
  h = h.replace(/\.product-hero img\{[^}]*\}/g, heroImg);
  if (h.indexOf('@media(max-width:1024px){') >= 0) {
    h = h.replace(/@media\(max-width:1024px\)\{[^}]*\}/g, media);
  } else {
    h = h.replace('</style>', media + '</style>');
  }
  fs.writeFileSync(f, h, 'utf8');
});
console.log('done');
