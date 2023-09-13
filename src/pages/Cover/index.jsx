import React from "react";

import { Button, Img, Input, List, Text } from "components";
import CoverPropertylight from "components/CoverPropertylight";
import CoverPropertylight1 from "components/CoverPropertylight1";
import CoverPropertylight2 from "components/CoverPropertylight2";
import CoverPropertylight3 from "components/CoverPropertylight3";

const CoverPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-worksans items-center justify-end mx-auto p-[93px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center max-w-[1337px] mt-[294px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[41%] md:w-full">
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <div className="bg-black-900_33 flex flex-col h-[59px] md:h-auto items-start justify-start px-[14.95px] py-[10.46px] rounded-tl-[7px] rounded-tr-[7px] w-[538px] sm:w-full">
                <Text
                  className="sm:text-[19.92px] md:text-[21.92px] text-[23.92px] text-black-900 tracking-[0.24px]"
                  size="txtWorkSansSemiBold2392"
                >
                  People
                </Text>
              </div>
            </div>
            <div className="font-ibmplexmono h-[119px] sm:h-[147px] md:h-[59px] relative w-full">
              <CoverPropertylight className="absolute bg-black-900_05 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full" />
              <CoverPropertylight1 className="absolute bg-black-900_05 flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full" />
            </div>
            <List
              className="flex flex-col font-ibmplexmono items-center w-full"
              orientation="vertical"
            >
              <CoverPropertylight
                className="bg-black-900_05 flex flex-1 flex-col items-center justify-start my-0 w-full"
                sessiontext="classes"
              />
              <CoverPropertylight2 className="bg-black-900_05 flex flex-1 flex-col items-center justify-start my-0 w-full" />
            </List>
            <List
              className="flex flex-col font-ibmplexmono items-center w-full"
              orientation="vertical"
            >
              <CoverPropertylight2
                className="bg-black-900_05 flex flex-1 flex-col items-center justify-start my-0 w-full"
                username="organizer of"
              />
              <CoverPropertylight2
                className="bg-black-900_05 flex flex-1 flex-col items-center justify-start my-0 w-full"
                username="invoices"
              />
            </List>
            <CoverPropertylight2
              className="bg-black-900_05 flex flex-col font-ibmplexmono items-center justify-start w-full"
              username="user id"
            />
          </div>
          <div className="flex md:flex-1 flex-col justify-start ml-1 md:ml-[0] md:mt-0 mt-[17px] w-3/5 md:w-full">
            <div className="flex flex-col items-center justify-start ml-52 md:ml-[0] w-[68%] md:w-full">
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <Input
                  name="tableheader"
                  placeholder="Classes"
                  className="font-semibold md:h-auto md:text-[21.92px] p-0 placeholder:text-black-900 sm:h-auto sm:pr-5 sm:text-[19.92px] text-[23.92px] text-black-900 text-left tracking-[0.24px] w-full"
                  wrapClassName="bg-black-900_33 pl-3.5 pr-[35px] py-[15px] rounded-tl-[7px] rounded-tr-[7px] w-full"
                ></Input>
              </div>
              <CoverPropertylight1 className="bg-black-900_05 flex flex-col font-ibmplexmono items-center justify-start w-full" />
            </div>
            <div className="font-ibmplexmono md:h-[196px] h-[226px] sm:h-[317px] relative w-full">
              <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[94%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="h-[59px] sm:mt-0 mt-3 w-[4%]"></div>
                    <CoverPropertylight2
                      className="bg-black-900_05 flex flex-col items-center justify-start mb-3"
                      username="teacher"
                    />
                  </div>
                  <div className="h-[59px] w-[4%]"></div>
                </div>
              </div>
              <div className="absolute bottom-[0] h-[196px] inset-x-[0] mx-auto w-full">
                <div className="h-[196px] m-auto w-full">
                  <div className="h-[196px] m-auto w-full"></div>
                  <div className="absolute h-[102px] left-[0] top-[0] w-[26%]"></div>
                </div>
                <List
                  className="absolute flex flex-col right-[6%] top-[15%] w-[68%]"
                  orientation="vertical"
                >
                  <CoverPropertylight2
                    className="bg-black-900_05 flex flex-col items-center justify-start w-full"
                    username="organizer"
                  />
                  <CoverPropertylight3 className="bg-black-900_05 flex flex-col items-center justify-start w-full" />
                </List>
                <div className="absolute bottom-[17%] h-[102px] left-[0] w-[26%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPage;
