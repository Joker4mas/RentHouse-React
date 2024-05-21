
// import david from './public/images/David.png';

import Header from './components/Header.jsx'
import MainSection from './components/MainSection.jsx';
import Footer from './components/Footer.jsx';
import Customers from './components/Customer.jsx';
import ServiceRent  from './components/OurProduct.jsx';
import  './index.css'


function App() {
 
  return (
    <>
  <Header/>
  <MainSection/>
  <ServiceRent/>
  <Customers/>
  <Footer/>
    </>
  );
}

export default App
