import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-fit block">
      <div className="drop-shadow-sm border">
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>MAP</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
