const fs = require('fs');
const mapping = {
  '魚油.html': 'images/魚油-封面.png',
  '葉黃素.html': 'images/舒立晶-封面.png',
  '薑黃補精.html': 'images/薑黃-封面.png',
  '舒立鈣.html': 'images/舒立鈣-封面.png',
  '舒關.html': 'images/舒關-封面.png',
  '益生菌.html': 'images/益生菌-封面.png',
  '乳清蛋白.html': 'images/乳清蛋白-封面.png'
};
Object.keys(mapping).forEach(file => {
  const path = file;
  let html = fs.readFileSync(path, 'utf8');
  html = html.replace(/<img src="[^"]+" alt="/g, `<img src="${mapping[file]}" alt="`);
  fs.writeFileSync(path, html, 'utf8');
});
console.log('updated src');