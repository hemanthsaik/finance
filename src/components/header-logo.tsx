import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <p className=" font-semibold ml-2.5 text-xl text-white">Finance</p>
      </div>
    </Link>
  );
};
