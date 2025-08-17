export default function Card({ children, title, icon: Icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6">
        {title && (
          <div className="flex items-center mb-4">
            {Icon && <Icon className="w-7 h-7 text-blue-500 mr-3" />}
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
        )}
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}