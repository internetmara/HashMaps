import React from "react";

class OrderIndexItem extends React.Component {
  render() {
    const { id, prod_name, dispo_name, quantity, url, dispo_id, prod_id, userOrders } = this.props
    // debugger
    return(
      <div className="order-left">
        <div className="order-products">
          <h1 className="prod_name">{prod_name}</h1>
          <h1 className="id">{id}</h1>
          <h1 className="dispo_name">{dispo_name}</h1>
          <h1 className="quantity">{quantity}</h1>
          <img className="url" src={url}/>
          <h1 className="dispo_id">{dispo_id}</h1>
          <h1 className="prod_id">{prod_id}</h1>
        </div>
      </div>
    )
  }
}

export default OrderIndexItem;