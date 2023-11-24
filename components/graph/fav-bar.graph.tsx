import React, { useEffect, useState } from 'react';
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
} from 'recharts';
import LoadingPage from '../message-pages/loading-page';

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props: any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

interface FavCountBarGraphProps {
  size: number;
  data: any[]; 
  className?: string;
}

export default function FavCountBarGraph({
  size,
  data,
  className,
}: FavCountBarGraphProps) {

 



  // @ts-ignore
  const results = data?.results || [];


  const Favdata = results.map((result: any) => ({
    name: formatDate(result.creation_date),
    text: result.text,
    favorite_count: result.favorite_count,
  }));

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const FavData = payload[0].payload; 
      if (FavData) {
        return (
          <div className="custom-tooltip border bg-white dark:bg-stone-400 p-1">
            <p>{FavData.text}</p>
          </div>
        );
      }
    }
  
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={size} className={className}>
      <BarChart
        data={Favdata}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" stroke="#ddd" />
        <XAxis
          dataKey="name"
          stroke="#555"
          fontSize={14}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#555"
          fontSize={14}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: number) => `${value}`}
        />
        <Legend />
        <Tooltip content={<CustomTooltip />} />
  
        <Bar
          dataKey="favorite_count"
          fill="#ffc658"
          shape={<TriangleBar />}
          barSize={25}
        />
        <Bar
          dataKey="text"
          fill="#CEC7C8"
          shape={<TriangleBar />}
          barSize={25}
        />
      </BarChart>
    </ResponsiveContainer>
  );
  
}
