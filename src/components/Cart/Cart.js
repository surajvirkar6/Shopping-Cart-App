import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";

function Cart() {
  const [value, setValue] = useState();
  let cartProducts = { ...localStorage };
  let totalItems = 0;
  let totalPrice = 0;
  let cartItems = [];

  let itemKeys = Object.keys(cartProducts).map((key) => {
    return key;
  });
  itemKeys.forEach((item) => {
    cartItems.push(JSON.parse(localStorage.getItem(item)));
  });
  cartItems.forEach((item) => {
    totalItems += item.quantity;
    totalPrice += item.totalPrice;
  });

  function setquantity(id, action) {
    if (action === "add") {
      let storedProductData = JSON.parse(
        localStorage.getItem(`cartProduct${id}`)
      );
      storedProductData.quantity += 1;
      storedProductData.totalPrice =
        storedProductData.totalPrice + storedProductData.price;
      localStorage.setItem(
        `cartProduct${id}`,
        JSON.stringify(storedProductData)
      );
      setValue({});
    } else {
      let storedProductData = JSON.parse(
        localStorage.getItem(`cartProduct${id}`)
      );
      if (storedProductData.quantity > 1) {
        storedProductData.quantity -= 1;
        storedProductData.totalPrice =
          storedProductData.totalPrice - storedProductData.price;
        localStorage.setItem(
          `cartProduct${id}`,
          JSON.stringify(storedProductData)
        );
        setValue({});
      }
    }
  }


  function handleDelete(id) {
    localStorage.removeItem(`cartProduct${id}`);
    setValue({});
  }

  return (
    <div>
      <Navbar />
      <div className="cart">
        <div className="cart_container_1">
          <h1>My Cart</h1>
          <hr />
          {cartItems.map((item) => {
            return (
              <div className="cart_products">
                <img src={item.image} alt="productImage" width={250} />
                <div>
                  <p className="cart_product_title">{item.title}</p>
                  <p className="cart_product_price">Price:- $ {item.totalPrice}</p>
                  <div className="quantity_container">
                  <p className="quantity_range" onClick={() => setquantity(item.id, "minus")}>-</p>
                  <p>Quantity:- {item.quantity}</p>
                  <p className="quantity_range" onClick={() => setquantity(item.id, "add")}>+</p>
                  </div>
                </div>
                <img className="delete_product" src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" alt="delete" width={20} height={20} onClick={() => handleDelete(item.id)}/>
              </div>
            );
          })}
        </div>
        <div className="cart_container_2">
          <h1>Order Summary</h1>
          <hr />
          <p>Total items:- {totalItems}</p>
          <p>Total price:- $ {totalPrice}</p>
          <button>Procced to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;