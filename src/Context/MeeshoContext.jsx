import React,{ createContext, useState } from "react";
import AllProducts from "./All_data";


export  let MeeshoContext=createContext(null)
let default_cart=()=>{
    let cart={}
    for(let index=0;index<AllProducts.length+1;index++){
        cart[index]=0
    }
        return cart
}

let MeeContextProvider=(props)=>{
    let [items,setItems]=useState(default_cart())
    
    let addToCart=(itemId)=>{
        setItems((pre)=>({...pre,[itemId]:pre[itemId]+1}))
        
    }
    // let addItem=(itemId)=>{
    //     setItems((pre)=>({...pre,[itemId]:pre[itemId]+1}))
    // }
    let removeFromCart=(itemId)=>{
        setItems((pre)=>({...pre,[itemId]:pre[itemId]-1}))
    }
    let TotalCartAmount=()=>{
        let totalAmount=0
        for(let item in items){
            if(items[item]>0){
                let info=AllProducts.find((product)=>product.id===Number(item))
               totalAmount+=info.new_price*items[item]
            }
            
        }
        return totalAmount
    }
    let CartCount=()=>{
        let totalCount=0
        for(let a in items){
            if(items[a]>0){
                totalCount+=items[a]
            }

        }
        return totalCount
    }
  
    let contextValue={CartCount,TotalCartAmount,AllProducts,items,addToCart,removeFromCart}
   
    return(
        <MeeshoContext.Provider value={contextValue}>
            {props.children}
        </MeeshoContext.Provider>
    )
}
export default MeeContextProvider