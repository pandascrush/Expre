const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./Content/first.txt','utf-8')
const second = readFileSync('./Content/second.txt','utf-8')
const third = readFileSync('./Content/result_Async.txt','utf8')

// console.log(first,second);

writeFileSync('./Content/result_sync.txt',`${third} `, {flag:'a'})
