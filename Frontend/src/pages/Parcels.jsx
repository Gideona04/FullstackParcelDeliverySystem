import {FaArrowLeft, FaTrash} from "react-icons/fa"
import { Link } from "react-router-dom";
import { DataGrid, renderActionsCell} from '@mui/x-data-grid';

const Parcels = () => {

   const rows = [
    { id: 1, sendername: 'Rasoa Andry', recipiantname: 'Rakoto Jean', from: 'Antananarivo', to: 'Fianarantsoa', weight: 2.5, cost: 15000 },
    { id: 2, sendername: 'Rabe Lisa', recipiantname: 'Randria Paul', from: 'Toamasina', to: 'Antsirabe', weight: 1.2, cost: 9000 },
    { id: 3, sendername: 'Ando Kevin', recipiantname: 'Hanta Mireille', from: 'Mahajanga', to: 'Toliara', weight: 3.0, cost: 18000 },
    { id: 4, sendername: 'Tiana Feno', recipiantname: 'Fanja Zo', from: 'Antananarivo', to: 'Sambava', weight: 4.0, cost: 22000 },
    { id: 5, sendername: 'Lova Sarah', recipiantname: 'Bema Olivier', from: 'Diego-Suarez', to: 'Manakara', weight: 2.8, cost: 16000 },
    { id: 6, sendername: 'Malala Nina', recipiantname: 'Tojo Eric', from: 'Fianarantsoa', to: 'Antananarivo', weight: 1.0, cost: 7500 },
    { id: 7, sendername: 'Kanto Soa', recipiantname: 'Rivo Alain', from: 'Antsirabe', to: 'Morondava', weight: 3.5, cost: 20000 },
    { id: 8, sendername: 'Fanilo Remy', recipiantname: 'Lina Ny Aina', from: 'Tamatave', to: 'Farafangana', weight: 1.7, cost: 9800 },
    { id: 9, sendername: 'Hasina Joel', recipiantname: 'Sitraka Mamy', from: 'Mananjary', to: 'Ambositra', weight: 2.2, cost: 12000 },
    { id: 10, sendername: 'Noro Aina', recipiantname: 'Dina Marco', from: 'Toliara', to: 'Antananarivo', weight: 5.0, cost: 25000 },
  ];
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
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
       <span className="font-semibold text-[#4] ">Niavo Gideona</span>
      </div>
   
         <div className="p-3">
           <DataGrid rows={rows} columns={columns} 
           checkboxSelection
           />
         </div>

      </div>

    </div>
  )
}

export default Parcels;