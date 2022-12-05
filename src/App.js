import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import { ShopProvider } from "./provider/shop";
import "./styles/App.css";
import MainBox from "./components/main/";

function App() {
  return (
    <>
      <BrowserRouter>
        <ShopProvider>
          <Header></Header>
          <MainBox></MainBox>
        </ShopProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
