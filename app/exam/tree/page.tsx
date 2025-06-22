"use client";
import { useEffect, useState } from "react";
import Tree from "@/components/Tree";
import { treeData } from "./data";

export default function Test() {
  const [data, setData] = useState(treeData);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    console.log("🍀🍀🍀🍀", "Tree进行挂载");
    const interval = setInterval(() => {
      setRefreshKey(refreshKey + 1);
      setData(JSON.parse(JSON.stringify(data)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <Tree key={refreshKey} data={data} />;
}
