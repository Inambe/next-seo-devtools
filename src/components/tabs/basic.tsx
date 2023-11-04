import React from "react";
import { BodySchema } from "../analyze";
import { TableHead, TableRow } from "../table";

function BasicTab({ headSchema }: { headSchema: BodySchema }) {
  return (
    <div className="p-2">
      <div className="border rounded">
        <table>
          <TableHead heads={["Name", "Value", "Characters"]} />
          <tbody className="divide-y">
            <TableRow title="Title" value={headSchema.title || ""} />
            <TableRow
              title="Description"
              value={headSchema.description || ""}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BasicTab;
