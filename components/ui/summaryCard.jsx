import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function SummaryCard({ title, value }) {
  return (
    <Card className="border p-4">
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
