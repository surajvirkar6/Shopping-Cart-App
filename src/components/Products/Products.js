import React, { useState } from "react";
import "./Products.css";

function Products() {

  const productsList = [
    {
      id: 1,
      title: "Men's Denim Jacket",
      description:
        "Add this classic denim jacket to your casual wardrobe. Made from soft and breathable cotton. Stonewashed finish gives the style that lived-in look. Finished with two breast pockets. All of the cotton for our clothing is sustainably sourced and always will be.",
      price: 1500.0,
      image:
        "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Nike Air Jordan",
      description:
        "Supplied by a premier sneaker marketplace dealing with unworn, already sold out, in demand rarities. Each product is rigorously inspected by experienced experts guaranteeing authenticity. The Women’s Air Jordan 1 “Satin Black Toe” is a special construction of the original colorway of the Jordan 1 with ",
      price: 2000.0,
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      id: 3,
      title: "FOSSIL Townsman",
      description:
        "Designed exclusively for the modern gentlemen with a penchant for luxury, this chronograph watch featuring 50m water resistance and three subdials facilitating better time reading maintains your sophisticated sensibilities at any time",
      price: 4000.0,
      image:
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  const [products, setproducts] = useState(productsList);

  function addToCart(product) {
    let storedProduct = JSON.parse(localStorage.getItem(`cartProduct${product.id}`));
    if(storedProduct){
      storedProduct.quantity += 1;
      storedProduct.totalPrice = storedProduct.quantity * product.price;
      localStorage.setItem(`cartProduct${product.id}`, JSON.stringify(storedProduct));
      alert(`${product.title} added to cart`);
    }else{
      product.quantity = 1;
      product.totalPrice = product.price;
      localStorage.setItem(`cartProduct${product.id}`, JSON.stringify(product));
      alert(`${product.title} added to cart`);
    }
  }

  return (
    <div className="products_container">
      <h1>Products List:-</h1>
      <div className="product_cards">
        {products.map((product) => {
          return (
            <div className="single_product">
              <img src={product.image} alt="productImage" width={250} />
              <div className="product_details">
                <div className="product_title">{product.title}</div>
                <div className="product_price">{product.price}</div>
              </div>
              <div className="product_details">
                <button onClick={() => addToCart(product)}>Add to Cart</button>
                <button>View more</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;