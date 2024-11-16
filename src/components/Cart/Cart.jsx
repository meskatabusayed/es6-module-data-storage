import "./Cart.css"

const Cart = ({cart}) => {
    return (
        <div className="cart-container">
            <img src={cart.img} alt="" />
        </div>
    );
};

export default Cart;