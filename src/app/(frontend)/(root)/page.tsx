import Card from "@/components/Card";
import BackGroundWithTitle from "@/components/layouts/BackGroundWithTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const animals = [
  { id: 1, name: "kiki", image: "/images/test1.png", author: "あああ" },
  { id: 2, name: "teto", image: "/images/test2.png", author: "iiii" },
];
export default async function Page() {
  return (
    <div className="min-h-dvh">
      <BackGroundWithTitle title="新着" className="mb-6">
        <ul className="flex gap-4">
          {animals.map((animal) => (
            <li key={animal.id}>
              <Card
                id={animal.id}
                name={animal.name}
                image={animal.image}
                author={animal.author}
              ></Card>
            </li>
          ))}
        </ul>
      </BackGroundWithTitle>
    </div>
  );
}
