import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// Generate dynamic demo data
const generateDemoData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  return months.map((month) => ({
    name: month,
    sales: Math.floor(Math.random() * 5000) + 1000, // Random sales between 1000 and 6000
    profit: Math.floor(Math.random() * 3000) + 500, // Random profit between 500 and 3500
  }));
};

const data = generateDemoData();

export function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" 
          stroke="rgb(107 114 128)" /* Tailwind gray-500 */
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
        />
        <YAxis 
          stroke="rgb(107 114 128)" /* Tailwind gray-500 */
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
        />
        <Tooltip />
        <Legend />
        <Bar 
          dataKey="sales" 
          fill="rgb(139 92 246)" /* Tailwind purple-500 */
          radius={[4, 4, 0, 0]} 
        />
        <Bar 
          dataKey="profit" 
          fill="rgb(16 185 129)" /* Tailwind emerald-500 */
          radius={[4, 4, 0, 0]} 
        />
      </BarChart>
    </ResponsiveContainer>
  );
}