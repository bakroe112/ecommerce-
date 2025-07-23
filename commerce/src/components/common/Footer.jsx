import React from "react";
import LogoImg from "../../assets/common/logo.png";
import { BodyOne, Caption, CustomeLink, Title } from "./CustomComponents";
export const Footer = () => {
  return (
    <>
      <footer className="py-14 ">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div>
            <img src={LogoImg} alt="LogoImg" className="h-7" />
            <div className="flex flex-col gap-2 mt-5">
              <Caption>Address: 123 ABC Street, DEF, Jk</Caption>
              <Caption>Email: example@gmail.com</Caption>
              <Caption>Call: 111-222-4567</Caption>
            </div>
            <br />
            <BodyOne>Subcribe To Our Newsletter</BodyOne>
            <input
              type="text"
              className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <Title level={5}>Our Stores</Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop With Sidebar</CustomeLink>
              <CustomeLink>Shop With Category</CustomeLink>
              <CustomeLink>Shop Filters Top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>My Account</CustomeLink>
            </div>
          </div>
          <div>
            <Title level={5}>Usefull Links</Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop With Sidebar</CustomeLink>
              <CustomeLink>Shop With Category</CustomeLink>
              <CustomeLink>Shop Filters Top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>My Account</CustomeLink>
            </div>
          </div>
          <div>
            <Title level={5}>Our Blog</Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop With Sidebar</CustomeLink>
              <CustomeLink>Shop With Category</CustomeLink>
              <CustomeLink>Shop Filters Top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>My Account</CustomeLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
