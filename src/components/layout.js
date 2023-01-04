import React from "react";
import Header from "./header";

import Container from "@mui/material/Container";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <Container fixed>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
