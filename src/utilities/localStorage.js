const getStoredCart = () => {
    const storedCartString = localStorage.getItem("cart");
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveToLs = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart" , cartStringified);
}

const addToLs = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveToLs(cart);
}

const removeItem = (id) => {
    const cart = getStoredCart();
    console.log("22" , cart);
    const remaining = cart.filter((idx) => idx !== id);
    
    saveToLs(remaining);
}

export {addToLs , getStoredCart , removeItem};