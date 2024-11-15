import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css";

const Bottles = () => {
    const [bottles , setBottles] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect(() => {
        fetch("bottles.json")
        .then(res => res.json())
        .then(data => setBottles(data))
    } , []);

    const handleCart = cartItem => {
        const newCart = [...cart , cartItem];
        setCart(newCart);
    }



    return (
        <div>
            <h1>Bottles Here : {bottles.length}</h1>
            <h1>Cart Item : {cart.length}</h1>
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