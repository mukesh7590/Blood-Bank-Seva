import React from "react";
// import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import {
   BarChart,
   Bar,
   Cell,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
} from "recharts";
const BarChartBox = (props) => {
   //    console.log(props.chartData);
   return (
      <div className="barChartBox">
         <h1>{props.title}</h1>
         <div className="chart">
            <ResponsiveContainer width="100%" height={250}>
               <BarChart
                  data={props.chartData}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <XAxis
                     dataKey="name"
                     style={{
                        color: "yellow",
                        fontFamily: "Arial",
                     }}
                  />
                  <YAxis />
                  <Tooltip
                     contentStyle={{
                        background: "#2a3447",
                        borderRadius: "15px",
                     }}
                     labelStyle={{ display: "none" }}
                     cursor={{ fill: "none" }}
                  />
                  <Bar dataKey={props.dataKey} fill={props.color} />
               </BarChart>
            </ResponsiveContainer>
         </div>
      </div>
   );
};

export default BarChartBox;
