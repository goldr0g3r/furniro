import { useState } from "react";
import "./navbar_grid.scss";
import site_logo from "../../assets/logo";
import SearchIcon from "../../assets/icons/search";
import UserIcon from "../../assets/icons/user";
import HeartIcon from "../../assets/heart";
import CartIcon from "../../assets/icons/cart";
import MenuIcon from "../../assets/icons/menu";

type Props = {};

const Navbar = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Shop",
      url: "/shop",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  const closeMenu = () => {
    setShowMenu(false);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.url} onClick={closeMenu}>
            {item.name}
          </a>
        </li>
      );
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar_left">
        <img src={site_logo} alt="logo" className="logo_img" />
        <span className="logo_text">Furniro</span>
      </div>
      <div className="navbar_middle nav_menu_items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="shop/">Shop</a>
          </li>
          <li>
            <a href="about/">About</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar_right">
        <button>
          <UserIcon />
        </button>
        <button>
          <SearchIcon />
        </button>
        <button>
          <HeartIcon />
        </button>
        <button>
          <CartIcon />
        </button>
      </div>

      <div className="mobile_menu">
        <button
          onClick={toggleMenu }
        >
          <MenuIcon />
        </button>
        <div className="menu_items">
          <ul>{renderMenuItems()
          
          }</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
