import * as React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl shadow p-4 bg-white ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2 font-bold text-lg">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}