import { NavLink } from "react-router-dom";

interface NavbarLinkProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}
export const NavbarLink: React.FC<NavbarLinkProps> = ({label, href, icon, isActive = false}) => {
  const activeStyle = "text-red-900";
  const defaultStyle = "text-slate-600 hover:text-red-900";
  return (
    <NavLink
      to={href}
      className= {`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium ${isActive ? activeStyle : defaultStyle}`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{label}</span>
    </NavLink>
  );
};
