// Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children, title }) => {
  return (
    <>
      {/* <Header /> */}
      <Nav />
      <div className="container max-w-5xl px-6 py-12 mx-auto">
        <h1 className="text-4xl font-bold text-[#e67e23] mb-6 text-center">
          {title}
        </h1>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
