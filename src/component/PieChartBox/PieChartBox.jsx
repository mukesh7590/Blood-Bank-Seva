import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
   { name: "Male", value: 1089, color: "#0088FE" },
   { name: "Female", value: 941, color: "#00C49F" },
   { name: "TransGender", value: 360, color: "#FFBB28" },
   //    { name: "Tablet", value: 200, color: "#FF8042" },
];
const PieChartBox = (props) => {
   console.log("props aya hai => ", props);
   return (
      <div className="pieChartBox">
         <h1>{props.title}</h1>
         <div className="chart">
            <ResponsiveContainer width="99%" height={200}>
               <PieChart>
                  <Tooltip
                     contentStyle={{ background: "white", borderRadius: "5px" }}
                  />
                  <Pie
                     data={props.chartData}
                     innerRadius={"60%"}
                     outerRadius={"90%"}
                     paddingAngle={5}
                     dataKey="value"
                  >
                     {props.chartData.map((item) => (
                        <Cell key={item.name} fill={item.color} />
                     ))}
                  </Pie>
               </PieChart>
            </ResponsiveContainer>
         </div>
         <div className="options">
            {props.chartData.map((item) => (
               <div className="option" key={item.name}>
                  <div className="title">
                     <div
                        className="dot"
                        style={{ backgroundColor: item.color }}
                     />
                     <span>{item.name}</span>
                  </div>
                  <span>{item.value}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default PieChartBox;
