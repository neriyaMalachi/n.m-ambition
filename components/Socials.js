import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiWhatsappLine,
  RiLinkedinBoxFill
}from 'react-icons/ri'
const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg" >
<Link href={''} className="hover:text-accent transition-all duration-300"><RiLinkedinBoxFill /></Link>
<Link href={'https://wa.link/f0z8e7'} className="hover:text-accent transition-all duration-300"><RiWhatsappLine /></Link>
<Link href={''} className="hover:text-accent transition-all duration-300"><RiFacebookBoxLine/></Link>
{/* <Link href={''} className="hover:text-accent transition-all duration-300"><RiDribbbleLine/></Link>
<Link href={''} className="hover:text-accent transition-all duration-300"><RiBehanceLine/></Link>
<Link href={''} className="hover:text-accent transition-all duration-300"><RiPinterestLine/></Link> */}


  </div>);
};

export default Socials;
