"use client";
import * as React from "react";
import Analyze from "./components/analyze";

type Props = {
  disable?: boolean;
  className?: string;
};

function NextSEODevTools({ disable, className }: Props) {
  if (disable === undefined) disable = process.env.NODE_ENV === "production";
  return disable ? null : <Analyze className={className} />;
}

export default NextSEODevTools;
