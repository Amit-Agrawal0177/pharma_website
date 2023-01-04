import AnchorLink from "react-anchor-link-smooth-scroll";
import Navbar from "./components/Navbar";

import logo_ap from "./assets/logo.png"
import line_ap from "./assets/line.png"
import "./components/Navbar.css"
function App() {
return (
	<div className="App">	          
    <div className='topnav'>
      <div className="text-on-image " > 
        <ul>       
          <li><AnchorLink href='#home'>HOME</AnchorLink></li>
          <li><AnchorLink href='#products'>PRODUCTS</AnchorLink></li>
          <li><AnchorLink href='#global'>GLOBAL PRESENCE</AnchorLink></li>
          <li><AnchorLink href='#about'>ABOUT</AnchorLink></li>
          <li><AnchorLink href='#contact'>CONTACT US</AnchorLink></li> 
        </ul> 
        <div className="logo"> 
          <img src={logo_ap} alt="logoimg" ></img>
        </div>       
      </div>
    </div>
	  <Navbar/>
	</div>
);
}

export default App;
