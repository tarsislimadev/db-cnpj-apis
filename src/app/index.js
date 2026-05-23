const readline = require('readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const ask = (q) => new Promise((r) => rl.question(q, (a) => r(a)))

const run = async () => {
  const name = await ask('What is your name? ')
  console.log(`Hello, ${name.toString().trim()}!`)
  rl.close()
}

run()
