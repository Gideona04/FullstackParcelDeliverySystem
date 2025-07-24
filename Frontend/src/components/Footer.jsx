

const Footer = () => {
  return (
    <div className="h-[300px] bg-[#E9EB77] flex items-center justify-between pX-[30px] text-[#444]">

      <div className="flex flex-col">

        <img src="/LogoV.png" alt="" height="60px" width="210px m-[10px] "/>
        <hr className="h-[10px] border-none"/>
        <span className="w-[100%]">Nous savons que vos colis transportent plus que de simples objets .</span>
        <hr className="h-[3px] border-none"/>
        <span> Ils transportent votre confiance</span>
        <hr className="h-[3px] border-none"/>
        <span>Nous nous engageons à l'exellence</span>
        <hr className="h-[3px] border-none"/>
        <span>+261346704567</span> 
        <hr className="h-[3px] border-none"/>
        <span>info@ColisExpres.com</span>

      </div>

      <div >
       <span className="m-[10px]">Design By Goneu</span>
       <hr className="h-[3px] border-none"/>
       <span className="m-[10px]">&copy;copyright 2025</span>
      </div>


    </div>
  )
}

export default Footer