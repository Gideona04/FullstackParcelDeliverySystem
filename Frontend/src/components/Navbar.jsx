import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-[#E9EB77] flex items-center justify-between px-10">

      <img src="/LogoV.png" alt="" height="60px" width="210px m-[10px]"  />
      <Link to="/login">
         <button className="bg-[#1e1e1e] p-[10px] border-none cursor-pointer text-[18px] m-[10px] text-[#D7D7D7] ">Se Connecter</button>
      </Link>
      
    </div>
  )
}

export default Navbar