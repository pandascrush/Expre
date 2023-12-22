const os = require('os')

// current user info
const user = os.userInfo()
console.log(user)

// method returns the system uptime in a minutes
console.log(`System uptime in ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);

