// Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children, title }) => {
  return (
    <>
      <Header />
      <Nav />
      <div className="container mx-auto px-6 py-12 max-w-5xl">
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
