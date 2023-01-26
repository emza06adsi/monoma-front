import {
  Button,
  Form,
  Input,
  LoginContainer,
  PasswordButton,
  PasswordInput,
} from "./login.style";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Data, User } from "./login.interface";

const Login = ({ setUser }: User) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [tipePassword, setTipePassword] = useState<boolean>(false);
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
          type="email"
          placeholder="name"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <PasswordInput
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={tipePassword ? "text" : "password"}
            placeholder="password"
          />
          <PasswordButton
            onClick={() => {
              setTipePassword(!tipePassword);
            }}
          >
            ...
          </PasswordButton>
        </div>
      </Form>
      <Button onClick={handleCLick}>submit</Button>
    </LoginContainer>
  );
};
export default Login;
