import logo from "./logo.svg";
import "./App.css";
import { Logo } from "./components/icons";
import Header from "./components/Header/Header";
import Companies from "./components/Companies/Companies";
import SEO from "./components/SEO/SEO";
import Footer from "./components/Footer/Footer";
import Comp1 from "./components/Comp1/Comp1";
import Pricing from "./components/Pricing/Pricing";
import Bento from "./components/Bento/Bento";
import Client from "./components/Client/Client";

function App() {
  return (
    <div className="App">
      <Header />
      <Comp1 />
      <Companies />
      <SEO />
      <Client/>
      <Bento/>
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
