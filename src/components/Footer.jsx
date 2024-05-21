
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,  faInstagram,  faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <div>
    <div className="container-fluid px-4 m-0">
        <div id="footDetails" className="grid grid-flow-row md:grid-flow-col md:justify-between justify-center items-center text-center md:items-start md:text-start">
        <div id="rentLogo">
           <h1 className="text-lg"> <span className="text-lg font-bold text-green-900">RENT</span>HOME<FontAwesomeIcon icon={faHouse}  className="text-green-900 mb-1 h-3 "/></h1>

           <p className="w-40 text-green-800">The best and easiest way to rent homes.</p>
        </div>
        {/* useful links */}
        <div id="Links" className="list-none">
            <h4>Useful links</h4>
            <li className="mb-4 cursor-pointer"><a href="#"  className=" no-underline text-black">About us</a></li>
            <li className="mb-4 cursor-pointer"><a href="#"  className=" no-underline text-black">Events</a></li>
            <li className="mb-4 cursor-pointer"><a href="#"  className=" no-underline text-black">Blogs</a></li>
            <li className="mb-4 cursor-pointer"><a href="#"  className=" no-underline text-black">FAQ</a></li>
        </div>

        {/* main menu */}
        <div className="list-none ">
            <h4>Main Menu</h4>
            <li className="mb-4 cursor-pointer"><a href="#"  className=" no-underline text-black">Home</a></li>
            <li className="mb-4 cursor-pointer"><a href="#"  className=" no-underline text-black">Offers</a></li>
            <li className="mb-4 cursor-pointer"><a href="#"  className=" no-underline text-black">Menus</a></li>
            <li className="mb-4 cursor-pointer"><a href="#"  className=" no-underline text-black">Reservations</a></li>
        </div>

        {/* Contact us */}
        <div className=" text-black">
            <h4>Contact Us</h4>
           <ul  className="list-none ">
           <li className="mb-4"><a href="#" className=" no-underline  text-black">example@email.com</a></li>
            <li className="mb-4"><a href="#"  className=" no-underline  text-black">+64 958 248 966</a></li>
            <li className="mb-4"><a href="#"  className=" no-underline text-black">Social media</a></li>
           </ul>
            
           
        </div>
        </div>

        

        <div id="footerBase" className="flex flex-col md:w-42 md:flex-row justify-between item-center text-center md:text-start">
        <div id="socials" className="flex flex-row gap-8 mx-auto md:mx-0 md:items-start  text-green-900 ">
            <FontAwesomeIcon icon={faFacebook} className="bg-green-100 border-2 border-solid p-1 border-green-800 rounded-2xl text-center "/>
            <FontAwesomeIcon icon={faTwitter} className="bg-green-100 border-2 border-solid p-1 border-green-800 rounded-2xl text-center "/>
            <FontAwesomeIcon icon={faInstagram} className="bg-green-100 border-2 border-solid p-1 border-green-800 rounded-2xl text-center "/>
            <FontAwesomeIcon icon={faYoutube}  className="bg-green-100 border-2 border-solid p-1 border-green-800 rounded-2xl text-center " />
        </div>
         <p>copyright &copy; 2024 Dscode | All rights reserved</p>
        </div>
        </div>
  
        </div>
    );
}

export default Footer;