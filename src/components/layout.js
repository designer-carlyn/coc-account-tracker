import React from "react";
import Header from "./header";

import Container from "@mui/material/Container";

import "../scss/components/layout.scss";

const Layout = ({ children, accountPlayerTag }) => {
  return (
    <div>
      <Header accountPlayerTag={accountPlayerTag} />
      <main>
        <Container fixed>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
