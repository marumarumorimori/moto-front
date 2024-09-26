"use client";
import Image from "next/image";
import Link from "next/link";
type Props = {
  id: number;
  name: string;
  image: string;
  author: string;
};
const Card = ({ id, name, image, author }: Props) => {
  console.log(image);
  return (
    <Link href={`animals/${id}`}>
      <div className="bg-white inline-block rounded">
        <Image src={image} alt={name} width={500} height={200} />
        <div className="p-2">
          <h3>{name}</h3>
          <p>撮影者：{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
