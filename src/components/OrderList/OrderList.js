import React from 'react';

const OrderList = ({ orders }) => {

    let count = 0;
    for (const item of orders) {
        count = count + item.quantity
    }
    return (
        <div>
            <h2>Order List</h2>
            <h4>Items Ordered: {count}</h4>
        </div>
    );
};

export default OrderList;