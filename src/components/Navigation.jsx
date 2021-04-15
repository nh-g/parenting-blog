import {Link} from 'react-router-dom';
export default function Navigation(){
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
      }
    ];
    return (
      <nav className="site-navigation">
        <span>Xin chào Mũi Tẹt</span>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
                <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
}
