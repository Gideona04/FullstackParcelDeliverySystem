import Navbar from "../components/Navbar" 
import Footer from "../components/Footer" 

const Home = () => {
  return (
    <div>
    
        <Navbar/>

        <div className="h-[80vh] flex items-center p-[20px] text-[#D1D5DB]">
            <h2  className="text-3xl font-bold w-[50%] p-[50px]">LIVRAISON DE COLIS SIMPLE,
                RAPIDE ET FIABLE</h2>
            <img src="hero.png" alt="" />

        </div>

        <Footer/>
      
    </div>
  )
}

export default Home