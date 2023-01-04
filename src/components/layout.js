import React from "react";
import Header from "./header";
import "./layout.scss";
import { Container } from "@mui/material";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Header />
      <main>
        <Container maxWidth="sm">
          <h1>{pageTitle}</h1>
          {children}
        </Container>
      </main>
    </div>
  );
};

export default Layout;
