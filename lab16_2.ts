////////////////////////////////////////////////////////////////

interface Mountain{
    name: string;
    height: number;
}

let Mountains:Mountain[]=[
    
    {
    name: 'Kilimanjaro',
    height: 19341
    },

    {
        name: 'Everest',
        height: 29029
    },

    {
        name: 'Denali',
        height: 20310
    }

]

let findNameOfTallestMountain=function(mArr:Mountain[]):string
{
    let tallestName:string;
    let tallestHeight:number=0;
    for(let m of mArr)
    {
        if(m.height> tallestHeight)
        {
            tallestName=m.name;
            tallestHeight=m.height
        }
    
    }
    console.log(tallestName);
    return tallestName;
}

console.log(`Result of highest mountain: ${findNameOfTallestMountain(Mountains)}`);

///////////////////////////////////////////////////////////////////

interface Product{
name: string;
price: number;
}

let Products:Product[]=[
    
    {
        name: 'tacos',
        price: 1.5
    },

    {
        name: 'burritos',
        price: 2.0
    },

    {
        name: 'chimichangas',
        price: 2.5
    }

] 

let calcAverageProductPrice = function(prods:Product[]):number{
    let avgPrice:number=0;
    let totalOfPrices:number=0;
    let totalProds:number=prods.length;
    for(let p of prods)
    {
        totalOfPrices += p.price;
    }
    avgPrice=totalOfPrices/totalProds;

    return avgPrice;
}
 
let avgPriceElseWhere=calcAverageProductPrice(Products);
console.log(`Products avg price result: ${avgPriceElseWhere}`);

///////////////////////////////////////////////////////////////////////////////

interface InventoryItem extends Product{
    quantity:number;
}


let Inventory:InventoryItem[]=[
{
    name:"motor",
    price:10.00,
    quantity:10
},
{
    name:"sensor",
    price:12.50,
    quantity:4 
},
{
    name:"LED",
    price:1.00,
    quantity:20 
}
]

let calcInventoryValue=function(items: InventoryItem[]):number{
    let totalValue:number=0;
    for(let p of items)
    {
        totalValue+=(p.price*p.quantity);
    }
    return totalValue;
}

let valueFinder = calcInventoryValue(Inventory);
console.log(`Inventory Result: ${valueFinder}`);
