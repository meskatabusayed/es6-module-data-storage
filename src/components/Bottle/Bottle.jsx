import "./bottle.css";

const Bottle = ({bottle}) => {
    console.log(bottle);
    const {name , img , price} = bottle;
    return (
        <div className="bottle">
            <h2>Name : {name}</h2>
            <img src={img} alt="bottle_img" />
            <h3>Price : {price}</h3>
        </div>
    );
};

export default Bottle;