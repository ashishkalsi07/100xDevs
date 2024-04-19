function calculateTotalSpentByCategory(transactions) {
    let categories = {};
    
    // Loop through transactions to calculate totals for each category
    transactions.forEach(transaction => {
        if (categories.hasOwnProperty(transaction.category)) {
            categories[transaction.category] += transaction.Price;
        } else {
            categories[transaction.category] = transaction.Price;
        }
    });

    // Display total spent for each category
    for (let category in categories) {
        console.log("Total Spent in category " + category + ": " + categories[category]);
    }
}

let transactions = [
    {id:1, Price:100, category:"Food", ItemName:"Pizza"},
    {id:2, Price:400, category:"Clothing", ItemName:"Shirt"},
    {id:3, Price:100000, category:"Electronics", ItemName:"Laptop"},
    {id:4, Price:10, category:"Food", ItemName:"Chocolate"},
    {id:5, Price:1000, category:"Food", ItemName:"Maggi"},
    {id:6, Price:4000, category:"Food", ItemName:"HouseHold"}
];

calculateTotalSpentByCategory(transactions);
  