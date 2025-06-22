"use client";

import { useState } from "react";
export const TreeNode = ({ node, level = 0 }) => {
  // 默认展开第一级
  const [isExpand, setIsExpand] = useState(level < 1);
  const hasChildren = node.children?.length >= 1;

  const toggle = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div style={{ marginLeft: +level * 20 + "px" }}>
      <div className="title">
        {hasChildren && <div onClick={toggle}>{isExpand ? "▼" : "▶︎"}</div>}
        {node.id} -- {node.name}
      </div>
      {hasChildren && isExpand && (
        <div className="list">
          {node.children.map((item) => (
            <TreeNode key={item.id} node={item} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

// 无限递归树，具有【展开】【收缩】功能
export default function Tree({ data }) {
  return (
    <div>
      <h1>中国的省市数据</h1>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} level={0} />
      ))}
      <footer>每 60s 进行一次更新</footer>
    </div>
  );
}
