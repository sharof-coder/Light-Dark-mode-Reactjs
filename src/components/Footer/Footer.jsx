import { useSelector } from "react-redux"


const Footer = () => {
    
    const { darkMode } = useSelector(state => state.mode)
    return (
        <footer className={`mx-auto ${darkMode ?'text-white' : 'text-black'} flex gap-[15rem] py-10`}>
            <div className="one">
                <ul>
                    <li><h3>Title</h3></li>
                    <li><p>+998123456789</p></li>
                </ul>
            </div>
            <div className="two">
                <ul>
                    <li><h3>Help</h3></li>
                    <li><p>Contact Us</p></li>
                    <li><p>Delivery Information</p></li>
                    <li><p>Payment Information</p></li>
                    <li><p>Customer Service</p></li>
                    <li><p>FAQ</p></li>
                </ul>
            </div>
            <div className="three">
                <ul>
                    <li><h3>About Us</h3></li>
                    <li><p>Our Stores</p></li>
                    <li><p>Flower care</p></li>
                    <li><p>Site Map</p></li>
                </ul>
            </div>
            <div className="four">
                <ul>
                    <li><h3>Legal</h3></li>
                    <li><p>Privacy Policy</p></li>
                    <li><p>Terms & Conditions</p></li>
                    <li><p>Cookie Policy</p></li>
                    <li><p>Item 4</p></li>
                    <li><p>item 5</p></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer