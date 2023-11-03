import React from "react";

type TableRowProps = {
  title: string;
  value: string;
};
export function TableRow({ title, value }: TableRowProps) {
  return (
    <tr className="divide-x">
      <td className="p-2">{title}</td>
      <td className="p-2">{value}</td>
      {/* TODO proper character counting */}
      <td className="p-2">{value.length}</td>
    </tr>
  );
}

type TableHeadProps = {
  heads: string[];
};
export function TableHead({ heads = [] }: TableHeadProps) {
  return (
    <thead>
      <tr className="text-left divide-x border-b">
        {heads.map((h) => (
          <th className="p-1.5 px-2 font-medium">{h}</th>
        ))}
      </tr>
    </thead>
  );
}
