import Link from "next/link";
import {
  RiFacebookBoxLine,
  RiWhatsappLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        rel="canonical"
        href={"https://www.linkedin.com/in/neria-malachi/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill size={25} />
      </Link>
      <Link
        rel="canonical"
        href={"https://wa.link/f0z8e7"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine size={25} />
      </Link>
      <Link
        rel="canonical"
        href={""}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookBoxLine size={25} />
      </Link>
    </div>
  );
};

export default Socials;
