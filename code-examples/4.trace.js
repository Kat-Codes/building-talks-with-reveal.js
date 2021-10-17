
const addItem = (subtotal, itemCost) => {
    const total = subtotal + addTax(itemCost);
    return total;
}

const addTax = (itemCost) => {
    const tax = getTax();
    return itemCost + itemCost * tax;
}

const getTax = () => {
    console.trace("Our console trace");
    return 0.2;
}

addItem(10,2);