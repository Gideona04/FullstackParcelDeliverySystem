import { Link } from "react-router-dom"
import {FaArrowLeft, FaTrash} from "react-icons/fa"
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

import { useEffect, useState } from "react";



const Parcel = () => {
  const location = useLocation();
  const [parcel, setParcel] = useState({});
  const parcelId = location.pathname.split("/")[2];
  useEffect(() => {
    const getParcel = async () => {
      try {
        
        const res = await publicRequest.get("/parcels/find/" + parcelId);

        setParcel(res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du colis :", error);
      }
    }

    getParcel();

  }, [parcelId])

  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">

      <div className="bg-[#fff] h-[73vh] w-[115vh] rounded-[5px]">

        <Link to="/myparcels">
        <FaArrowLeft className="text-[18px] text-[#444] p-[15px]"/>
      </Link>

      <div className="flex justify-between">

        <div className="flex-1">
          <ul className="m-[3px] text-[#444] list-none p-[15px]">
           <li className="mt-3">De: {parcel.from} </li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Poids:{parcel.weight} </li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Date:{parcel.date} </li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Expediteur: {parcel.sendername}</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">A:{parcel.to} </li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Prix:{parcel.cost} </li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Destinataire: {parcel.recepiantname}</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Colis ID:{parcel._id} </li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Note: { parcel.note}</li>
             
          </ul>
         <button className={parcel.status === "1" ?"bg-[#45de52]] text-[#fff] w-[100px] cursor-pointer p-[5px]":"bg-[#555] text-[#fff] w-[100px] cursor-pointer p-[5px]" }>
              {parcel.status === "1" ? "Livré" : "En Livraison"}
              </button>

        </div>
        <div className="flex-1">
          <ul className="m-[3px] text-[#444] list-none p-[15px]">
            <li className="mt-3">Email de l'envoyeur: {parcel.senderemail}</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Email du receveur: {parcel.recipiantemail}</li>

          </ul>
           <hr className="h-[10px] border-none"/>
          <textarea 
          name="" 
          cols=""
          rows=""
          className="outline-none p-[90px] m-[25px] w-[210px] bg-[#d9d9d9] text-[#555]"
          placeholder="Donner un Feedback"
          id=""
          >

          </textarea>

          <button className="bg-[#1e1e1e] w-[200px] p-[10px] text-[#fff] cursor-pointer  m-[25px]">Valider </button>

        </div>

      </div>

      </div>

    </div>
  )
}

export default Parcel;