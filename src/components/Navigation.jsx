import {Link} from 'react-router-dom';
import {useState} from 'react';

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Login",
    path: "/login",
  },
];
export default function Navigation(){
    const [menuActive, setMenuActive] = useState(false);

    return (
      <nav
        className={`site-navigation ${menuActive && 'active'}`}
        role="navigation"
      >
        <span className="menu-title">Xin chào Mũi Tẹt</span>
        <div className="menu-content-container">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}
                onClick={() => setMenuActive(!menuActive)}>
                {link.title}</Link>
              </li>
            ))}
          </ul>
          <div className="menu-avatar-container">
            <img
              className="menu-avatar-image"
              src="https://img.icons8.com/ultraviolet/40/000000/avatar.png"
            />
            <span className="menu-avatar-name">Mẹ Tẹt</span>
          </div>
        </div>
        <img
          className="menu-bar"
          src="https://img.icons8.com/ios/24/000000/menu--v1.png"
          onClick={() => setMenuActive(!menuActive)}
          />
      </nav>
    );
}
