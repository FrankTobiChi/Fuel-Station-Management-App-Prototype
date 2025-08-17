import { Card, CardContent } from "@/components/ui/card";
import { expensesData, salesData } from "../data/mockData";

export default function Management() {
  const totalSales = salesData.reduce((sum, s) => sum + s.amount, 0);
  const totalExpenses = expensesData.reduce((sum, e) => sum + e.amount, 0);
  const profit = totalSales - totalExpenses;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Management Dashboard</h1>

      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">Financial Summary</h2>
          <p>Total Sales: ₦{totalSales.toLocaleString()}</p>
          <p>Total Expenses: ₦{totalExpenses.toLocaleString()}</p>
          <p className="font-bold">Profit: ₦{profit.toLocaleString()}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Expenses Breakdown</h2>
          <ul className="space-y-2">
            {expensesData.map((exp) => (
              <li key={exp.id} className="flex justify-between border-b pb-2">
                <span>{exp.category}</span>
                <span>₦{exp.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
