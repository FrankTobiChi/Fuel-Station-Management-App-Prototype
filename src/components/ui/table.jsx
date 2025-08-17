import * as React from "react";

export function Table({ children }) {
  return <table className="w-full border-collapse">{children}</table>;
}

export function TableHead({ children }) {
  return <thead className="bg-gray-100">{children}</thead>;
}

export function TableRow({ children }) {
  return <tr className="border-b">{children}</tr>;
}

export function TableCell({ children }) {
  return <td className="p-2 text-sm">{children}</td>;
}