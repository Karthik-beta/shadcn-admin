import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Generate dynamic demo data
const generateDemoData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  return months.map((month) => ({
    month,
    stock: Math.floor(Math.random() * 500) + 500, // Random stock between 500 and 1000
    sold: Math.floor(Math.random() * 400) + 300, // Random sold between 300 and 700
  }));
};

const data = generateDemoData();

export function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="month"
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
        <Line
          type="monotone"
          dataKey="stock"
          stroke="rgb(139 92 246)" /* Tailwind purple-500 */
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="sold"
          stroke="rgb(16 185 129)" /* Tailwind emerald-500 */
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}