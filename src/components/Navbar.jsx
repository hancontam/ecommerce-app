import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        E-Shop
      </Link>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
        {user ? (
          <>
            <span className="text-sm text-gray-300">Hello, {user.email}</span>
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
