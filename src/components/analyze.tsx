import { getHeadElText, getMeta } from "@/utils";
import { usePathname } from "next/navigation";
import * as React from "react";
import "../styles.css";
import clsx from "clsx";
import BasicTab from "./tabs/basic";

export type BodySchema = {
  title: string | null;
  description: string | null;
};

export type Tabs = "basic" | "open-graph" | "";

type TabButtonProps = {
  children: string | React.ReactElement;
  active: boolean;
  onClick: () => void;
  [k: string]: any;
};

const TabButton = ({ children, active, onClick }: TabButtonProps) => (
  <button
    className={clsx(
      "py-2 px-4 hover:bg-white transition",
      active ? "bg-white" : "bg-gray-100"
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

function Analyze({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(true);
  const [tab, setTab] = React.useState<Tabs>("basic");
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
    <div
      className={`fixed z-50 bottom-4 left-4 rounded bg-white border shadow max-w-lg text-sm ${className}`}
    >
      {loading ? (
        <p className="p-4">Loading ...</p>
      ) : open ? (
        <div>
          <div className="flex justify-between bg-gray-200">
            <div className="flex divide-x">
              <TabButton
                active={tab === "basic"}
                onClick={() => setTab("basic")}
              >
                Basic
              </TabButton>
              <TabButton
                active={tab === "open-graph"}
                onClick={() => setTab("open-graph")}
              >
                Open Graph
              </TabButton>
            </div>
            <button
              className="py-2 px-4  hover:bg-gray-300 transition"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          {tab === "basic" && <BasicTab headSchema={headSchema} />}
        </div>
      ) : (
        <button className="p-4" onClick={() => setOpen(true)}>
          SEO DevTools
        </button>
      )}
    </div>
  );
}

export default Analyze;
