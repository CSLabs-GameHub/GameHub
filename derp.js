const user1 = 'abcdefghijklmnopqrstuvwxy_zABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
const fart = 'abcdefghijklmnopqrstuvwxyzA-.BCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

const regex = /[^-.a-zA-Z0-9_]/g

console.log(!regex.test(user1))
console.log(!regex.test(fart))
