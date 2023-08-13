import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type CarCardContainerType = {
  dimensionCode?: string;
  imageDimensionCode?: string;
  dimensionCodeImageUrl?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const CarCardContainer: FunctionComponent<CarCardContainerType> = ({
  dimensionCode,
  imageDimensionCode,
  dimensionCodeImageUrl,
  propTop,
  propLeft,
}) => {
  const carCardStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[777px] left-[934px] w-[347px] h-[260px] text-left text-sm text-gray-100 font-leto-sans"
      style={carCardStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-whitesmoke box-border w-[260px] h-[260px] border-[1px] border-solid border-gray-100" />
      <div className="absolute top-[12px] left-[14px] text-base font-armstrong">
        <span>Jeep</span>
        <span className="text-gray-200">{` `}</span>
        <span className="text-firebrick-100">Cherokee</span>
      </div>
      <div className="absolute top-[23px] left-[237px] rounded-lg bg-whitesmoke box-border w-[110px] h-[50px] border-[1px] border-solid border-gray-100" />
      <div className="absolute top-[139px] left-[237px] rounded-lg bg-whitesmoke box-border w-[110px] h-[50px] border-[1px] border-solid border-gray-100" />
      <div className="absolute top-[81px] left-[237px] rounded-lg bg-whitesmoke box-border w-[110px] h-[50px] border-[1px] border-solid border-gray-100" />
      <div className="absolute top-[197px] left-[237px] rounded-lg bg-whitesmoke box-border w-[110px] h-[50px] border-[1px] border-solid border-gray-100" />
      <img
        className="absolute top-[176px] left-[16px] w-[100px] h-5"
        alt=""
        src={dimensionCode}
      />
      <div className="absolute top-[200px] left-[20px]">
        <span>Variants</span>
        <span className="text-gray-200">{` `}</span>
        <span className="text-firebrick-100">3</span>
      </div>
      <div className="absolute top-[234px] left-[20px] text-gray-200">
        Ex-Showroom | On-Road
      </div>
      <div className="absolute top-[218px] left-[29px] text-gray-200">{`10,44,000 - `}</div>
      <img
        className="absolute top-[36px] left-[247px] w-6 h-6 overflow-hidden"
        alt=""
        src="/materialsymbolsairlineseatreclinenormal.svg"
      />
      <img
        className="absolute top-[94px] left-[247px] w-6 h-6 overflow-hidden"
        alt=""
        src="/zondiconslocationgasstation.svg"
      />
      <img
        className="absolute top-[152px] left-[247px] w-6 h-6 overflow-hidden"
        alt=""
        src={imageDimensionCode}
      />
      <img
        className="absolute top-[210px] left-[247px] w-6 h-6 overflow-hidden"
        alt=""
        src="/ggbmw.svg"
      />
      <div className="absolute top-[36px] left-[275px] text-3xs">
        <p className="m-0">5 Seater</p>
        <p className="m-0">7 Seater</p>
      </div>
      <div className="absolute top-[210px] left-[275px] text-3xs">
        <p className="m-0">NCAP:</p>
        <p className="m-0">5 Star</p>
      </div>
      <div className="absolute top-[94px] left-[275px] w-[65px] h-[23px] text-4xs font-roboto">
        <div className="absolute top-[0px] left-[0px] font-medium">Petrol</div>
        <div className="absolute top-[12px] left-[0px] font-medium">
          Electric
        </div>
        <div className="absolute top-[12px] left-[38px] font-medium">
          Hybrid
        </div>
        <div className="absolute top-[0px] left-[38px] font-medium">Diesel</div>
        <div className="absolute top-[0.85px] left-[31.85px] box-border w-[0.3px] h-[10.3px] border-r-[0.3px] border-solid border-gray-500" />
        <div className="absolute top-[12.85px] left-[33.85px] box-border w-[0.3px] h-[10.3px] border-r-[0.3px] border-solid border-gray-500" />
      </div>
      <div className="absolute top-[152px] left-[275px] w-[57px] h-6 text-4xs font-roboto">
        <div className="absolute top-[0px] left-[0px] font-medium">Manual</div>
        <div className="absolute top-[13px] left-[0px] font-medium">DCT</div>
        <div className="absolute top-[13px] left-[26px] font-medium">Etc</div>
        <div className="absolute top-[0px] left-[38px] font-medium">Auto</div>
        <div className="absolute top-[0.85px] left-[33.85px] box-border w-[0.3px] h-[10.3px] border-r-[0.3px] border-solid border-gray-500" />
        <div className="absolute top-[13.85px] left-[21.85px] box-border w-[0.3px] h-[10.3px] border-r-[0.3px] border-solid border-gray-500" />
      </div>
      <img
        className="absolute h-[13.85%] top-[0%] bottom-[86.15%] left-[calc(50%_+_25.5px)] max-h-full w-8 overflow-hidden"
        alt=""
        src={dimensionCodeImageUrl}
      />
      <img
        className="absolute top-[52px] left-[19px] rounded-lg w-[210px] h-[120px] object-cover"
        alt=""
        src="/jeepgrandcherokeejeepgrandcherokeewallpaperpreview-2@2x.png"
      />
      <div className="absolute top-[218px] left-[114px] text-gray-200">{`18,20,000 `}</div>
      <img
        className="absolute top-[218px] left-[100px] w-4 h-4 overflow-hidden"
        alt=""
        src="/healthiconsrupee1.svg"
      />
      <img
        className="absolute top-[218px] left-[15px] w-4 h-4 overflow-hidden"
        alt=""
        src="/healthiconsrupee1.svg"
      />
    </div>
  );
};

export default CarCardContainer;
