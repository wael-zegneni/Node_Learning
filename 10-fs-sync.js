const {readFileSync, writeFileSync} = require('fs')

const first  = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `Here is the result : ${first + ' ' +second}`, {flag: 'a'})  // without { flag: 'a' } if the file is not there node will create a new one, if the file is there node with override the old values
                                                                                                        // with    { flag: 'a' } append

console.log("done with this task")

console.log("starting the next one")