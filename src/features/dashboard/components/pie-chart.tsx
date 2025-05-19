import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Generate dynamic demo data
const generateDemoData = () => {
  const categories = ['Electronics', 'Clothing', 'Home Appliances', 'Books', 'Toys'];
  return categories.map((category) => ({
    name: category,
    value: Math.floor(Math.random() * 500) + 100, // Random value between 100 and 600
  }));
};

const data = generateDemoData();

const COLORS = [
  'rgb(139 92 246)', // Tailwind purple-500
  'rgb(16 185 129)', // Tailwind emerald-500
  'rgb(250 204 21)', // Tailwind yellow-500
  'rgb(251 146 60)', // Tailwind orange-500
  'rgb(59 130 246)', // Tailwind blue-500
];

export function PieChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}