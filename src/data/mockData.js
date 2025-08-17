// src/data/mockData.js
export const salesData = [
  { id: 1, date: "2025-08-10", fuelType: "PMS", liters: 1200, amount: 840000 },
  { id: 2, date: "2025-08-11", fuelType: "AGO", liters: 600, amount: 420000 },
  { id: 3, date: "2025-08-12", fuelType: "DPK", liters: 300, amount: 180000 },
];

export const stockData = [
  { fuelType: "PMS", level: 4000, capacity: 10000 },
  { fuelType: "AGO", level: 2500, capacity: 8000 },
  { fuelType: "DPK", level: 1200, capacity: 5000 },
];

export const expensesData = [
  { id: 1, category: "Maintenance", amount: 75000 },
  { id: 2, category: "Salaries", amount: 200000 },
  { id: 3, category: "Utilities", amount: 50000 },
];

export const usersData = [
  { id: 1, name: "John Doe", role: "Cashier" },
  { id: 2, name: "Jane Smith", role: "Station Manager" },
  { id: 3, name: "Admin User", role: "Super Admin" },
];
export const transactionsData = [
  { id: 1, date: "2025-08-10", type: "Sale", amount: 840000 },
  { id: 2, date: "2025-08-11", type: "Purchase", amount: 420000 },
  { id: 3, date: "2025-08-12", type: "Expense", amount: 180000 },
];