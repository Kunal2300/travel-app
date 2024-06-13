import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="border-2 flexBetween max-container padding-container relative z-30 py-5">
      <Link className="" href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}></Image>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((item) => {
          return (
            <Link
              href={item.href}
              key={item.key}
              className="regular-16 text-green-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {item.label}
            </Link>
          );
        })}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        ></Button>
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
