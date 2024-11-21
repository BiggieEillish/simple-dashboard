import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { KeyMetricCard } from "@/components/ui/keyMetricCard";
import { BarChart } from "@/components/ui/barChart";
import { analyticsData } from "@/lib/data";

export default function AnalyticsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>View all statistics.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {analyticsData.keyMetrics.map((metric) => (
            <KeyMetricCard
              key={metric.title}
              title={metric.title}
              value={metric.value}
            />
          ))}
        </div>

        {/* Monthly Sales Chart */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
          <BarChart data={analyticsData.monthlySales} />
        </div>
      </CardContent>
    </Card>
  );
}
