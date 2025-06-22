import { PropsWithChildren } from "react";

const person = {
  name: "chp",
  age: 18,
  src: "https://i.imgur.com/1bX5QH6.jpg",
};

const Avatar = ({ src = "" }) => {
  return <img src={src} alt="" />;
};

const AvatarReceiveObj = ({ name = "", src = "" }) => {
  return <img src={src} alt={name}></img>;
};

const Card = ({ children }: PropsWithChildren) => {
  return <div className="border-4 border-slate-200 rounded-md">{children}</div>;
};

export default function Page() {
  return (
    <div>
      just test
      <Avatar src={person.src} />
      wtf
      <AvatarReceiveObj name={person.name} src={person.src} />
      <Card>
        <Avatar src={person.src} />
      </Card>
    </div>
  );
}
