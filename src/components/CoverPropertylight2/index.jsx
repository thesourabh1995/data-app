import React from "react";

import { Button, Img, Text } from "components";

const CoverPropertylight2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700_05 h-[59px] px-[14.95px] py-[10.46px] relative w-[538px] md:w-full">
          <div className="flex flex-row h-full items-end justify-between mx-auto w-[95%]">
            <Text
              className="mb-0.5 mt-[5px] sm:text-[16.93px] md:text-[18.93px] text-[20.93px] text-black-900 w-full"
              size="txtIBMPlexMono2093"
            >
              {props?.username}
            </Text>
            <div className="bg-deep_purple-A200_19 flex flex-col items-start justify-start px-[8.97px] py-[7.47px] rounded w-full">
              <Text
                className="lowercase sm:text-[16.93px] md:text-[18.93px] text-[20.93px] text-deep_purple-A200 w-auto"
                size="txtIBMPlexMono2093DeeppurpleA200"
              >
                {props?.relationtype}
              </Text>
            </div>
            <Button className="bg-deep_purple-A200_19 flex h-[35px] items-center justify-center p-2 rounded-[17px] w-[35px]">
              <Img
                className="h-[17px]"
                src="images/img_icons.svg"
                alt="icons"
              />
            </Button>
          </div>
          <Img
            className="absolute h-[59px] inset-[0] justify-center m-auto"
            src="images/img_border.svg"
            alt="border"
          />
        </div>
      </div>
    </>
  );
};

CoverPropertylight2.defaultProps = {
  username: "teacher of",
  relationtype: "Relation",
};

export default CoverPropertylight2;
