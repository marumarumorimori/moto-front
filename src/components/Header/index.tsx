import Link from "next/link";
import Button from "../Button";
import Popover from "../Popover";

const Header = () => {
  return (
    <header className="border-b flex justify-between items-center h-14 px-4 sticky top-0">
      <h1>
        <Link href="/" className="font-logo">
          iam
        </Link>
      </h1>
      <ul className="flex gap-4 text-slate-700 text-sm items-center">
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/animals/new">野良を追加</Link>
        </li>
        <li>
          <Popover />
        </li>
        <li>
          <Button href="/login">ログイン</Button>
        </li>
        <li>
          <Button href="/sing-in">サインイン</Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
