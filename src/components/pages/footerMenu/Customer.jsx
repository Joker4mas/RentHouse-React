
function customerReview(){
    return(
        <div id="customerReview" className="container-fluid p-8 m-0">
            <div id="review-section">
            <div className="block my-8 text-center">
            <h1>What Customers Say About Our Services</h1>
            <p>We Make Finding Rentals Easy, Effortless Search, Endless Choices</p>
            </div>
         </div>
           {/* <div id="customerReview" className="container-fluid p-8 m-0"> */}
            <div className="grid gap-8 md:grid-cols-3 justify-between items-center text-center my-4">
                <div className="justify-center p-2 item-center text-center border-solid border-2 border-green-900 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl">
                    <img src="/src/assets/images/David.png" alt="David's picture" className="h-24 w-24 p-2" />
                    <h4 className="text-green-900">David Anderson</h4>
                    <p>“I loved the experience, renting a home was an pleasure. From the communication was seamless and professional”.</p>
                </div>


                <div className="justify-center p-2 item-center text-center border-solid border-2 border-green-900 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl">
                    <img src="/src/assets/images/Alex-2.png" alt="Alex'x picture"  className="h-24 w-24 p-2"/>
                    <h4  className="text-green-900">Alex Mitchell</h4>
                    <p>
                    “It was an Amazing Experience, the attention to detail, personalized approach made the entire process stress-free”.
                    </p>
                </div>

                <div className="block justify-center p-2 item-center text-center border-solid border-2 border-green-900 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl">
                    <img src="/src/assets/images/Rya.png" alt="Rya's Picture" className="h-24 w-24 p-2" />
                    <h4  className="text-green-900">Ryan Bennett</h4>
                    <p className="">“Our experience was so good with renting services exceeded all expectations. Demonstrated a deep understanding”.</p>
                </div>
            {/* </div> */}
           </div>
        </div>
    );
}



export default customerReview;