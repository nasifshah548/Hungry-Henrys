import React from "react";
import logo from "../../assets/media/logo.jpg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center px-6 py-3 gap-x-12 flex-wrap sm:flex-nowrap">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Hungry Henry's" className="logo-img" />
        </Link>

        {/* Auth Links */}
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium text-sm">
            <li>
              <Link
                to="/store-locator"
                className="hover:text-red-600 transition-colors duration-200"
              >
                Store Locator
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="hover:text-red-600 transition-colors duration-200"
              >
                Sign In / Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
