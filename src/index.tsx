"use client";
import * as React from "react";
import Analyze from "./components/analyze";

type Props = {
  disable: boolean;
};

function NextSEOAnalyze({ disable }: Props) {
  if (disable === undefined) disable = process.env.NODE_ENV === "production";
  return disable ? null : <Analyze />;
}

export default NextSEOAnalyze;
