import { FunctionComponent } from "react";
import Component1 from "./component1";

const ContainerWrapper: FunctionComponent = () => {
  return (
    <div className="absolute top-[683px] left-[273px] w-[892px] h-[61px]">
      <Component1
        uNDER="UNDER"
        l="8L"
        component1Position="absolute"
        component1BorderRadius="unset"
        component1BackgroundColor="#b1081a"
        component1Top="8px"
        component1Left="0px"
      />
      <Component1
        uNDER="UNDER"
        l="15L"
        component1Position="absolute"
        component1BorderRadius="unset"
        component1BackgroundColor="#767678"
        component1Top="8px"
        component1Left="188px"
      />
      <Component1
        uNDER="UNDER"
        l="25L"
        component1Position="absolute"
        component1BorderRadius="unset"
        component1BackgroundColor="#767678"
        component1Top="8px"
        component1Left="calc(50% - 70px)"
      />
      <Component1
        uNDER="UNDER"
        l="50L"
        component1Position="absolute"
        component1BorderRadius="unset"
        component1BackgroundColor="#767678"
        component1Top="8px"
        component1Left="564px"
      />
      <Component1
        uNDER="ABOVE"
        l="50L"
        component1Position="absolute"
        component1BorderRadius="unset"
        component1BackgroundColor="#767678"
        component1Top="8px"
        component1Left="752px"
      />
      <img
        className="absolute top-[1px] left-[162.5px] w-[2.5px] h-[60px]"
        alt=""
        src="/group-48.svg"
      />
      <img
        className="absolute top-[1px] left-[162.5px] w-[2.5px] h-[60px]"
        alt=""
        src="/group-48.svg"
      />
      <img
        className="absolute top-[0px] left-[350.5px] w-[2.5px] h-[60px]"
        alt=""
        src="/group-48.svg"
      />
      <img
        className="absolute top-[0px] left-[726.5px] w-[2.5px] h-[60px]"
        alt=""
        src="/group-48.svg"
      />
      <img
        className="absolute top-[0px] left-[538.5px] w-[2.5px] h-[60px]"
        alt=""
        src="/group-48.svg"
      />
    </div>
  );
};

export default ContainerWrapper;
