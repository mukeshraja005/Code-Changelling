import './App.css';
import React from 'react';


const menuItems = {
  m1: { description: "Chicken Fried Rice", name: "FriedRice", price: 150.00 },
  m2: { description: "Mutton Briyani", name: "Briyani", price: 175.00 },
  m3: { description: "Idly with Vada", name: "Idly", price: 50.00 },
  m4: { description: "Dosai with potato masala", name: "Dosai", price: 55.00 },
};

const MenuList = () => {
  return (
    <div class="menuitems">
      <ul>
        {Object.keys(menuItems).map((key) => {
          const menuItem = menuItems[key];
          return (
            <li>
              <h2 class='text'>{menuItem.name}</h2>
              <p>{menuItem.description}</p>
              <p class="price">Price: {menuItem.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuList;
