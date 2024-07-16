import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Profile from "./Profile.jsx";
import Product from "./Product.jsx";

function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Profile name="duck" job="CEO" birthday="1987"/>
      <Product name="air fryer" description="fries food" price="200"/>
      <Product name="air fryer 2" description="fries air" price="20000"/>
    </>
  );
}

export default App;
