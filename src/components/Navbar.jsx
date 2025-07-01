import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (user) {
      const loginTime = parseInt(localStorage.getItem("loginTime"));
      const updateTimer = () => {
        const remaining = Math.max(
          0,
          10 * 60 - Math.floor((Date.now() - loginTime) / 1000)
        );
        setSecondsLeft(remaining);

        // Thêm logic logout tự động
        if (remaining === 0) {
          localStorage.removeItem("user");
          localStorage.removeItem("loginTime");
          navigate("/login");
        }
      };

      updateTimer(); // Gọi ngay lập tức
      const interval = setInterval(updateTimer, 1000); // Cập nhật mỗi giây
      return () => clearInterval(interval); // Cleanup khi unmount
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loginTime");
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-red-600 text-white flex-wrap">
      <div className="space-x-4 mt-2 sm:mt-0">
        <Link to="/" className="text-xl font-bold">
          Sốp Con Cá
        </Link>
      </div>
      <div className="space-x-4 mt-2 sm:mt-0">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
        {user ? (
          <>
            <span className="text-sm text-gray-300">Hello, {user.email}</span>
            <span className="text-sm text-gray-200">
              Session: {secondsLeft}s
            </span>
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
