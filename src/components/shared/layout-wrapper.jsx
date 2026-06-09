import React from "react";
import { Navbar } from "../layout/navbar";
import { Footer } from "../layout/footer";

const LayoutWrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
