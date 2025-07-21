import React from "react";
import { Parallax } from "react-parallax";
import ng from "../../assets/single.png";

const Single_image = () => {
  return (
    <Parallax bgImage={ng} strength={300}>
      <div className="h-[30vh] md:h-[50vh] lg:h-[80vh] flex items-center justify-center">
        <div className=""></div>
        {/* <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
          🕒 Open 24/7 | 5:00 AM – 12:00 AM
        </h1> */}
      </div>
    </Parallax>
  );
};

export default Single_image;
