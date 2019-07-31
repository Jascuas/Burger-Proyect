import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios-order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
   
  }

  render() {
    return (
      <div>
        {this.state.orders ? (
          this.state.orders.map(order => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          ))
        ) : (
          <p>There is not orders yet!</p>
        )}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
