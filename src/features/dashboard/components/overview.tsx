import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'

// Data without net calculation
const data = Array.from({ length: 12 }, (_, index) => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const stockIn = Math.floor(Math.random() * 3000) + 500
  const stockOut = Math.floor(Math.random() * 2000) + 300
  return {
    name: monthNames[index],
    stockIn: stockIn,
    stockOut: stockOut,
  }
})

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
        <XAxis
          dataKey="name"
          stroke="rgb(107 114 128)"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis
          stroke="rgb(107 114 128)"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
          width={60}
        />
        <Tooltip
          cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
          contentStyle={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '8px', 
            border: 'none', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            padding: '10px 14px',
          }}
          formatter={(value, name) => {
            return [`${value} units`, name === 'stockIn' ? 'Stock In' : 'Stock Out']
          }}
          labelFormatter={(label) => `${label} 2025`}
        />
        <Legend 
          verticalAlign="top" 
          height={36}
          formatter={(value) => <span style={{ color: '#4b5563', fontSize: '13px' }}>{value}</span>} 
        />
        <Bar
          dataKey="stockIn"
          fill="rgb(16, 185, 129)" /* Emerald-600 for better contrast */
          radius={[4, 4, 0, 0]}
          name="Stock In"
          barSize={20}
        />
        <Bar
          dataKey="stockOut"
          fill="rgb(239, 68, 68)" /* Red-500 */
          radius={[4, 4, 0, 0]}
          name="Stock Out"
          barSize={20}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
