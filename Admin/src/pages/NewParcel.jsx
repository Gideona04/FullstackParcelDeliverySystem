
const NewParcel = () => {
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">Nouveau Colis</h2>
      <div className="flex">


        <div className="m-[20px]">

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">De</label>
            <input type="text" placeholder="Antananarivo" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">A</label>
            <input type="text" placeholder="Fianarantsoa"
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Expéditeur</label>
            <input type="text" placeholder="Niavo Nambinintsoa" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Destinataire</label>
            <input type="text" placeholder="Hardi Raz" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Email de l'Expéditeur</label>
            <input type="text" placeholder="niavo@gmail.com" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Email de la Destinataire</label>
            <input type="text" placeholder="hardi@gmail.com" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          
        </div>
        <div className="m-[20px]">

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Poids</label>
            <input type="Number" placeholder="200g" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Prix</label>
            <input type="Number" placeholder="20000Ar"
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Date</label>
            <input type="date" placeholder="Niavo Nambinintsoa" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Note</label>
            <textarea type="text" placeholder="Fragile" 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <button className="bg-[#1e1e1e] cursor-pointer text-[#fff] p-[10px] w-[300px]">
            Crée
          </button>
          
          
        </div>



      </div>
    </div>
  )
}

export default NewParcel