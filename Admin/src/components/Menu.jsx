import {FaBox, FaCalendarAlt, FaChartBar, FaClipboard, FaCog, FaElementor, FaHdd, FaHome, FaUser} from "react-icons/fa"
import { FaClipboardList } from "react-icons/fa6"
import { Link } from "react-router-dom";

const Menu = () => {
  return (
  <div className="h-[90vh] w-[250px] bg-white shadow-[6px_0px_10px_rgba(0,0,0,0.2)] p-6">


    <ul className="flex flex-col items-center justify-center mt-[20px]">

      <Link to="/"
      className="border-none no-underline focus:outline-none">
      <li className="flex item-center text-[#D7D7D7] text-[23px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
        <FaHome className="mr-[13px]"/>
        Home
      </li>
      </Link>
      <li className="flex item-center text-[#D7D7D7] text-[23px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
        <FaUser className="mr-[13px]"/>
        Profile
      </li>

      <hr className="h-[23px] border-none"/>
      
      <Link to="/parcels"
      className="border-none no-underline focus:outline-none">
      
      <li className="flex item-center text-[#D7D7D7] text-[23px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
        <FaBox className="mr-[13px]"/>
        Colis
      </li>
      </Link>
      <Link to="/users" 
      className="border-none no-underline focus:outline-none">
      <li className="flex item-center text-[#D7D7D7] text-[23px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
        <FaUser className="mr-[13px]"/>
        Utilisateurs
      </li>
      </Link>
      <li className="flex item-center text-[#D7D7D7] text-[23px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
        <FaClipboardList className="mr-[13px]"/>
        Commandes
      </li> 

      <hr className="h-[23px] border-none"/>

      <li className="flex item-center text-[#D7D7D7] text-[23px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
        <FaElementor className="mr-[13px]"/>
        Elements
      </li> 
      <li className="flex item-center text-[#D7D7D7] text-[23px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
        <FaCog className="mr-[13px]"/>
        Paramètre
      </li> 
      <li className="flex item-center text-[#D7D7D7] text-[23px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
        <FaHdd className="mr-[13px]"/>
        Sauvegardes
      </li> 

      <hr className="h-[23px] border-none"/>

      <li className="flex item-center text-[#D7D7D7] text-[23px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
        <FaChartBar className="mr-[13px]"/>
        Statistique
      </li> 
      <li className="flex item-center text-[#D7D7D7] text-[23px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
        <FaClipboard className="mr-[13px]"/>
        Tout les journaux
      </li> 
      <li className="flex item-center text-[#D7D7D7] text-[23px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
        <FaCalendarAlt className="mr-[13px]"/>
        Calendrier
      </li> 


      
    </ul>


  </div>
  )
}

export default Menu