import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type CardContainerType = {
  descriptionText?: string;

  /** Style props */
  propLeft?: Property.Left;
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  descriptionText,
  propLeft,
}) => {
  const groupDiv2Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[4376px] left-[150px] w-[363px] h-[408px] text-left text-sm text-gray-100 font-leto-sans"
      style={groupDiv2Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke w-[363px] h-[408px]" />
      <img
        className="absolute top-[0px] left-[0px] w-[363px] h-[237px] object-cover"
        alt=""
        src="/frontleftside47-2@2x.png"
      />
      <div className="absolute top-[278px] left-[16px] inline-block w-[331px] h-[113px]">
        {descriptionText}
      </div>
      <div className="absolute top-[253px] left-[16px] text-base inline-block w-[106px] h-[15px]">
        Loren Ipsum
      </div>
    </div>
  );
};

export default CardContainer;
