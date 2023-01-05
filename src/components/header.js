import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

/* Import MUI Plugins */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Header = ({ accountPlayerTag }) => {
  return (
    <header className="header">
      <Container fixed>
        <div className="header__cont">
          <Grid container spacing={2}>
            <Grid item display="flex" alignItems="center" xs={3}>
              <div className="header__logo">
                <StaticImage alt="logo" src="../images/icon.png"></StaticImage>
              </div>
            </Grid>
            <Grid
              item
              display="flex"
              alignItems="center"
              justifyContent="center"
              xs={6}
            >
              <div className="header__nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/my-clan">My Clan</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid
              item
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              xs={3}
            >
              <div className="header__account">
                <h3>{accountPlayerTag}</h3>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </header>
  );
};

export default Header;
