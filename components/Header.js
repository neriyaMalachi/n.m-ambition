import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
          <Link rel="canonical" href={"/"}>
            <Image
              className="cursor-pointer w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-auto"
              src={"/logo.png"}
              width={200} // גודל מקסימלי עבור מסך גדול
              height={58} // פרופורציה נכונה
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
