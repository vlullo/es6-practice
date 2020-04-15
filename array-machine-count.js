//Write an expression using higher-order array methods (say, filter and reduce) to compute the total value of the machines in the inventory array.
const inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]

let totalMachineValue = inventory.reduce(function(sum, product) {
return sum + product.value;
}, 0); 


console.log(totalMachineValue)

//Constant non-constance
//Does the fact that account is constant mean that we can't update password? Why, or why not? And if not, how could we make it so that we can't?
const account = {
  username: "marijn",
  password: "xyzzy"
}
Object.freeze(account); //The function Object.freeze prevents data mutation.
account.password = "s3cret" // (*much* more secure)

console.log(account.password)