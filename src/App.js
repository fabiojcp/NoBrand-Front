import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import { ShopProvider } from "./provider/shop";
import "./styles/App.css";
import MainBox from "./components/main/";
import { StyleProvider } from "./provider/style";
import { AuthProvider } from "./provider/auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ShopProvider>
            <StyleProvider>
              <Header></Header>
              <MainBox></MainBox>
            </StyleProvider>
          </ShopProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
