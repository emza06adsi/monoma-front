import { Button, Form, Input, LoginContainer } from "./login.style";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Data, User } from "./login.interface";

const Login = ({ setUser }: User) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let navigate = useNavigate();

  const handleCLick = async () => {
    const header = {
      "Content-Type": "application/json",
    };
    const object = {
      email: email,
      password: password,
    };
    try {
      const {
        data: { token, UserProfile },
      }: Data = await axios.post(
        process.env.REACT_APP_API_URL + "/login",
        object
      );

      setUser(UserProfile);
      sessionStorage.setItem("token", token);
      navigate("/grid");
    } catch (error) {
      console.log({ error });
    }
  };

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
          type="password"
          placeholder="password"
        />
      </Form>
      <Button onClick={handleCLick}>submit</Button>
    </LoginContainer>
  );
};
export default Login;
