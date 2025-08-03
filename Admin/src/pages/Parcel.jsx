import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from '../requestMethods';

const Parcel = () => {
  const [parcel, setParcel] = useState({ });
  const location = useLocation();
  const parcelId = location.pathname.split("/")[2];
  const [input, setInput] = useState({});
    const handleChange = (e) => {
      setInput((prev) => ({ ...prev, [e.target.name]: e.target.value 
        
      }));
    }

  useEffect(() => {
    const fetchParcel = async () => {
      try {
        const res = await publicRequest.get(`/parcels/find/` +parcelId);
        setParcel(res.data);
      } catch (err) {
        console.error("Erreur lors de la récupération du colis :", err);
      }
    }
    fetchParcel(); 
  }, [parcelId])

  const handleUpdate = async () => {
    try {
      await publicRequest.put(`/parcels/${parcelId}`, input);
      window.location.reload();
    } catch (error) {
      console.log("Erreur lors de la mise à jour du colis :", error);
    }
  }
    


  return (
   <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">Nouveau Colis</h2>
      <div className="flex">


        <div className="m-[20px]">

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">De</label>
            <input type="text" placeholder={parcel.from || ""} 
            name="from"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">A</label>
            <input type="text" placeholder={parcel.to || ""} 
            name="to"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Expéditeur</label>
            <input type="text" placeholder={parcel.sendername || ""}
            name="sendername"
            onChange={handleChange}  
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Destinataire</label>
            <input type="text" placeholder={parcel.recipiantname || ""}
            name="recipiantname"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Email de l'Expéditeur</label>
            <input type="text" placeholder={parcel.senderemail || ""} 
            name="senderemail"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Email de la Destinataire</label>
            <input type="text" placeholder={parcel.recipiantemail || ""} 
            name="recipiantemail"
            onChange={handleChange} 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          
        </div>
        <div className="m-[20px]">

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Poids</label>
            <input type="Number" placeholder={parcel.weight || ""}  
            name="weight"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Prix</label>
            <input type="Number" placeholder={parcel.cost || ""}
            name="cost"
            onChange={handleChange}  
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Date</label>
            <input type="date" placeholder={parcel.date || ""}  
            name="date"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Note</label>
            <textarea type="text" placeholder={parcel.note || ""} 
            name="note"
            onChange={handleChange}  
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <button className="bg-[#1e1e1e] cursor-pointer text-[#fff] p-[10px] w-[300px]"onClick={handleUpdate} >
            Modifier
          </button>
          
          
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold">Feedback</h2>
          <span>Marchandises reçue en bon état</span>
          {parcel.status ===  1 || parcel.status === 0 ?  <span className="text-[#FF0100] text-[18px]">En cours de livraison</span> : <span className="text-[#22C55E] text-[18px]">Livré</span>}
        </div>

      </div>
    </div>
  )
}

export default Parcel