
const mainStoreInventory = [
{ name: "Laptop", price: 1200, stock: 5 },
{ name: "Mouse", price: 25, stock: 0 },
{ name: "Keyboard", price: 100, stock: 12 }
];

const acquiredStoreInventory = [
{ name: "Monitor", price: 300, stock: 8 },
{ name: "Headphones", price: 50, stock: 0 },
{ name: "Webcam", price: 75, stock: 20 }
];

//Merge the Arrays Using Spread Operator (...)
const unifiedInventory = [...mainStoreInventory,...acquiredStoreInventory];
console.log("==== Merge the Arrays Using Spread Operator (...) ====");
console.log(unifiedInventory);

//Clean the Data (Filter) to remove those data which stock is 0
const cleanData = unifiedInventory.filter(inventory => (inventory.stock != 0));
console.log("==== Using Filter remove those which stock is 0 ====");
console.log(cleanData);


//Price Adjustment (Map) Decrease the price of every item by 10%.
const priceAdjustment = cleanData.map(item => {
    item.price = item.price -(item.price * 0.10);
    return item;
});
console.log("==== Using Map add 10% discount in each price ====");
console.log(priceAdjustment);


//Calculate the total monetary value of the entire discounted inventory using reduce
const totalAmount = priceAdjustment.reduce((sum , item) => (sum + (item.price * item.stock)),0);
console.log("==== Using Reduce Calculate the total monetary value ====");
console.log(`Total Inventory Value: ${totalAmount}`);
