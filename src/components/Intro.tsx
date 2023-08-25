import { headerItems } from "@/constants/constant";
import { userInfo } from "@/constants/constant";
import Image from "next/image";
function Intro() {
  return (
    <section id={headerItems.home.page}>
      <div>
        <Image src={userInfo.picture} alt="" width={300} height={300} />
      </div>
    </section>
  );
}

export default Intro;
