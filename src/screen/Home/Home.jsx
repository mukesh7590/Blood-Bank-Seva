import React from "react";
import "./home.scss";
import Navbar from "../../component/Navbar/Navbar";
import Dashboard from "../../component/Dashboard/Dashboard";
import BarChartBox from "../../component/BarChartBox/BarChartBox";
import { barChartBoxRevenue, communityData } from "../../data";
import ChartBox from "../../component/ChartBox/ChartBox";
import PieChartBox from "../../component/PieChartBox/PieChartBox";
const Home = () => {
   return (
      <div className="home">
         <div className="box box1">
            <ChartBox {...communityData.total_Donation} />
         </div>
         <div className="box box2">
            <ChartBox {...communityData.blood_Receiving} />
         </div>
         <div className="box box3">
            <ChartBox {...communityData.campaigns} />
         </div>
         <div className="box box4">
            <PieChartBox {...communityData.gender_donnor} />
         </div>
         <div className="box box5">
            <ChartBox {...communityData.social_coins} />
         </div>
         <div className="box box6">
            <BarChartBox {...communityData.Donnor} />
         </div>
         <div className="box box7">
            <PieChartBox {...communityData.requests} />
         </div>
         <div className="box box8">
            <BarChartBox {...communityData.Receiver} />
         </div>
         <div className="box box9">
            <BarChartBox {...communityData.blood} />
         </div>
      </div>
   );
};

export default Home;
