import axios from "axios";

const ProductCard = ({ product }) => {
  const addToCart = () => {
    const cartItem = {
      ...product,
      quantity: 1,
    };

    axios
      .post("http://localhost:3001/cart", cartItem)
      .then(() => alert("Added to cart!"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="border rounded-2xl shadow p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="mt-4 text-xl font-semibold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button
        onClick={addToCart}
        className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
