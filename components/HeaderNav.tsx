"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { headerNavItems } from "@/constants";

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-[34px] flex items-center gap-2.5 px-2.5 bg-slate-500 my-2.5 rounded-md">
      {headerNavItems.map(({ title, href }) => (
        <Link key={title} href={href} className="relative">
          {title}
          {pathname === href && <div className="w-[56%] h-[3px] rounded-full bg-slate-200 absolute right-[25%] bottom-[-5px]"></div>}
        </Link>
      ))}
    </div>
  );
};

export default HeaderNav;
