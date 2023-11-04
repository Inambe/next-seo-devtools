const getMeta = (
  value: string,
  property: "property" | "name" = "name"
): string => {
  return (
    window.document.head
      .querySelector(`meta[${property}='${value}'`)
      ?.getAttribute("content") || ""
  );
};

const getOGAll = () => {
  return Array.from(
    window.document.head.querySelectorAll(`meta[property^='og:'`)
  ).map((el) => ({
    name: el.getAttribute("property") || "",
    value: el.getAttribute("content") || "",
  }));
};

const getHeadElText = (name: string): string => {
  return window.document.head.querySelector(name)?.textContent || "";
};

export { getMeta, getHeadElText, getOGAll };
