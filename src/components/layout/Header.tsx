"use client";
import { type FC } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-[50] container mx-auto flex w-full flex-row items-center justify-between gap-2 border-r border-b border-l border-neutral-200 p-4 backdrop-blur-xs">
      <Link href="/">
        <Avatar title="Nisarg Bhatt" aria-label="Home">
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
      </Link>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/blog">Blogs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/project">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
