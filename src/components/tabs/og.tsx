import React from "react";
import { BodySchema } from "../analyze";
import { TableHead, TableRow } from "../table";

function OGTab({ headSchema }: { headSchema: BodySchema }) {
  return (
    <div className="p-2">
      <div
        className="aspect-[2/1] bg-contain w-[494px]"
        style={{
          backgroundImage: headSchema.openGraph.image
            ? `url(${headSchema.openGraph.image})`
            : "",
        }}
      ></div>
      <div className="mt-2 border rounded">
        <table>
          <TableHead heads={["Name", "Value", "Characters"]} />
          <tbody className="divide-y">
            <TableRow title="Title" value={headSchema.openGraph.title || ""} />
            <TableRow
              title="Description"
              value={headSchema.openGraph.description || ""}
            />
          </tbody>
        </table>
      </div>
      <div className="mt-2">
        <label htmlFor="all">All</label>
        <textarea className="mt-1 w-full rounded" id="all" rows={4}>
          {headSchema.openGraph.all
            .map((a) => `${a.name}=${a.value}`)
            .join("\n")}
        </textarea>
      </div>
    </div>
  );
}

export default OGTab;
