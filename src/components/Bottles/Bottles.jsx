import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css";
import { addToLs, getStoredCart, removeItem } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles , setBottles] = useState([]);
    const [carts , setCarts] = useState([]);
    useEffect(() => {
        fetch("bottles.json")
        .then(res => res.json())
        .then(data => setBottles(data))
    } , []);

    useEffect(() => {
        if(bottles.length){
            const storedCart = getStoredCart();
            let savedCart = [];
            for (const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
                
            }
            setCarts(savedCart);

        }

    } , [bottles])

    const handleCart = cartItem => {
        const newCart = [...carts , cartItem];
        setCarts(newCart);
        addToLs(cartItem.id);

    }

    const handleRemoveCart = id => {
        const remainingCart = carts.filter(cart => cart.id !== id);
        setCarts(remainingCart);
        removeItem(id);
    }



    return (
        <div>
            <h1>Bottles Here : {bottles.length}</h1>
            <h1>Cart Item : {carts.length}</h1>
            <Cart carts={carts}
            handleRemoveCart={handleRemoveCart}
            ></Cart>
            <div className="bottles-container">
                {
                    bottles?.map(bottle => (<Bottle
                    key={bottle.id}
                    bottle={bottle}
                    handleCart={handleCart}
                    >
                        
                    </Bottle>))
                }
            </div>
        </div>
    );
};

export default Bottles;