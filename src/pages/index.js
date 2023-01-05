// Step 1: Import React
import React, { useState } from "react";
import Axios from "axios";

/* Import Components */
import Layout from "../components/layout";
import Login from "./login";

/* Import MUI Plugins */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Step 2: Define your component
const Index = () => {
  const isLogin = false;

  const [playerTag, setPlayerTag] = useState(null);
  const [heading, setHeading] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setPlayerTag(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHeading(playerTag);
    fetchPlayer();
  }

  const fetchPlayer = () => {
    return Axios.get(process.env.GATSBY_API_ENDPOINT_PLAYER + playerTag, {
      headers: {
        Authorization: "Bearer " + process.env.GATSBY_API_KEY,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  if (!isLogin) {
    return <Login />;
  }

  return (
    <Layout accountPlayerTag={heading}>
      <h1>{heading}</h1>
      <TextField
        size="small"
        label="PlayerTag"
        onChange={handleChange}
        type="text"
      />
      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
    </Layout>
  );
};

export const Head = () => <title>Home</title>;

// Step 3: Export your component
export default Index;
