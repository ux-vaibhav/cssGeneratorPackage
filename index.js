var fs = require('fs');
var path = require('path');
var reader = require('./core/reader');
const watchDir = path.join(__dirname,'\html');

console.log(`Watching for file changes on ${watchDir}`);

var watching = false;
fs.watch(watchDir, () => {
if(watching) return;
watching = true;
reader();
console.log("style.css updated");
setTimeout(() => {
watching = false;
}, 100);
});


