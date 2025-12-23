import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Static data for different time periods
const weeklyData = [
  { name: 'Mon', Happy: 7, Sad: 2, Calm: 5, Energetic: 6 },
  { name: 'Tue', Happy: 8, Sad: 1, Calm: 6, Energetic: 7 },
  { name: 'Wed', Happy: 6, Sad: 3, Calm: 5, Energetic: 5 },
  { name: 'Thu', Happy: 9, Sad: 1, Calm: 7, Energetic: 8 },
  { name: 'Fri', Happy: 8, Sad: 2, Calm: 6, Energetic: 7 },
  { name: 'Sat', Happy: 10, Sad: 0, Calm: 8, Energetic: 9 },
  { name: 'Sun', Happy: 9, Sad: 1, Calm: 9, Energetic: 6 },
];

const monthlyData = [
  { name: 'Week 1', Happy: 7, Sad: 2, Calm: 6, Energetic: 6 },
  { name: 'Week 2', Happy: 8, Sad: 1, Calm: 7, Energetic: 7 },
  { name: 'Week 3', Happy: 6, Sad: 3, Calm: 5, Energetic: 5 },
  { name: 'Week 4', Happy: 9, Sad: 1, Calm: 8, Energetic: 8 },
];

const yearlyData = [
  { name: 'Jan', Happy: 6, Sad: 3, Calm: 5, Energetic: 5 },
  { name: 'Feb', Happy: 7, Sad: 2, Calm: 6, Energetic: 6 },
  { name: 'Mar', Happy: 8, Sad: 2, Calm: 7, Energetic: 7 },
  { name: 'Apr', Happy: 7, Sad: 2, Calm: 6, Energetic: 6 },
  { name: 'May', Happy: 9, Sad: 1, Calm: 8, Energetic: 8 },
  { name: 'Jun', Happy: 8, Sad: 1, Calm: 7, Energetic: 7 },
  { name: 'Jul', Happy: 10, Sad: 0, Calm: 9, Energetic: 9 },
  { name: 'Aug', Happy: 9, Sad: 1, Calm: 8, Energetic: 8 },
  { name: 'Sep', Happy: 8, Sad: 2, Calm: 7, Energetic: 7 },
  { name: 'Oct', Happy: 7, Sad: 2, Calm: 6, Energetic: 6 },
  { name: 'Nov', Happy: 6, Sad: 3, Calm: 6, Energetic: 5 },
  { name: 'Dec', Happy: 8, Sad: 1, Calm: 7, Energetic: 7 },
];

const MoodChart = ({ period = 'weekly' }) => {
  // Select data based on period
  const data = period === 'weekly' ? weeklyData : period === 'monthly' ? monthlyData : yearlyData;

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis 
          dataKey="name" 
          stroke="rgba(255,255,255,0.7)" 
          style={{ fontSize: '0.85rem' }}
        />
        <YAxis 
          stroke="rgba(255,255,255,0.7)" 
          style={{ fontSize: '0.85rem' }}
          domain={[0, 10]}
        />
        <Tooltip 
          contentStyle={{ 
            background: 'rgba(40, 40, 50, 0.95)', 
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            color: '#fff'
          }}
        />
        <Legend 
          wrapperStyle={{ color: '#fff', paddingTop: '10px' }}
          iconType="line"
        />
        <Line 
          type="monotone" 
          dataKey="Happy" 
          stroke="#b6a261" 
          strokeWidth={2.5}
          dot={{ fill: '#b6a261', r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="Sad" 
          stroke="#7189a2" 
          strokeWidth={2.5}
          dot={{ fill: '#7189a2', r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="Calm" 
          stroke="#7ca48a" 
          strokeWidth={2.5}
          dot={{ fill: '#7ca48a', r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="Energetic" 
          stroke="#c48b8f" 
          strokeWidth={2.5}
          dot={{ fill: '#c48b8f', r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MoodChart;
