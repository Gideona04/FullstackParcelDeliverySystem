import { DataGrid, renderActionsCell} from '@mui/x-data-grid';
import {FaTrash} from "react-icons/fa"
import { Link } from 'react-router-dom';


const Users = () => {

  const rows = [
  { id: 1, fullName: 'Jean Rakoto', email: 'jean.rakoto@gmail.com', age: 30, country: 'Madagascar', address: 'Lot II F 45 Ampasampito' },
  { id: 2, fullName: 'Hanta Rabe', email: 'hanta.rabe@yahoo.com', age: 28, country: 'Madagascar', address: 'Rue Ravelojaona, Fianarantsoa' },
  { id: 3, fullName: 'Kevin Andry', email: 'kevin.andry@outlook.com', age: 25, country: 'France', address: '12 Rue de Lyon, Paris' },
  { id: 4, fullName: 'Mireille Zo', email: 'mireille.zo@gmail.com', age: 35, country: 'Madagascar', address: 'Ambalavao, Lot B 103' },
  { id: 5, fullName: 'Joel Randria', email: 'joel.randria@gmail.com', age: 22, country: 'Canada', address: '133 Rue St-Hubert, Montreal' },
  { id: 6, fullName: 'Fanilo Niry', email: 'fanilo.niry@gmail.com', age: 31, country: 'Madagascar', address: 'Anosizato Andrefana, Tana' },
  { id: 7, fullName: 'Sarah Nirina', email: 'sarah.nirina@gmail.com', age: 27, country: 'USA', address: '45 Oak Street, New York' },
  { id: 8, fullName: 'Tojo Mamy', email: 'tojo.mamy@gmail.com', age: 33, country: 'Madagascar', address: 'Ambanja, quartier Avaradrova' },
  { id: 9, fullName: 'Lisa Kanto', email: 'lisa.kanto@gmail.com', age: 29, country: 'Madagascar', address: 'Lot 145 Tsimbazaza' },
  { id: 10, fullName: 'Alain Remy', email: 'alain.remy@gmail.com', age: 40, country: 'Germany', address: 'Berliner Strasse 77, Berlin' },
];
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullName', headerName: 'Nom et Prenom', width: 180 },
  { field: 'email', headerName: 'Email', width: 220 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'country', headerName: 'Pays', width: 150 },
  { field: 'address', headerName: 'Address', width: 250 },
  { field: 'delete', headerName: 'Supprimer', width: 150,
    rendercell: () =>{
      return(
        <>
        <FaTrash/>
        </>
      )
    }
  },
];


  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex item-center justify-between">
      <h1 className="m-[20px] text-[25px]">Tous les Utilisareurs</h1>
      <Link to="/newuser">
      <button className="bg-[#1e1e1e] text-[#fff] p-[13px] cursor-pointer m-[10px]">Nouveau Utilisateur</button>
      </Link>
    </div>
    <DataGrid 
    rows={rows} 
    columns={columns}
    checkboxSelection
     />
    </div>
  )
}

export default Users