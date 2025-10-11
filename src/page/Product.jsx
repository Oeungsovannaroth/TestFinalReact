import React, { useEffect, useState } from "react";
import { ShoppingCart, X } from "lucide-react"; // npm install lucide-react
import { Description } from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
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
      Description:
        "Happy tummies, shiny coats, and mealtime joy  Omni Puppy Dry Food gives your pup.",
      price: 19.99,
      image:
        "https://www.kohepets.com.sg/cdn/shop/files/smartheart-beef-milk-flavor-puppy-dry-dog-food-1-3kg.jpg?v=1708941270",
    },
    //
    {
      id: 3,
      name: "Portions Kitten Wet Cat Food",
      Description:
        "kitten wet food offers 100% complete and balanced snack happiness is guaranteed—excellent value",
      price: 17.5,
      image:
        "https://krisers.com/cdn/shop/files/48907_PT1._AC_SL1200_V1690571443_1200x.jpg?v=1697206480",
    },
    {
      id: 4,
      name: "protein and fats for cats of all ages",

      Description: " Snag the treat bundle and let your cat taste",
      price: 23.5,
      image: "https://petfoodcity.online/wp-content/uploads/2024/06/7.jpg",
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
      id: 6,
      name: "Small & Mini Chicken Recipe ",
      Description: "kittens and contains a balance of protein ",
      price: 16.5,
      image: "https://m.media-amazon.com/images/I/81fZnv6Ux8L.jpg",
    },
  ];
  const productss = [
    {
      id: 1,
      name: "Puppy Toy Breed",
      description:
        "Pro Plan Puppy Toy Breed Chicken & Rice Formula Dry Dog Food",
      price: 21.99,
      image:
        "https://cdn11.bigcommerce.com/s-vmvni2zq0j/images/stencil/1280x1280/products/57587/86401/381422__72462.1673634111.jpg?c=2",
    },
    {
      id: 2,
      name: "Pupkin Bites",
      description:
        "Purina Beggin’ Pupkin Bites With Bacon and Pumpkin Halloween Dog Treats",
      price: 13,
      image:
        "https://image.chewy.com/catalog/general/images/jinx-jr-whole-grain-chicken-recipe-natural-dry-puppy-food-4lb-bag/img-243116._AC_SL600_V1_.jpg",
    },
    {
      id: 3,
      name: "Beggin Dog",
      description:
        "Beggin Dog Treats Bacon & Peanut Butter Flavor Stix & Strips",
      price: 16.99,
      image:
        "https://i.pinimg.com/474x/5f/15/96/5f15960ac62d4210fd588539fe62af59.jpg",
    },
  ];
  const clothes = [
    {
      id: 1,
      name: "Jecikelon Winter",
      description:
        "Jecikelon Winter Dog Hoodie Sweatshirts with Pockets Warm Dog Clothes for Small Dogs Chihuahua Coat Clothing Puppy Cat Custume(Pink, XX-Small)",
      price: 12.49,
      image:
        "https://m.media-amazon.com/images/I/71oouYm6x7L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 2,
      name: "KYEESE",
      description:
        "Jecikelon Winter Dog Hoodie Sweatshirts with Pockets Warm Dog Clothes for Small Dogs Chihuahua Coat Clothing Puppy Cat Custume(Pink, XX-Small)",
      price: 12.49,
      image:
        "https://m.media-amazon.com/images/I/81DcZbh8U3L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 3,
      name: "Sweater Dress Plaid Knitwear",
      description:
        "Dog Sweater Dress Plaid Knitwear for Small Medium Dogs Warm Clothes with Leash Hole for Christmas (Pink, XS)",
      price: 15.1,
      image:
        "https://m.media-amazon.com/images/I/719OhLhfroL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 4,
      name: "Bark Knight Rises Dog T-shirt",
      description:
        "The shirt showcases a dog in a superhero pose, embodying the spirit of a caped crusader.",
      price: 12.49,
      image:
        "https://petsetgo.co.in/cdn/shop/files/3_8d1dd6bf-209f-4da5-a9e5-fe56012c0565_900x.png?v=1747390306",
    },
    {
      id: 5,
      name: "Cape Style Cornflower Blue- Dog Raincoat",
      description:
        "Designed to keep your dog cool and comfortable, making it suitable for daily wear.Fit: Available in various sizes to accommodate different dog breeds.",
      price: 9.49,
      image:
        "https://petsetgo.co.in/cdn/shop/files/14_7c41f51b-73bb-4754-8b67-d3dec9f5da06_900x.png?v=1748500070",
    },
    {
      id: 6,
      name: "  Cute Fruit Dog Coat Hoodies",
      description:
        " Warm Dog Winter Clothes Cute Fruit Dog Coat Hoodies Fleece Pet  Dogs Costume Jacket(Green,XS)",
      price: 6.49,
      image:
        "https://m.media-amazon.com/images/I/61uEjQEWnHL._AC_SY300_SX300_QL70_FMwebp_.jpg",
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
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="min-h-screen bg-purple-50 p-10 relative">
      {/* 🛒 Header */}

      <header className="flex flex-col sm:flex-row justify-between items-center mb-20">
        <h1 className="md:text-4xl sm:text-2xl font-semibold mb-4 sm:mb-0 text-purple-600">
          — Puppy Couture —
        </h1>
        <h1 className="md:text-3xl sm:text-2xl font-bold text-purple-700">
          🐾 Shop Puppy
        </h1>

        <div className="relative">
          {/* 🛒 Cart Icon */}
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative cursor-pointer p-2 hover:scale-110 transition"
          >
            <ShoppingCart
              size={40}
              className="text-pink-800 hover:text-blue-600"
            />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-sm font-semibold rounded-full px-2 py-0.5">
                {cart.length}
              </span>
            )}
          </button>

          {/* 🧾 Cart Modal */}
          {showCart && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
              <div className="bg-blue-50 shadow-2xl rounded-2xl w-[420px] max-h-[80vh] p-6 relative flex flex-col">
                {/* ❌ Close */}
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

                {/* 🧺 Items */}
                <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent">
                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">
                      Your cart is empty
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
                      <Link to="/payment">Pay now</Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 🐶 Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <section
            key={product.id}
            className="p-5 bg-white rounded-2xl shadow-md hover:-translate-y-2 transform duration-300 cursor-pointer text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className=" mb-4 rounded-2xl object-cover w-full h-auto max-w-full"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-5 text-pink-500 text-sm mt-2 font-bold">
              {product.Description}
            </p>

            <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>

            <button
              onClick={() => {
                addToCart(product);
                alert(`${product.name} added to cart!`);
              }}
              className="w-full p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-700"
            >
              Add To Cart
            </button>
          </section>
        ))}
      </div>
      {/* Puppy Food */}
      <div className=" py-16 mt-30">
        <div className="container mx-auto px-4 ">
          <h2 className="text-6xl font-bold text-pink-500 mb-8 text-center">
            Puppy Food
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productss.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full max-w-full h-auto mb-4 rounded-2xl"
                />
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  {product.name}
                </h3>
                <p className="text-pink-500 text-sm mt-2 font-bold">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-900 font-bold text-lg">
                    ${product.price}
                  </span>
                  <button
                    className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 cursor-pointer"
                    onClick={() => {
                      addToCart(product);
                      alert(`${product.name} added to card!!`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Puppy Clothes */}
      <div className=" py-16 mt-30 bg-gray-200">
        <div className="container mx-auto px-4 ">
          <h2 className="text-6xl font-bold text-purple-500 mb-8 text-center">
            Puppy Clothes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clothes.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-84 mb-4 rounded-2xl object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  {product.name}
                </h3>
                <p className="text-pink-500 text-sm mt-2 font-bold">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-900 font-bold text-lg">
                    ${product.price}
                  </span>
                  <button
                    className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 cursor-pointer"
                    onClick={() => {
                      addToCart(product);
                      alert(`${product.name} added to card!!`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPuppy;
5;
