import {HiArrowSmallUp,HiArrowLongDown} from "react-icons/hi2"
import { PieChart } from '@mui/x-charts/PieChart';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#242424]">
      <div className="flex items-center justify-start h-full ">
        <div className="flex flex-col text-[#d9d9d9] h-[260px] w-[380px] bg-white shadow-[6px_0px_10px_rgba(0,0,0,0.2)] m-[20px] rounded">
          <div className="flex flex-col items-center ">
            <h1 className="text-[25px] font-semibold">Utilisateur</h1>
            <div>

              <HiArrowSmallUp className="text-[31px] text-[#00FF10] mt-[20px]"/> 
              <HiArrowLongDown className="text-[31px] text-[#FF0100] mt-[20px]"/>
              <div className="flex flex-col items-center mt-[20px] text-[23px]">
                <span>200</span>
              </div>
                
            </div>
            
          </div>
        </div>
        <div className="flex flex-col text-[#d9d9d9] h-[260px] w-[380px] bg-white shadow-[6px_0px_10px_rgba(0,0,0,0.2)] m-[20px] rounded">
          <div className="flex flex-col items-center ">
            <h1 className="text-[25px] font-semibold">Colis livrés</h1>
            <div>

              <HiArrowSmallUp className="text-[31px] text-[#00FF10] mt-[20px]"/> 
              <HiArrowLongDown className="text-[31px] text-[#FF0100] mt-[20px]"/>
              <div className="flex flex-col items-center mt-[20px] text-[23px]">
                <span>2000</span>
              </div>
                
            </div>
            
          </div>
        </div>
        <div className="flex flex-col text-[#d9d9d9] h-[260px] w-[380px] bg-white shadow-[6px_0px_10px_rgba(0,0,0,0.2)] m-[20px] rounded">
          <div className="flex flex-col items-center ">
            <h1 className="text-[25px] font-semibold">Colis en attente</h1>
            <div>

              <HiArrowSmallUp className="text-[31px] text-[#00FF10] mt-[20px]"/> 
              <HiArrowLongDown className="text-[31px] text-[#FF0100] mt-[20px]"/>
              <div className="flex flex-col items-center mt-[20px] text-[23px]">
                <span>100</span>
              </div>
                
            </div>
            
          </div>
        </div>
      </div>
     <div className="flex h-[400px] gap-6 bg-[#242424] p-6">

  {/* Section graphique + légende */}
  <div className="flex h-[400px] bg-[#242424] p-6">

  {/* Chart + légende */}
  <div className="flex flex-col justify-end items-center mr-10">
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 25, label: 'series C' },
          ],
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -45,
          endAngle: 225,
          cx: 150,
          cy: 150,
        }
      ]}
    />

    
  </div>

  {/* Section utilisateurs (légèrement à droite) */}
  <div className="h-[350px] w-[300px] shadow-lg p-[20px]  rounded ml-[470px]">
    <h2 className="px-[10px] text-[#fff] text-lg font-bold">Utilisateurs récents</h2>
    <ol className="font-semibold flex flex-col gap-2 px-[10px] mt-[10px] text-[#fff]">
      <li>Goneu</li>
      <li>Gonalde</li>
      <li>Gonadelo</li>
    </ol>
  </div>

</div>

</div>

    </div>
  );
};

export default Home;
