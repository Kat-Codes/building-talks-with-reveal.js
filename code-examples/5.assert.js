
const addItem = (subtotal, itemCost) => {
    const total = subtotal + itemCost;
    return total;
}

const total = addItem(10,2);
console.assert(total == 12);

















