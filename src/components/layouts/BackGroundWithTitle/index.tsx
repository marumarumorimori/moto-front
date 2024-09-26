import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  type?: "center" | "left" | "right";
};

const BackGroundWithTitle = ({
  title,
  type = "center",
  children,
  className,
}: Props) => {
  return (
    <div className={clsx(`bg-stone-200 p-4 rounded-lg ${className}`)}>
      <h2
        className={clsx(
          `mb-4`,
          type == "center" && "text-center",
          type == "left" && "text-left",
          type == "right" && "text-right"
        )}
      >
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};
export default BackGroundWithTitle;
