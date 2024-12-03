
import '../assets/CSS/layout.css';
import {useState} from 'react';
import {flowers} from './FlowerDB';
import Product from './Product';
import Cart from './Cart';

export default function Products(){
   const [cart,setCart] = useState([]) //cart state

   //function to add item to cart
   const addToCart = (product) =>{
   
    setCart((prevCart) => {
        //check if the item is already in the cart
        const existingItem = prevCart.find((item) => item.id === product.id);
        if(existingItem){
            //Update the quantity
            return prevCart.map((item) =>
                item.id === product.id ? { ...item, qty: item.qty + 1} : item
            );
    }
    //Add new item to the cart
    return [...prevCart, { ...product, qty: 1}];

   });
};

const updateCart = (id, newQty) => {
    setCart((prevCart) =>
        prevCart
            .map((item) => (item.id === id ? { ...item, qty: newQty } : item))
            .filter((item) => item.qty > 0) // Remove items with qty 0
    );
};

    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        flowers.map((flower) =>(
                            <Product
                               key={flower.id}
                               name={flower.name}
                               price={flower.price}
                               img={flower.img}
                               onAddToCart={() => addToCart(flower)} //Pass function
                            />
                        ))
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                  <Cart cart={cart} updateCart={updateCart}/> //Pass cart as prop
                }
            </div>
        </>
    );

}