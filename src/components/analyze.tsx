import { getHeadElText, getMeta } from "@/utils";
import { usePathname } from "next/navigation";
import * as React from "react";
import "../styles.css";
import { TableHead, TableRow } from "./table";

export type BodySchema = {
  title: string | null;
  description: string | null;
};

function Analyze() {
  const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [headSchema, setHeadSchema] = React.useState<BodySchema>({
    title: null,
    description: null,
  });
  const pathname = usePathname();
  React.useEffect(() => {
    setLoading(true);
    const newHeadSchema: BodySchema = {
      title: getHeadElText("title"),
      description: getMeta("description"),
    };
    setLoading(false);
    setHeadSchema(newHeadSchema);
  }, [pathname]);

  return (
    <div className="fixed z-50 bottom-4 left-4 p-4 rounded bg-white border shadow max-w-lg text-sm">
      {loading ? (
        <p>Loading ...</p>
      ) : open ? (
        <div>
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
          <div className="pt-4 mt-4 border-t flex justify-end">
            <button
              className="py-1 px-2 bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setOpen(true)}>SEO DevTools</button>
      )}
    </div>
  );
}

export default Analyze;
