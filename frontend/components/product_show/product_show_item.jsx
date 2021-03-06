import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import QuantitySelector from '../quantity_selector/quantity_selector';

export default ({ product, dispensary, currentUserId, userOrders, history, createOrder }) => {

  const [quantity, setQuantity] = useState(1)
  function increment() {
    setQuantity(quantity + 1)
  }

  function decrement() {
    setQuantity(quantity > 1 ? quantity - 1 : 1)
  }

  const addItem = (newItem) => {
    createOrder({
      user_id: currentUserId,
      product_id: newItem.product_id,
      quantity: newItem.quantity,
      dispensary_id: newItem.dispensary_id
    })
    .then(res => history.push('/orders')
    )}

  const addToCart = (e) => {
    e.preventDefault();
    if (currentUserId) {
      // let productIdArray = [];
      let item = {
        user_id: currentUserId,
        dispensary_id: dispensary.id,
        product_id: product.id,
        quantity: quantity
      }
      // let productIdArray = userOrders.map(item => (
      //   item.product_id
      // ))
      let productIdArray = true;
      if (productIdArray) {
      // if (!productIdArray.includes(item.product_id)) {
      //   productIdArray.push(item.product_id)
        addItem(item);
      } else {
        return (
          alert('Product already in cart!')
        )
      }
    } else {
      return (
          alert('Please log in before adding items to your cart!')
          (window.location.assign('/#/login'))
        )
    }
  }
  return (
    <div className="product-show">
      <div className="go-back">
        <Link to={`/dispensaries/${product.dispensaryId}`}>
          <div className="product-icon">
            <img src="/images/icons/left-arrow.png" />
          </div>
          <div className="mini-dispensary-img">
            <img src={dispensary.url} />
          </div>
          <div className="product-dispensary-name">
          &nbsp;{dispensary.name}
          </div>
        </Link>
      </div>
      <div className="show-border">
        <div className="product-show-details">
          
          <div className="show-img-border">
            <img className="product-show-img" src={product.url} />
          </div>

          <div className="product-show-text">
            <a className="product-show-category" href="/products">{product.category}</a>
            <h1 className="product-show-name">{product.name}</h1>
            
            <div className="pickup-at">
              
              <div className="small-dispensary-img">
                <img src={dispensary.url} />
              </div>
              Pickup at {dispensary.name}
            </div>

            <div className="price-box">
              <div className="price">{product.price}</div>
              <div className="unit-size">{product.size}</div>
            </div>

            <div className="quantity">Quantity</div>
            <div className="quantity-selector">
              <QuantitySelector increment={increment} decrement={decrement} quantity={quantity}/>
            </div>

            <div className="button-box">
              <button className="add-to-cart" onClick={addToCart} value={product, dispensary}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}