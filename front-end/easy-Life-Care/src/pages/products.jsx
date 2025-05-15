// filepath: [products.jsx](http://_vscodecontentref_/1)
import "../css/products.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Bottom from "../components/bottom";
import Foot from "../components/foot";
import { useCart } from "../context/CartContext";

import ayurImage from "../assets/ayur.jpg";
import product2Image from "../assets/ayur.jpg";
import product3Image from "../assets/ayur.jpg";
import product4Image from "../assets/ayur.jpg";
import product5Image from "../assets/ayur.jpg";
import product6Image from "../assets/ayur.jpg";

const productsData = [
  {
    id: 1,
    name: "Product 1",
    price: 150,
    discountedPrice: 100,
    image: ayurImage,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Product 2",
    price: 250,
    discountedPrice: 200,
    image: product2Image,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Product 3",
    price: 100,
    discountedPrice: 50,
    image: product3Image,
    rating: 3.5,
  },
  {
    id: 4,
    name: "Product 4",
    price: 200,
    discountedPrice: 150,
    image: product4Image,
    rating: 4.8,
  },
  {
    id: 5,
    name: "Product 5",
    price: 400,
    discountedPrice: 300,
    image: product5Image,
    rating: 5.0,
  },
  {
    id: 6,
    name: "Product 6",
    price: 300,
    discountedPrice: 250,
    image: product6Image,
    rating: 4.2,
  },

  {
    id: 7,
    name: "Product 7",
    price: 350,
    discountedPrice: 280,
    image: product2Image,
    rating: 4.1,
  },
  {
    id: 8,
    name: "Product 8",
    price: 450,
    discountedPrice: 400,
    image: product3Image,
    rating: 4.6,
  },
  {
    id: 9,
    name: "Product 9",
    price: 500,
    discountedPrice: 450,
    image: product4Image,
    rating: 4.3,
  },
  {
    id: 10,
    name: "Product 10",
    price: 600,
    discountedPrice: 550,
    image: product5Image,
    rating: 4.7,
  },
  {
    id: 11,
    name: "Product 11",
    price: 700,
    discountedPrice: 650,
    image: product6Image,
    rating: 4.9,
  },
  {
    id: 12,
    name: "Product 12",
    price: 800,
    discountedPrice: 750,
    image: product2Image,
    rating: 4.4,
  },
  {
    id: 13,
    name: "Product 13",
    price: 900,
    discountedPrice: 850,
    image: product3Image,
    rating: 4.0,
  },
  {
    id: 14,
    name: "Product 14",
    price: 1000,
    discountedPrice: 950,
    image: product4Image,
    rating: 4.5,
  },
  {
    id: 15,
    name: "Product 15",
    price: 1100,
    discountedPrice: 1050,
    image: product5Image,
    rating: 4.8,
  },
  {
    id: 16,
    name: "Product 16",
    price: 1200,
    discountedPrice: 1150,
    image: product6Image,
    rating: 4.2,
  },
  {
    id: 17,
    name: "Product 17",
    price: 1300,
    discountedPrice: 1250,
    image: product2Image,
    rating: 4.1,
  },
  {
    id: 18,
    name: "Product 18",
    price: 1400,
    discountedPrice: 1350,
    image: product3Image,
    rating: 4.6,
  },
  {
    id: 19,
    name: "Product 19",
    price: 1500,
    discountedPrice: 1450,
    image: product4Image,
    rating: 4.3,
  },
  {
    id: 20,
    name: "Product 20",
    price: 1600,
    discountedPrice: 1550,
    image: product5Image,
    rating: 4.7,
  },
  {
    id: 21,
    name: "Product 21",
    price: 1700,
    discountedPrice: 1650,
    image: product6Image,
    rating: 4.9,
  },
  {
    id: 22,
    name: "Product 22",
    price: 1800,
    discountedPrice: 1750,
    image: product2Image,
    rating: 4.4,
  },
  {
    id: 23,
    name: "Product 23",
    price: 1900,
    discountedPrice: 1850,
    image: product3Image,
    rating: 4.0,
  },
  {
    id: 24,
    name: "Product 24",
    price: 2000,
    discountedPrice: 1950,
    image: product4Image,
    rating: 4.5,
  },
  {
    id: 25,
    name: "Product 25",
    price: 2100,
    discountedPrice: 2050,
    image: product5Image,
    rating: 4.8,
  },
  {
    id: 26,
    name: "Product 26",
    price: 2200,
    discountedPrice: 2150,
    image: product6Image,
    rating: 4.2,
  },
  {
    id: 27,
    name: "Product 27",
    price: 2300,
    discountedPrice: 2250,
    image: product2Image,
    rating: 4.1,
  },
  {
    id: 28,
    name: "Product 28",
    price: 2400,
    discountedPrice: 2350,
    image: product3Image,
    rating: 4.6,
  },
  {
    id: 29,
    name: "Product 29",
    price: 2500,
    discountedPrice: 2450,
    image: product4Image,
    rating: 4.3,
  },
];

function Product() {
  const location = useLocation();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [products, setProducts] = useState(productsData);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    if (location.pathname === "/products") {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    };
  }, [location.pathname]);

  const handleSort = (order) => {
    const sortedProducts = [...products];
    if (order === "low-to-high") {
      sortedProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (order === "high-to-low") {
      sortedProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
    } else if (order === "high-rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
    setProducts(sortedProducts);
    setSortOrder(order);
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
    navigate("/cart", {
      state: { message: `${product.name} has been added to your cart!` },
    }); // Redirect to cart with a success message
  };

  return (
    <div className="product-container">
      <h1 className="product-header">Our Products</h1>

      {/* Filter Section */}
      <div className="product-filter">
        <label htmlFor="sort-options">Sort by: </label>
        <select
          id="sort-options"
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="product-filter-select"
        >
          <option value="">Select</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="high-rating">High Rating</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">
                <span className="original-price">₹{product.price}</span>
                <span className="discounted-price">
                  ₹{product.discountedPrice}
                </span>
              </div>
              <p className="product-rating">Rating: ⭐ {product.rating}</p>
            </div>
            <div className="product-actions">
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Bottom />
      <Foot />
    </div>
  );
}

export default Product;
