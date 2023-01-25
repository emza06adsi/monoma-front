import { HeaderComponent } from "./header.style";
const Header = (props: any) => (
  <HeaderComponent>
    <img
      style={{ marginLeft: "40px" }}
      src="https://monoma.io/wp-content/uploads/2022/05/logo-white.png"
      alt=""
      width={500}
      height={60}
    />
    {props?.user?.email}
  </HeaderComponent>
);

export default Header;
