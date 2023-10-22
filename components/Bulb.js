
import Image from "next/image";


const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 min-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px] " >
      <Image
        src={'/bulb.png'}
        width={260}
        height={200}
        className="w-full h-full"
        alt="BULB_IMAGE"
      />
    </div>
  );
};

export default Bulb;
