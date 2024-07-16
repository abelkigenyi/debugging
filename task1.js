// console.log("Hello, World!")


//   let animals = "Lions"
// console.log(animals)


const user = [
  {name: 'Peter', amount: 2500000},
  {name: 'Isaac', amount: 150000},
  {name: 'Jane', amount: 300000},
  {name: 'John', amount: 4000000},
  {name: 'Betty', amount: 700000}
]

const totalAmount = user.reduce((acc, user) => acc + user.amount, 0)
user.forEach(element => {
  console.log(`${element.name} deposited ${element.amount} and your interest is ${element.amount * 0.1} and your total amount is ${element.amount * 1.1}`);
});
console.log(totalAmount)