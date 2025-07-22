import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="h-[100px] bg-[#E9EB77] flex items-center justify-between px-10">
           <Link to="/"><img src="/LogoV.png" alt="" height="60px" width="210px m-[10px]"  /></Link>
           <button className="bg-[#E9EB77]  border-none cursor-pointer text-[17px] m-[5px] ">Se déconnecter</button>


        </div>
    )
}

export default Navbar