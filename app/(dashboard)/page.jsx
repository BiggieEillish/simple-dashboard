import { SummaryCard } from "@/components/ui/summaryCard";
import { BarChart } from "@/components/ui/barChart";
import { dashboardSummary } from "@/lib/data";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard title="Total Orders" value={dashboardSummary.totalOrders} />
        <SummaryCard title="Total Revenue" value={dashboardSummary.totalRevenue} />
        <SummaryCard title="Total Products" value={dashboardSummary.totalProducts} />
        <SummaryCard title="Total Customers" value={dashboardSummary.totalCustomers} />
      </div>

      {/* Recent Orders Table */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <div className="border rounded p-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-left">Order ID</th>
                <th className="text-left">Customer</th>
                <th className="text-left">Product</th>
                <th className="text-left">Status</th>
                <th className="text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {dashboardSummary.recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td>{order.status}</td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products Bar Chart */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Top Products</h2>
        <BarChart data={dashboardSummary.topProducts} />
      </div>
    </div>
  );
}
