import "./bottle.css";

const Bottle = ({bottle , handleCart}) => {
    console.log(bottle);
    const {name , img , price} = bottle;
    return (
        <div className="bottle">
            <h2>Name : {name}</h2>
            <img src={img} alt="bottle_img" />
            <h3>Price : {price}</h3>
            <button onClick={() => handleCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;