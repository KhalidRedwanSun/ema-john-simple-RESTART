import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    

    const{img,name,seller,price,stock}=props.product;
    
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />

            </div>

            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only left in {stock}. Order soon</small></p>
                
                {/* Jehetu amra react a kaj kortesi.so ekhane add to cart button er age ekta icon add korar jonno font awesome namok website a jabo..then start for free te click kore niche scroll korle react dekhte pabo and click korte hobe .then terminal a 
                npm i --save @fortawesome/fontawesome-svg-core
  npm install --save @fortawesome/free-solid-svg-icons
  npm install --save @fortawesome/react-fontawesome                website theke copy kore porjaykrome dite hobe.  website a oi 3 ta code er niche same page ei duita line copy kore
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'  upore boshabo and mone rakhte hobe ei duita code er niche website a arekta code ase  const element = <FontAwesomeIcon icon={faCoffee} /> etar shudhu matro <button className="main-button" > er por <FontAwesomeIcon icon={faCoffee} /> ei part tuku boshay dite hobe ..    ar ekhane je icon use korbo ota click kore tar vetore upore i class er vetor fas er porer tuku prothom word small rekhe baki word gulor starting a capital word diye start korte hobe exmple: {faCoffee} and eta import eo add korte hobe   */}
                
                
                <button onClick={()=>{props.handleAddProduct(props.product)}} className="main-button" ><FontAwesomeIcon icon={faShoppingBasket} className='icon' />Add to Cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;