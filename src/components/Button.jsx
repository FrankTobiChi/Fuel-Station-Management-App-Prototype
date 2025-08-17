export default function Button({ children, onClick, className = "bg-blue-600 hover:bg-blue-700", icon: Icon }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ${className}`}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
}