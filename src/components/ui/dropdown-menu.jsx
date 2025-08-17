import * as React from "react";

export function DropdownMenu({ items = [], onSelect }) {
  return (
    <div className="border rounded-lg bg-white shadow-md w-48">
      {items.map((item, i) => (
        <div
          key={i}
          onClick={() => onSelect(item)}
          className="p-2 hover:bg-gray-100 cursor-pointer"
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}