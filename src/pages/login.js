import React from "react";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import NumbersIcon from "@mui/icons-material/Numbers";
import FormControl from "@mui/material/FormControl";

import "../scss/pages/login.scss";

const Login = () => {
  return (
    <div className="login">
      <Container fixed>
        <div className="login__container">
          <Card elevation={4} sx={{ maxWidth: 500 }}>
            <CardMedia
              sx={{ height: 240 }}
              image="https://gamingonphone.com/wp-content/uploads/2021/03/91duOGX58CL-1.jpg"
              title="clas of clans"
            />
            <CardContent>
              <FormControl>
                <TextField
                  color="secondary"
                  size="small"
                  label="PlayerTag"
                  type="text"
                  focused
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <NumbersIcon color="secondary" fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button variant="contained">Submit</Button>
              </FormControl>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Login;
