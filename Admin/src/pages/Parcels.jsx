import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { publicRequest } from '../requestMethods';

const Parcels = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const res = await publicRequest.get("/parcels");
        setRows(res.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des colis :", err);
      }
    };

    fetchParcels();
  }, []);

  const handleDelete = async (id) => {
     try {
      await publicRequest.delete(`/parcels/${id}`);
      window.location.reload();
     } catch (error) {
      console.log("Erreur lors de la suppression du colis :", error);
     }

  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 70 },
    { field: 'sendername', headerName: 'Expéditeur', width: 150 },
    { field: 'recipiantname', headerName: 'Destinataire', width: 150 },
    { field: 'from', headerName: 'De', width: 130 },
    { field: 'to', headerName: 'A', width: 130 },
    { field: 'cost', headerName: 'Prix (Ar)', type: 'number', width: 120 },
    { field: 'edit', headerName: 'Modifier', width: 150,
      renderCell: (params) => (
  <>
    <Link to={`/parcel/${params.row._id}`}>
      <button className='bg-[#14B8A6] text-[#fff] cursor-pointer w-[70px] border-none h-[48px]'>
        Modifier
      </button>
    </Link>
  </>
)

    },
    { field: 'delete', headerName: 'Supprimer', width: 150,
      renderCell: (params) => (
        <FaTrash className='text-[#FF0100] cursor-pointer m-[2px] ' onClick={() => handleDelete(params.row._id)} />
      )
    },
  ];

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex item-center justify-between">
        <h1 className="m-[20px] text-[25px]">Tous les Colis</h1>
        <Link to="/NewParcel">
          <button className="bg-[#1e1e1e] text-[#fff] p-[13px] cursor-pointer m-[10px]">Nouveau Colis</button>
        </Link>
      </div>
      <DataGrid 
        rows={rows} 
        columns={columns}
        checkboxSelection
        getRowId={(row) => row._id}
        
      />
    </div>
  );
};

export default Parcels;
