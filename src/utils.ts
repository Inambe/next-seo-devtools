const getMeta = (name: string): string => {
  return (
    window.document.head
      .querySelector(`meta[name=${name}`)
      ?.getAttribute("content") || ""
  );
};
const getHeadElText = (name: string): string => {
  return window.document.head.querySelector(name)?.textContent || "";
};

export { getMeta, getHeadElText };
