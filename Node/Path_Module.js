const path = require('path')

console.log(path.sep);

const filePath = path.join('Content','Sub_folder','text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

// const resolve = path.resolve(__dirname,filePath)  OR
const resolve = path.resolve(__dirname,"Content","Sub_folder",'text.txt')
console.log(resolve);

