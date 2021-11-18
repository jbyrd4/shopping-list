const shoppingItems = [
    {
        id: 1,
        name: 'milk',
        price: 5

    },
    
    {
        id: 2,
        name: 'eggs',
        price: 4

    },

    {
        id: 3,
        name: 'pizza rolls',
        price: 8

    },

    {
        id: 4,
        name: 'ground beef',
        price: 5

    },

    {
        id: 5,
        name: 'banana',
        price: '.25'

    },

    {
        id: 6,
        name: 'hot dog buns',
        price: 3

    },

    {
        id: 7,
        name: 'ketchup',
        price: 3

    },

    {
        id: 8,
        name: 'hummus',
        price: 4

    }
    
];

const addShoppingList = (newItem, prices) => {
    const newID = shoppingItems.length + 1

    const newItemObject = {
        id: newID,
        name: newItem,
        price: prices
    }
    shoppingItems.push(newItemObject)
}

addShoppingList('frozen Pizza', 6)
addShoppingList('Chicken', 4)
addShoppingList('Some Good Beer', 16)
addShoppingList('Steak', 7)
addShoppingList('frozen Vegetables', 9)

console.log(shoppingItems)

for (item of shoppingItems) {
    if (item.price >= 8) {
        console.log(shoppingItems[item.id-1])
    }
}