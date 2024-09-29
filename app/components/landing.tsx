import Image from "next/image";
import background from '../assets/bg.jpg'

export default function Landing() {
  return (
    <div>
      <Image src={background} alt="background image" width={1500} height={100} objectFit="cover"/>
     </div>
  );
}