import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { About, HeaderComponent } from "./header.style";
const Header = (props: any) => {
  const [userBar, setUserBar] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>();
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await axios.post(
        process.env.REACT_APP_API_URL + "/user",
        {
          id: props?.user?.name,
          token: sessionStorage.getItem("token"),
        }
      );
      setUserData(data);
    })();
  }, []);

  return (
    <HeaderComponent>
      <img
        style={{ marginLeft: "40px" }}
        src="https://monoma.io/wp-content/uploads/2022/05/logo-white.png"
        alt=""
        width={500}
        height={60}
      />

      <div>
        <div
          onClick={() => {
            setUserBar(!userBar);
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src={
              userBar
                ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg"
                : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/101.svg"
            }
            alt=""
            width={500}
            height={60}
          />
        </div>
        {userBar && (
          <About>
            <p>
              <strong>userId</strong>:{userData?.userId}
            </p>
            <p>
              <strong>id</strong>:{userData?.id}
            </p>
            <p>
              <strong>name</strong>:{userData?.name}
            </p>
            <p>
              <strong>email</strong>:{userData?.email}
            </p>
            <p>
              <strong>password</strong>:{userData?.password}
            </p>
            <button
              onClick={() => {
                sessionStorage.setItem("token", "");
                navigate("/");
              }}
            >
              close
            </button>
          </About>
        )}
      </div>
    </HeaderComponent>
  );
};

export default Header;
