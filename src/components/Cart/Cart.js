import React from 'react';
import'./Cart.css'

const Cart = (props) => {
    const cart= props.cart
    console.log('hey',cart);

    // reduce diye korte chaile
    // const/let(variable jekahne purata add kore store korbe )
    //= array.reduce((2 parameter total,prd)=>total+prd.price  ,0 initial value  )
    {/*const total= cart.reduce((total,prd)=> total+prd.price,0); */}

    let total=0;
    for(let i=0; i<cart.length;i++){
        const product= cart[i]
        total=total+product.price;
    }

    let shipping=0;
    
    if(total>35){
        shipping=0;

    }
    else if (total>15){
        shipping=4.99;
    }
    else if (total>0){
        shipping=12.99

    }
    // Math.round kore dile kono doshomik thakbe na 
    // const tax= Math.round(total * (10/100));


    // toFixed kore dile output string a ashe.so number a convert kore  nite hobe.
    // (something).toFixed(2); meaning doshomik er 2 ghor porjonto rakhbo 
    

    const tax=(total * (10/100)).toFixed(2);

    const grandTotal=total+shipping+Number(tax)


    return (
        <div>
            <h4> Order summary:</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price:{Number(total.toFixed(2))}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p><small>Tax+ VAT: {tax}</small></p>
            <p>Total Price: {Number(grandTotal.toFixed(2))}</p> 
        </div>
    );
};

export default Cart;