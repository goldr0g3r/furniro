import { useState } from "react";
import "./navbar_grid.scss";
import site_logo from "../../assets/logo";
import SearchIcon from "../../assets/icons/search";
import UserIcon from "../../assets/icons/user";
import HeartIcon from "../../assets/heart";
import CartIcon from "../../assets/icons/cart";
import MenuIcon from "../../assets/icons/menu";
import CloseIcon from "../../assets/icons/close";

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
          <a href={item.url} onClick={closeMenu} className="navbar_link">
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
      <div className="navbar_middle">
        <div className="menu_links">
          <ul>{renderMenuItems()}</ul>
        </div>
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

      <div className="mobile_menu_toggle">
        <button onClick={toggleMenu}>
          {showMenu ? (
            <div
              className={`${
                showMenu ? "mobile_menu_en" : "mobile_menu_hidden"
              }`}
            >
              <CloseIcon />
              <ul>{renderMenuItems()}</ul>
            </div>
          ) : (
            <MenuIcon />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
