import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type ContainerCardFormFilterType = {
  maxresdefault1?: string;
  fayoutubePlay?: string;
  maxresdefault11?: string;
  fayoutubePlay1?: string;
  maxresdefault12?: string;
  fayoutubePlay2?: string;
  maxresdefault13?: string;
  fayoutubePlay3?: string;

  /** Style props */
  propTop?: Property.Top;
};

const ContainerCardFormFilter: FunctionComponent<
  ContainerCardFormFilterType
> = ({
  maxresdefault1,
  fayoutubePlay,
  maxresdefault11,
  fayoutubePlay1,
  maxresdefault12,
  fayoutubePlay2,
  maxresdefault13,
  fayoutubePlay3,
  propTop,
}) => {
  const groupDivStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[2733.8px] left-[267px] w-[905.6px] h-[202.4px] text-justify text-3xs text-black font-leto-sans"
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] w-[214.4px] h-[202.4px]">
        <div className="absolute top-[0px] left-[0px] rounded-6xs-4 bg-whitesmoke box-border w-[214.4px] h-[202.4px] border-[0.8px] border-solid border-gray-100" />
        <div className="absolute top-[149.6px] left-[2.4px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:42] [-webkit-box-orient:vertical] w-[209.6px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
        <b className="absolute top-[133.6px] left-[2.4px] text-xs-2">
          Loren Ipsum
        </b>
        <img
          className="absolute top-[1.6px] left-[2.4px] rounded-6xs-4 w-[209.6px] h-[118.4px] object-cover"
          alt=""
          src={maxresdefault1}
        />
        <div className="absolute top-[44px] left-[83.2px] w-12 h-[33.6px]">
          <div className="absolute top-[3.79px] left-[4.16px] bg-white w-[33.02px] h-[26.01px]" />
          <img
            className="absolute top-[0px] left-[0px] w-12 h-[33.6px] overflow-hidden"
            alt=""
            src={fayoutubePlay}
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[230.4px] w-[214.4px] h-[202.4px]">
        <div className="absolute top-[0px] left-[0px] rounded-6xs-4 bg-whitesmoke box-border w-[214.4px] h-[202.4px] border-[0.8px] border-solid border-gray-100" />
        <div className="absolute top-[149.6px] left-[2.4px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:42] [-webkit-box-orient:vertical] w-[209.6px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
        <b className="absolute top-[133.6px] left-[2.4px] text-xs-2">
          Loren Ipsum
        </b>
        <img
          className="absolute top-[1.6px] left-[2.4px] rounded-6xs-4 w-[209.6px] h-[118.4px] object-cover"
          alt=""
          src={maxresdefault11}
        />
        <div className="absolute top-[44px] left-[83.2px] w-12 h-[33.6px]">
          <div className="absolute top-[3.79px] left-[4.16px] bg-white w-[33.02px] h-[26.01px]" />
          <img
            className="absolute top-[0px] left-[0px] w-12 h-[33.6px] overflow-hidden"
            alt=""
            src={fayoutubePlay1}
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[460.8px] w-[214.4px] h-[202.4px]">
        <div className="absolute top-[0px] left-[0px] rounded-6xs-4 bg-whitesmoke box-border w-[214.4px] h-[202.4px] border-[0.8px] border-solid border-gray-100" />
        <div className="absolute top-[149.6px] left-[2.4px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:42] [-webkit-box-orient:vertical] w-[209.6px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
        <b className="absolute top-[133.6px] left-[2.4px] text-xs-2">
          Loren Ipsum
        </b>
        <img
          className="absolute top-[1.6px] left-[2.4px] rounded-6xs-4 w-[209.6px] h-[118.4px] object-cover"
          alt=""
          src={maxresdefault12}
        />
        <div className="absolute top-[44px] left-[83.2px] w-12 h-[33.6px]">
          <div className="absolute top-[3.79px] left-[4.16px] bg-white w-[33.02px] h-[26.01px]" />
          <img
            className="absolute top-[0px] left-[0px] w-12 h-[33.6px] overflow-hidden"
            alt=""
            src={fayoutubePlay2}
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[691.2px] w-[214.4px] h-[202.4px]">
        <div className="absolute top-[0px] left-[0px] rounded-6xs-4 bg-whitesmoke box-border w-[214.4px] h-[202.4px] border-[0.8px] border-solid border-gray-100" />
        <div className="absolute top-[149.6px] left-[2.4px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:42] [-webkit-box-orient:vertical] w-[209.6px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
        <b className="absolute top-[133.6px] left-[2.4px] text-xs-2">
          Loren Ipsum
        </b>
        <img
          className="absolute top-[1.6px] left-[2.4px] rounded-6xs-4 w-[209.6px] h-[118.4px] object-cover"
          alt=""
          src={maxresdefault13}
        />
        <div className="absolute top-[44px] left-[83.2px] w-12 h-[33.6px]">
          <div className="absolute top-[3.79px] left-[4.16px] bg-white w-[33.02px] h-[26.01px]" />
          <img
            className="absolute top-[0px] left-[0px] w-12 h-[33.6px] overflow-hidden"
            alt=""
            src={fayoutubePlay3}
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
