import { Link } from "react-router-dom"
import {FaArrowLeft, FaTrash} from "react-icons/fa"


const Parcel = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">

      <div className="bg-[#fff] h-[73vh] w-[115vh] rounded-[5px]">

        <Link to="/myparcels">
        <FaArrowLeft className="text-[18px] text-[#444] p-[15px]"/>
      </Link>

      <div className="flex justify-between">

        <div className="flex-1">
          <ul className="m-[3px] text-[#444] list-none p-[15px]">
           <li className="mt-3">De: Ambodirano Sud Lot123</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Poids: 20kg</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Date: 20/06/2025</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Expediteur: Gonadelo</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">A: 67ha Antananarivo</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Prix: 20000Ar</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Destinataire: Razaza Kelyy</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Matricul Voiture: 34789LM</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Note: Vraiment Fragile</li>
             
          </ul>
          <button className="bg-[#555] text-[#fff] w-[200px] cursor-pointer p-[10px] m-[20px]">En Attente</button>

        </div>
        <div className="flex-1">
          <ul className="m-[3px] text-[#444] list-none p-[15px]">
            <li className="mt-3">Email de l'envoyeur: gonadelo@gmail.com</li>
           <hr className="h-[14px] border-none"/>
           <li className="mt-3">Email du receveur: kely@gmail.com</li>

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

export default Parcel