import { Card, CardContent } from "@/components/ui/card";
import { usersData } from "../data/mockData";

export default function SuperAdmin() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-2">{user.id}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
