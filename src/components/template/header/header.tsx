import { HeaderComponent } from "./header.style";
const Header = (props: any) => (
  <HeaderComponent>{props?.user?.email}</HeaderComponent>
);

export default Header;
