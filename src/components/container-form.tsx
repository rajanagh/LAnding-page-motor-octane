import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type ContainerFormType = {
  dimensionCode?: string;

  /** Style props */
  propLeft?: Property.Left;
};

const ContainerForm: FunctionComponent<ContainerFormType> = ({
  dimensionCode,
  propLeft,
}) => {
  const groupDiv1Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[4043px] left-[150px] w-[367.2px] h-[220.5px] text-left text-mini-4 text-black font-leto-sans"
      style={groupDiv1Style}
    >
      <div className="absolute top-[0px] left-[0px] bg-whitesmoke box-border w-[183.6px] h-[220.5px] border-[0.9px] border-solid border-white" />
      <div className="absolute top-[0px] left-[183.6px] bg-whitesmoke box-border w-[183.6px] h-[220.5px] border-[0.9px] border-solid border-white" />
      <div className="absolute top-[0px] left-[0px] w-[367.2px] h-[130.5px]">
        <img
          className="absolute top-[0px] left-[183.6px] w-[183.6px] h-[130.5px] object-cover"
          alt=""
          src="/frontleftside47-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[183.6px] h-[130.5px] object-cover"
          alt=""
          src="/istockphoto1089323902612x612-1@2x.png"
        />
      </div>
      <div className="absolute top-[51.3px] left-[169.2px] rounded-[50%] bg-black box-border w-[28.8px] h-[28.8px] border-[0.9px] border-solid border-white" />
      <div className="absolute top-[56.7px] left-[175.5px] font-semibold font-montserrat text-white">
        vs
      </div>
      <div className="absolute top-[142.2px] left-[14.4px] text-smi-6">
        HYUNDAI
      </div>
      <div className="absolute top-[142.2px] left-[198px] text-smi-6">
        HYUNDAI
      </div>
      <div className="absolute top-[164.7px] left-[14.4px] text-sm-5 text-brown">
        Creta
      </div>
      <div className="absolute top-[164.7px] left-[198px] text-sm-5 text-brown">
        Verna
      </div>
      <img
        className="absolute top-[189px] left-[9px] w-[18px] h-[18px] overflow-hidden"
        alt=""
        src={dimensionCode}
      />
      <img
        className="absolute top-[189px] left-[192.6px] w-[18px] h-[18px] overflow-hidden"
        alt=""
        src="/mdirupee1.svg"
      />
      <div className="absolute top-[188.1px] left-[30.6px] text-dimgray">
        7.99 - 13.96 Lakhs
      </div>
      <div className="absolute top-[188.1px] left-[214.2px] text-dimgray">
        7.70 - 14.80 Lakhs
      </div>
    </div>
  );
};

export default ContainerForm;
