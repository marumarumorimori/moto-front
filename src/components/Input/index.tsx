import { Input as InputBase, InputProps } from "@headlessui/react";
type Props = Omit<InputProps, "className"> & {
  /**
   * クラス名
   * render-props は提供しないので、string のみ受け付ける。
   */
  className?: string;
};
const Input = ({ className, ...rest }: Props) => {
  return (
    <InputBase
      className={`bg-elem border-elem text-elem px-2 py-1 shadow-inner shadow-gray-200 w-full  ${className}`}
      {...rest}
    />
  );
};

export default Input;
