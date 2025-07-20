import React, { useEffect, useRef, useState } from "react";
import LogoImg from "../../assets/common/logo.png";
import { menulists } from "../../assets/data/data";
import { Badges, CustomeLink, CustomeNavLink } from "./CustomComponents";
import { IoSearchOutline, IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";


const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isScolled, setIsScolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();


  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  // Đóng menu khi click ra ngoài
  const closeMenuOutSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setisOpen(false);
    }
  };

  // Xử lý scroll với animation
  const handleScroll = () => {
    setIsScolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutSide);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutSide);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Xác định Home Page để hiển thị black box
  const isHomePage = location.pathname === "/";
  return (
    <>
      <header
        className={
          isHomePage
            ? `header px-12 py-3 bg-white-100 relative z-20 ${
                isScolled ? "scrolled" : ""
              }`
            : `header px-12 py-3 relative z-20 ${isScolled ? "scrolled" : ""}`
        }
      >
        {isHomePage && (
          <div
            className={`${
              isScolled ? "lg:bg-none" : "lg:bg-black"
            } lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}
          >
            {" "}
          </div>
        )}
        <nav className="p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-4">
            <div>
              <img src={LogoImg} alt="LogoImg" className="h-7" />
            </div>
            <div className="hidden lg:flex items-center justify-between gap-8">
              {menulists.map((list) => (
                <li key={list.id} className="uppercase list-none">
                  <CustomeNavLink href={list.path}>{list.link}</CustomeNavLink>
                </li>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8 icons">
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              <CustomeLink
                className={`${
                  isScolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                Login
              </CustomeLink>
              <span
                className={`${
                  isScolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                /
              </span>
              <CustomeLink
                className={`${
                  isScolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                Register
              </CustomeLink>
            </div>

            <div
              className={`${
                isScolled || !isHomePage ? "text-primary" : "text-white"
              } icon flex items-center justify-between gap-6`}
            >
              <IoSearchOutline size={23} />
              <div className="relative z-20">
                <IoHeartOutline size={23} />
                <div className="absolute -top-2 -right-1.5">
                  <Badges color="bg-primary-green">0</Badges>
                </div>
              </div>
              <div className="relative z-20">
                <IoCartOutline size={23} />
                <div className="absolute -top-2 -right-1.5">
                  <Badges color="bg-primary-green">0</Badges>
                </div>
              </div>

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none"
              >
                {isOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Reponsive Menu dưới 768px */}
          <div ref={menuRef} className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${isOpen ? "open" : "closed"} `}>
            {menulists.map((list) => (
              <li key={list.id} className="uppercase list-none">
                <CustomeNavLink href={list.path} className="text-white">{list.link}</CustomeNavLink>
              </li>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
