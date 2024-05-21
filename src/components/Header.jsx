

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header(){
    function Menu(e){
        let list = document.querySelector('ul');
        e.name === 'menu' ? (e.name = 'close',
        list.classList.add('top-[80px]'),
        list.classList.add('opacity-100'))
        :(e.name = 'menu', 
        list.classList.remove('top-[80px]'),
        list.classList.remove('opacity-100'))
    }
    // const element = 
    return(
        <div className="container-fluid px-4 m-0">
            <div className="flex md:flex md:flex-row justify-between items-center">
                <h1 className="text-lg md:text-3xl "><span className="text-lg md:text-4xl font-bold text-green-900">RENT</span>HOME<FontAwesomeIcon icon={faHouse} className="text-green-900 mb-2 "/> </h1>
                <nav className="mr-4 ">
                    <ul className="hidden md:flex md:flex-row gap-12 justify-between text-green-800 text-xl font-bold">
                    {/* <FontAwesomeIcon icon={faLeaf}/> */}
                        <li className="list-none"><a href="#" className=" no-underline text-green-900">Home</a></li>
                        <li className="list-none"><a href="#" className=" no-underline text-green-900">About</a></li>
                        <li className="list-none"><a href="#" className=" no-underline text-green-900">Services</a></li>
                        <li className="list-none"><a href="#" className=" no-underline text-green-900">Review</a></li>
                        <li className="list-none"><a href="#" className=" no-underline text-green-900">Contact Us</a></li>
                    </ul>
                </nav>
            
                <FontAwesomeIcon icon={faBars} className="md:hidden text-green-900 h-6 hover:cursor-pointer " name="menu" onClick={Menu.this}/>
                    
            </div>
        </div>
    )
}

export default Header;