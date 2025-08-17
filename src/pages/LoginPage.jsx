import { useContext } from "react";
import { Fuel, LayoutDashboard, Briefcase, DollarSign, Settings } from "lucide-react";
import Button from "../components/Button";
import { AppContext } from "../context/AppContext";

export default function LoginPage() {
  const { login } = useContext(AppContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl">
        <div className="text-center">
          <Fuel className="w-16 h-16 mx-auto text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Fuel Station Portal</h1>
          <p className="text-gray-500 mt-2">Please select your role to log in.</p>
        </div>
        <div className="space-y-4">
          <Button onClick={() => login("management")} icon={LayoutDashboard}>Login as Management</Button>
          <Button onClick={() => login("manager")} icon={Briefcase}>Login as Station Manager</Button>
          <Button onClick={() => login("cashier")} icon={DollarSign}>Login as Cashier</Button>
          <Button onClick={() => login("superAdmin")} icon={Settings} className="bg-gray-700 hover:bg-gray-800">
            Login as Super Admin
          </Button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">Prototype v1.1 - Authentication Simulated</p>
      </div>
    </div>
  );
}