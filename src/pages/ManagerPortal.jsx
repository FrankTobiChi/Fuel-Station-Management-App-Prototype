import { Card, CardContent } from "@/components/ui/card";
import { salesData, stockData } from "../data/mockData";

export default function StationManager() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Station Manager Dashboard</h1>

      {/* Sales Summary */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Recent Sales</h2>
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

      {/* Stock Overview */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Fuel Stock Levels</h2>
          <ul className="space-y-2">
            {stockData.map((stock, index) => (
              <li key={index} className="flex justify-between border-b pb-2">
                <span>{stock.fuelType}</span>
                <span>
                  {stock.level} / {stock.capacity} liters
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
