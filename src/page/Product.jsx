import React, { useState } from "react";
import { ShoppingCart, X } from "lucide-react"; // npm install lucide-react
import { Description } from "@radix-ui/react-dialog";


const ShopPuppy = () => {
  // 🐶 Product list
  const products = [
    {
      id: 1,
      name: "Royal Canin Mini Puppy Dry Dog Food",
      Description:
        "Puppy/Junior (Adult weight between 1 kg to 10 kg) up to10 months",
      price: 29.99,
      image:
        "https://petsy.online/cdn/shop/products/2_e17adbe2-3e2e-498b-b178-6b45256cd078.png?v=1717585062",
    },
    {
      id: 2,
      name: "Puppy Dry Food",
      Description: "Happy tummies, shiny coats, and mealtime joy  Omni Puppy Dry Food gives your pup.",
      price: 19.99,
      image:
        "https://sustainablepetfoodassociation.co.uk/wp-content/uploads/2022/11/butternutboxplant-based.jpg",
    },
    // 
    {
      id: 3,
      name: "Portions Kitten Wet Cat Food",
      Description: "kitten wet food offers 100% complete and balanced snack happiness is guaranteed—excellent value",
      price: 17.5,
      image:
        "https://krisers.com/cdn/shop/files/48907_PT1._AC_SL1200_V1690571443_1200x.jpg?v=1697206480",
    },
    {
      id: 4,
      name: "protein and fats for cats of all ages",
    
      Description: " Snag the treat bundle and let your cat taste",
      price: 37.5,
      image:
        "https://petfoodcity.online/wp-content/uploads/2024/06/7.jpg",
    },
    {
      id: 5,
      name: "Small & Mini Chicken Recipe ",
      Description: "kittens and contains a balance of protein ",
      price: 37.5,
      image:
        "https://www.sheba.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf1826/files/migrate-product-files/images/e0m7hvhpfsfckfhkzkfo.png",
    },
    {
      id: 5,
      name: "Small & Mini Chicken Recipe ",
      Description: "kittens and contains a balance of protein ",
      price: 37.5,
      image:
        "https://www.eu-startups.com/wp-content/uploads/2021/08/Butternutbox.jpg",
    },
   
   
   
   
    
  ];

  // 🧺 Cart state
  const [cart, setCart] = useState([]);

  // 👀 Show/Hide cart list
  const [showCart, setShowCart] = useState(false);

  // ➕ Add to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // ❌ Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-purple-50 p-10 relative">
      {/* 🛒 Header */}
       {/* <div className="justify-center text-center mt-10 bg-white py-2.5">
        <h1 className="text-3xl font-semibold ">— Puppy Couture —</h1>
        <h1 className="text-7xl font-bold text-pink-600">🐾Shop Puppy</h1>
      </div> */}
      <header className="flex justify-between items-center mb-20">
         <h1 className="text-3xl font-semibold ">— Puppy Couture —</h1>
        <h1 className="text-7xl font-bold text-purple-700 ">🐾 Shop Puppy</h1>

        <div className="relative">
          {/* Cart icon */}
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative cursor-pointer"
          >
            <ShoppingCart size={32} className="text-purple-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-sm font-semibold rounded-full px-2 py-0.5">
                {cart.length}
              </span>
            )}
          </button>

          {/* 🧾 Cart dropdown */}
          {showCart && (
            <div className="fixed inset-0 flex items-center justify-center  backdrop-blur-sm z-50">
              <div className="bg-blue-50 shadow-2xl rounded-2xl w-[420px] max-h-[80vh] p-6 relative flex flex-col">
                {/* ❌ Close button */}
                <button
                  onClick={() => setShowCart(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-purple-600 transition"
                >
                  <X size={22} />
                </button>

                {/* 🛍️ Title */}
                <h2 className="text-2xl font-bold text-purple-700 text-center mb-4">
                  Your Cart 🛒
                </h2>

                {/* 🧺 Cart Items */}
                <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent">
                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">
                      Your cart is empty 😢
                    </p>
                  ) : (
                    cart.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-white shadow-sm rounded-lg p-3 hover:shadow-md transition"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-contain rounded-md border"
                        />
                        <div className="flex-1 px-3 text-left">
                          <p className="text-sm font-semibold text-gray-800">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* 💰 Total + Checkout */}
                {cart.length > 0 && (
                  <div className="mt-5 border-t pt-4">
                    <p className="font-semibold text-lg text-center mb-3">
                      Total: $
                      {cart
                        .reduce((total, item) => total + item.price, 0)
                        .toFixed(2)}
                    </p>
                    <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition font-medium shadow-md">
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 🐶 Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <section
            key={product.id}
            className="p-5 bg-white rounded-2xl shadow-md hover:-translate-y-2 transform duration-300 cursor-pointer text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-contain mb-4 rounded-2xl"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-5">{product.Description}</p>

            <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>

            <button
              onClick={() => addToCart(product)}
              className="w-full p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-700"
            >
              Add To Cart
            </button>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ShopPuppy;
5