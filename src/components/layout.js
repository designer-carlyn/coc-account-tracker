import React from "react";
import { Link } from "gatsby";
import "./layout.scss";
import { Container } from "@mui/material";

const Layout = ({ pageTitle, children, sectionName }) => {
  return (
    <div>
      <nav>
        <Container maxWidth="sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </Container>
      </nav>
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
