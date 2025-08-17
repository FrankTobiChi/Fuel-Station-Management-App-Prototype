import { Card, CardContent } from "@/components/ui/card";
import { salesData } from "../data/mockData";

export default function Cashier() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Cashier Dashboard</h1>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Daily Transactions</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Date</th>
                <th className="p-2">Fuel Type</th>
                <th className="p-2">Liters</th>
                <th className="p-2">Amount (₦)</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale) => (
                <tr key={sale.id} className="border-b">
                  <td className="p-2">{sale.date}</td>
                  <td className="p-2">{sale.fuelType}</td>
                  <td className="p-2">{sale.liters}</td>
                  <td className="p-2">{sale.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
