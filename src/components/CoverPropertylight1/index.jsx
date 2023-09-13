import React from "react";

import { Button, Img, Text } from "components";

const CoverPropertylight1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-400_05 sm:h-[145px] h-[59px] px-[14.95px] py-[10.46px] relative w-[538px] md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-end justify-start mx-auto w-[95%]">
            <Text
              className="sm:mt-0 mt-[7px] sm:text-[16.93px] md:text-[18.93px] text-[20.93px] text-black-900 w-full"
              size="txtIBMPlexMono2093"
            >
              {props?.username}
            </Text>
            <div className="bg-amber-600_19 flex flex-col items-start justify-start sm:ml-[0] ml-[175px] px-[8.97px] py-[7.47px] rounded w-full">
              <Text
                className="lowercase sm:text-[16.93px] md:text-[18.93px] text-[20.93px] text-amber-700 w-auto"
                size="txtIBMPlexMono2093Amber700"
              >
                {props?.usertext}
              </Text>
            </div>
            <Button className="bg-amber-700_19 flex h-[35px] items-center justify-center sm:ml-[0] ml-[97px] p-2 rounded-[17px] w-[35px]">
              <Img className="h-[17px]" src="images/img_menu.svg" alt="menu" />
            </Button>
          </div>
          <Img
            className="absolute h-[59px] inset-[0] justify-center m-auto"
            src="images/img_border.svg"
            alt="border_One"
          />
        </div>
      </div>
    </>
  );
};

CoverPropertylight1.defaultProps = { username: "name", usertext: "text" };

export default CoverPropertylight1;
