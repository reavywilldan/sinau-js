require('dotenv').config()

const initialMemoryUsage = process.memoryUsage().heapUsed
let yourName = process.argv[1]
yourName = yourName.split('\\')[2]
const environment = process.env.NODE_ENV

for (let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}


const currentMemoryUsage = process.memoryUsage().heapUsed
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);