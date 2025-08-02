import React, { useState } from 'react';
import { publicRequest } from "../requestMethods";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewParcel = () => {
 
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value 
      
    }));
  }
  const handleAddParcel = async (e) => {
    try {
      await publicRequest.post("/parcels", input);
      toast.success("Colis créé avec succès !");
    } catch (error) {
      console.log("Erreur lors de la création du colis :", error);
      toast.error("Échec de la création du colis.");
    }

  }
    

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">Nouveau Colis</h2>
      <div className="flex">


        <div className="m-[20px]">

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">De</label>
            <input type="text" placeholder="Antananarivo" 
            name="from"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">A</label>
            <input type="text" placeholder="Fianarantsoa"
            name="to"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Expéditeur</label>
            <input type="text" placeholder="Niavo Nambinintsoa" 
            name="sendername"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Destinataire</label>
            <input type="text" placeholder="Hardi Raz" 
            name="recipiantname"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Email de l'Expéditeur</label>
            <input type="text" placeholder="niavo@gmail.com" 
            name="senderemail"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Email de la Destinataire</label>
            <input type="text" placeholder="hardi@gmail.com" 
            name="recipiantemail"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          
        </div>
        <div className="m-[20px]">

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Poids</label>
            <input type="Number" placeholder="200g" 
            name="weight"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Prix</label>
            <input type="Number" placeholder="20000Ar"
            name="cost"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Date</label>
            <input type="date" placeholder="20/10/2025"
            name="date"
            onChange={handleChange} 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Note</label>
            <textarea type="text" placeholder="Fragile"
            name="note"
            onChange={handleChange} 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <button className="bg-[#1e1e1e] cursor-pointer text-[#fff] p-[10px] w-[300px]" onClick={handleAddParcel}>
            Crée
          </button>
          <ToastContainer />
          
        </div>



      </div>
    </div>
  )
}

export default NewParcel