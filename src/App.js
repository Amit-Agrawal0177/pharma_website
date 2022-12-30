import AnchorLink from "react-anchor-link-smooth-scroll";
import Navbar from "./components/Navbar";

import logo_ap from "./assets/logo.png"
import line_ap from "./assets/line.png"
import "./components/Navbar.css"
function App() {
return (
	<div className="App">	
  <div className="fixed-nav">
      <div className='logo'>
          <img src={logo_ap} alt = "ap-logo"></img>
      </div>
      <div className ="head-text">
          <img src={line_ap} alt = "ap-line"></img>              
          <div className='text-on-image'>
            <div className="topnav">               
              <AnchorLink href='#home'>HOME</AnchorLink>
              <AnchorLink href='#products'>PRODUCTS</AnchorLink>
              <AnchorLink href='#global'>GLOBAL PRESENCE</AnchorLink>
              <AnchorLink href='#about'>ABOUT</AnchorLink>
              <AnchorLink href='#contact'>CONTACT US</AnchorLink>
            </div>
        </div>
  </div>
  </div>
	<Navbar/>
	</div>
);
}

export default App;
