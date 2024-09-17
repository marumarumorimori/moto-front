import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b flex items-center h-14 px-4 bg-slate-600">
      <h1>
        <Link href="/" className="font-logo">
          iam
        </Link>
      </h1>
      <ul>
        <li>list</li>
      </ul>
    </header>
  );
};

export default Header;
