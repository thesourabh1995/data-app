import React from "react";

import { Button, Img, Text } from "components";

const CoverPropertylight = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700_05 sm:h-[147px] h-[59px] px-[14.95px] py-[10.46px] relative w-[538px] md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-end justify-start mx-auto w-[95%]">
            <Text
              className="mb-0.5 sm:mt-0 mt-[5px] sm:text-[16.93px] md:text-[18.93px] text-[20.93px] text-black-900 w-full"
              size="txtIBMPlexMono2093"
            >
              {props?.sessiontext}
            </Text>
            <div className="bg-green-600_19 flex flex-col items-start justify-start sm:ml-[0] ml-[125px] px-[8.97px] py-[7.47px] rounded w-full">
              <Text
                className="lowercase sm:text-[16.93px] md:text-[18.93px] text-[20.93px] text-green-600 w-auto"
                size="txtIBMPlexMono2093Green600"
              >
                {props?.rolluptext}
              </Text>
            </div>
            <Button className="bg-green-600_19 flex h-[35px] items-center justify-center sm:ml-[0] ml-[97px] p-2 rounded-[17px] w-[35px]">
              <Img
                className="h-[17px]"
                src="images/img_search.svg"
                alt="search"
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

CoverPropertylight.defaultProps = {
  sessiontext: "sessions",
  rolluptext: "Roll up",
};

export default CoverPropertylight;
