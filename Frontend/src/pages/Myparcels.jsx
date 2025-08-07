import { useEffect, useState } from "react";
import {FaUser} from "react-icons/fa";
import {Link , useNavigate} from "react-router-dom"
import { useDispatch, useSelector} from "react-redux";
import { publicRequest } from '../requestMethods';
import { logout } from "../redux/userRedux";


export const MyParcels = () => {
  const [open,setOpen] = useState(false)
  const [parcels, setParcels] = useState([]);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  

  const dispatch = useDispatch();

  const handleOpen =() =>{
    setOpen(!open)
  }

  useEffect(() =>{
    const getParcels = async () => {
         try {
          const res = await publicRequest.post("/parcels/me/", {
           email: user.currentUser.email,
          })
          
          setParcels(res.data);
         } catch (error) {
          console.error("Erreur lors de la récupération des colis :", error);
         }
    };
    getParcels();
  }, []);

  const handleLogout = () => {
  dispatch(logout()); // ici, c’est bien l’action Redux
  navigate("/login");
};
   return (
    <div>

      <div className=" relative flex items-center justify-end mr-[20%] mt-[5%]  font-semibold cursor-pointer">
       <div className="flex items-center text-[#fff] " onClick={handleOpen}>
        <FaUser className="mr-[10px] "/>
       {user?.currentUser?.fullName}
       </div>
      {open &&  <div className="absolute top-[20px] right-0 h-[200px] w-[250px] bg-[#d9d9d9] z-[999] shadow-xl text-[#fff] ">

        <ul className="flex flex-col items-center justify-center mt-[10px] mr-[20px] list-none text-[#555]">
          <Link  className="" to="/allparcels"><li className="hover:text-[#fff] my-[10px] cursor-pointer text-[20px] ">Tous Les Colis</li></Link>
          <li className="hover:text-[#fff] my-[10px] cursor-pointer text-[20px] ">Relevé</li>
          <li className="hover:text-[#fff] my-[10px] cursor-pointer text-[20px] " onClick={handleLogout}>Se Deconnecter</li>

        </ul>
        
       </div>}

      </div>

      <div className="flex flex-col mr-[10%] ml-[10%]">
        <h2 className="text-[18px] text-[#d9d9d9] p-[20px]">Mes Colis</h2>
        
        
      {parcels.map((parcel ,index) => 
      (
        <Link to={`/parcel/${parcel._id}`} key={index} className=" no-underline text-[#000]">

        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[67vw] m-[20px] p-[20px] cursor-pointer " key={index}>
          <div className="">
            <ul className="list-none ">
              <li>De: {parcel.from}</li>
              <hr className="h-[14px] border-none"/>
              
              <li>Poids: {parcel.weight} </li>
              <hr className="h-[14px] border-none"/>
              <li>Date: {parcel.date} </li>
              <hr className="h-[14px] border-none"/>
              <li>Expediteur: 
                {parcel.sendername} 
              </li>
            </ul>
          </div>
          <div className="flex flex-col"> 
            <span>A:{parcel.to} </span>
            <hr className="h-[6px] border-none"/>
            <button className={parcel.status === "1" ?"bg-[#45de52]] text-[#fff] w-[100px] cursor-pointer p-[5px]":"bg-[#555] text-[#fff] w-[100px] cursor-pointer p-[5px]" }>
              {parcel.status === "1" ? "Livré" : "En Livraison"}
              </button>
          </div>
        </div>
        
        </Link>
      )

        
      )}


      </div>

    </div>
  )
}
export default MyParcels;
