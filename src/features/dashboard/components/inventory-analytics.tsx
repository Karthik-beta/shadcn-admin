import { BarChartComponent } from './bar-chart'
import { PieChartComponent } from './pie-chart'
import { LineChartComponent } from './line-chart'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function InventoryAnalytics() {
  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
        <Card className='col-span-1 lg:col-span-4'>
          <CardHeader>
            <CardTitle>Stock Movement</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChartComponent />
          </CardContent>
        </Card>
        <Card className='col-span-1 lg:col-span-3'>
          <CardHeader>
            <CardTitle>Category Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChartComponent />
          </CardContent>
        </Card>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle>Inventory Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChartComponent />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}