import { useState } from "react";
import { LogOut, Fuel } from "lucide-react";
import { AppContext } from "./context/AppContext";
import LoginPage from "./pages/LoginPage";
import ManagerPortal from "./pages/ManagerPortal";
import CashierPortal from "./pages/CashierPortal";
import ManagementDashboard from "./pages/ManagementDashboard";
import SuperAdminPortal from "./pages/SuperAdminPortal";

export default function App() {
  const [user, setUser] = useState(null);

  const login = (role) => setUser({ role });
  const logout = () => setUser(null);

  const renderContent = () => {
    if (!user) return <LoginPage />;

    let portal;
    switch (user.role) {
      case "management": portal = <ManagementDashboard />; break;
      case "manager": portal = <ManagerPortal />; break;
      case "cashier": portal = <CashierPortal />; break;
      case "superAdmin": portal = <SuperAdminPortal />; break;
      default: return <LoginPage />;
    }

    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Fuel className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Lawebod Station App</span>
            </div>
            {user && (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 hidden sm:block">
                  Welcome, <span className="font-semibold capitalize">{user.role}</span>!
                </span>
                <button
                  onClick={logout}
                  className="flex items-center text-sm font-medium text-red-500 hover:text-red-700"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </button>
              </div>
            )}
          </nav>
        </header>
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">{portal}</main>
      </div>
    );
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {renderContent()}
    </AppContext.Provider>
  );
}