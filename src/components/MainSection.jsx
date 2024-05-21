
// import { faLockKehole } from "@fortawesome/free-solid-svg-icons";



function MainSection() {
    return (
       <>
        <div className="container-fluid p-8 m-0">
            <div className="flex flex-col md:flex md:flex-row justify-between items-center md:items-start ">
                <div id="right-text" className="w-full md:w-2/5">
                    <h1 className=" font-philosopher text-6xl text-green-900 text-center md:text-start">
                    Your  Rental Journey Begins Here!
                    </h1>
                    {/* <img src={imdave} alt="David profile" /> */}
                    <p className="font-philosopher text-md mb-4 text-center md:text-start">We Make Finding Rentals Easy, Effortless Search, Endless Choices</p>
                    
                    <div id="button-div" className="flex flex-row gap-4 md:justify-start justify-center">
                        <button className="p-1 h-10 hover:cursor-pointer rounded-full bg-green-800 text-white border-0 text-sm w-24 hover:bg-white hover:text-green-800 hover:border-2 hover:border-green-800">
                            Get Started
                        </button>

                        <button className="p-1 h-10 hover:cursor-pointer rounded-full bg-green-800 text-white border-0 text-sm w-24 hover:bg-white hover:text-green-800 hover:border-2 hover:border-green-800">
                            Get Started
                        </button>
                    </div>
                </div>
                <div id="left" className="md:w-2/5 mt-8 md:mt-0">
                    <img src="/src/assets/images/House-vec.png" className='w-96 h-96  md:ml-2  m-0 '  alt="House Picture" />
                </div>
            </div>

        {/* house section */}

        <div id="sec-2" className="flex flex-col md:flex md:flex-row-reverse justify-between my-4 border-2 border-red-900">
                <div id="right-text" className="md:w-2/5 md:mr-8 ">
                    <h1 className="mt-4  font-philosopher text-6xl text-center md:text-start text-green-900">
                    Begin your awesome journey
                    </h1>
                    <p className="font-philosopher text-md mb-8  text-center md:text-start">Looking for the perfect home to rent? 
                    Our user-friendly house rental website makes your search a breeze.
                     Browse through a diverse range of listings, From cozy apartments to spacious family houses. 
                     With detailed descriptions, vivid photos, and handy filters, finding your ideal rental is just a click away.</p>
                    
                    <div id="button-div" className="flex flex-row gap-4 justify-center md:justify-start">

                        <button className="p-1 mt-4 h-10 hover:cursor-pointer rounded-full bg-green-800 text-white border-0 text-sm w-24 hover:bg-white hover:text-green-800 hover:border-2 hover:border-green-800">
                            Continue
                        </button>
                    </div>
                </div>
                <div id="left" className="mx-auto md:mx-0 md:w-2/5">
                    <img src="/src/assets/images/removebg-preview 1.png" className='w-96 mt-8 md:mt-0 md:w-full md:h-96 md:ml-2'  alt="House Picture" />
                </div>
         </div>

      


         
        </div>
       </>
    );
}

export default MainSection;