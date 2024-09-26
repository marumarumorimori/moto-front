"use client";
import { Button as BaseButton } from "@headlessui/react";
import { ComponentPropsWithoutRef, Fragment } from "react";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  className?: string;
  variant?: "primary" | "secondary";
} & (
  | ComponentPropsWithoutRef<typeof Link>
  | ComponentPropsWithoutRef<"button">
);

const Button = ({ children, className, ...rest }: Props) => {
  if ("href" in rest) {
    return (
      <Link
        className={clsx(
          `rounded py-2 px-4 text-sm text-white bg-red-400 hover:bg-red-300 ${className}`
        )}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  return (
    <BaseButton as={Fragment} {...rest}>
      {({ hover, active }) => (
        <button
          className={clsx(
            `rounded py-2 px-4 text-sm text-white  ${className}`,
            !hover && !active && "bg-red-400",
            hover && !active && "bg-red-300",
            active && "bg-red-500"
          )}
        >
          {children}
        </button>
      )}
    </BaseButton>
  );
};

export default Button;
