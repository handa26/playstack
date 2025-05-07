import { Gamepad2, Play, LibraryBig, Gift } from "lucide-react";

export const FIELD_NAMES = {
  username: "Username",
  email: "Email",
  password: "Password",
};

export const FIELD_TYPES = {
  username: "text",
  email: "email",
  password: "password",
};

export const gamesCategory = [
  {
    title: "backlog",
    icon: LibraryBig,
  },
  {
    title: "playing",
    icon: Play,
  },
  {
    title: "wishlist",
    icon: Gift,
  },
  {
    title: "played",
    icon: Gamepad2,
  },
];

export const headerNavItems = [
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "Games",
    href: "/profile/games",
  },
];
