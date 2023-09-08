import React from "react";

const ShapeBarChart = (props) => {
   return (
      <div className="barChartBox">
         <h1>{props.title}</h1>
         <div className="chart">
            <ResponsiveContainer width="99%" height={150}>
               <BarChart
                  data={props.chartData}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <XAxis dataKey="name" />
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

export default ShapeBarChart;
