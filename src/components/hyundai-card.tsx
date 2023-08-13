import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type HyundaiCardType = {
  carDescription?: string;
  carFeatures?: string;
  carImageAltText?: string;
  carImageId?: string;

  /** Style props */
  propLeft?: Property.Left;
  propHeight?: Property.Height;
  propTop?: Property.Top;
  propHeight1?: Property.Height;
};

const HyundaiCard: FunctionComponent<HyundaiCardType> = ({
  carDescription,
  carFeatures,
  carImageAltText,
  carImageId,
  propLeft,
  propHeight,
  propTop,
  propHeight1,
}) => {
  const groupDiv3Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const hyundaiExter900x5061IconStyle: CSS.Properties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frontLeftSide4711Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      height: propHeight1,
    };
  }, [propTop, propHeight1]);

  return (
    <div
      className="absolute top-[3077px] left-[151px] w-[212px] h-[401px] text-left text-lg text-white font-leto-sans"
      style={groupDiv3Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xl [background:linear-gradient(180deg,_#fff6f2,_#231f1e_84.67%)] w-[212px] h-[401px]" />
      <div className="absolute top-[331px] left-[8px] inline-block w-[187px]">
        <p className="m-0">
          <b>{carDescription}</b>
        </p>
        <p className="m-0">{carFeatures}</p>
      </div>
      <img
        className="absolute top-[0px] left-[0px] rounded-t-3xl rounded-b-none w-[212px] h-[156px] object-cover"
        alt=""
        src={carImageAltText}
        style={hyundaiExter900x5061IconStyle}
      />
      <img
        className="absolute top-[156px] left-[0px] w-[212px] h-[151px] object-cover"
        alt=""
        src={carImageId}
        style={frontLeftSide4711Style}
      />
    </div>
  );
};

export default HyundaiCard;
