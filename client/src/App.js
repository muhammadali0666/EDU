import Routes from "./Routes"
import { Header, Menu } from 'components';
import "./App.scss";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {!["/login", "/404"].includes(location.pathname) && (
        <>
          <Header />
          <Menu />
        </>
      )}
      <div className='app__main'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
