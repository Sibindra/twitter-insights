import React from 'react';
import { getSentiment } from '@/lib/sentiment';
import { useQuery } from '@tanstack/react-query';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from 'recharts';

// Custom Tooltip Component
interface CustomTooltipProps {
  label: string;
  inputString: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ label, inputString }) => {
  return (
    <div className="custom-tooltip border bg-white p-1">
      <p className="label">{`${label} : ${inputString}`}</p>
      {/* You can add additional information here */}
    </div>
  );
};

export default function SentimentAreaGraph({
  input,
  size,
  className,
}: {
  input: string[];
  size: number;
  className?: string;
}) {
  // Fetch the data using react-query
  const { data, status } = useQuery({
    queryKey: ['sentiment', input],
    queryFn: async () => await getSentiment(input),
  });

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (status === 'error') {
    return <div>error... </div>;
  }

  // Add conditional checks for data and its structure
  if (!data || !Array.isArray(data)) {
    return <div>Data is missing or invalid.</div>;
  }

  // Extract the first 'label' from each subarray and create an array
  const firstLabels = data.map((subarray: any) => subarray[0].label);

  console.log('firstLabels = ', firstLabels);

  const transformedData: any = data.map((subarray: any) => {
    let label = subarray[0].label;
    let value;

    if (label === 'LABEL_0') {
      label = 'Negative';
      value = -1;
    } else if (label === 'LABEL_1') {
      label = 'Positive';
      value = 1;
    } else if (label === 'LABEL_2') {
      label = 'Neutral';
      value = 0;
    }

    return { label, value };
  });

  console.log('transformedData = ', transformedData);

  const gradientOffset = () => {
    const dataMax = Math.max(...transformedData.map((i: any) => i.value));
    const dataMin = Math.min(...transformedData.map((i: any) => i.value));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <ResponsiveContainer width="100%" height={size} className={className}>
      <AreaChart
        data={transformedData.map((dataPoint:any, index:any) => ({
          ...dataPoint,
          index, // Add index to each data point
        }))}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const label = payload[0].payload.label;
              const index = payload[0].payload.index;
              const inputString = input[index]; 
              return <CustomTooltip label={label} inputString={inputString} />;
            }
            return null;
          }}
        />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="value" stroke="#000" fill="url(#splitColor)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
