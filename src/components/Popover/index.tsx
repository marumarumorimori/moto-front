"use client";
import {
  Popover as BasePopover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";

const Popover = () => {
  return (
    <BasePopover>
      {({ open }) => (
        <>
          <PopoverButton className="flex items-center gap-2">
            保護猫を探す
            <ChevronDownIcon className={clsx("size-5", open && "rotate-180")} />
          </PopoverButton>
          <PopoverPanel anchor="bottom" className="flex flex-col bg-white p-1">
            <Link href="/animals/search/map">マップで探す</Link>
            <Link href="/animals/search/categories">カテゴリーで探す</Link>
          </PopoverPanel>
        </>
      )}
    </BasePopover>
  );
};

export default Popover;
