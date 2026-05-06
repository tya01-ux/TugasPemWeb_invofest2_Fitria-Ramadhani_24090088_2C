import { Home, Info, Users, HelpCircle, UserCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {

  const menuItems = [
    { label: "Beranda", href: "/", icon: <Home size={18} /> },
    { label: "Competition", href: "/competition", icon: <Info size={18} /> },
    { label: "Seminar", href: "/seminar", icon: <Users size={18} /> },
    { label: "Workshop", href: "/workshop", icon: <HelpCircle size={18} /> },
    { label: "Talkshow", href: "/talkshow", icon: <HelpCircle size={18} /> },

  ];

  const activeStyle = "text-red-900";
  const defaultStyle = "text-slate-600 hover:text-red-900";

  return (
    <header className=" bg-white shadow-sm px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div className="logo">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-16"
          />
        </div>
        <div className="nav flex gap-2">
          {menuItems.map((item) => (
             <NavLink
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? activeStyle : defaultStyle
                }`
              }>

              {item.icon && <span className="w-5 h-5">{item.icon}</span>}
              <span>{item.label}</span>
            </NavLink>
          ))}

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 font-medium ${
                isActive ? activeStyle : defaultStyle
              }`
            }
          >
            <span className="w-5 h-5">
              <UserCircle size={18} />
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
