import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", enrollments: 400 },
  { name: "Feb", enrollments: 500 },
  { name: "Mar", enrollments: 700 },
  { name: "Apr", enrollments: 800 },
  { name: "May", enrollments: 600 },
  { name: "Jun", enrollments: 900 },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#e67e23" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="enrollments" fill="#e67e23" barSize={40} radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
