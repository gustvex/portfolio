import { Link } from 'react-router-dom';

const menuItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

const Menu = () => {
  return (
    <nav className='nav-transition'>
      <ul className="flex space-x-24">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
