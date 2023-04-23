import { Auth, LoginHeader } from "./components";
import { LoginContainer } from "./index.style";

const Login = () => {
  return (
    <>
      <LoginHeader />
      <main>
        <LoginContainer>
          <Auth />
        </LoginContainer>
      </main>
    </>
  )
}

export default Login;