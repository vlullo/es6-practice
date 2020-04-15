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