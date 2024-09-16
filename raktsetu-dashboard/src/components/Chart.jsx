// src/components/Chart.jsx
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';

const Chart = ({ title, subtitle, data }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </CardHeader>
    <CardContent>
      <div className="h-[200px] bg-gray-100 flex items-center justify-center">
        Chart: {JSON.stringify(data)}
      </div>
    </CardContent>
  </Card>
);

export default Chart;
