import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export function KeyMetricCard({ title, value }) {
  return (
    <Card className="border p-4">
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-2xl font-bold">{value}</CardDescription>
      </CardContent>
    </Card>
  );
}
