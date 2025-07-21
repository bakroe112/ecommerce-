import Prototypes from "prop-types";
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

// icon hiển thị số trên cart và tim
const Badges = ({ color, children }) => {
  return (
    <div
      className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white `}
    >
      {children}
    </div>
  );
};

const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = `font-medium ${
    level === 1
      ? "text-[80px] font-[600] text-primary"
      : level === 2
      ? "text-[40px] font-[700] text-primary"
      : level === 3
      ? "text-[28px] font-[700] text-primary"
      : level === 4
      ? "text-[24px] font-[600] text-primary"
      : level === 5
      ? "text-[22px] font-[600] text-primary"
      : "text-[18px] font-[500] text-primary"
  }`;

  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

const Caption = ({ children }) => {
  return <p className="text-sm font-normal text-primary-gray">{children}</p>;
};


const BodyOne = ({ className, children }) => {
  const classes = "text-lg font-normal text-primary-gray mb-4";
  return <p className={`${className} ${classes}`}>{children}</p>
};

export { CustomeNavLink, CustomeLink, Badges, Title, BodyOne, Caption };

CustomeNavLink.propTypes = {
  href: Prototypes.isRequired,
  className: Prototypes.isRequired,
  children: Prototypes.isRequired,
};

CustomeLink.propTypes = {
  className: Prototypes.isRequired,
  children: Prototypes.isRequired,
};


Badges.propTypes = {
  color: Prototypes.isRequired,
  children: Prototypes.isRequired,
};

Title.propTypes = {
  level: Prototypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: Prototypes.node.isRequired,
  className: Prototypes.node.isRequired,
};

BodyOne.propTypes = {
  className: Prototypes.isRequired,
  children: Prototypes.isRequired,
};

Caption.propTypes = {
  children: Prototypes.node.isRequired,
};