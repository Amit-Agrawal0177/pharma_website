import React from 'react'
import homeImage from "../assets/young.jpg"
import globalImage from "../assets/global.jpg"
import  { item } from "./productItem"

const Home = () => {
	return (
		<div id="home" className='scrolltext'>
			<div className="homePage">
                <img src={homeImage} alt = "Home-Images"></img> 
            </div>
		</div>
	)
}

const Products1 = () => {
    let arr = [];

    for (let key of item)
    arr.push(<li>{key}</li>)

    return(
        <div>{arr}</div>
        
    )
}


const Products = () => {
	return (
		<section id="products" className='scrolltext'>
			<div className='about_c'>
                <div className='side-name'>
                    <h2>PRODUCTS LIST</h2>
                </div>
                <div className='productName'>
                    {Products1()}
                </div>
            </div>
		</section>
	)
}

const Global = () => {
	return (
		<div id="global" className='scrolltext'>
			<div className='about_c'>
                <div className='side-name'>
                    <h2>Global Presence</h2>
                </div>
                <div className='global-img'>
                    <img src={globalImage} alt = "Home-Images"></img> 
                </div>
            </div>
		</div>
	)
}

const About = () => {
	return (
		<section id="about" className='scrolltext'>
			<div className='about_c'>
                <div className='side-name'>
                    <h2>ABOUT</h2>
                </div>
                <div className='content'>
                    <p>
                        We, Apoteca Pharma Private Limited is an established pharmaceutical trade company whose main activity is to export pharmaceutical products. We aim to build a strong bridge between manufacturer and the formulator to minimize the gap.
                    </p>
                    <br></br>
                    <p>
                        With experience and insight of the Industry we are able to fulfill the industry’s needs. We as a company are specialized in providing pharmaceutical APIs and Excipients. We provide a wide range of products throughout the world. Many Indian manufacturers are closely associated with us for API and Excipients supplies.
                    </p>
                </div>
            </div>
		</section>
	)
}

const Contact = () => {
	return (
		<section id="contact" className='scrolltext'>
			<div className='about_c'>
                <div className='side-name'>
                    <h2>CONTACT</h2>
                </div>

                <div className='content1'>
                    <h2>Apoteca Pharma Private Limited</h2>
                    
                    <i class="fa-solid fa-envelope"></i>
                    <a href='mailto:admin@apotecapharma.com'>admin@apotecapharma.com</a>
                    <br></br>

                    {/* <h3>Office : </h3> */}
                    <i class="fa-solid fa-briefcase"></i>
                    <a>81, Rajmahal Colony, Indore,</a>
                    <h4>(M.P) INDIA - 452007</h4>

                    {/* <h3>Warehouse : </h3> */}
                    <i class="fa-solid fa-industry"></i>
                    <a>37, Saptashrangi Nagar, Nihalpurmundi,</a>
                    <h4>Indore (M.P) INDIA, 452012</h4>
                    <h4>CIN: U51909MP2022PTC060416</h4>
                    <h4>GST No.: 23AAWCA8302L1ZC</h4>
                </div>
            </div>
		</section>
	)
}

const Navbar = () => {
return (
	<div>
	<Home/>
	<Products/>
	<Global/>
	<About/>
	<Contact/>
	</div>
)
}

export default Navbar