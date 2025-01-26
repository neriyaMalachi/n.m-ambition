import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between  items-center gap-y-6 ">
          <Link rel="canonical" href={"/"}>
            <Image
              src={"/logo.png"}
              width={130}
              height={58}
              alt="LOGO IMAGE"
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
