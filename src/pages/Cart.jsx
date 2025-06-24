import { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/cart")
      .then((res) => setCartItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-xl flex justify-between"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <p className="font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="text-right font-bold text-xl mt-4">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
