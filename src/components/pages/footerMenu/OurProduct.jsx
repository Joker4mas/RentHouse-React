import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCheckCircle,faLeaf, faLock} from "@fortawesome/free-solid-svg-icons";
// import { faUnLockKeyhole} from "@fortawesome/free-solid-svg-icons";



function OurService(){
    return(
        <div className="container-fluid px-4 m-0">
               {/* our service section */}
         <section id="ourService" >
            <h1 className="font-philosopher text-5xl text-green-900 text-center mt-8">See Our Services</h1>
            <p className="text-center mb-8">We Make Finding Rentals Easy, Effortless Search, Endless Choices</p>
         <div id="cat" className="grid md:grid-cols-3 gap-8 justify-between items-center text-center">
            
            <div id="response" className="block text-center  text-white bg-green-900 rounded-xl p-8">
            <FontAwesomeIcon icon={faCheckCircle} className=" text-white h-12 hover:cursor-pointer"/>
               <h1>RESPONSIVE</h1>
               
                <p className="">Our commitment to being responsive means that your concerns and efficient.</p>
            </div>

            <div className="block text-center text-white bg-green-900   rounded-xl p-8" >
            <FontAwesomeIcon icon={faLeaf} className=" text-white h-12 hover:cursor-pointer "/>
                <h1>GREEN</h1>
                <p>Experience the convenience of our responsive platform, ensuring swift communication.</p>
            </div>


            <div className="block text-center  text-white bg-green-900  rounded-xl p-8">
            <FontAwesomeIcon icon={ faLock } className=" text-white h-12 hover:cursor-pointer"/>
            <h2>SECURITY</h2>
            <p>Ensuring swift communication and quick solutions for all your rental needs.</p>
            </div> 
         </div>

         </section>
        </div>
    );
}


export default OurService;