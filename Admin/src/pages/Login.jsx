import Footer from '../components/Footer'; 


const Login = () => {
  return (
    <div>

     <div className='h-[70vh] flex items-center justify-evenly p-[50px] text-[#D1D5DB]'>

      <div>
        <h2 className='text-[#d9d9d9] font-semibold text-[35px]'>ColisExpres Admin</h2>
        <img src="/hero.png" alt="" />
      </div>

      <div className='h-[450px] w-[450px] bg-[#E9EB77] rounded-[8px]'>
        
        <input 
        type="text"
        placeholder='Entrer votre  email' 
        className='flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-[none] border-none'
        />
        <input 
        type="password"
        placeholder='Entrer votre  mot de passe' 
        className='flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-[none] border-none'
        />
        
      <button className="bg-[#1e1e1e] w-[387px] p-[20px] text-[#fff] font-semibold text-[18px] m-[10%] cursor-pointer">
            Se Connecter
      </button>

      </div>

     </div>

    <Footer/>

    </div>
  )
}

export default Login