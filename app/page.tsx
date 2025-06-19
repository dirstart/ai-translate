import Image from "next/image";
const Page = () => {
  return (
    <div>
      <h1>我是元素</h1>
      <Image src="/icon.png" alt="img" width={100} height={100}></Image>
    </div>
  );
};

export default Page;
