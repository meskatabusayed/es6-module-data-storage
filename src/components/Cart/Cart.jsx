import "./Cart.css"

const Cart = ({carts , handleRemoveCart}) => {
    return (
        <div className="cart-container">
            {
                carts?.map(cart => (<div 
                key={cart.id}
                >
                    <img src={cart.img}/>
                    <button onClick={() => handleRemoveCart(cart.id)}>Remove</button>

                </div>)
                    )
            }
        </div>
    );
};

export default Cart;