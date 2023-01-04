import React from "react";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <Container fixed>
        <div className="login__container">
          <Card elevation={4} sx={{ maxWidth: 500 }}>
            <CardMedia
              sx={{ height: 200 }}
              image="https://gamingonphone.com/wp-content/uploads/2021/03/91duOGX58CL-1.jpg"
              title="clas of clans"
            />
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Login;
