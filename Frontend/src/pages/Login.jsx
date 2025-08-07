import { useState } from "react"
import {Navigate} from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {login} from "../redux/apiCalls"
import { useDispatch, useSelector} from "react-redux";


const Login = () => {

  const [showPassword, setshowPassord] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();

  const handleTogglePassword = () =>{
    setshowPassord(!showPassword)
  };

  const handleLogin = async () => {
    if(email && password)
      try {
        setLoading(true);
        await login(dispatch, { email, password });
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        setLoading(false);
      }
  };
  console.log(user.currentUser);
  return (
    <div>

      <Navbar/>

      <div className="h-[75vh] flex items-center justify-evenly p-[50px] text-[#D1D5DB]">

        <img src="hero.png" alt="" />

        <div className="h-[450px] w-[450px] bg-[#e9eb77] rounded-[8px]">
          <input
           type="text"
           name="" 
           id=""
           placeholder="Entrer votre email"
           onChange={(e) => setEmail(e.target.value)}
           className="flex items-center justify-center bg-[#fff] w-[350px] m-[10%] h-[47px]  rounded-[2px] outline border-none"
          />
          <div className="flex items-center">
          <input
           type={showPassword ? "text" : "password"}
           name="" id=""
           onChange={(e) => setPassword(e.target.value)}
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

          <button className="bg-[#1e1e1e] w-[350px] p-[15px] text-[#D7D7D7] font-semibold text-[18px] m-[10%] cursor-pointer" onClick={handleLogin}>
            {loading ? "Chargement..." : "Se connecter"}
            {user.currentUser && <Navigate to="/myparcels"  />  }
            </button>
          {error && <span className="text-red-500">Erreur de connexion</span>}
          
        </div>
        

      </div>

      <Footer/>
    </div>
  )
}

export default Login