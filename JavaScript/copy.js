// A Copy From an Object

// ✅ Right Method
// let obj1 = {
//     age: 25,
//     class: 'Full Stack'
// }

// let obj2 = {
//     age: obj1.age,
//     class: obj1.class
// }

// console.log(obj1.age)
// console.log(obj2.age = 20)

// ==================================================================================================

// ⛔ Wrong Method
// const obj1 = {
//   item: 'Toshiba',
//   ram: '8BG',
//   hard: '256GB',
//   hard_type: 'ssd',
// }

// const obj2 = obj1

// obj2.ram = '16GB'
// console.log(obj2)
// console.log(obj1)



// --- Spread Operator ---
let obj1 = {
    name: 'Ahmad',
    lastname: 'Karimi',
    age: 25,
    class: 'Full Stack Development',
    html: 90,
}

let obj2 = {...obj1}
console.log(obj2.name)
console.log(obj2.lastname)
console.log(obj2.age)


const array = ['123', '345', 'Ahmad', true]

const array2 = [...array]

// Shallow Copy => same address in memory
// Spread Copy => Duplication -> Deep Copy

let arrayOfObjects = [{name: 'Ahmad'}, {name: 'Mahmood'}]
let arrayOfObjects2 = [...arrayOfObjects]


arrayOfObjects2.push({name: 'Sara'})
console.log(arrayOfObjects)
console.log(arrayOfObjects2)


let obj1 = {
    name: 'Ahmad',
    last: 'Hakimi',
    age: 32,
}

let obj2 = {...obj1, name: 'Mahmood'}
console.log(obj2) // {name: 'Mahmood', last: 'Hakimi', age: 32}


let obj2 = {name: 'Mahmood', ...obj1}
console.log(obj2) // {name: 'Ahmad', last: 'Hakimi', age: 32}


let obj3 = {
    ram: 16,
    ssd: 256,
    screen: '450/900',
    ram: 32
}
console.log(obj3)