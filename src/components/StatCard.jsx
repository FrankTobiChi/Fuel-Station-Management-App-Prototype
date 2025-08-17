export default function StatCard({ icon: Icon, title, value, color }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4">
      <div className={\`p-3 rounded-full bg-\${color}-100\`}>
        <Icon className={\`w-6 h-6 text-\${color}-600\`} />
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
      </div>
    </div>
  );
}