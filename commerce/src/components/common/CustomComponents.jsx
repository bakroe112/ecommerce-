import Prototype from "prop-types";
import { NavLink } from "react-router-dom";
const CustomeNavLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 cursor-poiter list-none";
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-green`
          : `${className} ${linkStyles} `
      }
    >
      {children}
    </NavLink>
  );
};

const CustomeLink = ({ className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 cursor-poiter list-none";
  return (
    <NavLink className={`${className} ${linkStyles} `}>{children}</NavLink>
  );
};

const Badges = ({ color, children }) => {
  return (
    <div
      className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white `}
    >
      {children}
    </div>
  );
};

export { CustomeNavLink, CustomeLink, Badges };

CustomeNavLink.propTypes = {
  href: Prototype.isRequired,
  className: Prototype.isRequired,
  children: Prototype.isRequired,
};

CustomeLink.propTypes = {
  className: Prototype.isRequired,
  children: Prototype.isRequired,
};


Badges.propTypes = {
  color: Prototype.isRequired,
  children: Prototype.isRequired,
};
