import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { TrendingUpIcon, TrendingDownIcon, AlertTriangleIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

// Generate dynamic demo data
const generateDemoReportsData = (count: number) => {
  const reportTypes = ['Stock Levels', 'Sales Summary', 'Inventory Turnover', 'Low Stock Alerts'];
  const descriptions = [
    'Current stock levels by item',
    'Monthly sales summary',
    'Rate of inventory turnover',
    'Items running low on stock',
  ];
  const statuses = ['Good', 'Warning', 'Critical'];
  const trends = ['up', 'down', 'neutral'];
  const metricLabels = ['Stock Availability', 'Sales Progress', 'Turnover Rate', 'Low Stock Items'];
  const metricDescriptions = [
    'in stock',
    'sales completed',
    'turnover achieved',
    'items below threshold',
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: reportTypes[index % reportTypes.length],
    description: descriptions[index % descriptions.length],
    lastUpdated: new Date(
      Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
    ).toISOString().split('T')[0], // Random date within the last 30 days
    status: statuses[Math.floor(Math.random() * statuses.length)],
    trend: trends[Math.floor(Math.random() * trends.length)],
    progress: Math.floor(Math.random() * 100), // Random progress percentage
    metricLabel: metricLabels[index % metricLabels.length],
    metricDescription: metricDescriptions[index % metricDescriptions.length],
  }));
}

const demoReportsData = generateDemoReportsData(10)

// Map unsupported variants to supported ones
const statusToVariantMap: Record<string, 'default' | 'destructive' | 'outline' | 'secondary'> = {
  Good: 'default',
  Warning: 'secondary',
  Critical: 'destructive',
}

export function Reports() {
  return (
    <div className='space-y-6'>
      <h2 className='text-lg font-bold'>Reports</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {demoReportsData.map((report) => (
          <Card key={report.id} className='relative'>
            <CardHeader>
              <div className='flex items-center justify-between w-full'>
                <div>
                  <CardTitle>{report.name}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </div>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge
variant={report.status === 'Warning' ? 'outline' : statusToVariantMap[report.status]}
className={`ml-4 ${
                        report.status === 'Warning' ? 'bg-yellow-400 text-yellow-800 border-yellow-200' : ''
                      }`}
>
                      {report.status}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Status: {report.status}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardHeader>
            <CardContent>
              <div className='flex items-center justify-between mb-2'>
                <p className='text-sm text-muted-foreground'>
                  <strong>Last Updated:</strong> {report.lastUpdated}
                </p>
                {report.trend === 'up' ? (
                  <TrendingUpIcon className='text-green-500 h-5 w-5' />
                ) : report.trend === 'down' ? (
                  <TrendingDownIcon className='text-red-500 h-5 w-5' />
                ) : (
                  <AlertTriangleIcon className='text-yellow-500 h-5 w-5' />
                )}
              </div>
              <div>
                <p className='text-sm font-medium mb-1'>{report.metricLabel}</p>
                <Progress value={report.progress} className='h-2' />
                <p className='text-xs text-muted-foreground mt-1'>
                  {report.progress}% {report.metricDescription}
                </p>
              </div>
              <div className='mt-4 flex justify-end'>
                <Button variant='outline' size='sm'>
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}