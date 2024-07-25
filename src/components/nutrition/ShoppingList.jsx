import React from 'react';

function ShoppingList({ items }) {
  return (
    <div className="shopping-list">
      <h3>LISTA COMPRA</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
