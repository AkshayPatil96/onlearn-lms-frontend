import Image from "next/image";
import React, { FC } from "react";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full 1000px:flex items-center">
      <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero_animation">
        <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
          <Image
            src={require("../../../public/assets/images/banner-img-1.png")}
            alt="hero"
            className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
          />
        </div>

        <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
          <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px]">
            Improve Your Online Learning Experience Better Instantly
          </h2>
          <br />
          <p className="dark:text-[#edfff4]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque
            nulla, illum unde magnam sequi quas fugit fugiat consequuntur, modi
            dicta repudiandae voluptas minima harum.
          </p>
          <br />
          <br />
<div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
