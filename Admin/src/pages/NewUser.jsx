import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { publicRequest } from '../requestMethods';


const NewUser = () => {

      const [input, setInput] = useState({});
        const handleChange = (e) => {
          setInput((prev) => ({ ...prev, [e.target.name]: e.target.value 
            
          }));
        }
      


    const generatePassword = (length) => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*";

    const allChars = lowerCaseChars + upperCaseChars + numberChars + specialChars;

    let password = "";

    // Ensure the password contains at least one of each required type
    password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Fill the rest of the password length with random characters from all types
    for (let i = password.length; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the characters to ensure a random order
    password = password.split("").sort(() => 0.5 - Math.random()).join("");

    return password;
  };

  const handleAddUser = async () => {
        try {
            const password = generatePassword(8);
            await publicRequest.post("/auth/register", { ...input, password });
            toast.success("Utilisateur créé avec succès !");
            
        } catch (error) {
            toast.danger("Échec de la création de l'utilisateur.");
        }
      }     

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">Nouveau Utilisateur</h2>

      <div className="flex flex-col my-[20px]">
            <label htmlFor="">Nom et Prenom</label>
            <input type="text" placeholder="Fanantenaniavo Gideona"
            name="fullName"
            onChange={handleChange} 
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
      </div>
      
      <div className="flex flex-col my-[20px]">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="fanantenaniavo@gmail.com"
            name="email"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
      </div>
      
      <div className="flex flex-col my-[20px]">
            <label htmlFor="">Age</label>
            <input type="number" placeholder="22" 
            name="age"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
      </div>
      
      <div className="flex flex-col my-[20px]">
            <label htmlFor="">Pays</label>
            <input type="text" placeholder="Madagascar" 
            name="country"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
      </div>
      
      <div className="flex flex-col my-[20px]">
            <label htmlFor="">Adresse</label>
            <input type="text" placeholder="Lot124 Ambodirano ,Fianarantsoa" 
            name="address"
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
      </div>

      <button className="bg-[#1e1e1e] cursor-pointer text-[#fff] p-[10px] w-[300px]" onClick={handleAddUser}>
            Crée
      </button>
      <ToastContainer />


    </div>
  )
}

export default NewUser