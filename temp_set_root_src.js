const fs = require('fs');
const mapping = {
  '魚油.html': '魚油-封面.png',
  '葉黃素.html': '舒立晶-封面.png',
  '薑黃補精.html': '薑黃-封面.png',
  '舒立鈣.html': '舒立鈣-封面.png',
  '舒關.html': '舒關-封面.png',
  '益生菌.html': '益生菌-封面.png',
  '乳清蛋白.html': '乳清蛋白-封面.png'
};
for (const file of Object.keys(mapping)) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<div class="product-hero"><img src="[^"]+" alt="([^"]+)" \/><\/div>/g, `<div class="product-hero"><img src="${mapping[file]}" alt="$1" /></div>`);
  fs.writeFileSync(file, html, 'utf8');
}
console.log('root image paths applied');