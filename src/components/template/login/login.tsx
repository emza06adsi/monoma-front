import { Button, Form, Input, LoginContainer } from "./login.style";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");

  return (
    <LoginContainer>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg"
        alt=""
      />
      <Form>
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
          type="text"
          placeholder="name"
        />
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
          type="text"
          placeholder="password"
        />
      </Form>
      <Button
        onClick={async () => {
          try {
            const data = await axios.get("http://localhost:3000/users", {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
            });
            // const data = await axios.post(
            //   "http://localhost:3000/user/login",

            //   {
            //     data: {
            //       email: "estebanmezabetancur@gmail.com",
            //       password: "qwe3002950",
            //     },
            //     mode: "cors",
            //     // headers: {
            //     //   "Access-Control-Allow-Origin": "*",
            //     //   "Content-Type": "application/json",
            //     // },
            //     headers: {
            //       "Access-Control-Allow-Origin": "*",
            //       "Access-Control-Allow-Methods":
            //         "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            //       "Content-Type": "application/json",
            //       "accept-Encoding": "application/json",
            //       "Access-Control-Allow-Headers": "*",
            //       "Access-Control-Allow-Credentials": "true",
            //     },
            //   }
            // );
            console.log(data);
          } catch (error) {
            console.log("error ");
            console.log(error);
            console.log("error ");
          }
        }}
      >
        summit
      </Button>
    </LoginContainer>
  );
};
export default Login;
