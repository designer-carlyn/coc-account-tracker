// Step 1: Import React
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "@fontsource/roboto";

/* Import Components */
import Layout from "../components/layout";
import HeroFrame from "../components/hero-frame";
import Login from "./login";

/* Import MUI Plugins */
import Grid from "@mui/material/Grid";

// Step 2: Define your component
const Index = () => {
  const [playerTag, setPlayerTag] = useState(null);
  const [playerInfo, setInfoPlayer] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const playerTagToken = localStorage.getItem("playerTagToken");

  function inputPlayerTag(event) {
    const value = event.target.value;
    setPlayerTag(value);
    localStorage.setItem("playerTagToken", value);
  }

  function handleSubmit(event) {
    fetchPlayer();
    setIsLoading(true);
    event.preventDefault();
  }

  const fetchPlayer = () => {
    return Axios.get(
      process.env.GATSBY_API_ENDPOINT_PLAYER +
        (playerTag == null ? playerTagToken : playerTagToken),
      {
        headers: {
          Authorization: "Bearer " + process.env.GATSBY_API_KEY,
        },
      },
      setIsLoading(true)
    )
      .then((response) => {
        console.log(response);
        setInfoPlayer(response.data);
        setIsLoading(false);
        setIsLogin(true);
        localStorage.setItem("isLogin", true);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPlayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLogin) {
    return (
      <div>
        <Login
          loading={isLoading}
          handleSubmit={handleSubmit}
          inputPlayerTag={inputPlayerTag}
        />
      </div>
    );
  }

  return (
    <Layout accountPlayerTag={playerInfo.name}>
      {/* <h1>{playerInfo.name}</h1> */}

      <Grid container spacing={3}>
        {playerInfo.heroes.map(function (hero) {
          return (
            <Grid key={hero.name} item lg={4} md={6} xs={12}>
              <HeroFrame
                heroName={hero.name}
                heroImage="https://api-assets.clashofclans.com/badges/70/AgGEDdWx4ZR1Cla0sBgMfRob0MwZZhv4XMBxCDnMpa4.png"
              />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};

export const Head = () => <title>Home</title>;

// Step 3: Export your component
export default Index;
