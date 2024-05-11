/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var spentEstimate = {}
  let ans = [];
  for(var i=0;i<transactions.length;i++){
    var t = transactions[i];
    if(spentEstimate[t.category]){
      spentEstimate[t.category]+=t.price;
    } else {
      spentEstimate [t.category] = t.price
    }
  }
  var keys = Object.keys(spentEstimate)
  for(var i =0;i<keys.length;i++){
    ans.push({
      category: keys[i],
      totalSpent: spentEstimate[keys[i]]
    })
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
