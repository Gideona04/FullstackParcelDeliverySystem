

const NewUser = () => {
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">Nouveau Utilisateur</h2>

      <div className="flex flex-col my-[20px]">
            <label htmlFor="">Nom et Prenom</label>
            <input type="text" placeholder="Fanantenaniavo Gideona" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
      </div>
      
      <div className="flex flex-col my-[20px]">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="fanantenaniavo@gmail.com" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
      </div>
      
      <div className="flex flex-col my-[20px]">
            <label htmlFor="">Age</label>
            <input type="number" placeholder="22" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
      </div>
      
      <div className="flex flex-col my-[20px]">
            <label htmlFor="">Pays</label>
            <input type="text" placeholder="Madagascar" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
      </div>
      
      <div className="flex flex-col my-[20px]">
            <label htmlFor="">Adresse</label>
            <input type="text" placeholder="Lot124 Ambodirano ,Fianarantsoa" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
      </div>

      <button className="bg-[#1e1e1e] cursor-pointer text-[#fff] p-[10px] w-[300px]">
            Crée
      </button>



    </div>
  )
}

export default NewUser