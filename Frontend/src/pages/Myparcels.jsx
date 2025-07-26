import { useState } from "react";
import {FaUser} from "react-icons/fa";
import {Link} from "react-router-dom"

export const MyParcels = () => {
  const [open,setOpen] = useState(false)

  const handleOpen =() =>{
    setOpen(!open)
  }

  return (
    <div>

      <div className=" relative flex items-center justify-end mr-[20%] mt-[5%]  font-semibold cursor-pointer">
       <div className="flex items-center text-[#fff] " onClick={handleOpen}>
        <FaUser className="mr-[10px] "/>
       Niavo Gideona
       </div>
      {open &&  <div className="absolute top-[20px] right-0 h-[200px] w-[250px] bg-[#d9d9d9] z-[999] shadow-xl text-[#fff] ">

        <ul className="flex flex-col items-center justify-center mt-[10px] mr-[20px] list-none text-[#555]">
          <Link  className="" to="/allparcels"><li className="hover:text-[#fff] my-[10px] cursor-pointer text-[20px] ">Tous Les Colis</li></Link>
          <li className="hover:text-[#fff] my-[10px] cursor-pointer text-[20px] ">Relevé</li>
          <li className="hover:text-[#fff] my-[10px] cursor-pointer text-[20px] ">Se Deconnecter</li>

        </ul>
        
       </div>}

      </div>

      <div className="flex flex-col mr-[10%] ml-[10%]">
        <h2 className="text-[18px] text-[#d9d9d9] p-[20px]">Mes Colis</h2>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[67vw] m-[20px] p-[20px] cursor-pointer ">
          <div className="">
            <ul className="list-none ">
              <li>De: Ambodirano Fianarantsoa</li>
              <hr className="h-[14px] border-none"/>
              
              <li>Poids: 20KG</li>
              <hr className="h-[14px] border-none"/>
              <li>Date: 24/07/2025</li>
              <hr className="h-[14px] border-none"/>
              <li>Expediteur: Goneu kely</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>A:67 Antananarivo </span>
            <hr className="h-[6px] border-none"/>
            <button className="bg-[#555] text-[#fff] w-[100px] cursor-pointer p-[5px]">En Attente</button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[67vw] m-[20px] p-[20px] cursor-pointer ">
          <div className="">
            <ul className="list-none ">
              <li>De: Ambodirano Fianarantsoa</li>
              <hr className="h-[14px] border-none"/>
              
              <li>Poids: 20KG</li>
              <hr className="h-[14px] border-none"/>
              <li>Date: 24/07/2025</li>
              <hr className="h-[14px] border-none"/>
              <li>Expediteur: Goneu kely</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>A:67 Antananarivo </span>
            <hr className="h-[6px] border-none"/>
            <button className="bg-[#555] text-[#fff] w-[100px] cursor-pointer p-[5px]">En Attente</button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[67vw] m-[20px] p-[20px] cursor-pointer ">
          <div className="">
            <ul className="list-none ">
              <li>De: Ambodirano Fianarantsoa</li>
              <hr className="h-[14px] border-none"/>
              
              <li>Poids: 20KG</li>
              <hr className="h-[14px] border-none"/>
              <li>Date: 24/07/2025</li>
              <hr className="h-[14px] border-none"/>
              <li>Expediteur: Goneu kely</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>A:67 Antananarivo </span>
            <hr className="h-[6px] border-none"/>
            <button className="bg-[#22C55E] text-[#fff] w-[100px] cursor-pointer p-[5px]">Livré</button>
          </div>
        </div>


      </div>

    </div>
  )
}
export default MyParcels;
