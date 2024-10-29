"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  console.log(session);

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link className={isActive ? "isActive" : ""} href={link.href} key={link.label}>
            {link.label}
          </Link>
        );
      })}
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          SignOut
        </Link>
      ) : (
        <Link href="/signin">SignIn</Link>
      )}
    </>
  );
};

export default Navigation;
