import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { publicRequest } from '../requestMethods'; // Assure-toi que ce chemin est bon

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.get("/users");
        const usersWithId = res.data.map((user) => ({
          ...user,
          id: user._id 
        }));
        setData(usersWithId);
      } catch (err) {
        console.error("Erreur lors de la récupération des utilisateurs :", err);
      }
    };

    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/users/${id}`);
      setData(data.filter((item) => item._id !== id));
      window.location.reload();
    } catch (error) {
      console.log("Erreur lors de la suppression de l'utilisateur :", error);
    }
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'fullName', headerName: 'Nom et Prénom', width: 180 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'age', headerName: 'Âge', width: 100 },
    { field: 'country', headerName: 'Pays', width: 150 },
    { field: 'address', headerName: 'Adresse', width: 250 },
    {
      field: 'delete', headerName: 'Supprimer', width: 150,
      renderCell: (params) => (
        <FaTrash className='text-[#FF0100] cursor-pointer m-[2px]' onClick={() =>handleDelete(params.row.id)} />
      )
    },
  ];

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex item-center justify-between">
        <h1 className="m-[20px] text-[25px]">Tous les Utilisateurs</h1>
        <Link to="/newuser">
          <button className="bg-[#1e1e1e] text-[#fff] p-[13px] cursor-pointer m-[10px]">Nouveau Utilisateur</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}

export default Users;
