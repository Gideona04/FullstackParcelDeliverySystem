import {FaArrowLeft, FaTrash} from "react-icons/fa"
import { Link } from "react-router-dom";
import { DataGrid, renderActionsCell} from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { publicRequest } from "../requestMethods";


const Parcels = () => {
  const [parcels, setParcels] = useState([]);
  const user = useSelector((state) => state.user);
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

   
  const columns = [
    { field: '_id', headerName: 'ID', width: 70 },
    { field: 'sendername', headerName: 'Expéditeur', width: 150 },
    { field: 'recipiantname', headerName: 'Destinataire', width: 150 },
    { field: 'from', headerName: 'De', width: 130 },
    { field: 'to', headerName: 'A', width: 130 },
  
    { field: 'cost', headerName: 'Prix (Ar)',type:'Number', width: 120 },
   
    
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] ml-[5%] mr-[5%] ">

      <div className="bg-[#fff] h-auto w-[70vw] rounded-[3px] p-[30px]">

      <Link to="/myparcels">
        <FaArrowLeft className="text-[18px] text-[#444]"/>
      </Link>

      <hr className="h-[12px] border-none"/>
      <div className="flex justify-between p-[35px]">
       <span className="text-[18px] text-[#4]">Tous les Colis</span>
       <span className="font-semibold text-[#4] ">{user?.currentUser?.fullName}</span>
      </div>
   
         <div className="p-3">
           <DataGrid rows={parcels}
           getRowId={(row) => row._id}
           columns={columns} 
           heckboxSelection
           />
         </div>

      </div>

    </div>
  )
}

export default Parcels;