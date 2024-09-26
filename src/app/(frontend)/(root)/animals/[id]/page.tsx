"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BackGroundWithTitle from "@/components/layouts/BackGroundWithTitle";

const DetailsPage = () => {
  const pathname = usePathname();

  return (
    <>
      <p>{pathname}</p>
      <div className="flex">
        <Image src="/test1.png" alt="aa" width={500} height={100} />
        <BackGroundWithTitle title="ぽこ" type="left" className="w-full">
          aa
        </BackGroundWithTitle>
      </div>
    </>
  );
};
export default DetailsPage;
