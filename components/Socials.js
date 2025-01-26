import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiWhatsappLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        rel="canonical"
        href={"https://www.linkedin.com/in/neria-malachi-616397264/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        rel="canonical"
        href={"https://wa.link/f0z8e7"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        rel="canonical"
        href={""}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookBoxLine />
      </Link>
    </div>
  );
};

export default Socials;
