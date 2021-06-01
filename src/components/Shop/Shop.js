import React,{useState} from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    // ekhane fakeData likhe auto import kora jay ..ar import na hole manually import korte hobe.amra ekhane fakedata folder ta import kortesi..then console.log kore dekhbo. (../ dile import a 1 step upore othe).. fakeData import kore console.log(fakeData) korle console a 81 element er array pabo..
    // console.log(fakeData)
    let first10=fakeData.slice(0,10);// 0 theke dhore 9 porjonto 10 bad
    
    let [products,setProducts]= useState(first10);
  


    // State jekhane use korbo eventhandler function tao ohane use korbo and props hishebe pathay dibo arek file a jekhane button ase ta props. diye recieve korbe.. . tahole shubidha hobe eta must korbo..ekahne eventhandler use kore cart er hishab nikash korbo..tai je file a cart er hishab nikash hobe okahnei eventhandler use korbo..


    const [cart,setCart]= useState([]);

   

    const handleAddProduct = (product) => {
        console.log("Product Added", product);

        // eta   newCart =[...cart,product]; ...cart mane cart er ager element + product. meaning newCart=[cart]+[product] (in python);

        const newCart =[...cart,product];
        setCart(newCart);

    }

    


    return (
        <div className="shop-container">
            <div className="product-container">
                
                {
                    products.map(pd=>
                    <Product product={pd} handleAddProduct={handleAddProduct}></Product>) 
                } 
            

            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>

           
            
        </div>
    );
};

export default Shop;