import axios from "axios";

const ProductCard = ({ product }) => {
  const addToCart = () => {
    const cartItem = {
      ...product,
      quantity: 1,
    };

    axios
      .post("https://ecommerce-json-server-8cha.onrender.com/cart", cartItem)
      .then(() => alert("Added to cart!"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col hover:shadow-lg transition">
      <img
        src={product.image}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold line-clamp-2">{product.title}</h2>
      <p className="text-blue-600 font-bold mt-2">${product.price}</p>
      <button
        onClick={addToCart}
        className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
