import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import SearchForm from "./SearchForm";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

const Header = ({ user }: { user: { username: string} }) => {
  return (
    <header className="my-10 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 font-bold font-poppins">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
          <Gamepad2 className="size-6" />
        </div>
        PlayStack
      </Link>

      <div className="flex items-center gap-4">
        <SearchForm />

        <Link href="/games" className="text-[16px]">
          Games
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-[16px]">
                {user?.username || "Guest"}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="px-[15px]">
                <Link href="/profile" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Profile
                  </NavigationMenuLink>
                </Link>
                <Separator />
                <Link href="/profile/games" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Played
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="/profile/games?status=playing"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Playing
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="/profile/games?status=backlog"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Backlog
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="/profile/games?status=wishlist"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Wishlist
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
