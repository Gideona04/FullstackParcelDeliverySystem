import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Login = () => {

  const [showPassword, setshowPassord] = useState(false);
  const handleTogglePassword = () =>{
    setshowPassord(!showPassword)
  }
  return (
    <div>

      <Navbar/>

      <div className="h-[75vh] flex items-center justify-evenly p-[50px] text-[#D1D5DB]">

        <img src="hero.png" alt="" />

        <div className="h-[450px] w-[450px] bg-[#e9eb77] rounded-[8px]">
          <input
           type="text"
           name="" id=""
           placeholder="Entrer votre email"
           className="flex items-center justify-center bg-[#fff] w-[350px] m-[10%] h-[47px]  rounded-[2px] outline border-none"
          />
          <div className="flex items-center">
          <input
           type={showPassword ? "text" : "password"}
           name="" id=""
           placeholder="Entrer votre mot de passe"
           className="flex items-center justify-center bg-[#fff] w-[350px] mt-[10%] ml-[10%] h-[47px]  rounded-[2px] outline border-none"
          /> 
          <span
            style={{
              display: "inline",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={handleTogglePassword}
          >
            {showPassword ? "👁️" : "🔒"}
          </span>
          

        </div>

          <button className="bg-[#1e1e1e] w-[350px] p-[15px] text-[#D7D7D7] font-semibold text-[18px] m-[10%] cursor-pointer">Connexion</button>
          
        </div>
        

      </div>

      <Footer/>
    </div>
  )
}

export default Login