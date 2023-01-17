import { TProduct, TPurchase, TUsers,  PRODUCT_CATEGORY } from "./types"

export const users: TUsers[] = [
    {
        id: "01",
        email: "luizinho@gmail.com",
        password: "J@son"
    },
    {
        id: "02",
        email: "rodolfinho@gmail.com",
        password: "Re@ct"
    }
]

export const products: TProduct[] = [
    {
        id: "01",
        name: "Boné",
        price: 59,
        category: PRODUCT_CATEGORY.CLOTHES_AND_SHOES
    }, 
    {
        id: "02",
        name: "Moletom",
        price: 208,
        category: PRODUCT_CATEGORY.ACCESSORIES
    },
    {
        id: "03",
        name: "IPhone 11",
        price: 6999,
        category: PRODUCT_CATEGORY.ELECTRONICS
    }
]

export const purchase: TPurchase[] = [
    {
        userId: `${users.map((user)=> user.id)}`,
        productId: `${products.map((product)=> product.id)}`,
        quantity: 5,
        totalPrice: 5*104
    },
    {
        userId: `${users.map((user)=> user.id)}`,
        productId: `${products.map((product)=> product.id)}`,
        quantity: 3,
        totalPrice: 3*32
    }
]

export function createUser(id:string, email:string, password:string): void{
    const newUser: TUsers = {
        id,
        email,
        password
    }
    users.push(newUser)
    console.log("Cadastro Realizado com Sucesso")
}



export function getAllUsers() : TUsers[]{
    return users
}



export function createProduct(id:string, name:string, price: number, category:PRODUCT_CATEGORY): void {
    const newProduct: TProduct = {
        id,
        name,
        price,
        category
    }
    products.push(newProduct)
    console.log("Produto criado com sucesso")
}

export function getAllProducts() : TProduct[]{
    return products
}

export function getProductById(idSearch:string | undefined){
    for(let i =0; products.length -1; i++){
        if(products[i].id === idSearch){
            return products[i]
    }
    }
}


export function queryProductsByName(q:string): TProduct[]{
    return products.filter((product)=>{
        return (product.name.toLowerCase().includes(q.toLowerCase()))
    })
}


function createPurchase(userId:string, productId:string, quantity:number, totalPrice: number){
    const newPurchase: TPurchase ={
        userId,
        productId,
        quantity,
        totalPrice
    }
    purchase.push(newPurchase)
    console.log("Compra realizada com sucesso")
}

function getAllPurchasesFromUserId (userIdToSearch:string): TPurchase[]{
    return purchase.filter((purchase)=>{
        return(purchase.userId.toLowerCase().includes(userIdToSearch.toLowerCase()))
    })
}

console.log(getAllPurchasesFromUserId("01"))