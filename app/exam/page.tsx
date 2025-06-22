"use client";
import { use, useState } from "react";
import { sculptureList } from "./data.js";
import "./page.css";

export default function exam() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  const [count, setCount] = useState(0);
  const products = [
    {
      title: "标题1",
      id: 1,
    },
    {
      title: "标题2",
      id: 3,
    },
    {
      title: "标题3",
      id: 4,
    },
  ];
  const handleClick = (item) => {
    console.log("🍀🍀🍀🍀", item.title, item.id);
  };
  const [index, setIndex] = useState(0);
  let curPicture = sculptureList[index];
  const nextPic = () => {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  return (
    <div>
      {products.map((item) => (
        <div onClick={() => handleClick(item)} key={item.id}>
          {item.title} - {item.id}
        </div>
      ))}
      <div>{user.name}</div>
      <button onClick={() => setCount(count + 1)}>当前点击次数{count}</button>;
      <div className="group">
        <button onClick={nextPic}>下一张</button>
        <div>
          <i>{curPicture.name} </i>
          by {curPicture.artist}
          <h3>
            ({index + 1} of {sculptureList.length})
          </h3>
        </div>
      </div>
    </div>
  );
}
