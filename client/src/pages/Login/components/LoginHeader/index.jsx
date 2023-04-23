import { Langs } from "..";
import { HeaderContainer, HeaderTag } from "./index.style";

const LoginHeader = () => {
  return (
    <HeaderTag>
      <HeaderContainer>
        <a href="/">
          <img
            src="/assets/images/logo.svg"
            alt="site-logo"
            width={66}
            height={66}
          />
        </a>
        <Langs />
      </HeaderContainer>
    </HeaderTag>
  )
}

export default LoginHeader;