const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const ask = (q) => new Promise((r) => rl.question(q, (a) => r(a)))

ask('What is your name? ').then((name) => {
  console.log(`Hello, ${name}!`)
  rl.close()
})
